import { Link } from "@tanstack/react-router";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { EstimateLink } from "./Button";
import { CallLink } from "./CallLink";

const NAV = [
  { href: "#reviews", label: "Reviews" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#about", label: "Our Family" },
  { href: "#faq", label: "FAQ" },
];

export function Header({ page = "landing" }: { page?: "landing" | "thank_you" }) {
  const logo = images.logo_light.src ? images.logo_light : images.logo;
  const hasLogo = !!logo.src;
  const navHref = (h: string) => (page === "landing" ? h : "/" + h);
  return (
    <header className="lp-header">
      <div className="lp-header-inner">
        <Link to="/" className={`lp-brand${hasLogo ? " lp-brand--withlogo" : ""}`} aria-label={`${site.business.name} home`}>
          {hasLogo ? <img className="lp-brand-logo" src={logo.src} alt={logo.alt} width={356} height={168} /> : null}
          <span className="lp-brand-text" aria-hidden={hasLogo ? true : undefined}>
            <span className="l1">{site.business.shortName}</span>
            <span className="l2">Serving {site.geo.defaultCity}</span>
          </span>
        </Link>
        <nav className="lp-nav" aria-label="Page sections">
          {NAV.map((n) => (
            <a key={n.href} href={navHref(n.href)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="lp-header-actions">
          <div className="lp-desktop-only">
            <EstimateLink variant="light" compact location="header" href={page === "landing" ? "#hero-form" : "/#hero-form"} />
            <CallLink location="header" variant="call" compact>
              Call Now
            </CallLink>
          </div>
          <CallLink location="header" variant="call" compact className="lp-mobile-only">
            Call Now
          </CallLink>
        </div>
      </div>
    </header>
  );
}
