import { site } from "@/content/site";
import { EstimateLink } from "./Button";
import { CallLink } from "./CallLink";
import type { Tone } from "./Section";

/** Call + estimate pair. Call is always the call variant; estimate is brand on white/light, light elsewhere. */
export function CtaPair({
  location,
  tone,
  align = "center",
  href = "#final-form",
  callLabel,
  pulse,
  className = "",
}: {
  location: string;
  tone: Tone | "hero";
  align?: "center" | "left";
  href?: string;
  callLabel?: string;
  pulse?: boolean;
  className?: string;
}) {
  const estimateVariant = tone === "white" || tone === "light" ? "brand" : "light";
  return (
    <div className={`lp-cta-pair${align === "center" ? " lp-cta-pair--center" : ""} ${className}`.trim()}>
      <CallLink location={location} variant="call" pulse={pulse}>
        {callLabel ?? "Call Now " + site.contact.phoneDisplay}
      </CallLink>
      <EstimateLink variant={estimateVariant} location={location} href={href} />
    </div>
  );
}

export function CtaRow({ location, tone }: { location: string; tone: Tone }) {
  return (
    <div className="lp-cta-row">
      <CtaPair location={location} tone={tone} />
    </div>
  );
}
