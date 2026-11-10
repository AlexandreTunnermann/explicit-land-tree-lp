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
