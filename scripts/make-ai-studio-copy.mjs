// Builds AI-STUDIO-COPY.md (every source file, verbatim) and scripts/verify-copy.mjs (checksums).
// Usage: node scripts/make-ai-studio-copy.mjs [outFile]
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const OUT = process.argv[2] || join(ROOT, "AI-STUDIO-COPY.md");

// Files AI Studio must create with exactly this content.
// Not copied (AI Studio keeps its own): package.json, vite.config.ts, tsconfig.json, src/router.tsx, src/routeTree.gen.ts.
const walk = (dir) =>
  readdirSync(join(ROOT, dir)).flatMap((n) => {
    const p = join(dir, n);
    return statSync(join(ROOT, p)).isDirectory() ? walk(p) : [p.replace(/\\/g, "/")];
  });
const SKIP = new Set(["src/router.tsx", "src/routeTree.gen.ts"]);
const textFiles = [...walk("src").filter((f) => !SKIP.has(f)), "public/favicon.svg", "scripts/verify-copy.mjs"].sort();
const images = walk("public/images").sort();

const norm = (s) => s.replace(/\r\n/g, "\n").replace(/\s+$/, "");
const sha = (buf) => createHash("sha256").update(buf).digest("hex");

// 1) verify script (generated first so it is part of the bundle)
const sums = {};
for (const f of textFiles) if (f !== "scripts/verify-copy.mjs") sums[f] = sha(norm(readFileSync(join(ROOT, f), "utf8")));
for (const f of images) sums[f] = sha(readFileSync(join(ROOT, f)));
const verify = `// Checks that every copied file is byte-identical to the original build (line endings ignored).
// Run from the project root: node scripts/verify-copy.mjs
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";

const EXPECTED = ${JSON.stringify(sums, null, 2)};

let bad = 0;
for (const [file, hash] of Object.entries(EXPECTED)) {
  if (!existsSync(file)) { console.log("MISSING  " + file); bad++; continue; }
  const raw = readFileSync(file);
  const data = file.startsWith("public/images/") ? raw : raw.toString("utf8").replace(/\\r\\n/g, "\\n").replace(/\\s+$/, "");
  const got = createHash("sha256").update(data).digest("hex");
  if (got !== hash) { console.log("CHANGED  " + file); bad++; }
}
const total = Object.keys(EXPECTED).length;
console.log(bad === 0 ? \`OK: all \${total} files are identical to the original build.\` : \`FAILED: \${bad} of \${total} files are missing or different.\`);
process.exit(bad === 0 ? 0 : 1);
`;
writeFileSync(join(ROOT, "scripts/verify-copy.mjs"), verify);

// 2) the bundle
const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
const lines = [];
lines.push(`AI STUDIO COPY: Explicit Land & Tree Services landing page (copy, do not design)

Begin your first reply with: "Read AI-STUDIO-COPY.md: copying ${textFiles.length} files and ${images.length} images exactly."

This project is ALREADY BUILT and tested. Your job is to COPY it into this project exactly, like copying a file from one disk to another. You are not designing, improving, reformatting or "cleaning up" anything.

== RULES ==
1. Create every file listed under FILES with EXACTLY the content between its ~~~~ fences: same characters, same order, same spacing, same comments. Do not shorten, summarize, translate, reformat, rename, re-indent, or "fix" anything. Do not skip a file. If a file already exists at that path, REPLACE its whole content.
2. Do not add any file, component, section, style, font, color or text that is not in this document. Do not install shadcn components or other UI libraries for this.
3. Keep the template's own package.json, vite.config.ts, tsconfig.json, src/router.tsx and src/routeTree.gen.ts. Never edit routeTree.gen.ts by hand.
4. Dependencies: make sure these are installed (add only what is missing): lucide-react, zod. Tailwind CSS v4 (with @tailwindcss/vite) and the "@/..." import alias for src/ must work; if the alias or Tailwind is missing, add only that config.
5. Delete any other route files the template has in src/routes/ (for example a demo or about page) except __root.tsx, index.tsx and thank-you.tsx, which come from this document. Remove the template's own global stylesheet import only if it still exists after src/routes/__root.tsx is replaced.
6. Images: the ${images.length} image files are attached to the message (or in the public Cloud storage bucket named in my message). Save each one in public/images/ under its EXACT file name (no renaming, no conversion, no resizing).
7. The ONLY code changes you may make, and only if the project does not compile otherwise:
   a) If this TanStack Start version calls the server-function validator method "inputValidator" instead of "validator" (or the other way round), rename only that method call in src/lib/geo.ts and src/lib/meta-capi.ts.
   b) If a helper from "@tanstack/react-start/server" (getRequest, getRequestHeader, setResponseHeader) has a different name in this version, change only that import name.
   Tell me exactly what you changed. Change nothing else.
8. When all files are in place, run: node scripts/verify-copy.mjs
   It must print "OK: all ... files are identical". Rules 7a/7b changes will show up as CHANGED for those files only; list them. Any other CHANGED or MISSING file means you did not copy it exactly: copy it again from this document and re-run until only the rule 7 files differ. If you cannot run commands, say so.

== CRM (do this only after the copy is verified) ==
9. Run "Connect forms to my CRM" yourself (if you can't, stop and tell me to type it). The form is src/components/EstimateForm.tsx, rendered twice on "/" with form id "estimate-form" and form name "Explicit Land & Tree - LP Estimate Request". Standard fields: first_name, last_name, phone, postal_code.
10. Register these single-line text custom fields in the CRM (reuse any that already exist with the same key or name; never register fields named gclid, timezone or browser): service_needed, storm_emergency, utm_source, utm_medium, utm_campaign, utm_content, utm_term, fbp, fbc, event_id, landing_page, referrer, device_type, os, google_click_id, visitor_timezone. Put each field id into src/lib/crm-fields.ts (keep the keys; replace only the "" values).
11. Replace src/lib/crm-tracking.ts with the helper the CRM connection generated, keeping its trackingId, locationId and projectId exactly as generated. Then, in src/lib/submit-lead.ts, change ONLY the one call "trackCrmFormSubmission({ formId, formName, formData, customFields })" so it calls the generated helper with the same data (form id/name, formData, customFields keyed by CRM field id). It must stay fire-and-forget inside its try/catch. Change nothing else in submit-lead.ts.
12. Run "Re-trigger form integration" yourself (if you can't, end your reply with: "Ready. Please type: Re-trigger form integration").
13. Reply with: the verify result, the rule 7 changes (if any), the key → id table, and the files changed in steps 9–11.

== IMAGES (${images.length}) ==
${images.map((f) => "- " + f).join("\n")}

== FILES (${textFiles.length}) ==
`);
for (const f of textFiles) {
  const content = norm(readFileSync(join(ROOT, f), "utf8"));
  if (content.includes("~~~~")) throw new Error("fence collision in " + f);
  lines.push(`### FILE: ${f}\n~~~~\n${content}\n~~~~\n`);
}
lines.push(`== END OF FILES ==
(Reference only, do not copy: the original build used ${Object.entries(pkg.dependencies).map(([k, v]) => k + "@" + v).join(", ")}.)
`);
writeFileSync(OUT, lines.join("\n"));
console.log("wrote", relative(process.cwd(), OUT), textFiles.length, "files,", images.length, "images,", Math.round(statSync(OUT).size / 1024) + " KB");
