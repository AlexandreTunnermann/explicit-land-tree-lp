import { Construction, HardHat, MapPin, Minus, Plus, Trees, Truck } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { EstimateForm } from "@/components/EstimateForm";
import { CallLink } from "@/components/lp/CallLink";
import { Checks } from "@/components/lp/Checks";
import { CityName } from "@/components/lp/CityName";
import { CtaPair, CtaRow } from "@/components/lp/CtaPair";
import { Container, Section } from "@/components/lp/Section";
import { SectionHead } from "@/components/lp/SectionHead";
import { SlotImage } from "@/components/lp/SlotImage";
import { hasImage, type SlotKey } from "@/content/images";
import { site } from "@/content/site";
import { trackCta } from "@/lib/analytics";

/** Renders {phone} as an inline CallLink and {city} as <CityName/>. */
function Tokens({ text, location }: { text: string; location: string }) {
  const parts = text.split(/(\{phone\}|\{city\})/g);
  return (
    <>
      {parts.map((p, i) =>
        p === "{phone}" ? (
          <CallLink key={i} location={location} />
        ) : p === "{city}" ? (
          <CityName key={i} />
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  );
}

/* ---------- 3.1 Difference ---------- */
const POINTS = [
  { t: "CMC Arbor Pro Lifts", d: "Lift access for high limbs and tight spots, where it's the safer choice.", I: Construction },
  { t: "Crane-Assisted Removal", d: "For big trees close to the house, sections come down under control.", I: HardHat },
  { t: "Chippers and Dump Trucks", d: "Brush is chipped and debris is hauled off, so your property is left clean.", I: Truck },
  { t: "Skid Steers and Excavators", d: "Heavy machines for land clearing, log handling and site work.", I: Trees },
];

export function Difference() {
  return (
    <Section id="difference" tone="dark">
      <Container>
        <SectionHead label="The Explicit Difference" title="The Right Equipment for Every Job" />
        <div className="lp-diff-main">
          <div className="lp-diff-text">
            <p>
              Tight backyards, steep North Georgia slopes and trees leaning over the house all need a different approach.
              Our fleet includes CMC Arbor Pro lifts, 21-inch chippers, skid steers, excavators, dump trailers and dump
              trucks.
            </p>
            <p>
              The right machine for the job means safer work around your house, driveway and landscaping. Tree work is
              dangerous, so our crew wears proper safety gear on every job, and we plan each removal around what's nearby.
            </p>
          </div>
          {hasImage("signature") ? (
            <div className="lp-diff-photo">
              <SlotImage slot="signature" ratio="4 / 3" />
              <span className="lp-photo-chip">Tree and land clearing equipment</span>
            </div>
          ) : null}
        </div>
        <div className="lp-points">
          {POINTS.map(({ t, d, I }) => (
            <div className="lp-point" key={t}>
              <div className="lp-icon-tile">
                <I aria-hidden="true" />
              </div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
        {/* Credential badges row: "none" for this client. */}
        <CtaRow location="difference" tone="dark" />
      </Container>
    </Section>
  );
}

/* ---------- 3.2 About ---------- */
const ABOUT_CARDS: { slot: SlotKey; t: string; d: string }[] = [
  { slot: "family", t: "Our Crew", d: "A five-person crew that takes pride in professional, safe work." },
  { slot: "about_work", t: "Cutting and Cleanup", d: "Downed trees cut into sections and cleared away." },
];

export function About() {
  const hasOwner = hasImage("owner");
  return (
    <Section id="about" tone="white">
      <Container>
        <SectionHead label="Meet the Family" title="Meet Tyler Wilkie and the Explicit Crew" />
        <div className="lp-about-main" style={hasOwner ? undefined : { gridTemplateColumns: "minmax(0, 1fr)" }}>
          {hasOwner ? (
            <div className="lp-about-photo">
              <SlotImage slot="owner" ratio="4 / 5" />
              <span className="lp-photo-chip">
                {site.business.owner.name}, {site.business.owner.role}
              </span>
            </div>
          ) : null}
          <div className="lp-about-text">
            <p>
              Tyler Wilkie grew up around machine operators and loggers. After tree work for a power company, he spent two
              years with a residential tree company before he left to start his own business, Explicit Land & Tree
              Services.
            </p>
            <p>
              Nine years later, Tyler is still hands-on, working alongside his locally owned, five-person crew. He takes
              pride in their professionalism, safety and honest advice, and he recommends only the work you need.
              Customers often mention clear communication and a clean job site.
            </p>
            <blockquote className="lp-pullquote">What we quote is what you pay.</blockquote>
            <Checks
              items={[
                "9 years in business and 1,500+ jobs completed",
                "Family-owned and locally owned",
                "Hands-on owner who works with the crew",
                "Proud sponsor of a Gilmer County high school baseball team",
              ]}
            />
            <p className="lp-signature">Tyler Wilkie, Owner</p>
          </div>
        </div>
        <div className="lp-about-cards">
          {ABOUT_CARDS.map((c) => (
            <div className="lp-photo-card" key={c.t}>
              {hasImage(c.slot) ? <SlotImage slot={c.slot} ratio="4 / 3" /> : null}
              <div className="lp-photo-card-body">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
        <CtaRow location="about" tone="white" />
      </Container>
    </Section>
  );
}

/* ---------- 3.3 Pricing ---------- */
export function Pricing() {
  const showOffers = site.offers.length > 0 || site.discounts.length > 0;
  return (
    <Section id="pricing" tone="light">
      <Container>
        <div className="lp-pricing-grid">
          <div className="lp-pricing-head">
            <SectionHead
              align="left"
              label="Pricing"
              title="Straightforward Pricing. No Surprises."
              lead="Every estimate is free, on-site or virtual. We look at the job, explain the work and give you a clear, flat-rate price before anything starts. What we quote is what you pay."
            />
          </div>
          <div className="lp-pricing-list">
            <h3>What's included</h3>
            <Checks
              items={[
                "Free on-site or virtual estimate",
                "Flat-rate price, agreed before work begins",
                "No-Surprise Guarantee: what we quote is what you pay",
                "Cleanup when the job is done",
                "Weekend appointments by request",
              ]}
            />
          </div>
          {showOffers ? (
            <div className="lp-offers">
              <span className="lp-offers-pill">New customer offers</span>
              {site.offers.map((o) => (
                <div className="lp-offer-tile" key={o.title}>
                  <div className="lp-offer-title">{o.title}</div>
                  <div className="lp-offer-text">{o.text}</div>
                </div>
              ))}
              {site.discounts.length ? (
                <div className="lp-offer-tile">
                  <div className="lp-offer-text">Discounts for military and first responders.</div>
                </div>
              ) : null}
              <p className="lp-offers-pay">We accept: {site.payments.join(", ")}</p>
            </div>
          ) : null}
          <div className="lp-pricing-cta">
            <CtaPair location="pricing" tone="light" align="left" href="#final-form" />
          </div>
        </div>
        <p className="lp-pricing-note">{site.services.freeNote}</p>
      </Container>
    </Section>
  );
}

/* ---------- 3.4 Gallery ---------- */
const GALLERY: { slot: SlotKey; t: string; s: string }[] = [
  { slot: "gallery_1", t: "Crane-Assisted Removal", s: "Lifting sections near a home" },
  { slot: "gallery_2", t: "Climbing Removal", s: "Taking a tree down in sections" },
  { slot: "gallery_3", t: "Lift-Assisted Removal", s: "Reaching a dead tree safely" },
  { slot: "gallery_4", t: "Storm Cleanup", s: "Emergency work after dark" },
  { slot: "gallery_5", t: "Log Removal", s: "Moving logs off the property" },
  { slot: "gallery_6", t: "Tree Felling", s: "Notching a large trunk" },
];

export function Gallery() {
  const tiles = GALLERY.filter((g) => hasImage(g.slot));
  if (tiles.length < 3) return null;
  return (
    <Section id="gallery" tone="white">
      <Container>
        <SectionHead
          label="Our Work"
          title="See Our Work"
          lead="Real photos from our crew: tree removal, storm cleanup and land clearing across North Georgia."
        />
        <div className="lp-gallery-grid">
          {tiles.map((g) => (
            <figure className="lp-gtile" key={g.slot}>
              <SlotImage slot={g.slot} ratio="4 / 3" />
              <figcaption>
                <span className="t">{g.t}</span>
                <span className="s">{g.s}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <CtaRow location="gallery" tone="white" />
      </Container>
    </Section>
  );
}

/* ---------- 3.5 Process ---------- */
export function Steps({ steps }: { steps: { t: string; d: string }[] }) {
  return (
    <ol className="lp-steps" style={{ ["--lp-step-count" as string]: steps.length, listStyle: "none", padding: 0, margin: 0 }}>
      {steps.map((s, i) => (
        <li className="lp-step" key={s.t}>
          <span className="lp-step-num" aria-hidden="true">
            {i + 1}
          </span>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function Process() {
  return (
    <Section id="process" tone="light">
      <Container>
        <SectionHead label="How It Works" title="A Simple, Four-Step Process" />
        <Steps
          steps={[
            { t: "Tell Us What You Need", d: "Call or send the form. Photos of the tree or land help us understand the job." },
            { t: "Free Estimate", d: "We look at the job on-site or virtually and explain what it takes." },
            {
              t: "Clear Price and Schedule",
              d: "You get a flat-rate price and a date before any work starts. Weekend appointments by request.",
            },
            { t: "We Do the Work", d: "Our crew does the job safely, then cleans up before we leave." },
          ]}
        />
        <CtaRow location="process" tone="light" />
      </Container>
    </Section>
  );
}

/* ---------- 3.6 Emergency ---------- */
export function Emergency() {
  return (
    <section id="emergency" className="lp-section lp-tone-accent lp-emergency">
      <Container>
        <h2 className="lp-em-title">Tree Down After a Storm? We're Available 24/7.</h2>
        <p>
          A tree on your house, car or driveway can't wait. Call us day or night for emergency tree removal and storm
          cleanup.
        </p>
        <CallLink location="emergency" variant="light">
          {"Call " + site.contact.phoneDisplay}
        </CallLink>
      </Container>
    </section>
  );
}

/* ---------- 3.7 Service area ---------- */
export function ServiceArea() {
  return (
    <Section id="service-area" tone="white">
      <Container>
        <SectionHead
          label="Service Area"
          title={
            <>
              Serving <CityName /> and the Surrounding Area
            </>
          }
          lead="Based in Ellijay, we serve homes, land and lots across these nine North Georgia counties."
        />
        <div className="lp-chips">
          {site.geo.cities.map((c) => (
            <a
              key={c.slug}
              className="lp-chip"
              href="#hero-form"
              title={`Tree service in ${c.name}, ${site.geo.state}`}
              onClick={() => trackCta("Area: " + c.name, "service-area")}
            >
              <MapPin aria-hidden="true" />
              {c.name}
            </a>
          ))}
        </div>
        <p className="lp-area-note">
          Not sure if we cover your area? Call <CallLink location="service-area" />.
        </p>
        <CtaRow location="service-area" tone="white" />
      </Container>
    </Section>
  );
}

/* ---------- 3.8 FAQ ---------- */
const FAQ: { q: string; a: string }[] = [
  {
    q: "Do you offer 24/7 emergency tree service?",
    a: "Yes. Storms don't keep business hours, so we offer 24/7 emergency service. If a tree has fallen on your house, car, driveway or fence, call {phone} day or night. Stay clear of the tree and any downed power lines, and tell us what you see. We'll help you with emergency tree removal and storm cleanup in {city} and across our service area.",
  },
  {
    q: "Are your estimates free?",
    a: "Yes. Estimates are free on all of our services, including tree removal, land and lot clearing, forestry mulching and storm cleanup. We can do your estimate on-site, or virtually from photos and a call. You get a clear, flat-rate price before any work starts, and our No-Surprise Guarantee means what we quote is what you pay.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Explicit Land & Tree Services is licensed, bonded and fully insured, with $2 million in insurance coverage. Tree work is dangerous, so insurance matters: it protects you and your property while we work. Our crew also wears proper safety gear on every job. Ask us for proof of insurance during your free estimate.",
  },
  {
    q: "Can you safely remove a tree that's close to my house?",
    a: "Yes. Trees leaning over a roof, deck or driveway are some of our most common jobs. We plan each removal around what's nearby and use the right equipment for the space, such as CMC Arbor Pro lifts for high limbs and crane-assisted removal for big trees near the house. Sections come down under control instead of falling where they want.",
  },
  {
    q: "Should I save my tree or remove it?",
    a: "It depends on the tree. Dead trees, trees leaning toward your house, and trees with large cracks, hollow trunks or rot at the base are often safer to remove. A tree that looks healthy may only need a closer look. During your free estimate we'll give you honest advice and recommend only the work you actually need.",
  },
  {
    q: "Do you clear land and building lots?",
    a: "Yes. We clear overgrown land, wooded lots and building sites with skid steers, excavators, chippers, dump trailers and dump trucks. We can take trees down, clear brush, use forestry mulching or brush hogging where it fits, and haul the debris away. Tell us your plans for the land, and we'll recommend the right approach for your lot.",
  },
  {
    q: "What is forestry mulching?",
    a: "Forestry mulching uses a machine with a grinding head to turn brush, undergrowth and small trees into mulch right where they stand. It clears land without piling and hauling every branch, and the mulch layer helps cover the ground. It works well for opening up overgrown lots, trails, fence lines and views. We'll tell you during your estimate if it fits your property.",
  },
  {
    q: "What payment methods do you accept, and do you offer discounts?",
    a: "We accept cash, debit, check, Visa, Mastercard, PayPal and Venmo. We offer discounts for military and first responders, and new customers can save 5% on any service over $1,000 or $100 on same-day hire or service. Ask about the discount that applies to you when you call {phone} or request your free estimate.",
  },
  {
    q: "What areas do you serve?",
    a: "We're a local, family-owned company serving nine North Georgia counties: Gilmer, Fannin, Gordon, Pickens, Cherokee, Dawson, Bartow, Lumpkin and Union. We cover many communities in each, but not always every road in every county. Not sure if we cover your property? Call {phone} with your address and we'll let you know right away.",
  },
];

function FaqItem({ q, a, open }: { q: string; a: string; open: boolean }) {
  return (
    <details open={open || undefined}>
      <summary>
        <span>{q}</span>
        <span className="lp-faq-icon" aria-hidden="true">
          <Plus className="plus" strokeWidth={2.5} />
          <Minus className="minus" strokeWidth={2.5} />
        </span>
      </summary>
      <p className="lp-faq-a">
        <Tokens text={a} location="faq" />
      </p>
    </details>
  );
}

export function Faq() {
  const half = Math.ceil(FAQ.length / 2);
  const cols = [FAQ.slice(0, half), FAQ.slice(half)];
  return (
    <Section id="faq" tone="light">
      <Container>
        <SectionHead label="FAQ" title="Common Questions" />
        <div className="lp-faq">
          {cols.map((col, ci) => (
            <div className="lp-faq-col" key={ci}>
              {col.map((item, i) => (
                <FaqItem key={item.q} q={item.q} a={item.a} open={ci === 0 && i === 0} />
              ))}
            </div>
          ))}
        </div>
        <p className="lp-faq-more">
          Still have a question? Call <CallLink location="faq" />
        </p>
        <CtaRow location="faq" tone="light" />
      </Container>
    </Section>
  );
}

/* ---------- 3.9 Final CTA ---------- */
export function FinalCta(): ReactNode {
  return (
    <Section id="estimate" tone="brand">
      <Container>
        <div className="lp-final-grid">
          <div className="lp-final-copy">
            <SectionHead
              align="left"
              label="Ready When You Are"
              title={
                <>
                  Get Your Free Tree Estimate in <CityName />
                </>
              }
              lead="Tell us about your trees or land. We'll call you back fast with next steps and set up your free on-site or virtual estimate."
            />
            <Checks variant="white" items={["No-Surprise Guarantee", "Licensed, Bonded & Fully Insured", "Family-Owned & Locally Owned"]} />
            <CtaPair location="estimate" tone="brand" align="left" href="#final-form" />
            <p className="lp-final-small">Prefer to talk? We answer 24/7.</p>
          </div>
          <div id="final-form" className="lp-final-form">
            <EstimateForm placement="final" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
