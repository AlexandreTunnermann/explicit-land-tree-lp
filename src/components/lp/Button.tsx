import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { trackCta } from "@/lib/analytics";

export type BtnVariant = "call" | "brand" | "light";
export type BtnIcon = "phone" | "arrow" | "none";

export function btnClass(
  variant: BtnVariant,
  opts: { block?: boolean; compact?: boolean; pulse?: boolean; className?: string } = {},
): string {
  return [
    "lp-btn",
    `lp-btn--${variant}`,
    opts.block && "lp-btn--block",
    opts.compact && "lp-btn--compact",
    opts.pulse && "lp-btn--pulse",
    opts.className,
  ]
    .filter(Boolean)
    .join(" ");
}

/** Filled phone glyph (fill currentColor). */
export function PhoneFilled({ className = "lp-ico-phone" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export function BtnContent({ icon, children }: { icon: BtnIcon; children: ReactNode }) {
  return (
    <>
      {icon === "phone" ? <PhoneFilled /> : null}
      <span>{children}</span>
      {icon === "arrow" ? <ArrowRight className="lp-ico-arrow" strokeWidth={2.5} aria-hidden="true" /> : null}
    </>
  );
}

type CommonProps = {
  variant: BtnVariant;
  icon?: BtnIcon;
  block?: boolean;
  compact?: boolean;
  pulse?: boolean;
  className?: string;
  children: ReactNode;
};

/** A real <button>. */
export function Button({
  variant,
  icon = "none",
  block,
  compact,
  pulse,
  className,
  children,
  ...rest
}: CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">) {
  return (
    <button className={btnClass(variant, { block, compact, pulse, className })} {...rest}>
      <BtnContent icon={icon}>{children}</BtnContent>
    </button>
  );
}

/** An anchor styled as a button. */
export function ButtonLink({
  variant,
  icon = "none",
  block,
  compact,
  pulse,
  className,
  children,
  ...rest
}: CommonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">) {
  return (
    <a className={btnClass(variant, { block, compact, pulse, className })} {...rest}>
      <BtnContent icon={icon}>{children}</BtnContent>
    </a>
  );
}

/** "Get My Free Estimate" anchor to a form; tracks cta_click, never preventDefault. */
export function EstimateLink({
  variant,
  location,
  href = "#final-form",
  label = "Get My Free Estimate",
  compact,
  className,
}: {
  variant: "brand" | "light";
  location: string;
  href?: string;
  label?: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <ButtonLink
      variant={variant}
      icon="arrow"
      href={href}
      compact={compact}
      className={className}
      onClick={() => trackCta(label, location)}
    >
      {label}
    </ButtonLink>
  );
}
