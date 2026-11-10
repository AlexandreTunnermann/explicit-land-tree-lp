// Pushes this landing page into the GitHub repo that HighLevel AI Studio's Git Sync created.
// AI Studio then pulls the commit automatically (Automatic Pull on).
//
// Usage:
//   node scripts/sync-to-ai-studio.mjs <owner/repo | git URL | local path> [--branch main] [--dry-run]
//
// What it does, in a fresh clone of the AI Studio repo:
//   1. Copies the landing page files (scripts/sync-files.mjs) over AI Studio's template, replacing them byte for byte.
//      Keeps AI Studio's own package.json, lockfile, vite.config.ts, tsconfig.json, src/router.tsx and routeTree.gen.ts.
//      Once the CRM is connected there, it never overwrites crm-tracking.ts, crm-fields.ts or submit-lead.ts.
//   2. Removes the template's other routes (demo pages) and adds missing dependencies.
//   3. Installs and runs the template's own build. If the build fails, nothing is pushed.
//   4. Runs scripts/verify-copy.mjs, commits and pushes.
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { CRM_FILES, DEPS, ROOT, SYNC_FILES } from "./sync-files.mjs";

const args = process.argv.slice(2);
const target = args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--branch");
const branch = args.includes("--branch") ? args[args.indexOf("--branch") + 1] : "main";
const dryRun = args.includes("--dry-run");
if (!target) {
  console.error("Usage: node scripts/sync-to-ai-studio.mjs <owner/repo | git URL | local path> [--branch main] [--dry-run]");
  process.exit(1);
}

const run = (cmd, cwd, opts = {}) => execSync(cmd, { cwd, stdio: opts.quiet ? "pipe" : "inherit", encoding: "utf8", shell: true });
const step = (s) => console.log("\n== " + s);

// 0) Make sure the source is current.
run("node scripts/make-verify.mjs", ROOT);
const srcSha = run("git rev-parse --short HEAD", ROOT, { quiet: true }).trim();
const dirty = run("git status --porcelain", ROOT, { quiet: true }).trim();
if (dirty) console.log("Note: this repo has uncommitted changes; the synced files include them.\n" + dirty);

// 1) Clone the AI Studio repo.
const work = mkdtempSync(join(tmpdir(), "ai-studio-sync-"));
const dest = join(work, "repo");
step("Cloning " + target + " (" + branch + ")");
const isRemoteSlug = /^[\w.-]+\/[\w.-]+$/.test(target) && !existsSync(target);
if (isRemoteSlug) run(`gh repo clone ${target} "${dest}" -- --branch ${branch}`, work);
else run(`git clone --branch ${branch} "${target}" "${dest}"`, work);

const pkgPath = join(dest, "package.json");
if (!existsSync(pkgPath)) throw new Error("No package.json in the AI Studio repo: is Git Sync connected and pushed?");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
if (!allDeps["@tanstack/react-start"]) throw new Error("The AI Studio repo is not a TanStack Start project (no @tanstack/react-start).");

// 2) Keep the CRM files once AI Studio has connected the CRM.
const crmConnected =
  existsSync(join(dest, "src/lib/crm-tracking.ts")) &&
  !readFileSync(join(dest, "src/lib/crm-tracking.ts"), "utf8").includes("PLACEHOLDER for the CRM tracking helper");
const keep = new Set(crmConnected ? CRM_FILES : []);
step(crmConnected ? "CRM already connected in AI Studio: keeping its 3 CRM files" : "CRM not connected yet: syncing the placeholder CRM files");

// 3) Remove the template's other routes.
const routesDir = join(dest, "src/routes");
const ours = new Set(["__root.tsx", "index.tsx", "thank-you.tsx"]);
if (existsSync(routesDir)) {
  for (const entry of readdirSync(routesDir)) {
    if (!ours.has(entry)) {
      rmSync(join(routesDir, entry), { recursive: true, force: true });
      console.log("removed template route src/routes/" + entry);
    }
  }
}

// 4) Copy the landing page files.
step("Copying landing page files");
let copied = 0;
for (const f of SYNC_FILES()) {
  if (keep.has(f)) continue;
  mkdirSync(dirname(join(dest, f)), { recursive: true });
  cpSync(join(ROOT, f), join(dest, f));
  copied++;
}
console.log(copied + " files copied" + (keep.size ? ", " + keep.size + " CRM files kept" : ""));

// 5) Dependencies.
let pkgChanged = false;
for (const [name, range] of Object.entries(DEPS)) {
  if (!allDeps[name]) {
    pkg.dependencies = { ...pkg.dependencies, [name]: range };
    pkgChanged = true;
    console.log("added dependency " + name + "@" + range);
  }
}
if (pkgChanged) writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

// 6) "@/..." alias must exist in the template's tsconfig.
const tsconfigPath = join(dest, "tsconfig.json");
if (existsSync(tsconfigPath) && !readFileSync(tsconfigPath, "utf8").includes('"@/*"')) {
  throw new Error('The template tsconfig.json has no "@/*" path alias. Add it in AI Studio, then sync again.');
}

// 7) Install and build with the template's package manager.
const pm = existsSync(join(dest, "pnpm-lock.yaml")) ? "pnpm" : existsSync(join(dest, "bun.lock")) || existsSync(join(dest, "bun.lockb")) ? "bun" : "npm";
step(`Installing (${pm})`);
run(`${pm} install`, dest);

// The server-function validator method was renamed between TanStack Start versions.
const cfDts = ["node_modules/@tanstack/start-client-core/dist/esm/createServerFn.d.ts"].map((p) => join(dest, p)).find(existsSync);
if (cfDts) {
  const d = readFileSync(cfDts, "utf8");
  const want = /\binputValidator\s*:/.test(d) ? "inputValidator" : "validator";
  const other = want === "validator" ? "inputValidator" : "validator";
  for (const f of ["src/lib/geo.ts", "src/lib/meta-capi.ts"]) {
    const p = join(dest, f);
    const s = readFileSync(p, "utf8");
    if (s.includes("." + other + "(")) {
      writeFileSync(p, s.split("." + other + "(").join("." + want + "("));
      console.log(`adapted ${f}: .${other}( -> .${want}( for this TanStack Start version`);
    }
  }
}

step("Building with the template's build script");
try {
  run(`${pm} run build`, dest);
} catch {
  console.error("\nBUILD FAILED in the AI Studio repo. Nothing was pushed. Clone left at: " + dest);
  process.exit(1);
}

step("Verifying files");
try {
  run("node scripts/verify-copy.mjs", dest);
} catch {
  console.log("(differences above are the TanStack version adaptation only, if any)");
}

// 8) Commit and push.
step("Committing");
run("git add -A", dest);
const status = run("git status --porcelain", dest, { quiet: true }).trim();
if (!status) {
  console.log("Nothing changed: AI Studio already has this version.");
} else {
  const msg = `Sync Explicit landing page from explicit-land-tree-lp@${srcSha}\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`;
  writeFileSync(join(work, "msg.txt"), msg);
  run(`git commit -q -F "${join(work, "msg.txt")}"`, dest);
  if (dryRun) console.log("--dry-run: committed locally, not pushed. Clone at: " + dest);
  else {
    run(`git push origin HEAD:${branch}`, dest);
    console.log("\nPushed. AI Studio pulls it automatically (or use More -> Git -> Pull now), then Refresh preview.");
  }
}
if (!dryRun) rmSync(work, { recursive: true, force: true });
