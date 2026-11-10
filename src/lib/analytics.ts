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
