import type { ReactNode } from "react";
import { site } from "@/content/site";
import { trackPhoneClick } from "@/lib/analytics";
import { telHref } from "@/lib/format";
import { BtnContent, btnClass, type BtnVariant } from "./Button";

/**
 * Every tel: link on the site. Default: a plain bold inline link (no button classes, no icon).
 * With `variant`, it renders as a button (base + variant) with the single filled phone icon.
 */
export function CallLink({
  location,
  className,
  children,
  variant,
  block,
  compact,
  pulse,
}: {
  location: string;
  className?: string;
  children?: ReactNode;
  variant?: BtnVariant;
  block?: boolean;
  compact?: boolean;
  pulse?: boolean;
}) {
  const onClick = () => trackPhoneClick(location);
  if (variant) {
    return (
      <a href={telHref()} className={btnClass(variant, { block, compact, pulse, className })} onClick={onClick}>
        <BtnContent icon="phone">{children ?? "Call Now " + site.contact.phoneDisplay}</BtnContent>
      </a>
    );
  }
  return (
    <a href={telHref()} className={`lp-calllink ${className ?? ""}`.trim()} onClick={onClick}>
      {children ?? site.contact.phoneDisplay}
    </a>
  );
}
