import { images } from "@/content/images";
import { site } from "@/content/site";
import { CtaPair } from "./CtaPair";

export function Footer({ page = "landing" }: { page?: "landing" | "thank_you" }) {
  const logo = images.logo_light.src ? images.logo_light : images.logo;
  const hq = site.business.hq;
  const address = hq.showStreet && hq.street ? `${hq.street}, ${hq.city}, ${hq.state} ${hq.zip}` : `${hq.city}, ${hq.state}`;
  return (
    <footer className="lp-footer lp-tone-dark">
      <div className="lp-container">
        <div className="lp-footer-grid">
          <div>
            {logo.src ? (
              <img className="lp-footer-logo" src={logo.src} alt={logo.alt} width={356} height={168} loading="lazy" decoding="async" />
            ) : (
              <div className="lp-footer-wordmark">
                <span className="l1">{site.business.shortName}</span>
              </div>
            )}
            <p style={{ marginTop: 16, maxWidth: 460 }}>{site.business.description}</p>
            <CtaPair location="footer" tone="dark" align="left" callLabel="Call Now" href={page === "landing" ? "#final-form" : "/#final-form"} />
          </div>
          <div>
            <h3>Contact</h3>
            <p>{address}</p>
            <p>{site.business.hoursLabel}</p>
            <p style={{ marginTop: 16 }}>We accept: {site.payments.join(", ")}</p>
          </div>
          <div>
            <h3>Credentials</h3>
            <ul className="lp-footer-cred">
              {site.credentials.map((c) => (
                <li key={c.label}>
                  {c.label}
                  {c.detail ? <span> ({c.detail})</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lp-footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.business.legalName}
          </span>
          {site.legal.privacyUrl ? (
            <a href={site.legal.privacyUrl} target="_blank" rel="noopener">
              Privacy Policy
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
