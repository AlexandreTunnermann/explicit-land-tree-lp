AI STUDIO COPY: Explicit Land & Tree Services landing page (copy, do not design)

Begin your first reply with: "Read AI-STUDIO-COPY.md: copying 38 files and 17 images exactly."

This project is ALREADY BUILT and tested. Your job is to COPY it into this project exactly, like copying a file from one disk to another. You are not designing, improving, reformatting or "cleaning up" anything.

== RULES ==
1. Create every file listed under FILES with EXACTLY the content between its ~~~~ fences: same characters, same order, same spacing, same comments. Do not shorten, summarize, translate, reformat, rename, re-indent, or "fix" anything. Do not skip a file. If a file already exists at that path, REPLACE its whole content.
2. Do not add any file, component, section, style, font, color or text that is not in this document. Do not install shadcn components or other UI libraries for this.
3. Keep the template's own package.json, vite.config.ts, tsconfig.json, src/router.tsx and src/routeTree.gen.ts. Never edit routeTree.gen.ts by hand.
4. Dependencies: make sure these are installed (add only what is missing): lucide-react, zod. Tailwind CSS v4 (with @tailwindcss/vite) and the "@/..." import alias for src/ must work; if the alias or Tailwind is missing, add only that config.
5. Delete any other route files the template has in src/routes/ (for example a demo or about page) except __root.tsx, index.tsx and thank-you.tsx, which come from this document. Remove the template's own global stylesheet import only if it still exists after src/routes/__root.tsx is replaced.
6. Images: the 17 image files are attached to the message (or in the public Cloud storage bucket named in my message). Save each one in public/images/ under its EXACT file name (no renaming, no conversion, no resizing).
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

== IMAGES (17) ==
- public/images/106__service-4.webp
- public/images/113__gallery-6.webp
- public/images/41__gallery-5.webp
- public/images/42__gallery-3.webp
- public/images/43__about-work.webp
- public/images/49__service-3.webp
- public/images/53__gallery-2.webp
- public/images/55__service-2.webp
- public/images/89__signature.webp
- public/images/ET-LOGO-1__logo.webp
- public/images/IMG_4086__hero-mobile.webp
- public/images/IMG_4086__hero.webp
- public/images/IMG_4126__service-1.webp
- public/images/IMG_4207__gallery-1.webp
- public/images/IMG_7196__gallery-4.webp
- public/images/Logo-pdf__logo-light.webp
- public/images/sadf-copy__owner.webp

== FILES (38) ==

### FILE: public/favicon.svg
~~~~
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#7F1418"/><path d="M32 10c-9 0-15 7-15 15 0 6 3 10 8 12v6h-6v6h26v-6h-6v-6c5-2 8-6 8-12 0-8-6-15-15-15z" fill="#fff"/><rect x="29" y="40" width="6" height="14" fill="#fff"/></svg>
~~~~

### FILE: scripts/verify-copy.mjs
~~~~
// Checks that every copied file is byte-identical to the original build (line endings ignored).
// Run from the project root: node scripts/verify-copy.mjs
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";

const EXPECTED = {
  "public/favicon.svg": "07caf1d21d3a668cec769fdf6d4633c17b7ea37a160d7004e82de9f670713b23",
  "src/components/EstimateForm.tsx": "9644aca68986014e789b2f4e2023b169151146e610db48ae61cd0a5c4efe4d25",
  "src/components/lp/Button.tsx": "cfa2875f858eba3d326ad97a8ed8edef89f82425412b87176483d49a7032f74c",
  "src/components/lp/CallLink.tsx": "d477c10332533e2b0cd933a835a910b37f461df76973dba82a320d260a7bd5b9",
  "src/components/lp/Checks.tsx": "6094e29c27f023e57d816829d957f657595780acbbc975b58a9eb6ec5b8b862f",
  "src/components/lp/CityName.tsx": "f23bc181a26cd8ff11234b33e953c6482a2fe0385a9ebda4cd09c351098ef912",
  "src/components/lp/CtaPair.tsx": "b7817490d97ae9d6581ef6069642bc44c194d49deff62d759d74997a673967d7",
  "src/components/lp/Footer.tsx": "99f267b282fa526ca21ff8e37c5c16e1207e9478cedb12b98a4f2cffc55f45c8",
  "src/components/lp/GoogleG.tsx": "8451545d45bdd9e20e29f136edc409aa7dacb351e5d6efd98ebe999677cb69fc",
  "src/components/lp/GoogleRatingBadge.tsx": "cb1e1f9d861577955dcd4828404a769f30c8ce58602e3e036d9ae34cc0804166",
  "src/components/lp/Header.tsx": "be1653c478d569ce5e50f0ba82fef647974db5dbbcd31b29ce60d4758d2f7b22",
  "src/components/lp/Section.tsx": "c99cf2e8c6228db96c5428b386024faa996ca79b0651cbc038302f94424446eb",
  "src/components/lp/SectionHead.tsx": "233c9dbb5f10d815840136111a4736006d26d3d4ef0f7bbf60bc313109d7f5b6",
  "src/components/lp/SlotImage.tsx": "17bff0daafce61f9262d51809e9d69dbf0998dae721bed87692aec9bd47127be",
  "src/components/lp/Stars.tsx": "bba19c1bc95a8275305757d8af8f5c1ea04cac51196dee52b3a0604ae7fd8cca",
  "src/components/lp/StickyCallBar.tsx": "61bb7871f43db8bbfdfe367094ec19a447c75bfa681b62cfa1dea54044c8aba0",
  "src/components/sections/LandingA.tsx": "8f0ca60cc0c47e083aa58356d42d9e5b92d89af345117c2b033407df3fa1140a",
  "src/components/sections/LandingB.tsx": "04120299a399ea5bc135517a685a64f7efb4b63543cdc58f5190d092cc1e27b5",
  "src/components/sections/ReviewCard.tsx": "5cce31ff973566d5aa9376100165f5f7575277d310515676f8aaaf770cf02aeb",
  "src/content/images.ts": "71b2a9241c881fedda117bc76e022f2557daf507051567d43b8a66f4f1948f69",
  "src/content/site.ts": "513ebb18d9e858b12f97795e7d35f4fd1750622d87852e8cafff4da597ec3bab",
  "src/lib/analytics.ts": "c37904116e9d248f2eec6949d6f02013069f769374e4eaadf56ddf61ffc03d5e",
  "src/lib/attribution.ts": "7bb96ed1eea46eee2e1f19f0a1856334b10917f93be75fe7cf0f3ce5f2f313b5",
  "src/lib/crm-fields.ts": "5e6f727a596ec9ee653050cb526f9c7cea3529a83b874b56fd7aa16993e300af",
  "src/lib/crm-tracking.ts": "0813b0b24e7059e9b3e23daa8f63b8ec626f771309e2c376c9d63375413d06b2",
  "src/lib/estimate-store.ts": "11f9349bd9042dd021ecf090fd10b367474040057c38b8fae2581ffda8358b01",
  "src/lib/format.ts": "ce12c6179637e87026fc8f8c5834174a96dde4afcf58b0957e8906edf981b5a8",
  "src/lib/geo-context.tsx": "8befab661f0ce11e15fd81aa7ad382e1c28d86ca874cdd99d1a687096928a6e9",
  "src/lib/geo-shared.ts": "f19e2ba04da0d843a4538bab781e96cd33092e85ff3af7e6fcb9f6a6197f9792",
  "src/lib/geo.ts": "23857dd1f3457644724213099951c5a0c5fb6eb59f4ea28a43cedb702c2164d0",
  "src/lib/meta-capi.ts": "bd36c4b938b28f29969222a2f4bd3f3ed85b14507b456bf56e5f782367d60de1",
  "src/lib/submit-lead.ts": "e4480ab36f557c6b2ea5c5a33487eaeba742099e4a050ac89eb35d45d61c4832",
  "src/routes/__root.tsx": "70850b97f042f52560dd11408167ab5b0547668b7ab0e39eda81264ca11e1d83",
  "src/routes/index.tsx": "a80e5e8ca4d822a2fceddf831d1a7cf8ce4ea7c4a105dab8fcb2b6299b24a526",
  "src/routes/thank-you.tsx": "d3f22034c3d93420eb105dc627793273a800de2ca4aa8b442e3da1c9961cce3d",
  "src/styles/app.css": "944e6e12c0067a6767836a78ad6c4095b829f966b44f33bc95cfef1401ab3c10",
  "src/styles/lp.css": "bdea65359ea08b65e451e6167d60f03f10207f3091f78d9dc39bacb737713818",
  "public/images/106__service-4.webp": "7ed07c07ec4442a444d793df7bcd9b29628b2ccc2f49463af0f5e86aa5872b1c",
  "public/images/113__gallery-6.webp": "fd41a567f99b8568d28c04b18f540058db8cd179365fe2fa5de0da38d45ac56e",
  "public/images/41__gallery-5.webp": "3e3cff840bc0241b0605937f474f94ccb93f973b5aa75390f818e26e570e00ca",
  "public/images/42__gallery-3.webp": "81a4bcc57442d3916835507072f7caac160253e335f812f48af6863a015e0f47",
  "public/images/43__about-work.webp": "ef904491801467aa14a9cedb4a3d9d1d1100b82e6e4853075efb1fcd27811c1d",
  "public/images/49__service-3.webp": "0f3c119159f68bc05c77c21d6682181ba9161060b4854083db8bd75ea12b3a17",
  "public/images/53__gallery-2.webp": "28e47fc29e72d9c6def9bd744011389737b034c0f2e11acb870476b54769f83e",
  "public/images/55__service-2.webp": "f76089dafed2065a3b858628a9fad14b3d172587837244468fc019439123815b",
  "public/images/89__signature.webp": "50b50103538ab1df4d2c5b62bd11f989d254f778f0b668ce9ad30e293d810788",
  "public/images/ET-LOGO-1__logo.webp": "046a94779d9dbfb92c3df8373ef32e249fdc80b8c5d23b781c1638ae334234e4",
  "public/images/IMG_4086__hero-mobile.webp": "0045b56802e2d189742fb174000d023ef101395f390f7fa5b3ee6dc2135a8df4",
  "public/images/IMG_4086__hero.webp": "7f7c0d431db6232fcb67a461fca3725556c1332767f2ac5e015916d2b41b0c94",
  "public/images/IMG_4126__service-1.webp": "d81683e2fbd8d1691c5e0398a5887884f81f390662c221e3d7ddab4a8dd79217",
  "public/images/IMG_4207__gallery-1.webp": "0279b89f768d36bce9498f695ed12575163d910a1a9e566c92607aaed87e3fb2",
  "public/images/IMG_7196__gallery-4.webp": "54050d34bebea7065569f79a5ea2c5707f7ee239912473c6cf9819862fcef16e",
  "public/images/Logo-pdf__logo-light.webp": "ae2b599b155d53297f6e6db84804450bd623a25850788fd62087bcf25ebd9948",
  "public/images/sadf-copy__owner.webp": "efc03edaa8eea039f36f5d203790695145b2e3f8ce261fff1fce73773a718cd7"
};

let bad = 0;
for (const [file, hash] of Object.entries(EXPECTED)) {
  if (!existsSync(file)) { console.log("MISSING  " + file); bad++; continue; }
  const raw = readFileSync(file);
  const data = file.startsWith("public/images/") ? raw : raw.toString("utf8").replace(/\r\n/g, "\n").replace(/\s+$/, "");
  const got = createHash("sha256").update(data).digest("hex");
  if (got !== hash) { console.log("CHANGED  " + file); bad++; }
}
const total = Object.keys(EXPECTED).length;
console.log(bad === 0 ? `OK: all ${total} files are identical to the original build.` : `FAILED: ${bad} of ${total} files are missing or different.`);
process.exit(bad === 0 ? 0 : 1);
~~~~

### FILE: src/components/EstimateForm.tsx
~~~~
import { useNavigate } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/lp/Button";
import { CallLink } from "@/components/lp/CallLink";
import { pushDL } from "@/lib/analytics";
import { useEstimate } from "@/lib/estimate-store";
import { formatPhone, isValidUsPhone, phoneDigits } from "@/lib/format";
import { submitLead, type Lead } from "@/lib/submit-lead";

type Placement = "hero" | "final";
type FieldName = "phone" | "postal_code" | "service_needed";
type Errors = Partial<Record<FieldName, string>>;

const STORM_YES = "Yes, urgent";
const STORM_NO = "No, scheduled";

// Once per placement per page load.
const formStarted = new Set<Placement>();
// Only one submission at a time across both forms.
let submitting = false;

type Option = (typeof site.services.formOptions)[number];
const OPTIONS: readonly Option[] = site.services.formOptions;
const groupOf = (label: string): string | undefined => OPTIONS.find((o) => o.label === label)?.group;

function defaultZipExample(): string {
  const city = site.geo.cities.find((c) => c.name === site.geo.defaultCity);
  const zips = (city?.zips ?? []) as readonly string[];
  return zips[0] ?? "";
}

function caretAfterDigits(formatted: string, n: number): number {
  if (n <= 0) return formatted.startsWith("(") ? 1 : 0;
  let seen = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) {
      seen++;
      if (seen === n) return i + 1;
    }
  }
  return formatted.length;
}

function validate(v: { phone: string; zip: string; service: string }): Errors {
  const e: Errors = {};
  if (!isValidUsPhone(v.phone)) e.phone = "Please enter a valid 10-digit phone number.";
  if (!/^\d{5}$/.test(v.zip)) e.postal_code = "Please enter a 5-digit ZIP code.";
  if (!v.service) e.service_needed = "Please choose a service.";
  return e;
}

export function EstimateForm({ placement }: { placement: Placement }) {
  const navigate = useNavigate();
  const { request } = useEstimate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [service, setService] = useState("");
  const [storm, setStorm] = useState<string>(STORM_NO);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [offline, setOffline] = useState(false);

  const phoneRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const pendingCaret = useRef<number | null>(null);

  const id = (f: string) => `${placement}-${f}`;
  const isPaid = groupOf(service) === "paid";
  const badge = isPaid && site.form.badgePaid ? site.form.badgePaid : site.form.badge;
  const submitLabel = isPaid ? site.form.submitLabelPaid : site.form.submitLabelFree;

  // Preselect from service cards.
  useEffect(() => {
    if (!request || request.target !== placement) return;
    setService(request.label);
    if (request.emergency) setStorm(STORM_YES);
    const t = window.setTimeout(() => phoneRef.current?.focus({ preventScroll: true }), 450);
    return () => window.clearTimeout(t);
  }, [request, placement]);

  useLayoutEffect(() => {
    if (pendingCaret.current !== null && phoneRef.current && document.activeElement === phoneRef.current) {
      const p = pendingCaret.current;
      phoneRef.current.setSelectionRange(p, p);
    }
    pendingCaret.current = null;
  }, [phone]);

  const markStart = () => {
    if (formStarted.has(placement)) return;
    formStarted.add(placement);
    pushDL({ event: "form_start", form_id: site.form.formId, form_placement: placement });
  };

  const revalidate = (next: { phone?: string; zip?: string; service?: string }) => {
    if (!attempted) return;
    setErrors(validate({ phone: next.phone ?? phone, zip: next.zip ?? zip, service: next.service ?? service }));
  };

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    markStart();
    const el = e.target;
    const raw = el.value;
    const caret = el.selectionStart ?? raw.length;
    let digits = raw.replace(/\D/g, "");
    let before = raw.slice(0, caret).replace(/\D/g, "").length;
    const prev = phoneDigits(phone);
    const inputType = (e.nativeEvent as InputEvent).inputType;
    // A formatting character was deleted: remove the neighbouring digit instead.
    if (digits === prev && raw.length < formatPhone(prev).length) {
      if (inputType === "deleteContentBackward" && before > 0) {
        digits = digits.slice(0, before - 1) + digits.slice(before);
        before -= 1;
      } else if (inputType === "deleteContentForward" && before < digits.length) {
        digits = digits.slice(0, before) + digits.slice(before + 1);
      }
    }
    if (digits.length >= 11 && digits.startsWith("1")) {
      digits = digits.slice(1);
      before = Math.max(0, before - 1);
    }
    digits = digits.slice(0, 10);
    before = Math.min(before, digits.length);
    const formatted = formatPhone(digits);
    pendingCaret.current = caretAfterDigits(formatted, before);
    setPhone(formatted);
    revalidate({ phone: formatted });
  };

  const onZipChange = (e: ChangeEvent<HTMLInputElement>) => {
    markStart();
    const v = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZip(v);
    revalidate({ zip: v });
  };

  const onServiceChange = (e: ChangeEvent<HTMLSelectElement>) => {
    markStart();
    setService(e.target.value);
    revalidate({ service: e.target.value });
  };

  const onBlurValidate = () => {
    if (attempted) setErrors(validate({ phone, zip, service }));
  };

  const focusFirst = (errs: Errors) => {
    if (errs.phone) phoneRef.current?.focus();
    else if (errs.postal_code) zipRef.current?.focus();
    else if (errs.service_needed) serviceRef.current?.focus();
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting || busy) return;

    // Spam guard.
    if (honeypot || (performance.now() < 2000 && !formStarted.has(placement))) {
      void navigate({ to: "/thank-you" });
      return;
    }

    setAttempted(true);
    const errs = validate({ phone, zip, service });
    setErrors(errs);
    const bad = Object.keys(errs) as FieldName[];
    if (bad.length) {
      pushDL({ event: "form_error", form_id: site.form.formId, form_placement: placement, error_fields: bad.join(",") });
      focusFirst(errs);
      return;
    }

    if (typeof navigator !== "undefined" && navigator.onLine === false) {
      setOffline(true);
      return;
    }
    setOffline(false);

    const nameParts = fullName.trim().split(/\s+/).filter(Boolean);
    const d = phoneDigits(phone);
    const lead: Lead = {
      first_name: nameParts[0] ?? "",
      last_name: nameParts.slice(1).join(" "),
      phone_e164: "+1" + d,
      phone_display: formatPhone(d),
      postal_code: zip,
      service_needed: service,
      storm_emergency: storm,
      lead_type: isPaid ? "paid_service" : "free_estimate",
      placement,
    };

    submitting = true;
    setBusy(true);
    try {
      await submitLead(lead);
    } catch {
      /* the visitor still reaches the thank-you page */
    }
    try {
      await navigate({ to: "/thank-you" });
    } finally {
      submitting = false;
      setBusy(false);
    }
  };

  // Options: optgroups only when more than one non-"other" group exists.
  const order = ["free", "paid"] as const;
  const groups = order.filter((g) => OPTIONS.some((o) => o.group === g));
  const others = OPTIONS.filter((o) => o.group === "other");
  const useGroups = groups.length > 1;

  const describe = (f: FieldName) => (errors[f] ? id(f) + "-err" : undefined);

  return (
    <div className="lp-form-card lp-card-light">
      <span className="lp-form-badge">{badge}</span>
      <h2 className="lp-form-title">{site.form.title}</h2>
      <p className="lp-form-sub">{site.form.subtitle}</p>

      <form
        className="lp-form"
        noValidate
        onSubmit={onSubmit}
        id={placement === "hero" ? site.form.formId : `${site.form.formId}-final`}
        name={site.form.formName}
        data-form-id={site.form.formId}
        data-placement={placement}
      >
        <div className="lp-field">
          <label className="lp-label" htmlFor={id("full_name")}>
            Full name <span className="opt">(optional)</span>
          </label>
          <input
            className="lp-input"
            id={id("full_name")}
            type="text"
            name="full_name"
            autoComplete="name"
            placeholder="e.g. John Smith"
            value={fullName}
            onFocus={markStart}
            onChange={(e) => {
              markStart();
              setFullName(e.target.value);
            }}
          />
        </div>

        <div className="lp-field">
          <label className="lp-label" htmlFor={id("phone")}>
            Phone number <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            ref={phoneRef}
            className="lp-input"
            id={id("phone")}
            type="tel"
            name="phone"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="(555) 555-5555"
            required
            aria-required="true"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={describe("phone")}
            value={phone}
            onFocus={markStart}
            onChange={onPhoneChange}
            onBlur={onBlurValidate}
          />
          <div className="lp-error" id={id("phone") + "-err"} aria-live="polite">
            {errors.phone ?? ""}
          </div>
        </div>

        <div className="lp-field">
          <label className="lp-label" htmlFor={id("postal_code")}>
            ZIP code <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            ref={zipRef}
            className="lp-input"
            id={id("postal_code")}
            type="text"
            name="postal_code"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="postal-code"
            maxLength={5}
            placeholder={defaultZipExample() ? "e.g. " + defaultZipExample() : undefined}
            required
            aria-required="true"
            aria-invalid={errors.postal_code ? true : undefined}
            aria-describedby={describe("postal_code")}
            value={zip}
            onFocus={markStart}
            onChange={onZipChange}
            onBlur={onBlurValidate}
          />
          <div className="lp-error" id={id("postal_code") + "-err"} aria-live="polite">
            {errors.postal_code ?? ""}
          </div>
        </div>

        <div className="lp-field">
          <label className="lp-label" htmlFor={id("service_needed")}>
            Service needed <span className="req" aria-hidden="true">*</span>
          </label>
          <select
            ref={serviceRef}
            className={`lp-input${service ? "" : " is-placeholder"}`}
            id={id("service_needed")}
            name="service_needed"
            required
            aria-required="true"
            aria-invalid={errors.service_needed ? true : undefined}
            aria-describedby={describe("service_needed")}
            value={service}
            onFocus={markStart}
            onChange={onServiceChange}
            onBlur={onBlurValidate}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {useGroups
              ? groups.map((g) => (
                  <optgroup key={g} label={site.services.groupLabels[g] || g}>
                    {OPTIONS.filter((o) => o.group === g).map((o) => (
                      <option key={o.label} value={o.label}>
                        {o.label}
                      </option>
                    ))}
                  </optgroup>
                ))
              : OPTIONS.filter((o) => o.group !== "other").map((o) => (
                  <option key={o.label} value={o.label}>
                    {o.label}
                  </option>
                ))}
            {others.map((o) => (
              <option key={o.label} value={o.label}>
                {o.label}
              </option>
            ))}
          </select>
          <div className="lp-error" id={id("service_needed") + "-err"} aria-live="polite">
            {errors.service_needed ?? ""}
          </div>
          {isPaid && site.services.paidNote ? (
            <p className="lp-note">
              <Info aria-hidden="true" />
              <span>{site.services.paidNote}</span>
            </p>
          ) : null}
        </div>

        <fieldset className="lp-field">
          <legend className="lp-label">
            Is this a storm-related emergency? <span className="req" aria-hidden="true">*</span>
          </legend>
          <div className="lp-radios">
            {[STORM_YES, STORM_NO].map((v) => (
              <label className="lp-radio" key={v}>
                <input
                  type="radio"
                  name="storm_emergency"
                  value={v}
                  checked={storm === v}
                  onFocus={markStart}
                  onChange={() => {
                    markStart();
                    setStorm(v);
                  }}
                />
                {v}
              </label>
            ))}
          </div>
          {storm === STORM_YES ? (
            <p className="lp-callout" role="status">
              {site.form.emergencyHint} <CallLink location="form_emergency_hint" />
            </p>
          ) : null}
        </fieldset>

        <div className="lp-honeypot" aria-hidden="true">
          <label htmlFor={id("company")}>Company</label>
          <input
            id={id("company")}
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div>
          {offline ? (
            <p className="lp-offline" role="alert" style={{ marginBottom: 12 }}>
              You seem to be offline. Please check your connection or call us at <CallLink location="form_offline" />.
            </p>
          ) : null}
          {busy ? (
            <button type="submit" className="lp-btn lp-btn--brand lp-btn--block" disabled aria-busy="true">
              <span className="lp-spinner" aria-hidden="true" />
              <span>Sending…</span>
            </button>
          ) : (
            <Button type="submit" variant="brand" icon="arrow" block>
              {submitLabel}
            </Button>
          )}
          <p className="lp-consent" style={{ marginTop: 16 }}>
            {site.form.consentText}
            {site.legal.privacyUrl ? (
              <>
                {" "}
                <a href={site.legal.privacyUrl} target="_blank" rel="noopener">
                  Privacy Policy
                </a>
              </>
            ) : null}
          </p>
        </div>
      </form>
    </div>
  );
}
~~~~

### FILE: src/components/lp/Button.tsx
~~~~
import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { trackCta } from "@/lib/analytics";

export type BtnVariant = "call" | "brand" | "light";
export type BtnIcon = "phone" | "arrow" | "none";

export function btnClass(
  variant: BtnVariant,
  opts: { block?: boolean; compact?: boolean; pulse?: boolean; className?: string } = {},
): string {
  return [
    "lp-btn",
    `lp-btn--${variant}`,
    opts.block && "lp-btn--block",
    opts.compact && "lp-btn--compact",
    opts.pulse && "lp-btn--pulse",
    opts.className,
  ]
    .filter(Boolean)
    .join(" ");
}

/** Filled phone glyph (fill currentColor). */
export function PhoneFilled({ className = "lp-ico-phone" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export function BtnContent({ icon, children }: { icon: BtnIcon; children: ReactNode }) {
  return (
    <>
      {icon === "phone" ? <PhoneFilled /> : null}
      <span>{children}</span>
      {icon === "arrow" ? <ArrowRight className="lp-ico-arrow" strokeWidth={2.5} aria-hidden="true" /> : null}
    </>
  );
}

type CommonProps = {
  variant: BtnVariant;
  icon?: BtnIcon;
  block?: boolean;
  compact?: boolean;
  pulse?: boolean;
  className?: string;
  children: ReactNode;
};

/** A real <button>. */
export function Button({
  variant,
  icon = "none",
  block,
  compact,
  pulse,
  className,
  children,
  ...rest
}: CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">) {
  return (
    <button className={btnClass(variant, { block, compact, pulse, className })} {...rest}>
      <BtnContent icon={icon}>{children}</BtnContent>
    </button>
  );
}

/** An anchor styled as a button. */
export function ButtonLink({
  variant,
  icon = "none",
  block,
  compact,
  pulse,
  className,
  children,
  ...rest
}: CommonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">) {
  return (
    <a className={btnClass(variant, { block, compact, pulse, className })} {...rest}>
      <BtnContent icon={icon}>{children}</BtnContent>
    </a>
  );
}

/** "Get My Free Estimate" anchor to a form; tracks cta_click, never preventDefault. */
export function EstimateLink({
  variant,
  location,
  href = "#final-form",
  label = "Get My Free Estimate",
  compact,
  className,
}: {
  variant: "brand" | "light";
  location: string;
  href?: string;
  label?: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <ButtonLink
      variant={variant}
      icon="arrow"
      href={href}
      compact={compact}
      className={className}
      onClick={() => trackCta(label, location)}
    >
      {label}
    </ButtonLink>
  );
}
~~~~

### FILE: src/components/lp/CallLink.tsx
~~~~
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { trackPhoneClick } from "@/lib/analytics";
import { telHref } from "@/lib/format";
import { BtnContent, btnClass, type BtnVariant } from "./Button";

/**
 * Every tel: link on the site. Default: a plain bold inline link (no button classes, no icon).
 * With `variant`, it renders as a button (base + variant) with the single filled phone icon.
 */
export function CallLink({
  location,
  className,
  children,
  variant,
  block,
  compact,
  pulse,
}: {
  location: string;
  className?: string;
  children?: ReactNode;
  variant?: BtnVariant;
  block?: boolean;
  compact?: boolean;
  pulse?: boolean;
}) {
  const onClick = () => trackPhoneClick(location);
  if (variant) {
    return (
      <a href={telHref()} className={btnClass(variant, { block, compact, pulse, className })} onClick={onClick}>
        <BtnContent icon="phone">{children ?? "Call Now " + site.contact.phoneDisplay}</BtnContent>
      </a>
    );
  }
  return (
    <a href={telHref()} className={`lp-calllink ${className ?? ""}`.trim()} onClick={onClick}>
      {children ?? site.contact.phoneDisplay}
    </a>
  );
}
~~~~

### FILE: src/components/lp/Checks.tsx
~~~~
import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function Checks({ items, variant, className = "" }: { items: ReactNode[]; variant?: "white"; className?: string }) {
  return (
    <ul className={`lp-checks${variant === "white" ? " lp-checks--white" : ""} ${className}`.trim()}>
      {items.map((item, i) => (
        <li key={i}>
          <Check className="lp-check-ico" strokeWidth={3} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
~~~~

### FILE: src/components/lp/CityName.tsx
~~~~
import { useGeo } from "@/lib/geo-context";

export function CityName() {
  const geo = useGeo();
  return <>{geo.city}</>;
}
~~~~

### FILE: src/components/lp/CtaPair.tsx
~~~~
import { site } from "@/content/site";
import { EstimateLink } from "./Button";
import { CallLink } from "./CallLink";
import type { Tone } from "./Section";

/** Call + estimate pair. Call is always the call variant; estimate is brand on white/light, light elsewhere. */
export function CtaPair({
  location,
  tone,
  align = "center",
  href = "#final-form",
  callLabel,
  pulse,
  className = "",
}: {
  location: string;
  tone: Tone | "hero";
  align?: "center" | "left";
  href?: string;
  callLabel?: string;
  pulse?: boolean;
  className?: string;
}) {
  const estimateVariant = tone === "white" || tone === "light" ? "brand" : "light";
  return (
    <div className={`lp-cta-pair${align === "center" ? " lp-cta-pair--center" : ""} ${className}`.trim()}>
      <CallLink location={location} variant="call" pulse={pulse}>
        {callLabel ?? "Call Now " + site.contact.phoneDisplay}
      </CallLink>
      <EstimateLink variant={estimateVariant} location={location} href={href} />
    </div>
  );
}

export function CtaRow({ location, tone }: { location: string; tone: Tone }) {
  return (
    <div className="lp-cta-row">
      <CtaPair location={location} tone={tone} />
    </div>
  );
}
~~~~

### FILE: src/components/lp/Footer.tsx
~~~~
import { images } from "@/content/images";
import { site } from "@/content/site";
import { CtaPair } from "./CtaPair";

export function Footer({ page = "landing" }: { page?: "landing" | "thank_you" }) {
  const logo = images.logo_light.src ? images.logo_light : images.logo;
  const hq = site.business.hq;
  const address = hq.showStreet && hq.street ? `${hq.street}, ${hq.city}, ${hq.state} ${hq.zip}` : `${hq.city}, ${hq.state}`;
  return (
    <footer className="lp-footer lp-tone-dark">
      <div className="lp-container">
        <div className="lp-footer-grid">
          <div>
            {logo.src ? (
              <img className="lp-footer-logo" src={logo.src} alt={logo.alt} width={356} height={168} loading="lazy" decoding="async" />
            ) : (
              <div className="lp-footer-wordmark">
                <span className="l1">{site.business.shortName}</span>
              </div>
            )}
            <p style={{ marginTop: 16, maxWidth: 460 }}>{site.business.description}</p>
            <CtaPair location="footer" tone="dark" align="left" callLabel="Call Now" href={page === "landing" ? "#final-form" : "/#final-form"} />
          </div>
          <div>
            <h3>Contact</h3>
            <p>{address}</p>
            <p>{site.business.hoursLabel}</p>
            <p style={{ marginTop: 16 }}>We accept: {site.payments.join(", ")}</p>
          </div>
          <div>
            <h3>Credentials</h3>
            <ul className="lp-footer-cred">
              {site.credentials.map((c) => (
                <li key={c.label}>
                  {c.label}
                  {c.detail ? <span> ({c.detail})</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lp-footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.business.legalName}
          </span>
          {site.legal.privacyUrl ? (
            <a href={site.legal.privacyUrl} target="_blank" rel="noopener">
              Privacy Policy
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
~~~~

### FILE: src/components/lp/GoogleG.tsx
~~~~
export function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" width={size} height={size} className="lp-google-g">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}
~~~~

### FILE: src/components/lp/GoogleRatingBadge.tsx
~~~~
import { site } from "@/content/site";
import { GoogleG } from "./GoogleG";
import { Stars } from "./Stars";

export function GoogleRatingBadge({ dark, className = "" }: { dark?: boolean; className?: string }) {
  if (!site.rating.show) return null;
  const text = site.rating.reviewCountLabel
    ? `Rated on Google • ${site.rating.reviewCountLabel} reviews`
    : "5-Star Rated on Google";
  return (
    <div className={`lp-rating-badge${dark ? " lp-rating-badge--dark" : ""} ${className}`.trim()}>
      <span className="lp-g-circle">
        <GoogleG size={18} />
      </span>
      <Stars count={site.rating.stars} />
      <span className="lp-rb-score">{site.rating.score}</span>
      <span className="lp-rb-text">{text}</span>
    </div>
  );
}
~~~~

### FILE: src/components/lp/Header.tsx
~~~~
import { Link } from "@tanstack/react-router";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { EstimateLink } from "./Button";
import { CallLink } from "./CallLink";

const NAV = [
  { href: "#reviews", label: "Reviews" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "Our Family" },
  { href: "#faq", label: "FAQ" },
];

export function Header({ page = "landing" }: { page?: "landing" | "thank_you" }) {
  const logo = images.logo_light.src ? images.logo_light : images.logo;
  const hasLogo = !!logo.src;
  const navHref = (h: string) => (page === "landing" ? h : "/" + h);
  return (
    <header className="lp-header">
      <div className="lp-header-inner">
        <Link to="/" className={`lp-brand${hasLogo ? " lp-brand--withlogo" : ""}`} aria-label={`${site.business.name} home`}>
          {hasLogo ? <img className="lp-brand-logo" src={logo.src} alt={logo.alt} width={356} height={168} /> : null}
          <span className="lp-brand-text" aria-hidden={hasLogo ? true : undefined}>
            <span className="l1">{site.business.shortName}</span>
            <span className="l2">Serving {site.geo.defaultCity}</span>
          </span>
        </Link>
        <nav className="lp-nav" aria-label="Page sections">
          {NAV.map((n) => (
            <a key={n.href} href={navHref(n.href)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="lp-header-actions">
          <div className="lp-desktop-only">
            <EstimateLink variant="light" compact location="header" href={page === "landing" ? "#hero-form" : "/#hero-form"} />
            <CallLink location="header" variant="call" compact>
              Call Now
            </CallLink>
          </div>
          <CallLink location="header" variant="call" compact className="lp-mobile-only">
            Call Now
          </CallLink>
        </div>
      </div>
    </header>
  );
}
~~~~

### FILE: src/components/lp/Section.tsx
~~~~
import type { ReactNode } from "react";

export type Tone = "white" | "light" | "dark" | "brand" | "accent";

export function Section({
  id,
  tone,
  className = "",
  children,
  ...rest
}: { id?: string; tone: Tone; className?: string; children?: ReactNode } & Omit<React.HTMLAttributes<HTMLElement>, "id">) {
  return (
    <section id={id} className={`lp-section lp-tone-${tone} ${className}`.trim()} {...rest}>
      {children}
    </section>
  );
}

export function Container({ className = "", children }: { className?: string; children?: ReactNode }) {
  return <div className={`lp-container ${className}`.trim()}>{children}</div>;
}
~~~~

### FILE: src/components/lp/SectionHead.tsx
~~~~
import type { ReactNode } from "react";

export function SectionHead({
  label,
  title,
  lead,
  align = "center",
  as: As = "h2",
  id,
}: {
  label?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
  id?: string;
}) {
  return (
    <div className={`lp-head${align === "left" ? " lp-head--left" : ""}`}>
      {label ? <div className="lp-pill">{label}</div> : null}
      <As id={id}>{title}</As>
      {lead ? <p className="lp-lead">{lead}</p> : null}
    </div>
  );
}
~~~~

### FILE: src/components/lp/SlotImage.tsx
~~~~
import { ImageIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { images, type SlotKey } from "@/content/images";

const BACKGROUND_SLOTS: ReadonlySet<string> = new Set(["hero", "service_1", "service_2", "service_3", "service_4"]);

export function SlotImage({
  slot,
  ratio,
  className = "",
  priority,
  chipPosition,
  fill,
}: {
  slot: SlotKey;
  ratio?: string;
  className?: string;
  priority?: boolean;
  /** Background slots: where the small chip goes while empty. */
  chipPosition?: "bottom-right" | "top-right";
  /** Fill the parent instead of using an aspect ratio. */
  fill?: boolean;
}) {
  const data = images[slot];
  const style: CSSProperties = fill ? { height: "100%" } : ratio ? { aspectRatio: ratio } : {};
  const mobileKey = `${slot}_mobile` as SlotKey;
  const mobile = mobileKey in images ? images[mobileKey] : undefined;

  if (!data.src) {
    if (slot === "logo") return null;
    if (BACKGROUND_SLOTS.has(slot)) {
      return (
        <div className={`lp-slot lp-slot--empty ${className}`.trim()} style={style}>
          <span
            className="lp-slot-chip"
            aria-hidden="true"
            style={chipPosition === "top-right" ? { top: 16, right: 16 } : { bottom: 16, right: 16 }}
          >
            Photo: {data.label}
          </span>
        </div>
      );
    }
    return (
      <div className={`lp-slot lp-slot--empty ${className}`.trim()} style={style} aria-hidden="true">
        <ImageIcon width={28} height={28} />
        <span>Photo: {data.label}</span>
      </div>
    );
  }

  const imgEl = (
    <img
      src={data.src}
      alt={data.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );

  return (
    <div className={`lp-slot ${className}`.trim()} style={style}>
      {mobile && mobile.src ? (
        <picture>
          <source media="(max-width: 1023px)" srcSet={mobile.src} />
          {imgEl}
        </picture>
      ) : (
        imgEl
      )}
    </div>
  );
}
~~~~

### FILE: src/components/lp/Stars.tsx
~~~~
export function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 2.5l2.9 6.2 6.8.7-5.1 4.6 1.4 6.7L12 17.3l-5.9 3.4 1.4-6.7-5.1-4.6 6.8-.7z" />
    </svg>
  );
}

export function Stars({ count = 5, label }: { count?: number; label?: string }) {
  return (
    <span className="lp-stars" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} />
      ))}
    </span>
  );
}
~~~~

### FILE: src/components/lp/StickyCallBar.tsx
~~~~
import { useEffect, useState } from "react";
import { EstimateLink } from "./Button";
import { CallLink } from "./CallLink";

export function StickyCallBar() {
  const [formVisible, setFormVisible] = useState(false);
  const [fieldFocused, setFieldFocused] = useState(false);

  useEffect(() => {
    const targets = ["hero-form", "final-form"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setFormVisible(visible.size > 0);
      },
      // Any part of a form above the bar's strip counts as visible.
      { threshold: 0, rootMargin: "0px 0px -80px 0px" },
    );
    targets.forEach((t) => io.observe(t));

    const isField = (el: EventTarget | null) =>
      el instanceof HTMLElement && (el.tagName === "INPUT" || el.tagName === "SELECT" || el.tagName === "TEXTAREA");
    const onIn = (e: FocusEvent) => {
      if (isField(e.target)) setFieldFocused(true);
    };
    const onOut = () => {
      requestAnimationFrame(() => setFieldFocused(isField(document.activeElement)));
    };
    document.addEventListener("focusin", onIn);
    document.addEventListener("focusout", onOut);
    return () => {
      io.disconnect();
      document.removeEventListener("focusin", onIn);
      document.removeEventListener("focusout", onOut);
    };
  }, []);

  const hidden = formVisible || fieldFocused;
  return (
    <div className={`lp-sticky${hidden ? " lp-sticky--hidden" : ""}`} aria-hidden={hidden ? true : undefined}>
      <EstimateLink variant="light" location="sticky_bar" href="#final-form" label="Free Estimate" />
      <CallLink location="sticky_bar" variant="call">
        Call Now
      </CallLink>
    </div>
  );
}
~~~~

### FILE: src/components/sections/LandingA.tsx
~~~~
import { ArrowRight, BadgeCheck, Clock, Home, MessageSquare, Receipt, ShieldCheck } from "lucide-react";
import { EstimateForm } from "@/components/EstimateForm";
import { Checks } from "@/components/lp/Checks";
import { CityName } from "@/components/lp/CityName";
import { CtaPair, CtaRow } from "@/components/lp/CtaPair";
import { GoogleG } from "@/components/lp/GoogleG";
import { GoogleRatingBadge } from "@/components/lp/GoogleRatingBadge";
import { Container, Section } from "@/components/lp/Section";
import { SectionHead } from "@/components/lp/SectionHead";
import { SlotImage } from "@/components/lp/SlotImage";
import { StarIcon, Stars } from "@/components/lp/Stars";
import { hasImage, type SlotKey } from "@/content/images";
import { site } from "@/content/site";
import { trackCta } from "@/lib/analytics";
import { useEstimate } from "@/lib/estimate-store";
import { ReviewCard } from "./ReviewCard";

/* ---------- 2.1 Hero ---------- */
export function Hero() {
  const hasHero = hasImage("hero");
  return (
    <section id="hero" className="lp-section lp-tone-dark lp-hero">
      <div className={`lp-hero-media${hasHero ? "" : " lp-hero-media--empty"}`}>
        {hasHero ? <SlotImage slot="hero" fill priority /> : null}
      </div>
      <div className="lp-hero-overlay" aria-hidden="true" />
      <Container>
        <div className="lp-hero-grid">
          <div className="lp-hero-copy">
            <span className="lp-eyebrow">
              <span className="lp-eyebrow-dot" aria-hidden="true" />
              Family-Owned • 24/7 Emergency Service
            </span>
            <h1>
              Tree Removal in{" "}
              <span className="lp-h1-loc">
                <CityName />, {site.geo.state}
              </span>
            </h1>
            <p className="lp-hero-sub">
              Tree removal, land clearing and forestry mulching from a hands-on, five-person crew with specialized
              equipment. Free estimates on every job.
            </p>
            <Checks
              items={[
                "Free On-Site or Virtual Estimates",
                "Licensed, Bonded & Fully Insured",
                "No-Surprise Guarantee on Every Quote",
                "50 Years' Combined Team Experience",
              ]}
            />
            {site.rating.show ? <GoogleRatingBadge dark /> : null}
            <CtaPair
              location="hero"
              tone="hero"
              align="left"
              href="#hero-form"
              pulse
              className={site.rating.show ? "" : "lp-cta-pair--nochip"}
            />
          </div>
          <div id="hero-form" className="lp-hero-form">
            <EstimateForm placement="hero" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 2.2 Reviews ---------- */
export function Reviews() {
  return (
    <Section id="reviews" tone="light">
      <Container>
        <div className="lp-reviews-top">
          <span className="lp-g-circle">
            <GoogleG size={28} />
          </span>
        </div>
        <SectionHead
          label="Google Reviews"
          title={
            <>
              5-Star Google Reviews, Serving <CityName />
            </>
          }
        />
        {site.rating.show ? (
          <div className="lp-rating-summary">
            <span className="lp-rs-score">{site.rating.score}</span>
            <Stars count={site.rating.stars} label={`${site.rating.score} out of 5 stars`} />
            <span className="lp-rs-text">{site.rating.reviewCountLabel} reviews on Google</span>
          </div>
        ) : null}
        <div className="lp-review-grid">
          {site.reviews.featured.slice(0, 6).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <CtaRow location="reviews" tone="light" />
      </Container>
    </Section>
  );
}

/* ---------- 2.3 Stats ---------- */
export function Stats() {
  const stats = site.stats;
  if (!stats.length) return null;
  return (
    <Section id="stats" tone="brand" className="lp-stats" aria-label="At a glance">
      <Container>
        <div className={`lp-stats-grid${stats.length < 4 ? " lp-stats-grid--few" : ""}`}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className="lp-stat-value">
                {s.value}
                {s.icon === "star" ? <StarIcon /> : null}
              </div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- 2.4 Services ---------- */
const SERVICES: { title: string; text: string; option: string; slot: SlotKey; badge: string }[] = [
  {
    title: "Tree Removal",
    text: "Safe removal of dead, leaning and hazardous trees, even close to your house, with crane-assisted removal when the job calls for it.",
    option: "Tree Removal",
    slot: "service_1",
    badge: "Free Estimate",
  },
  {
    title: "Land & Lot Clearing",
    text: "Clear overgrown land, wooded lots and building sites with skid steers, excavators and dump trucks, then haul the debris away.",
    option: "Land & Lot Clearing",
    slot: "service_2",
    badge: "none",
  },
  {
    title: "24/7 Emergency Storm Cleanup",
    text: "Storm put a tree on your house, car or driveway? Call us day or night for emergency tree removal and storm cleanup.",
    option: "Tree Removal (emergency)",
    slot: "service_3",
    badge: "24/7",
  },
  {
    title: "Forestry Mulching",
    text: "We grind thick brush and small trees into mulch where they stand, to open up land, trails and views.",
    option: "Forestry Mulching",
    slot: "service_4",
    badge: "none",
  },
];

export function Services() {
  const { preselectService } = useEstimate();
  return (
    <Section id="services" tone="white">
      <Container>
        <SectionHead
          label="Our Services"
          title="Tree Removal and Land Services Across North Georgia"
          lead="From one leaning tree to acres of overgrown land, we bring the right equipment for the job. Every estimate is free, on-site or virtual."
        />
        <div className="lp-services-grid">
          {SERVICES.map((s) => {
            const emergency = s.option.endsWith(" (emergency)");
            const label = emergency ? s.option.slice(0, -" (emergency)".length) : s.option;
            return (
              <article className="lp-svc" key={s.title}>
                <div className="lp-svc-media">
                  {hasImage(s.slot) ? <SlotImage slot={s.slot} fill /> : null}
                </div>
                {s.badge !== "none" ? <span className="lp-svc-badge">{s.badge}</span> : null}
                <div className="lp-svc-body">
                  <h3 className="lp-svc-title">{s.title}</h3>
                  <p className="lp-svc-text">{s.text}</p>
                  <button
                    type="button"
                    className="lp-svc-link"
                    onClick={() => {
                      trackCta("Service: " + s.title, "services");
                      preselectService(label, emergency ? { emergency: true } : undefined);
                    }}
                  >
                    Get My Estimate
                    <ArrowRight aria-hidden="true" strokeWidth={2.5} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <p className="lp-svc-also">Also available: brush hogging, pesticide application and vista pruning.</p>
        <CtaRow location="services" tone="white" />
      </Container>
    </Section>
  );
}

/* ---------- 2.5 Why Us ---------- */
const BENEFITS = [
  { t: "No-Surprise Guarantee", d: "What we quote is what you pay. With flat-rate pricing, the price we agree on is the price you pay.", I: Receipt },
  { t: "Workmanship Guarantee", d: "We stand behind our work and guarantee you'll be satisfied with it.", I: ShieldCheck },
  { t: "Respectful of Your Property", d: "We clean up when the job is done, and we never touch anyone else's property while we work.", I: Home },
  { t: "Clear, Prompt Communication", d: "You'll know the plan, the price and the schedule before we start, and we call you back fast.", I: MessageSquare },
  { t: "Licensed, Bonded & Insured", d: "Fully insured with $2 million in coverage, for your peace of mind on every job.", I: BadgeCheck },
  { t: "24/7 Emergency Service", d: "Storm damage doesn't wait for business hours, and neither do we. Call day or night.", I: Clock },
];

export function WhyUs() {
  return (
    <Section id="why-us" tone="light">
      <Container>
        <SectionHead
          label="Why Choose Us"
          title="Why North Georgia Homeowners Call Explicit"
          lead="A hands-on owner, a careful crew and clear pricing. Here's what you can count on when we work on your property."
        />
        <div className="lp-card-grid">
          {BENEFITS.map(({ t, d, I }) => (
            <div className="lp-benefit" key={t}>
              <div className="lp-icon-tile">
                <I aria-hidden="true" />
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <CtaRow location="why-us" tone="light" />
      </Container>
    </Section>
  );
}
~~~~

### FILE: src/components/sections/LandingB.tsx
~~~~
import { Construction, HardHat, MapPin, Minus, Plus, Trees, Truck } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { EstimateForm } from "@/components/EstimateForm";
import { CallLink } from "@/components/lp/CallLink";
import { Checks } from "@/components/lp/Checks";
import { CityName } from "@/components/lp/CityName";
import { CtaPair, CtaRow } from "@/components/lp/CtaPair";
import { Container, Section } from "@/components/lp/Section";
import { SectionHead } from "@/components/lp/SectionHead";
import { SlotImage } from "@/components/lp/SlotImage";
import { hasImage, type SlotKey } from "@/content/images";
import { site } from "@/content/site";
import { trackCta } from "@/lib/analytics";

/** Renders {phone} as an inline CallLink and {city} as <CityName/>. */
function Tokens({ text, location }: { text: string; location: string }) {
  const parts = text.split(/(\{phone\}|\{city\})/g);
  return (
    <>
      {parts.map((p, i) =>
        p === "{phone}" ? (
          <CallLink key={i} location={location} />
        ) : p === "{city}" ? (
          <CityName key={i} />
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

/* ---------- 3.1 Difference ---------- */
const POINTS = [
  { t: "CMC Arbor Pro Lifts", d: "Lift access for high limbs and tight spots, where it's the safer choice.", I: Construction },
  { t: "Crane-Assisted Removal", d: "For big trees close to the house, sections come down under control.", I: HardHat },
  { t: "Chippers and Dump Trucks", d: "Brush is chipped and debris is hauled off, so your property is left clean.", I: Truck },
  { t: "Skid Steers and Excavators", d: "Heavy machines for land clearing, log handling and site work.", I: Trees },
];

export function Difference() {
  return (
    <Section id="difference" tone="dark">
      <Container>
        <SectionHead label="The Explicit Difference" title="The Right Equipment for Every Job" />
        <div className="lp-diff-main">
          <div className="lp-diff-text">
            <p>
              Tight backyards, steep North Georgia slopes and trees leaning over the house all need a different approach.
              Our fleet includes CMC Arbor Pro lifts, 21-inch chippers, skid steers, excavators, dump trailers and dump
              trucks.
            </p>
            <p>
              The right machine for the job means safer work around your house, driveway and landscaping. Tree work is
              dangerous, so our crew wears proper safety gear on every job, and we plan each removal around what's nearby.
            </p>
          </div>
          {hasImage("signature") ? (
            <div className="lp-diff-photo">
              <SlotImage slot="signature" ratio="4 / 3" />
              <span className="lp-photo-chip">Tree and land clearing equipment</span>
            </div>
          ) : null}
        </div>
        <div className="lp-points">
          {POINTS.map(({ t, d, I }) => (
            <div className="lp-point" key={t}>
              <div className="lp-icon-tile">
                <I aria-hidden="true" />
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        {/* Credential badges row: "none" for this client. */}
        <CtaRow location="difference" tone="dark" />
      </Container>
    </Section>
  );
}

/* ---------- 3.2 About ---------- */
const ABOUT_CARDS: { slot: SlotKey; t: string; d: string }[] = [
  { slot: "family", t: "Our Crew", d: "A five-person crew that takes pride in professional, safe work." },
  { slot: "about_work", t: "Cutting and Cleanup", d: "Downed trees cut into sections and cleared away." },
];

export function About() {
  const hasOwner = hasImage("owner");
  return (
    <Section id="about" tone="white">
      <Container>
        <SectionHead label="Meet the Family" title="Meet Tyler Wilkie and the Explicit Crew" />
        <div className="lp-about-main" style={hasOwner ? undefined : { gridTemplateColumns: "minmax(0, 1fr)" }}>
          {hasOwner ? (
            <div className="lp-about-photo">
              <SlotImage slot="owner" ratio="4 / 5" />
              <span className="lp-photo-chip">
                {site.business.owner.name}, {site.business.owner.role}
              </span>
            </div>
          ) : null}
          <div className="lp-about-text">
            <p>
              Tyler Wilkie grew up around machine operators and loggers. After tree work for a power company, he spent two
              years with a residential tree company before he left to start his own business, Explicit Land & Tree
              Services.
            </p>
            <p>
              Nine years later, Tyler is still hands-on, working alongside his locally owned, five-person crew. He takes
              pride in their professionalism, safety and honest advice, and he recommends only the work you need.
              Customers often mention clear communication and a clean job site.
            </p>
            <blockquote className="lp-pullquote">What we quote is what you pay.</blockquote>
            <Checks
              items={[
                "9 years in business and 1,500+ jobs completed",
                "Family-owned and locally owned",
                "Hands-on owner who works with the crew",
                "Proud sponsor of a Gilmer County high school baseball team",
              ]}
            />
            <p className="lp-signature">Tyler Wilkie, Owner</p>
          </div>
        </div>
        <div className="lp-about-cards">
          {ABOUT_CARDS.map((c) => (
            <div className="lp-photo-card" key={c.t}>
              {hasImage(c.slot) ? <SlotImage slot={c.slot} ratio="4 / 3" /> : null}
              <div className="lp-photo-card-body">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
        <CtaRow location="about" tone="white" />
      </Container>
    </Section>
  );
}

/* ---------- 3.3 Pricing ---------- */
export function Pricing() {
  const showOffers = site.offers.length > 0 || site.discounts.length > 0;
  return (
    <Section id="pricing" tone="light">
      <Container>
        <div className="lp-pricing-grid">
          <div className="lp-pricing-head">
            <SectionHead
              align="left"
              label="Pricing"
              title="Straightforward Pricing. No Surprises."
              lead="Every estimate is free, on-site or virtual. We look at the job, explain the work and give you a clear, flat-rate price before anything starts. What we quote is what you pay."
            />
          </div>
          <div className="lp-pricing-list">
            <h3>What's included</h3>
            <Checks
              items={[
                "Free on-site or virtual estimate",
                "Flat-rate price, agreed before work begins",
                "No-Surprise Guarantee: what we quote is what you pay",
                "Cleanup when the job is done",
                "Weekend appointments by request",
              ]}
            />
          </div>
          {showOffers ? (
            <div className="lp-offers">
              <span className="lp-offers-pill">New customer offers</span>
              {site.offers.map((o) => (
                <div className="lp-offer-tile" key={o.title}>
                  <div className="lp-offer-title">{o.title}</div>
                  <div className="lp-offer-text">{o.text}</div>
                </div>
              ))}
              {site.discounts.length ? (
                <div className="lp-offer-tile">
                  <div className="lp-offer-text">Discounts for military and first responders.</div>
                </div>
              ) : null}
              <p className="lp-offers-pay">We accept: {site.payments.join(", ")}</p>
            </div>
          ) : null}
          <div className="lp-pricing-cta">
            <CtaPair location="pricing" tone="light" align="left" href="#final-form" />
          </div>
        </div>
        <p className="lp-pricing-note">{site.services.freeNote}</p>
      </Container>
    </Section>
  );
}

/* ---------- 3.4 Gallery ---------- */
const GALLERY: { slot: SlotKey; t: string; s: string }[] = [
  { slot: "gallery_1", t: "Crane-Assisted Removal", s: "Lifting sections near a home" },
  { slot: "gallery_2", t: "Climbing Removal", s: "Taking a tree down in sections" },
  { slot: "gallery_3", t: "Lift-Assisted Removal", s: "Reaching a dead tree safely" },
  { slot: "gallery_4", t: "Storm Cleanup", s: "Emergency work after dark" },
  { slot: "gallery_5", t: "Log Removal", s: "Moving logs off the property" },
  { slot: "gallery_6", t: "Tree Felling", s: "Notching a large trunk" },
];

export function Gallery() {
  const tiles = GALLERY.filter((g) => hasImage(g.slot));
  if (tiles.length < 3) return null;
  return (
    <Section id="gallery" tone="white">
      <Container>
        <SectionHead
          label="Our Work"
          title="See Our Work"
          lead="Real photos from our crew: tree removal, storm cleanup and land clearing across North Georgia."
        />
        <div className="lp-gallery-grid">
          {tiles.map((g) => (
            <figure className="lp-gtile" key={g.slot}>
              <SlotImage slot={g.slot} ratio="4 / 3" />
              <figcaption>
                <span className="t">{g.t}</span>
                <span className="s">{g.s}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <CtaRow location="gallery" tone="white" />
      </Container>
    </Section>
  );
}

/* ---------- 3.5 Process ---------- */
export function Steps({ steps }: { steps: { t: string; d: string }[] }) {
  return (
    <ol className="lp-steps" style={{ ["--lp-step-count" as string]: steps.length, listStyle: "none", padding: 0, margin: 0 }}>
      {steps.map((s, i) => (
        <li className="lp-step" key={s.t}>
          <span className="lp-step-num" aria-hidden="true">
            {i + 1}
          </span>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function Process() {
  return (
    <Section id="process" tone="light">
      <Container>
        <SectionHead label="How It Works" title="A Simple, Four-Step Process" />
        <Steps
          steps={[
            { t: "Tell Us What You Need", d: "Call or send the form. Photos of the tree or land help us understand the job." },
            { t: "Free Estimate", d: "We look at the job on-site or virtually and explain what it takes." },
            {
              t: "Clear Price and Schedule",
              d: "You get a flat-rate price and a date before any work starts. Weekend appointments by request.",
            },
            { t: "We Do the Work", d: "Our crew does the job safely, then cleans up before we leave." },
          ]}
        />
        <CtaRow location="process" tone="light" />
      </Container>
    </Section>
  );
}

/* ---------- 3.6 Emergency ---------- */
export function Emergency() {
  return (
    <section id="emergency" className="lp-section lp-tone-accent lp-emergency">
      <Container>
        <h2 className="lp-em-title">Tree Down After a Storm? We're Available 24/7.</h2>
        <p>
          A tree on your house, car or driveway can't wait. Call us day or night for emergency tree removal and storm
          cleanup.
        </p>
        <CallLink location="emergency" variant="light">
          {"Call " + site.contact.phoneDisplay}
        </CallLink>
      </Container>
    </section>
  );
}

/* ---------- 3.7 Service area ---------- */
export function ServiceArea() {
  return (
    <Section id="service-area" tone="white">
      <Container>
        <SectionHead
          label="Service Area"
          title={
            <>
              Serving <CityName /> and the Surrounding Area
            </>
          }
          lead="Based in Ellijay, we serve homes, land and lots across these nine North Georgia counties."
        />
        <div className="lp-chips">
          {site.geo.cities.map((c) => (
            <a
              key={c.slug}
              className="lp-chip"
              href="#hero-form"
              title={`Tree service in ${c.name}, ${site.geo.state}`}
              onClick={() => trackCta("Area: " + c.name, "service-area")}
            >
              <MapPin aria-hidden="true" />
              {c.name}
            </a>
          ))}
        </div>
        <p className="lp-area-note">
          Not sure if we cover your area? Call <CallLink location="service-area" />.
        </p>
        <CtaRow location="service-area" tone="white" />
      </Container>
    </Section>
  );
}

/* ---------- 3.8 FAQ ---------- */
const FAQ: { q: string; a: string }[] = [
  {
    q: "Do you offer 24/7 emergency tree service?",
    a: "Yes. Storms don't keep business hours, so we offer 24/7 emergency service. If a tree has fallen on your house, car, driveway or fence, call {phone} day or night. Stay clear of the tree and any downed power lines, and tell us what you see. We'll help you with emergency tree removal and storm cleanup in {city} and across our service area.",
  },
  {
    q: "Are your estimates free?",
    a: "Yes. Estimates are free on all of our services, including tree removal, land and lot clearing, forestry mulching and storm cleanup. We can do your estimate on-site, or virtually from photos and a call. You get a clear, flat-rate price before any work starts, and our No-Surprise Guarantee means what we quote is what you pay.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Explicit Land & Tree Services is licensed, bonded and fully insured, with $2 million in insurance coverage. Tree work is dangerous, so insurance matters: it protects you and your property while we work. Our crew also wears proper safety gear on every job. Ask us for proof of insurance during your free estimate.",
  },
  {
    q: "Can you safely remove a tree that's close to my house?",
    a: "Yes. Trees leaning over a roof, deck or driveway are some of our most common jobs. We plan each removal around what's nearby and use the right equipment for the space, such as CMC Arbor Pro lifts for high limbs and crane-assisted removal for big trees near the house. Sections come down under control instead of falling where they want.",
  },
  {
    q: "Should I save my tree or remove it?",
    a: "It depends on the tree. Dead trees, trees leaning toward your house, and trees with large cracks, hollow trunks or rot at the base are often safer to remove. A tree that looks healthy may only need a closer look. During your free estimate we'll give you honest advice and recommend only the work you actually need.",
  },
  {
    q: "Do you clear land and building lots?",
    a: "Yes. We clear overgrown land, wooded lots and building sites with skid steers, excavators, chippers, dump trailers and dump trucks. We can take trees down, clear brush, use forestry mulching or brush hogging where it fits, and haul the debris away. Tell us your plans for the land, and we'll recommend the right approach for your lot.",
  },
  {
    q: "What is forestry mulching?",
    a: "Forestry mulching uses a machine with a grinding head to turn brush, undergrowth and small trees into mulch right where they stand. It clears land without piling and hauling every branch, and the mulch layer helps cover the ground. It works well for opening up overgrown lots, trails, fence lines and views. We'll tell you during your estimate if it fits your property.",
  },
  {
    q: "What payment methods do you accept, and do you offer discounts?",
    a: "We accept cash, debit, check, Visa, Mastercard, PayPal and Venmo. We offer discounts for military and first responders, and new customers can save 5% on any service over $1,000 or $100 on same-day hire or service. Ask about the discount that applies to you when you call {phone} or request your free estimate.",
  },
  {
    q: "What areas do you serve?",
    a: "We're a local, family-owned company serving nine North Georgia counties: Gilmer, Fannin, Gordon, Pickens, Cherokee, Dawson, Bartow, Lumpkin and Union. We cover many communities in each, but not always every road in every county. Not sure if we cover your property? Call {phone} with your address and we'll let you know right away.",
  },
];

function FaqItem({ q, a, open }: { q: string; a: string; open: boolean }) {
  return (
    <details open={open || undefined}>
      <summary>
        <span>{q}</span>
        <span className="lp-faq-icon" aria-hidden="true">
          <Plus className="plus" strokeWidth={2.5} />
          <Minus className="minus" strokeWidth={2.5} />
        </span>
      </summary>
      <p className="lp-faq-a">
        <Tokens text={a} location="faq" />
      </p>
    </details>
  );
}

export function Faq() {
  const half = Math.ceil(FAQ.length / 2);
  const cols = [FAQ.slice(0, half), FAQ.slice(half)];
  return (
    <Section id="faq" tone="light">
      <Container>
        <SectionHead label="FAQ" title="Common Questions" />
        <div className="lp-faq">
          {cols.map((col, ci) => (
            <div className="lp-faq-col" key={ci}>
              {col.map((item, i) => (
                <FaqItem key={item.q} q={item.q} a={item.a} open={ci === 0 && i === 0} />
              ))}
            </div>
          ))}
        </div>
        <p className="lp-faq-more">
          Still have a question? Call <CallLink location="faq" />
        </p>
        <CtaRow location="faq" tone="light" />
      </Container>
    </Section>
  );
}

/* ---------- 3.9 Final CTA ---------- */
export function FinalCta(): ReactNode {
  return (
    <Section id="estimate" tone="brand">
      <Container>
        <div className="lp-final-grid">
          <div className="lp-final-copy">
            <SectionHead
              align="left"
              label="Ready When You Are"
              title={
                <>
                  Get Your Free Tree Estimate in <CityName />
                </>
              }
              lead="Tell us about your trees or land. We'll call you back fast with next steps and set up your free on-site or virtual estimate."
            />
            <Checks variant="white" items={["No-Surprise Guarantee", "Licensed, Bonded & Fully Insured", "Family-Owned & Locally Owned"]} />
            <CtaPair location="estimate" tone="brand" align="left" href="#final-form" />
            <p className="lp-final-small">Prefer to talk? We answer 24/7.</p>
          </div>
          <div id="final-form" className="lp-final-form">
            <EstimateForm placement="final" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
~~~~

### FILE: src/components/sections/ReviewCard.tsx
~~~~
import { GoogleG } from "@/components/lp/GoogleG";
import { Stars } from "@/components/lp/Stars";

export type Review = { readonly name: string; readonly source: string; readonly rating: number; readonly text: string };

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="lp-review">
      <div className="lp-review-top">
        <Stars count={review.rating} label={`${review.rating} out of 5 stars`} />
        <GoogleG size={20} />
      </div>
      <blockquote>{"“" + review.text + "”"}</blockquote>
      <div>
        <div className="lp-review-name">{review.name}</div>
        <div className="lp-review-src">Google review</div>
      </div>
    </article>
  );
}
~~~~

### FILE: src/content/images.ts
~~~~
// Image slots. src is a public URL; "" means the slot is empty.
export type ImageSlot = { src: string; alt: string; label: string };

const img = (file: string) => "/images/" + encodeURIComponent(file).replace(/%2F/g, "/");

export const images = {
  logo: {
    src: img("ET-LOGO-1__logo.webp"),
    alt: "Explicit Land & Tree Service logo with a tree and an orange skid steer",
    label: "Explicit Land & Tree Service logo (red and orange, for light backgrounds)",
  },
  logo_light: {
    src: img("Logo-pdf__logo-light.webp"),
    alt: "Explicit Land & Tree Service logo",
    label: "Explicit Land & Tree Service logo, white version for the dark header and footer",
  },
  hero: {
    src: img("IMG_4086__hero.webp"),
    alt: "Red spider lift raising a worker in its bucket into the trees beside a house",
    label: "crew at work with a lift beside a home",
  },
  hero_mobile: {
    src: img("IMG_4086__hero-mobile.webp"),
    alt: "Red spider lift raising a worker in its bucket into the trees beside a house",
    label: "the same hero scene, cropped tall for phones",
  },
  owner: {
    src: img("sadf-copy__owner.webp"),
    alt: "Tyler Wilkie in a safety helmet and company T-shirt",
    label: "Tyler Wilkie, owner",
  },
  family: { src: "", alt: "", label: "the Explicit crew" },
  signature: {
    src: img("89__signature.webp"),
    alt: "Work trucks, dump trailer, tracked loader and excavator parked on a lawn by the woods",
    label: "our equipment fleet",
  },
  about_work: {
    src: img("43__about-work.webp"),
    alt: "Two crew members in helmets cutting a large downed tree trunk into sections",
    label: "crew cutting downed trees",
  },
  service_1: {
    src: img("IMG_4126__service-1.webp"),
    alt: "Crew member in a helmet and ear protection cutting a notch into a large tree with a chainsaw",
    label: "tree removal",
  },
  service_2: {
    src: img("55__service-2.webp"),
    alt: "Tracked loader on freshly cleared ground behind a house",
    label: "land and lot clearing",
  },
  service_3: {
    src: img("49__service-3.webp"),
    alt: "Uprooted pine tree fallen against a brick house and fence",
    label: "storm damage, tree down on a property",
  },
  service_4: {
    src: img("106__service-4.webp"),
    alt: "Tracked loader with a forestry mulching head clearing undergrowth between pines",
    label: "forestry mulching",
  },
  gallery_1: { src: img("IMG_4207__gallery-1.webp"), alt: "Crane boom reaching over a house toward the trees", label: "crane-assisted removal" },
  gallery_2: { src: img("53__gallery-2.webp"), alt: "Climber high on a tree trunk as a cut section falls", label: "climbing removal" },
  gallery_3: { src: img("42__gallery-3.webp"), alt: "Worker in a lift bucket next to a dead tree", label: "lift-assisted removal" },
  gallery_4: {
    src: img("IMG_7196__gallery-4.webp"),
    alt: "Excavator and crane hook at a brick house at night, lit by work lights",
    label: "storm cleanup at night",
  },
  gallery_5: { src: img("41__gallery-5.webp"), alt: "Tracked loader with a grapple carrying logs on a driveway", label: "log removal" },
  gallery_6: {
    src: img("113__gallery-6.webp"),
    alt: "Crew member in a helmet cutting a large tree trunk with a chainsaw",
    label: "tree felling",
  },
  badge_1: { src: "", alt: "", label: "(unused)" },
  badge_2: { src: "", alt: "", label: "(unused)" },
  badge_3: { src: "", alt: "", label: "(unused)" },
} satisfies Record<string, ImageSlot>;

export type SlotKey = keyof typeof images;

export function hasImage(slot: SlotKey): boolean {
  return !!images[slot].src;
}
~~~~

### FILE: src/content/site.ts
~~~~
// Client data for the Explicit Land & Tree Services funnel. Every client fact lives here.
export const site = {
  "business": {
    "name": "Explicit Land & Tree Services",
    "legalName": "Explicit Land & Tree Services LLC",
    "shortName": "Explicit Land & Tree",
    "description": "Family-owned tree removal, land clearing and 24/7 emergency storm cleanup across North Georgia. Licensed, bonded and insured, with free estimates.",
    "establishedYear": 2017,
    "yearsInBusiness": 9,
    "hq": {
      "street": "",
      "city": "Ellijay",
      "state": "GA",
      "zip": "30536",
      "showStreet": false
    },
    "hoursLabel": "Open 24/7",
    "timeZone": "America/New_York",
    "owner": {
      "name": "Tyler Wilkie",
      "role": "Owner",
      "credential": "",
      "credentialId": ""
    },
    "people": [],
    "website": "https://explicitlandandtreeservice.com/"
  },
  "contact": {
    "phoneDisplay": "(706) 406-6834",
    "phoneE164": "+17064066834"
  },
  "rating": {
    "show": true,
    "score": "5.0",
    "stars": 5,
    "reviewCountLabel": "80+",
    "platform": "Google",
    "profileUrl": "https://www.google.com/maps/place/?q=place_id:ChIJf4y0Gte_X4gRaL3UDRHIiwI",
    "reviewsUrl": "https://search.google.com/local/reviews?placeid=ChIJf4y0Gte_X4gRaL3UDRHIiwI"
  },
  "geo": {
    "state": "GA",
    "stateName": "Georgia",
    "hqCity": "Ellijay",
    "defaultCity": "Gilmer County",
    "defaultSlug": "gilmer-county",
    "cities": [
      {
        "name": "Gilmer County",
        "slug": "gilmer-county",
        "zips": [
          "30536"
        ]
      },
      {
        "name": "Fannin County",
        "slug": "fannin-county",
        "zips": []
      },
      {
        "name": "Gordon County",
        "slug": "gordon-county",
        "zips": []
      },
      {
        "name": "Pickens County",
        "slug": "pickens-county",
        "zips": []
      },
      {
        "name": "Cherokee County",
        "slug": "cherokee-county",
        "zips": []
      },
      {
        "name": "Dawson County",
        "slug": "dawson-county",
        "zips": []
      },
      {
        "name": "Bartow County",
        "slug": "bartow-county",
        "zips": []
      },
      {
        "name": "Lumpkin County",
        "slug": "lumpkin-county",
        "zips": []
      },
      {
        "name": "Union County",
        "slug": "union-county",
        "zips": []
      }
    ],
    "counties": [
      "Gilmer",
      "Fannin",
      "Gordon",
      "Pickens",
      "Cherokee",
      "Dawson",
      "Bartow",
      "Lumpkin",
      "Union"
    ],
    "areaPhrase": "Gilmer, Fannin, Gordon & Pickens counties"
  },
  "credentials": [
    {
      "label": "Licensed, Bonded & Insured",
      "detail": "$2 million insurance coverage"
    },
    {
      "label": "Blue Card certified",
      "detail": "Georgia"
    },
    {
      "label": "A+ BBB rating",
      "detail": ""
    }
  ],
  "ownership": [
    "Family-Owned & Operated",
    "Locally Owned & Operated"
  ],
  "stats": [
    {
      "value": "9+",
      "label": "Years in Business",
      "icon": ""
    },
    {
      "value": "50 Yrs",
      "label": "Combined Team Experience",
      "icon": ""
    },
    {
      "value": "5.0",
      "label": "Google Rating",
      "icon": "star"
    },
    {
      "value": "24/7",
      "label": "Emergency Service",
      "icon": ""
    }
  ],
  "services": {
    "groupLabels": {
      "free": "Tree and land work (free estimate)",
      "paid": "",
      "other": "Other"
    },
    "formOptions": [
      {
        "label": "Tree Removal",
        "group": "free"
      },
      {
        "label": "Land & Lot Clearing",
        "group": "free"
      },
      {
        "label": "Forestry Mulching",
        "group": "free"
      },
      {
        "label": "Brush Hogging",
        "group": "free"
      },
      {
        "label": "Pesticide Application",
        "group": "free"
      },
      {
        "label": "Vista Pruning",
        "group": "free"
      },
      {
        "label": "Other",
        "group": "other"
      }
    ],
    "freeNote": "Free estimates on all of our services, on-site or virtual.",
    "paidNote": ""
  },
  "offers": [
    {
      "title": "5% Off",
      "text": "On any service over $1,000, for new customers."
    },
    {
      "title": "$100 Off",
      "text": "On same-day hire or service, for new customers."
    }
  ],
  "discounts": [
    "Military",
    "First responders"
  ],
  "payments": [
    "Cash",
    "Debit",
    "Check",
    "Visa",
    "Mastercard",
    "PayPal",
    "Venmo"
  ],
  "reviews": {
    "featured": [
      {
        "name": "Norah K.",
        "source": "Google",
        "rating": 5,
        "text": "… Tyler came out the night of the storm, assessed the situation, and returned the next day with his team to carefully remove the tree without doing any additional damage to our home. …"
      },
      {
        "name": "Carol D.",
        "source": "Google",
        "rating": 5,
        "text": "Tyler and his crew did an incredible job taking down 11 dead or diseased trees, most were around 75’ to 100’ tall. They had the top equipment to get it done safely and protect all our other surrounding trees. It was a great price. …"
      },
      {
        "name": "Michael N.",
        "source": "Google",
        "rating": 5,
        "text": "Tyler and his team were hired for clearing 3-4 acres of dense forest into pastureland. … Tyler communicated really well, was on time, and over-delivered on my expectations. …"
      },
      {
        "name": "Becky J.",
        "source": "Google",
        "rating": 5,
        "text": "Tyler and his team did an amazing job removing a huge oak tree next to our house in the fenced-in part of our yard with no issues at all. … They were very professional, and the clean up was great! …"
      },
      {
        "name": "Kelley W.",
        "source": "Google",
        "rating": 5,
        "text": "Tyler is awesome! He responded immediately to my text. He had someone out on my property the same day to cut up the trees that had fallen on my fenceline. His prices are fair. …"
      },
      {
        "name": "Troy V.",
        "source": "Google",
        "rating": 5,
        "text": "Great experience with Tyler and his crew. Very professional and hard working. Dropped a problem tree sitting between two sets of power lines with no incidents. Cleaned up and repaired all damage to the yard. …"
      }
    ],
    "thankYou": [
      {
        "name": "Daniel J.",
        "source": "Google",
        "rating": 5,
        "text": "A bad storm came through. Tore down lots of trees!! … His crew was there the next day, had it all cleaned up and hauled off before I could get off work. Great prices and wow, fast response and work!! …"
      },
      {
        "name": "Ray H.",
        "source": "Google",
        "rating": 5,
        "text": "Explicit Land and Tree Service just cut down 9 dead Cypress trees along our driveway. They did an excellent job and cleaned up like they were never there. I highly recommend them for any Tree Service you might need."
      },
      {
        "name": "Rich C.",
        "source": "Google",
        "rating": 5,
        "text": "… Tyler was prompt, professional, and very responsive. … They worked safely, had the right equipment for the job, and took great care of our property. Everything was completed exactly as requested, and they left the area clean when they finished. …"
      }
    ]
  },
  "form": {
    "formId": "estimate-form",
    "formName": "Explicit Land & Tree - LP Estimate Request",
    "badge": "Free On-Site or Virtual Estimate",
    "badgePaid": "",
    "title": "Get Your Free Estimate",
    "subtitle": "Takes 30 seconds. We'll call you back fast.",
    "submitLabelFree": "Get My Free Estimate",
    "submitLabelPaid": "Request My Appointment",
    "consentText": "By submitting this form, you agree that Explicit Land & Tree Services may call and send text messages (SMS) to the phone number provided about your estimate request and our services, including by automated means. Consent is not a condition of purchase. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Your mobile number and SMS consent will not be shared with or sold to third parties for marketing purposes.",
    "emergencyHint": "Emergency? Calling is fastest:"
  },
  "tracking": {
    "gtmId": ""
  },
  "legal": {
    "privacyUrl": "",
    "termsUrl": ""
  },
  "meta": {
    "title": "Tree Service in Gilmer County, GA | Explicit Land & Tree Services",
    "description": "Tree removal, land clearing and 24/7 emergency storm cleanup in North Georgia. Family-owned, licensed, bonded & insured. Free on-site or virtual estimates.",
    "url": ""
  }
} as const;

export type Site = typeof site;
~~~~

### FILE: src/lib/analytics.ts
~~~~
import { site } from "@/content/site";

type DLEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DLEvent[];
  }
}

export function pushDL(obj: DLEvent): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
}

export function trackPhoneClick(location: string): void {
  pushDL({ event: "phone_click", click_location: location, phone_number: site.contact.phoneE164 });
}

export function trackCta(label: string, location: string): void {
  pushDL({ event: "cta_click", cta_label: label, cta_location: location });
}

/** Removes keys with empty values (recursively for plain objects). */
export function compact<T extends DLEvent>(obj: T): T {
  const out: DLEvent = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === "") continue;
    if (typeof v === "object" && !Array.isArray(v)) {
      const inner = compact(v as DLEvent);
      if (Object.keys(inner).length === 0) continue;
      out[k] = inner;
    } else out[k] = v;
  }
  return out as T;
}
~~~~

### FILE: src/lib/attribution.ts
~~~~
const KEY = "lp_attr";
const PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"] as const;

type Stored = Partial<Record<(typeof PARAMS)[number] | "landing_page" | "referrer" | "fbclid_ts", string>>;

export type Attribution = Stored & {
  fbp?: string;
  fbc?: string;
  device_type: "mobile" | "tablet" | "desktop";
  os: "iOS" | "Android" | "Windows" | "macOS" | "Linux" | "Other";
  visitor_timezone?: string;
};

function read(): Stored {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Stored) : {};
  } catch {
    return {};
  }
}

function write(v: Stored) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(v));
  } catch {
    /* storage blocked */
  }
}

/** Call once from a useEffect in __root. First touch wins. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  const stored = read();
  const params = new URLSearchParams(window.location.search);
  let changed = false;
  for (const p of PARAMS) {
    const v = params.get(p);
    if (v && !stored[p]) {
      stored[p] = v;
      changed = true;
      if (p === "fbclid" && !stored.fbclid_ts) stored.fbclid_ts = String(Date.now());
    }
  }
  if (!stored.landing_page) {
    stored.landing_page = window.location.href.split("#")[0];
    changed = true;
  }
  if (stored.referrer === undefined) {
    stored.referrer = document.referrer || "";
    changed = true;
  }
  if (changed) write(stored);
}

function cookie(name: string): string | undefined {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : undefined;
}

function deviceType(): Attribution["device_type"] {
  const ua = navigator.userAgent;
  const isIpadOs = /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
  if (isIpadOs || /iPad|Tablet|PlayBook|Silk/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return "tablet";
  if (/Mobi|iPhone|iPod|Android/i.test(ua)) return "mobile";
  return "desktop";
}

function osName(): Attribution["os"] {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return "iOS";
  if (/Android/.test(ua)) return "Android";
  if (/Windows/.test(ua)) return "Windows";
  if (/Mac OS X|Macintosh/.test(ua)) return "macOS";
  if (/Linux|CrOS/.test(ua)) return "Linux";
  return "Other";
}

export function getAttribution(): Attribution {
  const s = read();
  const fbp = cookie("_fbp");
  let fbc = cookie("_fbc");
  if (!fbc && s.fbclid) fbc = `fb.1.${s.fbclid_ts || Date.now()}.${s.fbclid}`;
  let tz: string | undefined;
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    tz = undefined;
  }
  return { ...s, fbp, fbc, device_type: deviceType(), os: osName(), visitor_timezone: tz };
}
~~~~

### FILE: src/lib/crm-fields.ts
~~~~
// CRM custom field ids for the estimate form (Step 7).
// Every id is "" because the CRM connection ("Connect forms to my CRM") has not been run for this project yet.
// After registering the fields in the CRM, paste each field id here. submitLead() skips keys whose id is "".
export const CRM_FIELDS = {
  service_needed: "",
  storm_emergency: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  fbp: "",
  fbc: "",
  event_id: "",
  landing_page: "",
  referrer: "",
  device_type: "",
  os: "",
  google_click_id: "",
  visitor_timezone: "",
} as const;

export type CrmFieldKey = keyof typeof CRM_FIELDS;
~~~~

### FILE: src/lib/crm-tracking.ts
~~~~
// PLACEHOLDER for the CRM tracking helper.
// In AI Studio, "Connect forms to my CRM" generates this file with its own trackingId, locationId and projectId.
// That connection has NOT been run for this project, so this helper sends nothing.
// Replace this file with the generated helper (keep the function name, or update the one call in submit-lead.ts).

export type CrmSubmission = {
  formId: string;
  formName: string;
  formData: Record<string, string>;
  customFields: Record<string, string>;
};

export const CRM_CONNECTED = false;

export async function trackCrmFormSubmission(_submission: CrmSubmission): Promise<void> {
  // No CRM connection yet: intentionally a no-op.
  void _submission;
}
~~~~

### FILE: src/lib/estimate-store.ts
~~~~
import { createContext, createElement, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";

export type EstimateTarget = "hero" | "final";

type Request = { label: string; emergency: boolean; target: EstimateTarget; nonce: number };

type Ctx = {
  selectedService: string;
  emergency: boolean;
  request: Request | null;
  preselectService: (label: string, options?: { emergency?: boolean }) => void;
};

const EstimateContext = createContext<Ctx | null>(null);

export function EstimateProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<Request | null>(null);
  const nonce = useRef(0);

  const preselectService = useCallback((label: string, options?: { emergency?: boolean }) => {
    const emergency = !!options?.emergency;
    // Top half of the page → hero form, otherwise the final form.
    const half = document.documentElement.scrollHeight / 2;
    const target: EstimateTarget = window.scrollY + window.innerHeight / 2 < half ? "hero" : "final";
    nonce.current += 1;
    setRequest({ label, emergency, target, nonce: nonce.current });
    const el = document.getElementById(target === "hero" ? "hero-form" : "final-form");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      selectedService: request?.label ?? "",
      emergency: request?.emergency ?? false,
      request,
      preselectService,
    }),
    [request, preselectService],
  );

  return createElement(EstimateContext.Provider, { value }, children);
}

export function useEstimate(): Ctx {
  const ctx = useContext(EstimateContext);
  if (ctx) return ctx;
  return { selectedService: "", emergency: false, request: null, preselectService: () => {} };
}
~~~~

### FILE: src/lib/format.ts
~~~~
import { site } from "@/content/site";

export type City = (typeof site.geo.cities)[number];

export function telHref(): string {
  return "tel:" + site.contact.phoneE164;
}

function norm(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\s\-_+]+/g, " ")
    .trim();
}

/** Matches a slug or name against the approved cities (case-insensitive; space, -, _ and + are equivalent). */
export function cityBySlugOrName(value: string | undefined | null): City | undefined {
  if (!value || typeof value !== "string") return undefined;
  const v = norm(value);
  if (!v) return undefined;
  return site.geo.cities.find((c) => norm(c.slug) === v || norm(c.name) === v);
}

/** Keeps only digits, max 10 (drops a leading US "1" from 11 digits). */
export function phoneDigits(value: string): string {
  let d = value.replace(/\D/g, "");
  if (d.length >= 11 && d.startsWith("1")) d = d.slice(1);
  return d.slice(0, 10);
}

/** Progressive US mask: (267 → (267) 223 → (267) 223-0222 */
export function formatPhone(value: string): string {
  const d = phoneDigits(value);
  if (d.length === 0) return "";
  if (d.length <= 3) return "(" + d;
  if (d.length <= 6) return "(" + d.slice(0, 3) + ") " + d.slice(3);
  return "(" + d.slice(0, 3) + ") " + d.slice(3, 6) + "-" + d.slice(6);
}

export function isValidUsPhone(value: string): boolean {
  const d = phoneDigits(value);
  if (d.length !== 10) return false;
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(d)) return false;
  if (/^(\d)\1{9}$/.test(d)) return false;
  return true;
}
~~~~

### FILE: src/lib/geo-context.tsx
~~~~
import { createContext, useContext, useEffect, type ReactNode } from "react";
import { DEFAULT_GEO, type GeoResult } from "@/lib/geo-shared";

const GeoContext = createContext<GeoResult>(DEFAULT_GEO);

export const GEO_STORAGE_KEY = "lp_geo";

export function readStoredGeo(): GeoResult | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = sessionStorage.getItem(GEO_STORAGE_KEY);
    if (!raw) return undefined;
    const g = JSON.parse(raw) as GeoResult;
    return g && typeof g.city === "string" && typeof g.slug === "string" ? g : undefined;
  } catch {
    return undefined;
  }
}

/** Shared current geo for the analytics page_view push. */
export const currentGeo: { value: GeoResult } = { value: DEFAULT_GEO };

export function GeoProvider({ value, children }: { value: GeoResult; children: ReactNode }) {
  currentGeo.value = value;
  useEffect(() => {
    currentGeo.value = value;
    try {
      sessionStorage.setItem(GEO_STORAGE_KEY, JSON.stringify(value));
    } catch {
      /* storage blocked */
    }
  }, [value]);
  return <GeoContext.Provider value={value}>{children}</GeoContext.Provider>;
}

export function useGeo(): GeoResult {
  return useContext(GeoContext);
}
~~~~

### FILE: src/lib/geo-shared.ts
~~~~
import { site } from "@/content/site";

export type GeoSource = "url" | "edge" | "lookup" | "default";
export type GeoResult = { city: string; slug: string; source: GeoSource };

export const DEFAULT_GEO: GeoResult = {
  city: site.geo.defaultCity,
  slug: site.geo.defaultSlug,
  source: "default",
};
~~~~

### FILE: src/lib/geo.ts
~~~~
import { createServerFn } from "@tanstack/react-start";
import { getRequest, getRequestHeader, setResponseHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { site } from "@/content/site";
import { cityBySlugOrName, type City } from "@/lib/format";

import { DEFAULT_GEO, type GeoResult, type GeoSource } from "@/lib/geo-shared";

export { DEFAULT_GEO };
export type { GeoResult, GeoSource };

type RawGeo = { city?: string; postal?: string; region?: string; country?: string };

function matchRaw(raw: RawGeo): City | undefined {
  const postal = (raw.postal || "").trim().slice(0, 5);
  if (postal) {
    const byZip = site.geo.cities.find((c) => (c.zips as readonly string[]).includes(postal));
    if (byZip) return byZip;
  }
  const region = (raw.region || "").toUpperCase();
  const country = (raw.country || "").toUpperCase();
  if (raw.city && region === site.geo.state && country === "US") {
    const name = raw.city.trim().toLowerCase();
    return site.geo.cities.find((c) => c.name.toLowerCase() === name);
  }
  return undefined;
}

function safeDecode(v: string | undefined): string | undefined {
  if (!v) return undefined;
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

function readEdge(): { raw: RawGeo; hasAny: boolean } {
  let cf: Record<string, unknown> | undefined;
  try {
    cf = (getRequest() as unknown as { cf?: Record<string, unknown> }).cf;
  } catch {
    cf = undefined;
  }
  if (cf && (cf.city || cf.postalCode)) {
    return {
      raw: {
        city: cf.city as string | undefined,
        postal: cf.postalCode as string | undefined,
        region: cf.regionCode as string | undefined,
        country: cf.country as string | undefined,
      },
      hasAny: true,
    };
  }
  const raw: RawGeo = {
    city: safeDecode(getRequestHeader("cf-ipcity")),
    postal: getRequestHeader("cf-postal-code"),
    region: getRequestHeader("cf-region-code"),
    country: getRequestHeader("cf-ipcountry"),
  };
  return { raw, hasAny: !!(raw.city || raw.postal) };
}

async function lookupMaxMind(): Promise<RawGeo | undefined> {
  const account = process.env.MAXMIND_ACCOUNT_ID;
  const key = process.env.MAXMIND_LICENSE_KEY;
  if (!account || !key) return undefined;
  const ip =
    getRequestHeader("cf-connecting-ip") || (getRequestHeader("x-forwarded-for") || "").split(",")[0].trim();
  if (!ip) return undefined;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 800);
  try {
    const res = await fetch(`https://geolite.info/geoip/v2.1/city/${encodeURIComponent(ip)}`, {
      headers: { Authorization: "Basic " + btoa(`${account}:${key}`), Accept: "application/json" },
      signal: ctrl.signal,
    });
    if (!res.ok) return undefined;
    const j = (await res.json()) as {
      city?: { names?: { en?: string } };
      postal?: { code?: string };
      subdivisions?: Array<{ iso_code?: string }>;
      country?: { iso_code?: string };
    };
    return {
      city: j.city?.names?.en,
      postal: j.postal?.code,
      region: j.subdivisions?.[0]?.iso_code,
      country: j.country?.iso_code,
    };
  } catch {
    return undefined;
  } finally {
    clearTimeout(timer);
  }
}

function toResult(c: City, source: GeoSource): GeoResult {
  return { city: c.name, slug: c.slug, source };
}

export const resolveGeo = createServerFn({ method: "GET" })
  .validator(z.object({ cityParam: z.string().max(100).optional() }))
  .handler(async ({ data }): Promise<GeoResult> => {
    // Personalized HTML must never be cached publicly.
    try {
      setResponseHeader("Cache-Control", "private, no-store");
    } catch {
      /* not in a response context */
    }

    const fromUrl = cityBySlugOrName(data.cityParam);
    if (fromUrl) return toResult(fromUrl, "url");

    const edge = readEdge();
    if (edge.hasAny) {
      const m = matchRaw(edge.raw);
      if (m) return toResult(m, "edge");
      return DEFAULT_GEO;
    }

    const looked = await lookupMaxMind();
    if (looked) {
      const m = matchRaw(looked);
      if (m) return toResult(m, "lookup");
    }
    return DEFAULT_GEO;
  });
~~~~

### FILE: src/lib/meta-capi.ts
~~~~
import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";

const GRAPH_VERSION = "v24.0";

const LeadInput = z.object({
  event_id: z.string().min(1).max(100),
  event_source_url: z.string().max(2000),
  first_name: z.string().max(100).optional(),
  last_name: z.string().max(100).optional(),
  phone_e164: z.string().max(20).optional(),
  postal_code: z.string().max(10).optional(),
  fbp: z.string().max(300).optional(),
  fbc: z.string().max(500).optional(),
  service_needed: z.string().max(100).optional(),
  lead_type: z.string().max(50).optional(),
});

export type ServerLeadPayload = z.infer<typeof LeadInput>;

async function sha256(value: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hashed(value: string | undefined): Promise<string[] | undefined> {
  if (!value) return undefined;
  return [await sha256(value)];
}

export const trackLeadServer = createServerFn({ method: "POST" })
  .validator(LeadInput)
  .handler(async ({ data }): Promise<{ ok: boolean; skipped?: boolean }> => {
    const pixelId = process.env.META_PIXEL_ID;
    const token = process.env.META_CAPI_TOKEN;
    if (!pixelId || !token) return { ok: false, skipped: true };

    const ph = (data.phone_e164 || "").replace(/\D/g, "");
    const fn = (data.first_name || "").trim().toLowerCase();
    const ln = (data.last_name || "").trim().toLowerCase();
    const zp = (data.postal_code || "").replace(/\D/g, "").slice(0, 5);

    const user_data: Record<string, unknown> = {
      ph: await hashed(ph),
      fn: await hashed(fn),
      ln: await hashed(ln),
      zp: await hashed(zp.length === 5 ? zp : ""),
      country: await hashed("us"),
      fbp: data.fbp || undefined,
      fbc: data.fbc || undefined,
      client_ip_address:
        getRequestHeader("cf-connecting-ip") ||
        (getRequestHeader("x-forwarded-for") || "").split(",")[0].trim() ||
        undefined,
      client_user_agent: getRequestHeader("user-agent") || undefined,
    };
    for (const k of Object.keys(user_data)) if (user_data[k] === undefined) delete user_data[k];

    const body: Record<string, unknown> = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          event_id: data.event_id,
          action_source: "website",
          event_source_url: data.event_source_url,
          user_data,
          custom_data: { content_name: data.service_needed, lead_type: data.lead_type },
        },
      ],
    };
    if (process.env.META_TEST_EVENT_CODE) body.test_event_code = process.env.META_TEST_EVENT_CODE;

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3000);
    try {
      const res = await fetch(
        `https://graph.facebook.com/${GRAPH_VERSION}/${encodeURIComponent(pixelId)}/events?access_token=${encodeURIComponent(token)}`,
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: ctrl.signal },
      );
      return { ok: res.ok };
    } catch {
      return { ok: false };
    } finally {
      clearTimeout(timer);
    }
  });

/** Client wrapper: never throws. */
export async function sendServerLead(payload: ServerLeadPayload): Promise<{ ok: boolean; skipped?: boolean } | undefined> {
  try {
    return await trackLeadServer({ data: payload });
  } catch {
    return undefined;
  }
}
~~~~

### FILE: src/lib/submit-lead.ts
~~~~
import { site } from "@/content/site";
import { compact, pushDL } from "@/lib/analytics";
import { getAttribution } from "@/lib/attribution";
import { CRM_FIELDS, type CrmFieldKey } from "@/lib/crm-fields";
import { trackCrmFormSubmission } from "@/lib/crm-tracking";
import { sendServerLead } from "@/lib/meta-capi";

export type Lead = {
  first_name: string;
  last_name: string;
  phone_e164: string;
  phone_display: string;
  postal_code: string;
  service_needed: string;
  storm_emergency: string;
  lead_type: "free_estimate" | "paid_service";
  placement: "hero" | "final";
};

export const LEAD_STORAGE_KEY = "lp_lead";

/**
 * Sends the lead to the CRM (fire-and-forget), dataLayer and Meta CAPI, then stores the
 * thank-you hand-off. The caller navigates to /thank-you afterwards, whatever happens here.
 */
export async function submitLead(lead: Lead): Promise<void> {
  const event_id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  let attr: ReturnType<typeof getAttribution> | undefined;
  try {
    attr = getAttribution();
  } catch {
    attr = undefined;
  }

  // 1) CRM, fire-and-forget.
  try {
    const values: Record<CrmFieldKey, string | undefined> = {
      service_needed: lead.service_needed,
      storm_emergency: lead.storm_emergency,
      utm_source: attr?.utm_source,
      utm_medium: attr?.utm_medium,
      utm_campaign: attr?.utm_campaign,
      utm_content: attr?.utm_content,
      utm_term: attr?.utm_term,
      fbp: attr?.fbp,
      fbc: attr?.fbc,
      event_id,
      landing_page: attr?.landing_page,
      referrer: attr?.referrer,
      device_type: attr?.device_type,
      os: attr?.os,
      google_click_id: attr?.gclid,
      visitor_timezone: attr?.visitor_timezone,
    };
    const customFields: Record<string, string> = {};
    for (const key of Object.keys(CRM_FIELDS) as CrmFieldKey[]) {
      const id = CRM_FIELDS[key];
      const v = values[key];
      if (id && v) customFields[id] = v;
    }
    const formData: Record<string, string> = {};
    if (lead.first_name) formData.first_name = lead.first_name;
    if (lead.last_name) formData.last_name = lead.last_name;
    if (lead.phone_e164) formData.phone = lead.phone_e164;
    if (lead.postal_code) formData.postal_code = lead.postal_code;
    void trackCrmFormSubmission({
      formId: site.form.formId,
      formName: site.form.formName,
      formData,
      customFields,
    }).catch(() => {});
  } catch {
    /* never block the visitor */
  }

  // 2) Ads and analytics.
  try {
    pushDL(
      compact({
        event: "generate_lead",
        event_id,
        form_id: site.form.formId,
        form_placement: lead.placement,
        service_needed: lead.service_needed,
        storm_emergency: lead.storm_emergency,
        lead_type: lead.lead_type,
        user_data: {
          phone_number: lead.phone_e164,
          address: {
            first_name: lead.first_name,
            last_name: lead.last_name,
            postal_code: lead.postal_code,
            country: "US",
          },
        },
      }),
    );
  } catch {
    /* ignore */
  }

  // 3) Server-side Lead (Meta CAPI), raced against 1.5 s.
  try {
    await Promise.race([
      sendServerLead({
        event_id,
        event_source_url: window.location.href,
        first_name: lead.first_name || undefined,
        last_name: lead.last_name || undefined,
        phone_e164: lead.phone_e164 || undefined,
        postal_code: lead.postal_code || undefined,
        fbp: attr?.fbp,
        fbc: attr?.fbc,
        service_needed: lead.service_needed || undefined,
        lead_type: lead.lead_type,
      }),
      new Promise((resolve) => setTimeout(resolve, 1500)),
    ]);
  } catch {
    /* ignore */
  }

  // 4) Thank-you hand-off (no phone, no ZIP).
  try {
    sessionStorage.setItem(
      LEAD_STORAGE_KEY,
      JSON.stringify({
        first_name: lead.first_name,
        service_needed: lead.service_needed,
        storm_emergency: lead.storm_emergency,
        lead_type: lead.lead_type,
        ts: Date.now(),
      }),
    );
  } catch {
    /* storage blocked */
  }
}
~~~~

### FILE: src/routes/__root.tsx
~~~~
import { HeadContent, Outlet, Scripts, createRootRoute, useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { pushDL } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";
import { DEFAULT_GEO, type GeoResult } from "@/lib/geo-shared";
import appCss from "@/styles/app.css?url";
import lpCss from "@/styles/lp.css?url";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: site.meta.title },
      { name: "description", content: site.meta.description },
      { name: "robots", content: "noindex, nofollow" },
      { name: "theme-color", content: "#7F1418" },
      { property: "og:title", content: site.meta.title },
      { property: "og:description", content: site.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.hero.src || images.logo.src },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONTS },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: lpCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function pageGeo(matches: ReadonlyArray<{ loaderData?: unknown }>): GeoResult {
  for (const m of matches) {
    const d = m.loaderData as { geo?: GeoResult } | undefined;
    if (d?.geo) return d.geo;
  }
  return DEFAULT_GEO;
}

function RootComponent() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => (s.resolvedLocation ?? s.location).pathname });
  const lastPath = useRef<string | null>(null);

  // Attribution + GTM, once.
  useEffect(() => {
    captureAttribution();
    const gtmId: string = site.tracking.gtmId;
    if (gtmId && !document.getElementById("lp-gtm")) {
      pushDL({ "gtm.start": Date.now(), event: "gtm.js" });
      const s = document.createElement("script");
      s.id = "lp-gtm";
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(gtmId);
      document.head.appendChild(s);
    }
  }, []);

  // Exactly one page_view per page view (StrictMode-safe).
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    // No cleanup: the ref guard (not cancellation) dedupes StrictMode's double effect.
    requestAnimationFrame(() => {
      const geo = pageGeo(router.state.matches);
      pushDL({
        event: "page_view",
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
        page_type: window.location.pathname === "/thank-you" ? "thank_you" : "landing",
        geo_city: geo.city,
        geo_source: geo.source,
      });
    });
  }, [pathname, router]);

  return <Outlet />;
}
~~~~

### FILE: src/routes/index.tsx
~~~~
import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/lp/Footer";
import { Header } from "@/components/lp/Header";
import { StickyCallBar } from "@/components/lp/StickyCallBar";
import { Hero, Reviews, Services, Stats, WhyUs } from "@/components/sections/LandingA";
import {
  About,
  Difference,
  Emergency,
  Faq,
  FinalCta,
  Gallery,
  Pricing,
  Process,
  ServiceArea,
} from "@/components/sections/LandingB";
import { images } from "@/content/images";
import { EstimateProvider } from "@/lib/estimate-store";
import { resolveGeo } from "@/lib/geo";
import { GeoProvider, readStoredGeo } from "@/lib/geo-context";

type LandingSearch = Record<string, unknown> & { city?: string };

export const Route = createFileRoute("/")({
  // Pass every query parameter through untouched (utm_*, gclid, fbclid, ...). Only "city" is read.
  validateSearch: (search: Record<string, unknown>): LandingSearch => search,
  loaderDeps: ({ search }) => ({ city: typeof search.city === "string" ? search.city : undefined }),
  loader: async ({ deps }) => {
    if (typeof window !== "undefined" && !deps.city) {
      const stored = readStoredGeo();
      if (stored) return { geo: stored };
    }
    const geo = await resolveGeo({ data: { cityParam: deps.city } });
    return { geo };
  },
  head: () => ({
    links: [
      ...(images.hero_mobile.src
        ? [{ rel: "preload", as: "image", href: images.hero_mobile.src, media: "(max-width: 1023px)", fetchPriority: "high" as const }]
        : []),
      ...(images.hero.src
        ? [{ rel: "preload", as: "image", href: images.hero.src, media: "(min-width: 1024px)", fetchPriority: "high" as const }]
        : []),
    ],
  }),
  component: Landing,
});

function Landing() {
  const { geo } = Route.useLoaderData();
  return (
    <GeoProvider value={geo}>
      <EstimateProvider>
        <div className="lp lp-has-sticky">
          <a className="lp-skip" href="#content">
            Skip to content
          </a>
          <Header page="landing" />
          <main id="content" tabIndex={-1}>
            <Hero />
            <Reviews />
            <Stats />
            <Services />
            <WhyUs />
            <Difference />
            <About />
            <Pricing />
            <Gallery />
            <Process />
            <Emergency />
            <ServiceArea />
            <Faq />
            <FinalCta />
          </main>
          <Footer page="landing" />
          <StickyCallBar />
        </div>
      </EstimateProvider>
    </GeoProvider>
  );
}
~~~~

### FILE: src/routes/thank-you.tsx
~~~~
import { Link, createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Check, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/lp/Button";
import { CallLink } from "@/components/lp/CallLink";
import { CityName } from "@/components/lp/CityName";
import { Footer } from "@/components/lp/Footer";
import { GoogleRatingBadge } from "@/components/lp/GoogleRatingBadge";
import { Header } from "@/components/lp/Header";
import { Container, Section } from "@/components/lp/Section";
import { SectionHead } from "@/components/lp/SectionHead";
import { Steps } from "@/components/sections/LandingB";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { site } from "@/content/site";
import { resolveGeo } from "@/lib/geo";
import { GeoProvider, readStoredGeo } from "@/lib/geo-context";
import { LEAD_STORAGE_KEY } from "@/lib/submit-lead";

export const Route = createFileRoute("/thank-you")({
  loader: async () => {
    const stored = readStoredGeo();
    if (stored) return { geo: stored };
    return { geo: await resolveGeo({ data: {} }) };
  },
  component: ThankYou,
});

type LeadHandoff = {
  first_name?: string;
  service_needed?: string;
  storm_emergency?: string;
  lead_type?: string;
  ts?: number;
};

const EMERGENCY_TEXT = "Is this an emergency? Don't wait for our call. Call us now:";
const OFFER_LINE = "Don't forget your new-customer offer:";

function saveVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${site.business.name}`,
    `ORG:${site.business.legalName}`,
    `TEL;TYPE=WORK,VOICE:${site.contact.phoneE164}`,
    `URL:${site.business.website}`,
    "END:VCARD",
  ];
  const blob = new Blob([lines.join("\r\n") + "\r\n"], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${site.business.shortName}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function ThankYou() {
  const { geo } = Route.useLoaderData();
  const [lead, setLead] = useState<LeadHandoff | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(LEAD_STORAGE_KEY);
      if (raw) setLead(JSON.parse(raw) as LeadHandoff);
    } catch {
      setLead(null);
    }
  }, []);

  const firstName = lead?.first_name?.trim();
  const urgent = lead?.storm_emergency === "Yes, urgent";
  const paid = lead?.lead_type === "paid_service" && !!site.services.paidNote;

  return (
    <GeoProvider value={geo}>
      <div className="lp">
        <a className="lp-skip" href="#content">
          Skip to content
        </a>
        <Header page="thank_you" />
        <main id="content" tabIndex={-1}>
          {/* 4.1 Confirmation */}
          <Section tone="light" className="lp-ty-hero">
            <Container>
              <div className="lp-ty-check" aria-hidden="true">
                <Check />
              </div>
              <h1>
                Thank You{firstName ? `, ${firstName}` : ""}. Your Request Is In.
              </h1>
              <p className="lp-ty-sub">
                We'll call you back fast to set up your free estimate in <CityName />.
              </p>
              {paid ? <p className="lp-ty-sub lp-small">{site.services.paidNote}</p> : null}
              {urgent ? (
                <div className="lp-ty-emergency">
                  <p>{EMERGENCY_TEXT}</p>
                  <CallLink location="thank_you_emergency" variant="light">
                    {site.contact.phoneDisplay}
                  </CallLink>
                </div>
              ) : null}
            </Container>
          </Section>

          {/* 4.2 What happens next */}
          <Section tone="white">
            <Container>
              <SectionHead title="What Happens Next" />
              <Steps
                steps={[
                  { t: "We Review Your Request", d: "We look over the details you sent, so we're ready when we call." },
                  { t: "We Call to Schedule", d: "We set up your free on-site or virtual estimate at a time that works for you." },
                  { t: "A Clear Price First", d: "You get a flat-rate price before any work starts. What we quote is what you pay." },
                ]}
              />
              <div className="lp-save-row">
                <p>Save our number so you know it's us when we call.</p>
                <div className="lp-cta-pair lp-cta-pair--center">
                  <Button type="button" variant="brand" icon="arrow" onClick={saveVCard}>
                    Save Our Number
                  </Button>
                  <CallLink location="thank_you" variant="call">
                    {"Call " + site.contact.phoneDisplay}
                  </CallLink>
                </div>
              </div>
            </Container>
          </Section>

          {/* 4.3 Reviews */}
          <Section tone="light">
            <Container>
              <SectionHead title="What Our Customers Say" />
              {site.rating.show ? (
                <div className="lp-ty-badge-row">
                  <GoogleRatingBadge />
                </div>
              ) : null}
              <div className="lp-review-grid">
                {site.reviews.thankYou.slice(0, 3).map((r) => (
                  <ReviewCard key={r.name} review={r} />
                ))}
              </div>
            </Container>
          </Section>

          {/* 4.4 Offer reminder */}
          {site.offers.length ? (
            <Section tone="brand" className="lp-compact">
              <Container>
                <p className="lp-ty-offerline">{OFFER_LINE}</p>
                <div className="lp-ty-offers">
                  {site.offers.map((o) => (
                    <div className="lp-ty-offer" key={o.title}>
                      <div className="t">{o.title}</div>
                      <div className="d">{o.text}</div>
                    </div>
                  ))}
                </div>
              </Container>
            </Section>
          ) : null}

          {/* 4.5 Credentials strip */}
          <Section tone="white" className="lp-compact">
            <Container>
              <div className="lp-cred-chips">
                {site.credentials.map((c) => (
                  <span className="lp-cred-chip" key={c.label}>
                    <BadgeCheck aria-hidden="true" />
                    {c.label}
                    {c.detail ? <span>({c.detail})</span> : null}
                  </span>
                ))}
                {site.ownership.map((o) => (
                  <span className="lp-cred-chip lp-own-pill" key={o}>
                    <Heart aria-hidden="true" />
                    {o}
                  </span>
                ))}
              </div>
              <Link to="/" className="lp-back">
                Back to home
              </Link>
            </Container>
          </Section>
        </main>
        <Footer page="thank_you" />
      </div>
    </GeoProvider>
  );
}
~~~~

### FILE: src/styles/app.css
~~~~
@import "tailwindcss";
~~~~

### FILE: src/styles/lp.css
~~~~
/* Explicit Land & Tree Services: funnel design system. Everything is scoped under .lp */

.lp {
  --lp-primary: #7F1418; /* brand color: headings, brand sections */
  --lp-dark: #1C1011; /* header, footer, dark sections */
  --lp-accent: #C2470F; /* call buttons; white text on it must pass 4.5:1 */
  --lp-highlight: #DBB494; /* labels, icons and links on dark; stat numbers on brand */
  --lp-light: #FAF6F3; /* light sections */
  --lp-white: #FFFFFF; --lp-ink: #1C2420; --lp-muted: #5D6761;
  --lp-on-dark: rgba(255,255,255,.86); --lp-on-dark-muted: rgba(255,255,255,.64); --lp-star: #FBBC04;
  --lp-font-display: "Space Grotesk", system-ui, sans-serif; --lp-font-body: "Inter", system-ui, sans-serif;
  --lp-r-sm: 8px; --lp-r-md: 12px; --lp-r-lg: 16px; --lp-r-xl: 24px; --lp-r-pill: 999px;
  --lp-shadow-card: 0 10px 30px -8px color-mix(in srgb, var(--lp-primary) 22%, transparent);
  --lp-shadow-form: 0 30px 60px -18px rgba(0,0,0,.55);
  --lp-shadow-cta: 0 12px 24px -10px color-mix(in srgb, var(--lp-accent) 75%, #000);
  --lp-error: #B42318;

  font-family: var(--lp-font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--lp-ink);
  background: var(--lp-white);
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
  min-width: 0;
}
@media (min-width: 1024px) { .lp { font-size: 17px; } }

html:has(.lp) { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) { html:has(.lp) { scroll-behavior: auto; } }

:where(.lp) *, :where(.lp) *::before, :where(.lp) *::after { box-sizing: border-box; }
:where(.lp) img { max-width: 100%; display: block; }
:where(.lp) a { color: inherit; }
:where(.lp) h1, :where(.lp) h2, :where(.lp) h3, :where(.lp) h4 { font-family: var(--lp-font-display); margin: 0; }
:where(.lp) p { margin: 0; }
:where(.lp) ul { margin: 0; padding: 0; list-style: none; }
:where(.lp) button, :where(.lp) input, :where(.lp) select { font: inherit; }

.lp h1, .lp .lp-h1 {
  font-size: clamp(2.125rem, 1.4rem + 3.2vw, 3.75rem);
  line-height: 1.05; font-weight: 800; letter-spacing: -0.02em; text-wrap: balance;
}
.lp h2, .lp .lp-h2 {
  font-size: clamp(1.875rem, 1.25rem + 2.6vw, 3rem);
  line-height: 1.08; font-weight: 800; text-wrap: balance; letter-spacing: -0.015em;
}
.lp h3, .lp .lp-h3 { font-size: 20px; line-height: 1.2; font-weight: 700; }
@media (min-width: 1024px) { .lp h3, .lp .lp-h3 { font-size: 22px; } }
.lp .lp-small { font-size: 14px; }

/* Skip link */
.lp-skip {
  position: absolute; left: 16px; top: -100px; z-index: 100;
  background: var(--lp-white); color: var(--lp-primary); padding: 10px 16px; border-radius: var(--lp-r-sm);
  font-weight: 700; text-decoration: none;
}
.lp-skip:focus { top: 12px; outline: 3px solid var(--lp-primary); outline-offset: 2px; }

/* ===== Layout ===== */
.lp-container { width: 100%; max-width: 1200px; margin-inline: auto; padding-inline: 16px; min-width: 0; }
@media (min-width: 640px) { .lp-container { padding-inline: 24px; } }
@media (min-width: 1024px) { .lp-container { padding-inline: 32px; } }

.lp-section { position: relative; padding-block: 56px; scroll-margin-top: 16px; }
@media (min-width: 768px) { .lp-section { padding-block: 80px; } }
@media (min-width: 1024px) { .lp-section { padding-block: 96px; } }

.lp-tone-white { background: var(--lp-white); color: var(--lp-ink); }
.lp-tone-light { background: var(--lp-light); color: var(--lp-ink); }
.lp-tone-dark { background: var(--lp-dark); color: var(--lp-on-dark); }
.lp-tone-brand { background: var(--lp-primary); color: var(--lp-on-dark); }
.lp-tone-accent { background: var(--lp-accent); color: var(--lp-white); }
.lp-tone-white :where(h2, h3), .lp-tone-light :where(h2, h3) { color: var(--lp-primary); }
.lp-tone-dark :where(h1, h2, h3), .lp-tone-brand :where(h1, h2, h3) { color: var(--lp-white); }

/* Light cards on dark/brand sections set their own colors (rule 16) */
.lp .lp-card-light { color: var(--lp-ink); }
.lp .lp-card-light :where(h2, h3) { color: var(--lp-primary); }

.lp-on-dark { color: var(--lp-on-dark); }

/* ===== Section head ===== */
.lp-head { max-width: 760px; margin: 0 auto 40px; text-align: center; }
@media (min-width: 1024px) { .lp-head { margin-bottom: 48px; } }
.lp-head--left { margin-inline: 0; text-align: left; }
.lp-pill {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 14px; border-radius: var(--lp-r-pill);
  font-family: var(--lp-font-display); font-size: 13px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  color: var(--lp-primary); background: color-mix(in srgb, var(--lp-primary) 10%, transparent);
  margin-bottom: 16px;
}
.lp-tone-dark .lp-pill, .lp-tone-brand .lp-pill { color: var(--lp-white); background: rgba(255,255,255,.14); }
.lp-head .lp-lead { margin-top: 16px; font-size: 17px; color: var(--lp-muted); }
@media (min-width: 1024px) { .lp-head .lp-lead { font-size: 18px; } }
.lp-tone-dark .lp-head .lp-lead, .lp-tone-brand .lp-head .lp-lead { color: var(--lp-on-dark); }

/* ===== Buttons ===== */
.lp-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px; position: relative;
  white-space: nowrap; text-decoration: none; cursor: pointer;
  min-height: 56px; padding: 14px 24px; border: 2px solid transparent; border-radius: var(--lp-r-md);
  font-family: var(--lp-font-display); font-size: 17px; font-weight: 700; line-height: 1.2;
  width: 100%; max-width: 100%; min-width: 0; text-align: center;
  transition: transform .15s, box-shadow .15s, background-color .15s;
}
@media (min-width: 640px) { .lp-btn { width: auto; } }
.lp-btn.lp-btn--block { width: 100%; }
@media (min-width: 1024px) { .lp-btn { min-height: 60px; padding-inline: 32px; font-size: 18px; } }
.lp-btn:hover { transform: translateY(-1px); }
.lp-btn:focus-visible { outline: 3px solid var(--lp-primary); outline-offset: 3px; }
.lp-tone-dark .lp-btn:focus-visible, .lp-tone-brand .lp-btn:focus-visible, .lp-tone-accent .lp-btn:focus-visible,
.lp-header .lp-btn:focus-visible, .lp-sticky .lp-btn:focus-visible, .lp-hero .lp-btn:focus-visible { outline-color: var(--lp-highlight); }
.lp .lp-card-light .lp-btn:focus-visible { outline-color: var(--lp-primary); }
.lp-btn:disabled, .lp-btn[aria-disabled="true"] { cursor: not-allowed; opacity: .7; transform: none; }
.lp-btn .lp-ico-phone { width: 20px; height: 20px; flex: none; }
.lp-btn .lp-ico-arrow { width: 18px; height: 18px; flex: none; transition: transform .15s; }
.lp-btn:hover .lp-ico-arrow { transform: translateX(3px); }
.lp-btn > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; }

.lp-btn--call { background: var(--lp-accent); color: var(--lp-white); box-shadow: var(--lp-shadow-cta); }
.lp-btn--call:hover { background: color-mix(in srgb, var(--lp-accent) 90%, #000); }
.lp-btn--brand { background: var(--lp-primary); color: var(--lp-white); box-shadow: var(--lp-shadow-card); }
.lp-btn--brand:hover { background: color-mix(in srgb, var(--lp-primary) 88%, #000); }
.lp-btn--light { background: var(--lp-white); color: var(--lp-accent); }
.lp-btn--light:hover { background: color-mix(in srgb, var(--lp-accent) 8%, white); }

.lp-btn--compact {
  min-height: 44px; padding: 8px 16px; font-size: 15px; width: auto; gap: 8px;
}
@media (min-width: 1024px) { .lp-btn--compact { min-height: 44px; padding: 8px 18px; font-size: 15px; } }
.lp-btn--compact .lp-ico-phone { width: 18px; height: 18px; }
.lp-btn--compact .lp-ico-arrow { width: 16px; height: 16px; }

@keyframes lp-pulse {
  0% { box-shadow: var(--lp-shadow-cta), 0 0 0 0 color-mix(in srgb, var(--lp-accent) 45%, transparent); }
  70% { box-shadow: var(--lp-shadow-cta), 0 0 0 12px transparent; }
  100% { box-shadow: var(--lp-shadow-cta), 0 0 0 0 transparent; }
}
.lp-btn--pulse { animation: lp-pulse 2.4s ease-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .lp-btn--pulse { animation: none; }
  .lp-btn, .lp-btn:hover, .lp-btn:hover .lp-ico-arrow { transform: none; transition: none; }
}

/* CTA pair */
.lp-cta-pair {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 12px;
  width: 100%; max-width: min(640px, 100%); min-width: 0;
}
.lp-cta-pair--center { margin-inline: auto; }
.lp-cta-pair .lp-btn { width: 100%; justify-content: center; padding-inline: 20px; }
@media (max-width: 359px) { .lp-cta-pair .lp-btn { padding-inline: 14px; gap: 8px; } }
.lp-cta-row { margin-top: 40px; }
@media (min-width: 1024px) { .lp-cta-row { margin-top: 48px; } }

/* Inline call link */
.lp-calllink { font-weight: 700; color: var(--lp-primary); text-decoration: none; white-space: nowrap; }
.lp-calllink:hover { text-decoration: underline; }
.lp-calllink:focus-visible { outline: 3px solid currentColor; outline-offset: 2px; border-radius: 2px; }
.lp-tone-dark .lp-calllink, .lp-tone-brand .lp-calllink { color: var(--lp-white); }
.lp .lp-card-light .lp-calllink { color: var(--lp-primary); }

/* Checks */
.lp-checks { display: grid; gap: 10px; }
.lp-checks li { display: flex; gap: 10px; align-items: flex-start; }
.lp-checks .lp-check-ico {
  flex: none; width: 22px; height: 22px; margin-top: 2px; border-radius: 999px; padding: 4px;
  background: color-mix(in srgb, var(--lp-primary) 12%, transparent); color: var(--lp-primary);
}
.lp-checks--white .lp-check-ico, .lp-tone-dark .lp-checks .lp-check-ico, .lp-hero .lp-checks .lp-check-ico {
  background: color-mix(in srgb, var(--lp-highlight) 22%, transparent); color: var(--lp-highlight);
}
.lp-checks--white li { color: var(--lp-white); }

/* Stars, Google */
.lp-stars { display: inline-flex; gap: 2px; color: var(--lp-star); flex: none; }
.lp-stars svg { width: 18px; height: 18px; fill: currentColor; }
.lp-google-g { display: inline-block; flex: none; }
.lp-g-circle { display: inline-flex; align-items: center; justify-content: center; background: #fff; border-radius: 999px; flex: none; }

.lp-rating-badge {
  display: inline-flex; align-items: center; gap: 8px; max-width: 100%;
  padding: 6px 14px 6px 6px; border-radius: var(--lp-r-pill); white-space: nowrap;
  font-size: 14px; font-weight: 600; line-height: 1.2;
  color: var(--lp-ink); background: #fff; border: 1px solid rgba(0,0,0,.1);
}
.lp-rating-badge--dark { color: #fff; background: rgba(255,255,255,.14); border-color: rgba(255,255,255,.08); }
.lp-rating-badge .lp-g-circle { width: 28px; height: 28px; }
.lp-rating-badge .lp-stars svg { width: 15px; height: 15px; }
.lp-rating-badge .lp-rb-score { font-weight: 800; }
.lp-rating-badge .lp-rb-text { overflow: hidden; text-overflow: ellipsis; min-width: 0; }
@media (max-width: 479px) {
  .lp-rating-badge { font-size: 13px; gap: 6px; padding-right: 12px; }
  .lp-rating-badge .lp-g-circle { width: 26px; height: 26px; }
  .lp-rating-badge .lp-stars { gap: 1px; }
  .lp-rating-badge .lp-stars svg { width: 13px; height: 13px; }
}
@media (max-width: 374px) {
  .lp-rating-badge { font-size: 11.5px; gap: 5px; padding: 4px 10px 4px 4px; letter-spacing: -0.01em; }
  .lp-rating-badge .lp-g-circle { width: 22px; height: 22px; }
  .lp-rating-badge .lp-g-circle svg { width: 14px; height: 14px; }
  .lp-rating-badge .lp-stars svg { width: 11px; height: 11px; }
}

/* ===== Image slots ===== */
.lp-slot { position: relative; overflow: hidden; width: 100%; background: var(--lp-dark); }
.lp-slot picture { display: block; width: 100%; height: 100%; }
.lp-slot img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.lp-slot--empty {
  display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px;
  background: repeating-linear-gradient(135deg,
    color-mix(in srgb, var(--lp-dark) 92%, var(--lp-primary)) 0 14px,
    color-mix(in srgb, var(--lp-primary) 55%, var(--lp-dark)) 14px 28px);
  color: var(--lp-on-dark-muted); font-size: 13px; text-align: center; padding: 12px;
}
.lp-slot-chip {
  position: absolute; z-index: 1; max-width: 60%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  font-size: 11.5px; color: var(--lp-on-dark-muted); background: rgba(0,0,0,.35); padding: 3px 8px; border-radius: 999px;
}

/* ===== Header ===== */
.lp-header {
  position: static; background: var(--lp-dark); border-bottom: 1px solid rgba(255,255,255,.08); color: #fff;
}
.lp-header-inner {
  max-width: 1200px; margin-inline: auto; min-height: 68px; padding: 10px 16px;
  display: flex; align-items: center; gap: 16px; min-width: 0;
}
@media (min-width: 1024px) { .lp-header-inner { min-height: 76px; padding-inline: 32px; } }
.lp-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; min-width: 0; flex: none; }
.lp-brand:focus-visible { outline: 3px solid var(--lp-highlight); outline-offset: 4px; border-radius: 4px; }
@media (min-width: 1280px) { .lp-header-inner { padding-inline: 16px; } }
.lp-brand-logo { max-height: 48px; max-width: 180px; width: auto; height: auto; flex: none; }
@media (min-width: 1024px) { .lp-brand-logo { max-height: 56px; max-width: 260px; } }
.lp-brand-text { display: flex; flex-direction: column; line-height: 1.15; gap: 2px; min-width: 0; }
.lp-brand-text .l1 { color: #fff; font-family: var(--lp-font-display); font-size: 17px; font-weight: 700; white-space: nowrap; }
.lp-brand-text .l2 { color: var(--lp-highlight); font-size: 12px; font-weight: 500; white-space: nowrap; }
@media (max-width: 399px) { .lp-brand-text .l1 { font-size: 16px; } }
.lp-brand--withlogo .lp-brand-text { display: none; }
@media (min-width: 640px) { .lp-brand--withlogo .lp-brand-text { display: flex; } }
.lp-nav { display: none; }
@media (min-width: 1280px) {
  .lp-nav { display: flex; gap: 26px; margin-inline: auto; }
  .lp-nav a { color: rgba(255,255,255,.85); font-size: 15px; font-weight: 600; text-decoration: none; white-space: nowrap; }
  .lp-nav a:hover { color: #fff; }
  .lp-nav a:focus-visible { outline: 3px solid var(--lp-highlight); outline-offset: 3px; border-radius: 2px; }
}
.lp-header-actions { margin-left: auto; display: flex; align-items: center; flex: none; }
@media (min-width: 1280px) { .lp-header-actions { margin-left: 0; } }
.lp-header-actions .lp-desktop-only { display: none; }
@media (min-width: 1024px) {
  .lp-header-actions .lp-desktop-only { display: inline-grid; grid-auto-flow: column; grid-auto-columns: 1fr; gap: 12px; }
  .lp-header-actions .lp-mobile-only { display: none; }
}
.lp-header-actions .lp-btn { width: 100%; }
.lp-header-actions .lp-mobile-only.lp-btn { width: auto; }

/* ===== Sticky call bar ===== */
.lp-sticky {
  position: fixed; left: 0; right: 0; bottom: 0; z-index: 50;
  display: flex; gap: 10px;
  padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
  background: color-mix(in srgb, var(--lp-dark) 96%, transparent);
  -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255,255,255,.1);
  transition: transform .25s ease, visibility .25s;
}
.lp-sticky .lp-btn { flex: 1 1 0; min-width: 0; width: auto; min-height: 52px; padding: 8px 10px; border-radius: 12px; font-size: 15px; gap: 8px; }
.lp-sticky .lp-btn .lp-ico-phone { width: 18px; height: 18px; }
@media (max-width: 359px) { .lp-sticky .lp-ico-arrow { display: none; } .lp-sticky .lp-btn { padding-inline: 6px; } }
.lp-sticky--hidden { transform: translateY(110%); visibility: hidden; }
@media (min-width: 1024px) { .lp-sticky { display: none; } }
@media (prefers-reduced-motion: reduce) { .lp-sticky { transition: none; } }
.lp-has-sticky { padding-bottom: calc(72px + env(safe-area-inset-bottom)); }
@media (min-width: 1024px) { .lp-has-sticky { padding-bottom: 0; } }

/* ===== Footer ===== */
.lp-footer { background: var(--lp-dark); color: var(--lp-on-dark); padding-block: 56px 32px; font-size: 15px; }
.lp-footer-grid { display: grid; gap: 32px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 768px) { .lp-footer-grid { grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr); } }
@media (min-width: 1024px) { .lp-footer-grid { grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) minmax(0, 1fr); } }
.lp-footer h3 { color: var(--lp-highlight); font-size: 14px; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 12px; }
.lp-footer .lp-footer-logo { max-height: 48px; max-width: 180px; width: auto; height: auto; }
@media (min-width: 1024px) { .lp-footer .lp-footer-logo { max-height: 56px; max-width: 260px; } }
.lp-footer p + p { margin-top: 8px; }
.lp-footer .lp-cta-pair { margin-top: 24px; }
.lp-footer-cred li { padding-block: 4px; }
.lp-footer-cred span { color: var(--lp-on-dark-muted); }
.lp-footer-bottom {
  margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,.1);
  display: flex; flex-wrap: wrap; gap: 8px 20px; justify-content: space-between; color: var(--lp-on-dark-muted); font-size: 14px;
}
.lp-footer-bottom a { color: var(--lp-highlight); }
.lp-footer-wordmark { display: flex; flex-direction: column; line-height: 1.15; gap: 2px; }
.lp-footer-wordmark .l1 { color: #fff; font-family: var(--lp-font-display); font-size: 18px; font-weight: 700; }

/* ===== Hero ===== */
.lp-hero { position: relative; overflow: hidden; isolation: isolate; background: var(--lp-dark); color: var(--lp-on-dark); padding-top: 44px; padding-bottom: 56px; }
.lp-hero-media { position: absolute; top: 0; left: 0; right: 0; width: 100%; height: min(110svh, 100%); z-index: -2; }
.lp-hero-media .lp-slot { height: 100%; }
.lp-hero-media--empty { background: linear-gradient(160deg, var(--lp-dark) 0%, color-mix(in srgb, var(--lp-primary) 70%, var(--lp-dark)) 100%); }
/* Below 1024px the overlay covers exactly the photo block, then the section is solid --lp-dark. */
.lp-hero-overlay {
  position: absolute; top: 0; left: 0; right: 0; height: min(110svh, 100%); z-index: -1; pointer-events: none;
  background: linear-gradient(180deg,
    color-mix(in srgb, var(--lp-dark) 82%, transparent) 0%,
    color-mix(in srgb, var(--lp-dark) 80%, transparent) 22%,
    color-mix(in srgb, var(--lp-dark) 68%, transparent) 50%,
    color-mix(in srgb, var(--lp-dark) 80%, transparent) 72%,
    var(--lp-dark) 96%);
}
.lp-hero-grid { display: grid; grid-template-columns: minmax(0, 1fr); gap: 32px; align-items: start; }
.lp-hero-copy { min-width: 0; }
.lp-eyebrow {
  display: inline-flex; align-items: center; gap: 10px; max-width: 100%;
  padding: 7px 14px; border-radius: var(--lp-r-pill); background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.14);
  color: #fff; font-family: var(--lp-font-display); font-size: 12.5px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  white-space: nowrap;
}
.lp-eyebrow-dot {
  width: 8px; height: 8px; border-radius: 999px; background: var(--lp-accent); flex: none;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--lp-accent) 35%, transparent), 0 0 10px 1px color-mix(in srgb, var(--lp-accent) 70%, transparent);
}
@media (max-width: 359px) { .lp-eyebrow { font-size: 11px; letter-spacing: .04em; padding-inline: 12px; } }
.lp-hero h1 { margin-top: 18px; color: #fff; text-shadow: 0 2px 18px rgba(0,0,0,.35); }
.lp-hero h1 .lp-h1-loc { color: var(--lp-highlight); }
.lp-hero-sub { margin-top: 16px; font-size: 17px; color: var(--lp-on-dark); max-width: 560px; text-shadow: 0 1px 10px rgba(0,0,0,.35); }
@media (min-width: 1024px) { .lp-hero-sub { font-size: 19px; } }
.lp-hero .lp-checks { margin-top: 22px; color: #fff; font-weight: 500; }
@media (min-width: 640px) { .lp-hero .lp-checks { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); column-gap: 20px; } }
.lp-hero .lp-rating-badge { margin-top: 20px; }
.lp-hero .lp-cta-pair { margin-top: 16px; }
.lp-hero .lp-cta-pair--nochip { margin-top: 24px; }
.lp-hero-form { scroll-margin-top: 16px; min-width: 0; }
@media (min-width: 1024px) {
  .lp-hero { padding-top: 56px; padding-bottom: 96px; }
  .lp-hero-media { height: 100%; }
  .lp-hero-overlay {
    height: 100%;
    background: linear-gradient(90deg,
      color-mix(in srgb, var(--lp-dark) 92%, transparent) 0%,
      color-mix(in srgb, var(--lp-dark) 84%, transparent) 42%,
      color-mix(in srgb, var(--lp-dark) 45%, transparent) 70%,
      color-mix(in srgb, var(--lp-dark) 30%, transparent) 100%);
  }
  .lp-hero-grid { grid-template-columns: minmax(0, 1fr) 440px; gap: 48px; }
  .lp-hero-copy { max-width: 600px; padding-top: 32px; }
}

/* ===== Reviews ===== */
.lp-reviews-top { display: flex; justify-content: center; margin-bottom: 20px; }
.lp-reviews-top .lp-g-circle { width: 56px; height: 56px; box-shadow: 0 6px 18px -6px rgba(0,0,0,.25); }
.lp-rating-summary { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 10px 14px; margin: -16px auto 36px; }
.lp-rating-summary .lp-rs-score { font-family: var(--lp-font-display); font-size: 40px; font-weight: 800; color: var(--lp-primary); line-height: 1; }
.lp-rating-summary .lp-stars svg { width: 22px; height: 22px; }
.lp-rating-summary .lp-rs-text { color: var(--lp-muted); font-weight: 600; }
.lp-review-grid { display: grid; gap: 20px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 640px) { .lp-review-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 1024px) { .lp-review-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.lp-review {
  background: #fff; color: var(--lp-ink); border-radius: var(--lp-r-lg); box-shadow: var(--lp-shadow-card); padding: 24px;
  display: flex; flex-direction: column; gap: 14px; height: 100%;
}
.lp-review-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.lp-review blockquote { margin: 0; font-size: 17px; line-height: 1.6; color: var(--lp-ink); flex: 1; }
.lp-review-name { font-weight: 700; color: var(--lp-ink); }
.lp-review-src { font-size: 14px; color: var(--lp-muted); }

/* ===== Stats ===== */
.lp-stats { padding-block: 40px; }
@media (min-width: 768px) { .lp-stats { padding-block: 40px; } }
@media (min-width: 1024px) { .lp-stats { padding-block: 40px; } }
.lp-stats-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 16px; text-align: center; }
.lp-stats-grid--few { grid-template-columns: minmax(0, 1fr); }
@media (min-width: 768px) {
  .lp-stats-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .lp-stats-grid--few { display: flex; justify-content: center; gap: 48px; }
}
.lp-stat-value {
  display: inline-flex; align-items: center; gap: 6px;
  font-family: var(--lp-font-display); font-weight: 800; color: var(--lp-highlight); line-height: 1; font-size: clamp(36px, 30px + 1.6vw, 48px);
}
.lp-stat-value svg { width: 24px; height: 24px; fill: var(--lp-star); color: var(--lp-star); }
.lp-stat-label { margin-top: 8px; color: var(--lp-on-dark); font-size: 15px; font-weight: 500; }

/* ===== Services ===== */
.lp-services-grid { display: grid; gap: 20px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 768px) { .lp-services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 1024px) {
  .lp-services-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .lp-services-grid > :first-child { grid-column: 1 / -1; min-height: 380px; }
  .lp-services-grid > :first-child .lp-svc-title { font-size: clamp(1.625rem, 1.2rem + 1.6vw, 2.25rem); }
}
.lp-svc {
  position: relative; isolation: isolate; overflow: hidden; border-radius: var(--lp-r-lg); box-shadow: var(--lp-shadow-card);
  min-height: 300px; display: flex; flex-direction: column; justify-content: flex-end; background: var(--lp-dark);
}
.lp-svc-media { position: absolute; inset: 0; z-index: -2; }
.lp-svc-media .lp-slot { height: 100%; background: var(--lp-dark); }
.lp-svc-media img { transition: transform .4s ease; }
.lp-svc:hover .lp-svc-media img { transform: scale(1.04); }
.lp-svc::after {
  content: ""; position: absolute; inset: 0; z-index: -1; pointer-events: none;
  background: linear-gradient(to top,
    color-mix(in srgb, var(--lp-dark) 94%, transparent) 0%,
    color-mix(in srgb, var(--lp-dark) 62%, transparent) 45%,
    color-mix(in srgb, var(--lp-dark) 10%, transparent) 80%);
}
.lp-svc-badge {
  position: absolute; top: 16px; left: 16px; z-index: 1;
  background: var(--lp-accent); color: #fff; font-size: 12.5px; font-weight: 700; padding: 5px 12px; border-radius: 999px;
  font-family: var(--lp-font-display); letter-spacing: .03em;
}
.lp-svc-body { padding: 24px; }
.lp-svc-title { font-family: var(--lp-font-display); font-size: 22px; font-weight: 800; color: #fff; line-height: 1.15; }
.lp-svc-text { margin-top: 8px; color: var(--lp-on-dark); font-size: 15px; line-height: 1.55; max-width: 46ch; }
.lp-svc-link {
  margin-top: 14px; display: inline-flex; align-items: center; gap: 6px; min-height: 44px;
  color: var(--lp-highlight); font-size: 15px; font-weight: 700; text-decoration: none; background: none; border: 0; padding: 0; cursor: pointer;
}
.lp-svc-link svg { width: 16px; height: 16px; transition: transform .15s; }
.lp-svc-link:hover svg { transform: translateX(3px); }
.lp-svc-link:focus-visible { outline: 3px solid var(--lp-highlight); outline-offset: 3px; border-radius: 4px; }
.lp-svc-body { position: relative; z-index: 1; }
.lp-svc-also { margin-top: 24px; text-align: center; color: var(--lp-muted); font-size: 15px; }
@media (prefers-reduced-motion: reduce) { .lp-svc-media img, .lp-svc-link svg { transition: none; } .lp-svc:hover .lp-svc-media img { transform: none; } }

/* ===== Benefit cards ===== */
.lp-card-grid { display: grid; gap: 20px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 640px) { .lp-card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 1024px) { .lp-card-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
.lp-benefit { background: #fff; border-radius: var(--lp-r-lg); box-shadow: var(--lp-shadow-card); padding: 24px; color: var(--lp-ink); }
.lp-icon-tile {
  width: 44px; height: 44px; border-radius: var(--lp-r-md); display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--lp-primary) 10%, transparent); color: var(--lp-primary);
}
.lp-icon-tile svg { width: 22px; height: 22px; }
.lp-benefit h3 { margin-top: 16px; font-size: 20px; color: var(--lp-primary); }
.lp-benefit p { margin-top: 8px; color: var(--lp-muted); font-size: 16px; }

/* ===== Difference ===== */
.lp-diff-main { display: grid; gap: 32px; grid-template-columns: minmax(0, 1fr); align-items: center; }
@media (min-width: 1024px) { .lp-diff-main { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 56px; } }
.lp-diff-text p { font-size: 17px; color: var(--lp-on-dark); }
.lp-diff-text p + p { margin-top: 16px; }
.lp-diff-photo { position: relative; border-radius: var(--lp-r-lg); overflow: hidden; border: 1px solid color-mix(in srgb, var(--lp-highlight) 35%, transparent); }
.lp-photo-chip {
  position: absolute; left: 12px; bottom: 12px; z-index: 1; max-width: calc(100% - 24px);
  padding: 6px 12px; border-radius: 999px; font-size: 13px; font-weight: 600; color: #fff;
  background: rgba(20,10,10,.55); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.lp-points { margin-top: 40px; display: grid; gap: 16px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 640px) { .lp-points { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 1024px) { .lp-points { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
.lp-point { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.12); border-radius: var(--lp-r-lg); padding: 22px; }
.lp-point .lp-icon-tile { background: color-mix(in srgb, var(--lp-highlight) 15%, transparent); color: var(--lp-highlight); }
.lp-point h3 { margin-top: 14px; font-size: 19px; color: #fff; }
.lp-point p { margin-top: 6px; color: var(--lp-on-dark); font-size: 15px; }

/* ===== About ===== */
.lp-about-main { display: grid; gap: 32px; grid-template-columns: minmax(0, 1fr); align-items: start; }
@media (min-width: 1024px) { .lp-about-main { grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 56px; } }
.lp-about-photo { position: relative; border-radius: var(--lp-r-lg); overflow: hidden; box-shadow: var(--lp-shadow-card); max-width: 520px; margin-inline: auto; width: 100%; }
.lp-about-text > p { font-size: 17px; color: var(--lp-ink); }
.lp-about-text > p + p { margin-top: 16px; }
.lp-pullquote {
  margin: 24px 0 0; padding: 4px 0 4px 18px; border-left: 3px solid var(--lp-primary);
  font-family: var(--lp-font-display); font-size: 22px; font-weight: 700; color: var(--lp-primary); line-height: 1.3;
}
.lp-about-text .lp-checks { margin-top: 24px; }
.lp-signature { margin-top: 20px; font-weight: 700; color: var(--lp-ink); }
.lp-about-cards { margin-top: 40px; display: grid; gap: 20px; grid-template-columns: minmax(0, 1fr); align-items: start; }
@media (min-width: 640px) { .lp-about-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.lp-photo-card { background: var(--lp-light); border-radius: var(--lp-r-lg); overflow: hidden; box-shadow: var(--lp-shadow-card); }
.lp-photo-card-body { padding: 18px 20px 20px; }
.lp-photo-card h3 { font-size: 19px; color: var(--lp-primary); }
.lp-photo-card p { margin-top: 4px; color: var(--lp-muted); font-size: 15px; }

/* ===== Pricing ===== */
.lp-pricing-grid { display: grid; gap: 32px; grid-template-columns: minmax(0, 1fr); align-items: start; }
@media (min-width: 1024px) {
  .lp-pricing-grid { grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); column-gap: 48px; row-gap: 28px; align-items: start;
    grid-template-areas: "head offers" "list offers" "cta offers"; }
  .lp-pricing-grid .lp-offers { align-self: center; }
  .lp-pricing-head { grid-area: head; } .lp-pricing-list { grid-area: list; } .lp-pricing-cta { grid-area: cta; } .lp-offers { grid-area: offers; }
}
.lp-pricing-grid > * { min-width: 0; }
.lp-pricing-head .lp-head { margin-bottom: 0; }
.lp-pricing-list h3 { font-size: 18px; margin-bottom: 14px; }
.lp-offers { background: var(--lp-dark); color: #fff; border-radius: var(--lp-r-lg); padding: 28px; box-shadow: var(--lp-shadow-card); }
@media (min-width: 1024px) { .lp-offers { padding: 32px; } }
.lp-offers-pill {
  display: inline-block; background: var(--lp-accent); color: #fff; font-size: 13px; font-weight: 700; text-transform: uppercase;
  letter-spacing: .04em; padding: 6px 14px; border-radius: 999px; font-family: var(--lp-font-display);
}
.lp-offer-tile { padding-block: 20px; border-bottom: 1px solid rgba(255,255,255,.14); }
.lp-offer-tile:first-of-type { padding-top: 22px; }
.lp-offer-title { font-family: var(--lp-font-display); font-size: 24px; font-weight: 800; color: #fff; line-height: 1.15; }
@media (min-width: 1024px) { .lp-offer-title { font-size: 26px; } }
.lp-offer-text { margin-top: 4px; color: rgba(255,255,255,.9); font-size: 16px; }
.lp-offers-pay { margin-top: 18px; color: rgba(255,255,255,.75); font-size: 14px; }
.lp-pricing-note { margin-top: 32px; text-align: center; color: var(--lp-muted); font-size: 15px; }

/* ===== Gallery ===== */
.lp-gallery-grid { display: grid; gap: 16px; grid-template-columns: minmax(0, 1fr); }
@media (min-width: 640px) { .lp-gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (min-width: 1024px) { .lp-gallery-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; } }
.lp-gtile { position: relative; border-radius: var(--lp-r-md); overflow: hidden; margin: 0; }
.lp-gtile figcaption {
  position: absolute; left: 0; right: 0; bottom: 0; padding: 40px 16px 14px;
  background: linear-gradient(to top, color-mix(in srgb, var(--lp-dark) 92%, transparent) 0%, color-mix(in srgb, var(--lp-dark) 82%, transparent) 60%, transparent 100%);
}
.lp-gtile .t { display: block; font-family: var(--lp-font-display); font-size: 12.5px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--lp-highlight); }
.lp-gtile .s { display: block; color: #fff; font-size: 15px; font-weight: 500; }

/* ===== Process ===== */
.lp-steps { display: grid; gap: 36px; grid-template-columns: minmax(0, 1fr); position: relative; }
.lp-step { text-align: center; display: flex; flex-direction: column; align-items: center; }
.lp-step-num {
  width: 48px; height: 48px; border-radius: 999px; background: var(--lp-primary); color: #fff;
  display: flex; align-items: center; justify-content: center; font-family: var(--lp-font-display); font-weight: 800; font-size: 19px;
  position: relative; z-index: 1; box-shadow: 0 0 0 6px var(--lp-step-ring, var(--lp-light));
}
.lp-step h3 { margin-top: 16px; font-size: 19px; color: var(--lp-primary); }
.lp-step p { margin-top: 8px; color: var(--lp-muted); font-size: 16px; max-width: 320px; }
.lp-tone-white .lp-step-num { --lp-step-ring: var(--lp-white); }
@media (min-width: 1024px) {
  .lp-steps { grid-template-columns: repeat(var(--lp-step-count, 4), minmax(0, 1fr)); gap: 24px; }
  .lp-steps::before {
    content: ""; position: absolute; top: 23px; height: 2px; z-index: 0;
    left: calc(100% / (var(--lp-step-count, 4) * 2)); right: calc(100% / (var(--lp-step-count, 4) * 2));
    background: color-mix(in srgb, var(--lp-primary) 25%, transparent);
  }
}

/* ===== Emergency strip ===== */
.lp-emergency { padding-block: 32px; text-align: center; }
@media (min-width: 768px) { .lp-emergency { padding-block: 40px; } }
@media (min-width: 1024px) { .lp-emergency { padding-block: 40px; } }
.lp-emergency h2.lp-em-title { font-size: clamp(24px, 20px + 1.2vw, 32px); color: #fff; font-weight: 800; line-height: 1.15; }
.lp-emergency p { margin: 10px auto 0; max-width: 640px; color: rgba(255,255,255,.9); }
.lp-emergency .lp-btn { margin-top: 20px; }

/* ===== Service area ===== */
.lp-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 900px; margin-inline: auto; }
.lp-chip {
  display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 999px; background: #fff;
  border: 1px solid color-mix(in srgb, var(--lp-primary) 14%, transparent); box-shadow: 0 1px 3px rgba(0,0,0,.04);
  color: var(--lp-ink); font-family: var(--lp-font-body); font-size: 15px; font-weight: 600; text-decoration: none; min-height: 44px;
  transition: transform .2s cubic-bezier(.2,0,0,1), box-shadow .2s cubic-bezier(.2,0,0,1), background-color .2s, border-color .2s, color .2s;
}
.lp-chip svg { width: 16px; height: 16px; color: var(--lp-primary); transition: transform .2s cubic-bezier(.2,0,0,1), color .2s; flex: none; }
@media (hover: hover) {
  .lp-chip:hover {
    background: var(--lp-primary); border-color: var(--lp-primary); color: #fff;
    box-shadow: 0 10px 22px -6px color-mix(in srgb, var(--lp-primary) 35%, transparent);
    transform: translateY(-3px) scale(1.04);
  }
  .lp-chip:hover svg { color: var(--lp-highlight); transform: scale(1.2) rotate(-8deg); }
}
.lp-chip:active { transform: translateY(-1px) scale(1.01); }
.lp-chip:focus-visible { outline: 3px solid var(--lp-primary); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) {
  .lp-chip, .lp-chip svg { transition: none; }
  .lp-chip:hover, .lp-chip:active, .lp-chip:hover svg { transform: none; }
}
.lp-area-note { margin-top: 32px; text-align: center; font-size: 16px; color: var(--lp-muted); }

/* ===== FAQ ===== */
.lp-faq { max-width: 820px; margin-inline: auto; display: flex; flex-direction: column; gap: 14px; }
.lp-faq-col { display: flex; flex-direction: column; gap: 14px; min-width: 0; }
@media (min-width: 1024px) {
  .lp-faq { max-width: 1100px; flex-direction: row; align-items: flex-start; gap: 24px; }
  .lp-faq-col { flex: 1 1 0; }
}
.lp-faq details { background: #fff; border-radius: var(--lp-r-lg); box-shadow: 0 1px 2px rgba(0,0,0,.04); border: 1px solid color-mix(in srgb, var(--lp-primary) 10%, transparent); }
.lp-faq summary {
  list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 18px 20px; font-family: var(--lp-font-display); font-size: 18px; font-weight: 700; color: var(--lp-ink); line-height: 1.3; min-height: 44px;
}
.lp-faq summary::-webkit-details-marker { display: none; }
.lp-faq summary:focus-visible { outline: 3px solid var(--lp-primary); outline-offset: 2px; border-radius: var(--lp-r-lg); }
.lp-faq-icon { position: relative; flex: none; width: 28px; height: 28px; border-radius: 999px; background: color-mix(in srgb, var(--lp-primary) 10%, transparent); color: var(--lp-primary); display: flex; align-items: center; justify-content: center; transition: transform .2s; }
.lp-faq-icon svg { width: 16px; height: 16px; }
.lp-faq-icon .minus { display: none; }
.lp-faq details[open] .lp-faq-icon { transform: rotate(180deg); }
.lp-faq details[open] .lp-faq-icon .plus { display: none; }
.lp-faq details[open] .lp-faq-icon .minus { display: block; }
.lp-faq-a { padding: 0 20px 20px; color: var(--lp-muted); font-size: 16px; }
@media (prefers-reduced-motion: reduce) { .lp-faq-icon { transition: none; } }
.lp-faq-more { margin-top: 32px; text-align: center; color: var(--lp-muted); }

/* ===== Final CTA ===== */
.lp-final-grid { display: grid; gap: 40px; grid-template-columns: minmax(0, 1fr); align-items: start; }
@media (min-width: 1024px) { .lp-final-grid { grid-template-columns: minmax(0, 1fr) 460px; gap: 56px; } }
.lp-final-grid > * { min-width: 0; }
.lp-final-copy .lp-head { margin-bottom: 0; }
.lp-final-copy .lp-checks { margin-top: 24px; }
.lp-final-copy .lp-cta-pair { margin-top: 28px; }
.lp-final-copy .lp-final-small { margin-top: 14px; font-size: 14px; color: var(--lp-on-dark-muted); }
.lp-final-form { scroll-margin-top: 16px; }

/* ===== Form ===== */
.lp-form-card {
  background: var(--lp-light); color: var(--lp-ink); border-radius: var(--lp-r-xl); padding: 24px;
  border: 1px solid color-mix(in srgb, var(--lp-primary) 12%, transparent);
}
.lp-tone-dark .lp-form-card, .lp-tone-brand .lp-form-card, .lp-hero .lp-form-card { box-shadow: var(--lp-shadow-form); border-color: transparent; }
@media (min-width: 1024px) { .lp-form-card { padding: 36px; } }
@media (max-width: 359px) { .lp-form-card { padding: 20px; } .lp-form-card .lp-btn { padding-inline: 14px; } }
.lp-form-badge {
  display: inline-flex; align-items: center; gap: 6px; padding: 5px 12px; border-radius: 999px;
  background: color-mix(in srgb, var(--lp-primary) 10%, transparent); color: var(--lp-primary);
  font-size: 12.5px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; font-family: var(--lp-font-display);
}
.lp .lp-form-card .lp-form-title { margin-top: 12px; font-size: clamp(26px, 24px + .6vw, 30px); color: var(--lp-primary); line-height: 1.1; font-weight: 800; }
.lp-form-sub { margin-top: 6px; color: var(--lp-muted); font-size: 15px; }
.lp-form { margin-top: 20px; display: flex; flex-direction: column; gap: 16px; }
.lp-field { display: flex; flex-direction: column; gap: 6px; min-width: 0; border: 0; padding: 0; margin: 0; }
.lp-label { font-size: 15px; font-weight: 600; color: var(--lp-ink); padding: 0; }
.lp-label .opt { color: var(--lp-muted); font-weight: 500; }
.lp-label .req { color: var(--lp-primary); }
.lp-input {
  width: 100%; min-width: 0; height: 50px; padding: 0 14px; font-size: 16px; color: var(--lp-ink); background: #fff;
  border: 1.5px solid color-mix(in srgb, var(--lp-ink) 22%, transparent); border-radius: var(--lp-r-md);
  transition: border-color .15s, box-shadow .15s; appearance: none; -webkit-appearance: none;
}
.lp-input::placeholder { color: #6E7772; }
select.lp-input {
  padding-right: 40px; cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235D6761' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center;
}
select.lp-input:invalid, select.lp-input.is-placeholder { color: #6E7772; }
.lp-input:focus { outline: none; border-color: var(--lp-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--lp-primary) 25%, transparent); }
.lp-input[aria-invalid="true"] { border-color: var(--lp-error); }
.lp-error { color: var(--lp-error); font-size: 14px; font-weight: 500; min-height: 0; }
.lp-error:empty { display: none; }
.lp-radios { display: flex; flex-wrap: wrap; gap: 0 24px; }
.lp-radio { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; font-size: 15px; color: var(--lp-ink); font-weight: 500; cursor: pointer; }
.lp-radio input { width: 18px; height: 18px; accent-color: var(--lp-primary); margin: 0; cursor: pointer; }
.lp-radio input:focus-visible { outline: 3px solid var(--lp-primary); outline-offset: 2px; }
.lp-callout {
  border-radius: var(--lp-r-md); padding: 12px 14px; font-size: 15px;
  background: color-mix(in srgb, var(--lp-accent) 10%, white); border: 1px solid color-mix(in srgb, var(--lp-accent) 30%, transparent); color: var(--lp-ink);
}
.lp-note { display: flex; gap: 8px; font-size: 14px; color: var(--lp-muted); }
.lp-note svg { width: 16px; height: 16px; flex: none; margin-top: 3px; color: var(--lp-primary); }
.lp-honeypot { position: absolute !important; left: -10000px !important; top: auto; width: 1px; height: 1px; overflow: hidden; }
.lp-consent { margin-top: 0; font-size: 12.5px; line-height: 1.5; color: var(--lp-muted); }
.lp-consent a { color: var(--lp-primary); }
.lp-spinner { width: 18px; height: 18px; border-radius: 999px; border: 2.5px solid rgba(255,255,255,.4); border-top-color: #fff; animation: lp-spin .8s linear infinite; flex: none; }
@keyframes lp-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .lp-spinner { animation-duration: 2s; } }
.lp-offline { color: var(--lp-error); font-size: 14px; font-weight: 500; }
.lp-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }

/* ===== Thank-you page ===== */
.lp-ty-hero { padding-top: 72px; text-align: center; }
@media (min-width: 1024px) { .lp-ty-hero { padding-top: 112px; } }
.lp-ty-check { width: 76px; height: 76px; margin: 0 auto 24px; border-radius: 999px; background: var(--lp-accent); color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: var(--lp-shadow-cta); }
.lp-ty-check svg { width: 40px; height: 40px; stroke-width: 3; }
.lp-ty-hero h1 { color: var(--lp-primary); max-width: 820px; margin-inline: auto; }
.lp-ty-sub { margin: 16px auto 0; max-width: 620px; font-size: 18px; color: var(--lp-muted); }
.lp-ty-emergency { margin: 32px auto 0; max-width: 620px; background: var(--lp-accent); color: #fff; border-radius: var(--lp-r-lg); padding: 24px; box-shadow: var(--lp-shadow-cta); }
.lp-ty-emergency p { font-family: var(--lp-font-display); font-size: 20px; font-weight: 700; }
.lp-ty-emergency .lp-btn { margin-top: 16px; }
.lp-ty-emergency .lp-btn:focus-visible { outline-color: var(--lp-white); }
.lp-save-row {
  margin-top: 48px; display: flex; flex-direction: column; align-items: center; gap: 16px; text-align: center;
  background: var(--lp-light); border-radius: var(--lp-r-lg); padding: 24px;
}
.lp-save-row p { font-weight: 600; color: var(--lp-ink); }
.lp-save-row .lp-cta-pair { margin-inline: auto; }
.lp-ty-offers { display: grid; gap: 14px; grid-template-columns: minmax(0, 1fr); max-width: 760px; margin: 20px auto 0; }
@media (min-width: 640px) { .lp-ty-offers { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.lp-ty-offer { background: color-mix(in srgb, var(--lp-highlight) 16%, transparent); border: 1px solid color-mix(in srgb, var(--lp-highlight) 40%, transparent); border-radius: var(--lp-r-md); padding: 18px 20px; text-align: center; }
.lp-ty-offer .t { font-family: var(--lp-font-display); font-size: 24px; font-weight: 800; color: var(--lp-highlight); }
.lp-ty-offer .d { color: var(--lp-on-dark); font-size: 15px; margin-top: 4px; }
.lp-ty-offerline { text-align: center; font-family: var(--lp-font-display); font-size: 20px; font-weight: 700; color: #fff; }
.lp-compact { padding-block: 40px; }
@media (min-width: 768px) { .lp-compact { padding-block: 48px; } }
@media (min-width: 1024px) { .lp-compact { padding-block: 56px; } }
.lp-cred-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
.lp-cred-chip {
  display: inline-flex; align-items: center; gap: 8px; padding: 9px 16px; border-radius: 999px; font-size: 15px; font-weight: 600;
  background: var(--lp-light); color: var(--lp-ink); border: 1px solid color-mix(in srgb, var(--lp-primary) 14%, transparent);
}
.lp-cred-chip svg { width: 16px; height: 16px; color: var(--lp-primary); flex: none; }
.lp-cred-chip span { color: var(--lp-muted); font-weight: 500; }
.lp-own-pill { background: color-mix(in srgb, var(--lp-primary) 10%, transparent); color: var(--lp-primary); border-color: transparent; }
.lp-back { display: block; margin-top: 28px; text-align: center; font-weight: 600; color: var(--lp-primary); }
.lp-ty-badge-row { display: flex; justify-content: center; margin: -16px 0 32px; }
~~~~

== END OF FILES ==
(Reference only, do not copy: the original build used @tanstack/react-router@^1.170.46, @tanstack/react-start@^1.169.5, lucide-react@^1.71.0, react@^19.3.1, react-dom@^19.3.1, zod@^4.6.7.)
