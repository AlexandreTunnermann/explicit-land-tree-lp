import { site } from "@/content/site";
import { GoogleG } from "./GoogleG";
import { Stars } from "./Stars";

export function GoogleRatingBadge({ dark, className = "" }: { dark?: boolean; className?: string }) {
  if (!site.rating.show) return null;
  const text = site.rating.reviewCountLabel
    ? `Rated on Google • ${site.rating.reviewCountLabel} reviews`
    : "5-Star Rated on Google";
  return (
    <div className={`lp-rating-badge${dark ? " lp-rating-badge--dark" : ""} ${className}`.trim()}>
      <span className="lp-g-circle">
        <GoogleG size={18} />
      </span>
      <Stars count={site.rating.stars} />
      <span className="lp-rb-score">{site.rating.score}</span>
      <span className="lp-rb-text">{text}</span>
    </div>
  );
}
