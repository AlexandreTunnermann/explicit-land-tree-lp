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
