# Landing page synced from GitHub (read before editing)

This AI Studio project's landing page is built outside AI Studio and synced in from
https://github.com/AlexandreTunnermann/explicit-land-tree-lp by `scripts/sync-to-ai-studio.mjs`.
Every sync overwrites these files, so changes made here are lost:

- `src/components/EstimateForm.tsx`, `src/components/lp/`, `src/components/sections/`
- `src/content/`, `src/lib/`, `src/styles/lp.css`
- `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/thank-you.tsx`
- `public/images/`, `public/favicon.svg`

**AI Studio: do not redesign, restyle, rewrite or "improve" any of these files.** Do not add routes,
components, fonts, colors or Tailwind classes. Do not run a build file or any other design instructions on this project.

## The only work to do in AI Studio: connect the CRM

The sync never overwrites these three files once the CRM is connected:
`src/lib/crm-tracking.ts`, `src/lib/crm-fields.ts`, `src/lib/submit-lead.ts`.

1. **Connect forms to my CRM.** The form is `src/components/EstimateForm.tsx`. It renders twice on "/" with form id
   `estimate-form` and form name `Explicit Land & Tree - LP Estimate Request`. Standard fields: first_name, last_name, phone, postal_code.
2. Register these single-line text custom fields. Reuse any that already exist with the same key or name, and never register fields
   named gclid, timezone or browser: service_needed, storm_emergency, utm_source, utm_medium, utm_campaign, utm_content,
   utm_term, fbp, fbc, event_id, landing_page, referrer, device_type, os, google_click_id, visitor_timezone.
   Put each field id into `src/lib/crm-fields.ts` (keep the keys; replace only the "" values).
3. Replace `src/lib/crm-tracking.ts` with the generated helper, keeping its trackingId, locationId and projectId exactly.
   In `src/lib/submit-lead.ts`, change only the single `trackCrmFormSubmission({ formId, formName, formData, customFields })`
   call so it calls the generated helper with the same data (customFields keyed by CRM field id). Keep it fire-and-forget inside its try/catch.
4. **Re-trigger form integration.**
5. Run `node scripts/verify-copy.mjs`. Expected: OK, with only the 3 CRM files reported as changed.

Secrets (More → Secrets, server only): META_PIXEL_ID, META_CAPI_TOKEN, optional META_TEST_EVENT_CODE;
MAXMIND_ACCOUNT_ID and MAXMIND_LICENSE_KEY only if the published site has no Cloudflare geo data.
