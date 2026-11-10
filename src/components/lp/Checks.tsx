import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function Checks({ items, variant, className = "" }: { items: ReactNode[]; variant?: "white"; className?: string }) {
  return (
    <ul className={`lp-checks${variant === "white" ? " lp-checks--white" : ""} ${className}`.trim()}>
      {items.map((item, i) => (
        <li key={i}>
          <Check className="lp-check-ico" strokeWidth={3} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
