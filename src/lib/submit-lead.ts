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
