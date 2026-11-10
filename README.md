# Explicit Land & Tree Services: landing page funnel

TanStack Start (SSR) + React + TypeScript + lucide-react. The page is fully self-styled (`src/styles/lp.css`, scoped under `.lp`),
so it looks the same in any TanStack Start template.

- `/`: landing page. `/thank-you`: thank-you page. Both are `noindex, nofollow`.
- Every client fact lives in `src/content/site.ts`, and the image slots in `src/content/images.ts` (files in `public/images/`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Publish to HighLevel AI Studio (Git Sync)

AI Studio does not build this page. It receives the finished files through its GitHub Git Sync.

**One time, in AI Studio:**

1. Create a new project (TanStack Start).
2. Go to **More → Git → GitHub**, connect your GitHub account and install/authorize **Lead Connector**.
   AI Studio creates its own private repo (for example `AlexandreTunnermann/<project-name>`) on branch `main`.
   Leave **Automatic Pull** on.

**Each time the page changes (from this repo):**

```bash
node scripts/sync-to-ai-studio.mjs AlexandreTunnermann/<ai-studio-repo>
```

The script:

1. Clones the AI Studio repo.
2. Replaces its template routes with this page, byte for byte. It keeps AI Studio's own package.json, lockfile,
   vite.config.ts, tsconfig.json and router, and only adds missing dependencies.
3. Runs the template's own build. If the build fails, nothing is pushed.
4. Runs the checksum check, then commits and pushes.

AI Studio then pulls the commit automatically (or click **More → Git → Pull now**), then **Refresh preview**.
Add `--dry-run` to commit locally without pushing.

**CRM:** after the first sync, in the AI Studio chat type `Connect forms to my CRM` and then `Re-trigger form integration`.
The project includes `LP-SYNC.md`, which tells AI Studio exactly what to do and what not to touch. Once the CRM is connected,
later syncs never overwrite `crm-tracking.ts`, `crm-fields.ts` or `submit-lead.ts`.

**Proof it's identical:** `node scripts/verify-copy.mjs` (inside the AI Studio repo) checks every page file against
this build's checksums. If you change files here, run `node scripts/make-verify.mjs` before syncing; the sync script also does it.

## Still to do

- Secrets (AI Studio → More → Secrets): META_PIXEL_ID, META_CAPI_TOKEN, optional META_TEST_EVENT_CODE.
  Add MAXMIND_ACCOUNT_ID and MAXMIND_LICENSE_KEY only if the published site has no Cloudflare geo data.
- `site.tracking.gtmId` is "" (GTM off). `site.legal.privacyUrl` and `termsUrl` are "".
- The Graph API version in `src/lib/meta-capi.ts` is `v24.0`; confirm it is the current stable version.
