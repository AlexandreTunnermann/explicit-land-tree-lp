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
