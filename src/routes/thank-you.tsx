import { Link, createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Check, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/lp/Button";
import { CallLink } from "@/components/lp/CallLink";
import { CityName } from "@/components/lp/CityName";
import { Footer } from "@/components/lp/Footer";
import { GoogleRatingBadge } from "@/components/lp/GoogleRatingBadge";
import { Header } from "@/components/lp/Header";
import { Container, Section } from "@/components/lp/Section";
import { SectionHead } from "@/components/lp/SectionHead";
import { Steps } from "@/components/sections/LandingB";
import { ReviewCard } from "@/components/sections/ReviewCard";
import { site } from "@/content/site";
import { resolveGeo } from "@/lib/geo";
import { GeoProvider, readStoredGeo } from "@/lib/geo-context";
import { LEAD_STORAGE_KEY } from "@/lib/submit-lead";

export const Route = createFileRoute("/thank-you")({
  loader: async () => {
    const stored = readStoredGeo();
    if (stored) return { geo: stored };
    return { geo: await resolveGeo({ data: {} }) };
  },
  component: ThankYou,
});

type LeadHandoff = {
  first_name?: string;
  service_needed?: string;
  storm_emergency?: string;
  lead_type?: string;
  ts?: number;
};

const EMERGENCY_TEXT = "Is this an emergency? Don't wait for our call. Call us now:";
const OFFER_LINE = "Don't forget your new-customer offer:";

function saveVCard() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${site.business.name}`,
    `ORG:${site.business.legalName}`,
    `TEL;TYPE=WORK,VOICE:${site.contact.phoneE164}`,
    `URL:${site.business.website}`,
    "END:VCARD",
  ];
  const blob = new Blob([lines.join("\r\n") + "\r\n"], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${site.business.shortName}.vcf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function ThankYou() {
  const { geo } = Route.useLoaderData();
  const [lead, setLead] = useState<LeadHandoff | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(LEAD_STORAGE_KEY);
      if (raw) setLead(JSON.parse(raw) as LeadHandoff);
    } catch {
      setLead(null);
    }
  }, []);

  const firstName = lead?.first_name?.trim();
  const urgent = lead?.storm_emergency === "Yes, urgent";
  const paid = lead?.lead_type === "paid_service" && !!site.services.paidNote;

  return (
    <GeoProvider value={geo}>
      <div className="lp">
        <a className="lp-skip" href="#content">
          Skip to content
        </a>
        <Header page="thank_you" />
        <main id="content" tabIndex={-1}>
          {/* 4.1 Confirmation */}
          <Section tone="light" className="lp-ty-hero">
            <Container>
              <div className="lp-ty-check" aria-hidden="true">
                <Check />
              </div>
              <h1>
                Thank You{firstName ? `, ${firstName}` : ""}. Your Request Is In.
              </h1>
              <p className="lp-ty-sub">
                We'll call you back fast to set up your free estimate in <CityName />.
              </p>
              {paid ? <p className="lp-ty-sub lp-small">{site.services.paidNote}</p> : null}
              {urgent ? (
                <div className="lp-ty-emergency">
                  <p>{EMERGENCY_TEXT}</p>
                  <CallLink location="thank_you_emergency" variant="light">
                    {site.contact.phoneDisplay}
                  </CallLink>
                </div>
              ) : null}
            </Container>
          </Section>

          {/* 4.2 What happens next */}
          <Section tone="white">
            <Container>
              <SectionHead title="What Happens Next" />
              <Steps
                steps={[
                  { t: "We Review Your Request", d: "We look over the details you sent, so we're ready when we call." },
                  { t: "We Call to Schedule", d: "We set up your free on-site or virtual estimate at a time that works for you." },
                  { t: "A Clear Price First", d: "You get a flat-rate price before any work starts. What we quote is what you pay." },
                ]}
              />
              <div className="lp-save-row">
                <p>Save our number so you know it's us when we call.</p>
                <div className="lp-cta-pair lp-cta-pair--center">
                  <Button type="button" variant="brand" icon="arrow" onClick={saveVCard}>
                    Save Our Number
                  </Button>
                  <CallLink location="thank_you" variant="call">
                    {"Call " + site.contact.phoneDisplay}
                  </CallLink>
                </div>
              </div>
            </Container>
          </Section>

          {/* 4.3 Reviews */}
          <Section tone="light">
            <Container>
              <SectionHead title="What Our Customers Say" />
              {site.rating.show ? (
                <div className="lp-ty-badge-row">
                  <GoogleRatingBadge />
                </div>
              ) : null}
              <div className="lp-review-grid">
                {site.reviews.thankYou.slice(0, 3).map((r) => (
                  <ReviewCard key={r.name} review={r} />
                ))}
              </div>
            </Container>
          </Section>

          {/* 4.4 Offer reminder */}
          {site.offers.length ? (
            <Section tone="brand" className="lp-compact">
              <Container>
                <p className="lp-ty-offerline">{OFFER_LINE}</p>
                <div className="lp-ty-offers">
                  {site.offers.map((o) => (
                    <div className="lp-ty-offer" key={o.title}>
                      <div className="t">{o.title}</div>
                      <div className="d">{o.text}</div>
                    </div>
                  ))}
                </div>
              </Container>
            </Section>
          ) : null}

          {/* 4.5 Credentials strip */}
          <Section tone="white" className="lp-compact">
            <Container>
              <div className="lp-cred-chips">
                {site.credentials.map((c) => (
                  <span className="lp-cred-chip" key={c.label}>
                    <BadgeCheck aria-hidden="true" />
                    {c.label}
                    {c.detail ? <span>({c.detail})</span> : null}
                  </span>
                ))}
                {site.ownership.map((o) => (
                  <span className="lp-cred-chip lp-own-pill" key={o}>
                    <Heart aria-hidden="true" />
                    {o}
                  </span>
                ))}
              </div>
              <Link to="/" className="lp-back">
                Back to home
              </Link>
            </Container>
          </Section>
        </main>
        <Footer page="thank_you" />
      </div>
    </GeoProvider>
  );
}
