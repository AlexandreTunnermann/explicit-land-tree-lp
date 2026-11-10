# Explicit Land & Tree Services: landing page funnel

TanStack Start (SSR) + React + TypeScript + Tailwind + lucide-react. Built from `build/AI-STUDIO-BUILD.md`.

- `/`: landing page. `/thank-you`: thank-you page. Both are `noindex, nofollow`.
- All client facts: `src/content/site.ts`. Image slots: `src/content/images.ts` (files in `public/images/`).
- Funnel CSS (tokens, components): `src/styles/lp.css`, scoped under `.lp`.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build in dist/
npm run typecheck
```

## Not done here (needs AI Studio / a human)

- CRM: `src/lib/crm-tracking.ts` is a no-op placeholder and every id in `src/lib/crm-fields.ts` is "".
  Run "Connect forms to my CRM", register the 16 custom fields (Step 7), paste their ids, then "Re-trigger form integration".
- Secrets (server only): META_PIXEL_ID, META_CAPI_TOKEN, optional META_TEST_EVENT_CODE; MAXMIND_ACCOUNT_ID + MAXMIND_LICENSE_KEY if there is no Cloudflare edge geo.
- `site.tracking.gtmId` is "" (GTM off). `site.legal.privacyUrl` / `termsUrl` are "".
- Graph API version in `src/lib/meta-capi.ts` is `v24.0`; confirm it is the current stable version before launch.
