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
