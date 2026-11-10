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
