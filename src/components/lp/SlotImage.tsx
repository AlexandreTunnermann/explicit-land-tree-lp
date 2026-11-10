import { ImageIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { images, type SlotKey } from "@/content/images";

const BACKGROUND_SLOTS: ReadonlySet<string> = new Set(["hero", "service_1", "service_2", "service_3", "service_4"]);

export function SlotImage({
  slot,
  ratio,
  className = "",
  priority,
  chipPosition,
  fill,
}: {
  slot: SlotKey;
  ratio?: string;
  className?: string;
  priority?: boolean;
  /** Background slots: where the small chip goes while empty. */
  chipPosition?: "bottom-right" | "top-right";
  /** Fill the parent instead of using an aspect ratio. */
  fill?: boolean;
}) {
  const data = images[slot];
  const style: CSSProperties = fill ? { height: "100%" } : ratio ? { aspectRatio: ratio } : {};
  const mobileKey = `${slot}_mobile` as SlotKey;
  const mobile = mobileKey in images ? images[mobileKey] : undefined;

  if (!data.src) {
    if (slot === "logo") return null;
    if (BACKGROUND_SLOTS.has(slot)) {
      return (
        <div className={`lp-slot lp-slot--empty ${className}`.trim()} style={style}>
          <span
            className="lp-slot-chip"
            aria-hidden="true"
            style={chipPosition === "top-right" ? { top: 16, right: 16 } : { bottom: 16, right: 16 }}
          >
            Photo: {data.label}
          </span>
        </div>
      );
    }
    return (
      <div className={`lp-slot lp-slot--empty ${className}`.trim()} style={style} aria-hidden="true">
        <ImageIcon width={28} height={28} />
        <span>Photo: {data.label}</span>
      </div>
    );
  }

  const imgEl = (
    <img
      src={data.src}
      alt={data.alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
    />
  );

  return (
    <div className={`lp-slot ${className}`.trim()} style={style}>
      {mobile && mobile.src ? (
        <picture>
          <source media="(max-width: 1023px)" srcSet={mobile.src} />
          {imgEl}
        </picture>
      ) : (
        imgEl
      )}
    </div>
  );
}
