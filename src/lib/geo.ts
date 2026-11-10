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
