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
