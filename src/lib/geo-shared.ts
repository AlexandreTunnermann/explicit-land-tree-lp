import { site } from "@/content/site";

export type GeoSource = "url" | "edge" | "lookup" | "default";
export type GeoResult = { city: string; slug: string; source: GeoSource };

export const DEFAULT_GEO: GeoResult = {
  city: site.geo.defaultCity,
  slug: site.geo.defaultSlug,
  source: "default",
};
