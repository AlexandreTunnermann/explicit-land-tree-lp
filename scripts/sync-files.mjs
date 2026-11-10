// The files that make up the landing page and are synced into the AI Studio repo.
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = fileURLToPath(new URL("..", import.meta.url));

const walk = (dir) =>
  readdirSync(join(ROOT, dir)).flatMap((n) => {
    const p = join(dir, n);
    return statSync(join(ROOT, p)).isDirectory() ? walk(p) : [p.replace(/\\/g, "/")];
  });

// AI Studio keeps its own: package.json (we only add missing deps), lockfile, vite.config.ts,
// tsconfig.json, src/router.tsx, src/routeTree.gen.ts and anything outside this list.
export const SYNC_FILES = () =>
  [
    "src/components/EstimateForm.tsx",
    ...walk("src/components/lp"),
    ...walk("src/components/sections"),
    ...walk("src/content"),
    ...walk("src/lib"),
    "src/routes/__root.tsx",
    "src/routes/index.tsx",
    "src/routes/thank-you.tsx",
    "src/styles/lp.css",
    ...walk("public/images"),
    "public/favicon.svg",
    "scripts/verify-copy.mjs",
    "LP-SYNC.md",
  ].sort();

export const CRM_FILES = ["src/lib/crm-tracking.ts", "src/lib/crm-fields.ts", "src/lib/submit-lead.ts"];

// Dependencies the page needs on top of a TanStack Start template.
export const DEPS = { "lucide-react": "^1.71.0", zod: "^4.6.7" };
