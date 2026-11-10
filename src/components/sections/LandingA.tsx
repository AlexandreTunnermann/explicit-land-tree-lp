import { ArrowRight, BadgeCheck, Clock, Home, MessageSquare, Receipt, ShieldCheck } from "lucide-react";
import { EstimateForm } from "@/components/EstimateForm";
import { Checks } from "@/components/lp/Checks";
import { CityName } from "@/components/lp/CityName";
import { CtaPair, CtaRow } from "@/components/lp/CtaPair";
import { GoogleG } from "@/components/lp/GoogleG";
import { GoogleRatingBadge } from "@/components/lp/GoogleRatingBadge";
import { Container, Section } from "@/components/lp/Section";
import { SectionHead } from "@/components/lp/SectionHead";
import { SlotImage } from "@/components/lp/SlotImage";
import { StarIcon, Stars } from "@/components/lp/Stars";
import { hasImage, type SlotKey } from "@/content/images";
import { site } from "@/content/site";
import { trackCta } from "@/lib/analytics";
import { useEstimate } from "@/lib/estimate-store";
import { ReviewCard } from "./ReviewCard";

/* ---------- 2.1 Hero ---------- */
export function Hero() {
  const hasHero = hasImage("hero");
  return (
    <section id="hero" className="lp-section lp-tone-dark lp-hero">
      <div className={`lp-hero-media${hasHero ? "" : " lp-hero-media--empty"}`}>
        {hasHero ? <SlotImage slot="hero" fill priority /> : null}
      </div>
      <div className="lp-hero-overlay" aria-hidden="true" />
      <Container>
        <div className="lp-hero-grid">
          <div className="lp-hero-copy">
            <span className="lp-eyebrow">
              <span className="lp-eyebrow-dot" aria-hidden="true" />
              Family-Owned • 24/7 Emergency Service
            </span>
            <h1>
              Tree Removal in{" "}
              <span className="lp-h1-loc">
                <CityName />, {site.geo.state}
              </span>
            </h1>
            <p className="lp-hero-sub">
              Tree removal, land clearing and forestry mulching from a hands-on, five-person crew with specialized
              equipment. Free estimates on every job.
            </p>
            <Checks
              items={[
                "Free On-Site or Virtual Estimates",
                "Licensed, Bonded & Fully Insured",
                "No-Surprise Guarantee on Every Quote",
                "50 Years' Combined Team Experience",
              ]}
            />
            {site.rating.show ? <GoogleRatingBadge dark /> : null}
            <CtaPair
              location="hero"
              tone="hero"
              align="left"
              href="#hero-form"
              pulse
              className={site.rating.show ? "" : "lp-cta-pair--nochip"}
            />
          </div>
          <div id="hero-form" className="lp-hero-form">
            <EstimateForm placement="hero" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- 2.2 Reviews ---------- */
export function Reviews() {
  return (
    <Section id="reviews" tone="light">
      <Container>
        <div className="lp-reviews-top">
          <span className="lp-g-circle">
            <GoogleG size={28} />
          </span>
        </div>
        <SectionHead
          label="Google Reviews"
          title={
            <>
              5-Star Google Reviews, Serving <CityName />
            </>
          }
        />
        {site.rating.show ? (
          <div className="lp-rating-summary">
            <span className="lp-rs-score">{site.rating.score}</span>
            <Stars count={site.rating.stars} label={`${site.rating.score} out of 5 stars`} />
            <span className="lp-rs-text">{site.rating.reviewCountLabel} reviews on Google</span>
          </div>
        ) : null}
        <div className="lp-review-grid">
          {site.reviews.featured.slice(0, 6).map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
        <CtaRow location="reviews" tone="light" />
      </Container>
    </Section>
  );
}

/* ---------- 2.3 Stats ---------- */
export function Stats() {
  const stats = site.stats;
  if (!stats.length) return null;
  return (
    <Section id="stats" tone="brand" className="lp-stats" aria-label="At a glance">
      <Container>
        <div className={`lp-stats-grid${stats.length < 4 ? " lp-stats-grid--few" : ""}`}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className="lp-stat-value">
                {s.value}
                {s.icon === "star" ? <StarIcon /> : null}
              </div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- 2.4 Services ---------- */
const SERVICES: { title: string; text: string; option: string; slot: SlotKey; badge: string }[] = [
  {
    title: "Tree Removal",
    text: "Safe removal of dead, leaning and hazardous trees, even close to your house, with crane-assisted removal when the job calls for it.",
    option: "Tree Removal",
    slot: "service_1",
    badge: "Free Estimate",
  },
  {
    title: "Land & Lot Clearing",
    text: "Clear overgrown land, wooded lots and building sites with skid steers, excavators and dump trucks, then haul the debris away.",
    option: "Land & Lot Clearing",
    slot: "service_2",
    badge: "none",
  },
  {
    title: "24/7 Emergency Storm Cleanup",
    text: "Storm put a tree on your house, car or driveway? Call us day or night for emergency tree removal and storm cleanup.",
    option: "Tree Removal (emergency)",
    slot: "service_3",
    badge: "24/7",
  },
  {
    title: "Forestry Mulching",
    text: "We grind thick brush and small trees into mulch where they stand, to open up land, trails and views.",
    option: "Forestry Mulching",
    slot: "service_4",
    badge: "none",
  },
];

export function Services() {
  const { preselectService } = useEstimate();
  return (
    <Section id="services" tone="white">
      <Container>
        <SectionHead
          label="Our Services"
          title="Tree Removal and Land Services Across North Georgia"
          lead="From one leaning tree to acres of overgrown land, we bring the right equipment for the job. Every estimate is free, on-site or virtual."
        />
        <div className="lp-services-grid">
          {SERVICES.map((s) => {
            const emergency = s.option.endsWith(" (emergency)");
            const label = emergency ? s.option.slice(0, -" (emergency)".length) : s.option;
            return (
              <article className="lp-svc" key={s.title}>
                <div className="lp-svc-media">
                  {hasImage(s.slot) ? <SlotImage slot={s.slot} fill /> : null}
                </div>
                {s.badge !== "none" ? <span className="lp-svc-badge">{s.badge}</span> : null}
                <div className="lp-svc-body">
                  <h3 className="lp-svc-title">{s.title}</h3>
                  <p className="lp-svc-text">{s.text}</p>
                  <button
                    type="button"
                    className="lp-svc-link"
                    onClick={() => {
                      trackCta("Service: " + s.title, "services");
                      preselectService(label, emergency ? { emergency: true } : undefined);
                    }}
                  >
                    Get My Estimate
                    <ArrowRight aria-hidden="true" strokeWidth={2.5} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <p className="lp-svc-also">Also available: brush hogging, pesticide application and vista pruning.</p>
        <CtaRow location="services" tone="white" />
      </Container>
    </Section>
  );
}

/* ---------- 2.5 Why Us ---------- */
const BENEFITS = [
  { t: "No-Surprise Guarantee", d: "What we quote is what you pay. With flat-rate pricing, the price we agree on is the price you pay.", I: Receipt },
  { t: "Workmanship Guarantee", d: "We stand behind our work and guarantee you'll be satisfied with it.", I: ShieldCheck },
  { t: "Respectful of Your Property", d: "We clean up when the job is done, and we never touch anyone else's property while we work.", I: Home },
  { t: "Clear, Prompt Communication", d: "You'll know the plan, the price and the schedule before we start, and we call you back fast.", I: MessageSquare },
  { t: "Licensed, Bonded & Insured", d: "Fully insured with $2 million in coverage, for your peace of mind on every job.", I: BadgeCheck },
  { t: "24/7 Emergency Service", d: "Storm damage doesn't wait for business hours, and neither do we. Call day or night.", I: Clock },
];

export function WhyUs() {
  return (
    <Section id="why-us" tone="light">
      <Container>
        <SectionHead
          label="Why Choose Us"
          title="Why North Georgia Homeowners Call Explicit"
          lead="A hands-on owner, a careful crew and clear pricing. Here's what you can count on when we work on your property."
        />
        <div className="lp-card-grid">
          {BENEFITS.map(({ t, d, I }) => (
            <div className="lp-benefit" key={t}>
              <div className="lp-icon-tile">
                <I aria-hidden="true" />
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        <CtaRow location="why-us" tone="light" />
      </Container>
    </Section>
  );
}
