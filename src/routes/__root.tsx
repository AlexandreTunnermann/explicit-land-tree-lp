import { HeadContent, Outlet, Scripts, createRootRoute, useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { pushDL } from "@/lib/analytics";
import { captureAttribution } from "@/lib/attribution";
import { DEFAULT_GEO, type GeoResult } from "@/lib/geo-shared";
import appCss from "@/styles/app.css?url";
import lpCss from "@/styles/lp.css?url";

const FONTS =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: site.meta.title },
      { name: "description", content: site.meta.description },
      { name: "robots", content: "noindex, nofollow" },
      { name: "theme-color", content: "#7F1418" },
      { property: "og:title", content: site.meta.title },
      { property: "og:description", content: site.meta.description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.hero.src || images.logo.src },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONTS },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: lpCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootDocument,
  component: RootComponent,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function pageGeo(matches: ReadonlyArray<{ loaderData?: unknown }>): GeoResult {
  for (const m of matches) {
    const d = m.loaderData as { geo?: GeoResult } | undefined;
    if (d?.geo) return d.geo;
  }
  return DEFAULT_GEO;
}

function RootComponent() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => (s.resolvedLocation ?? s.location).pathname });
  const lastPath = useRef<string | null>(null);

  // Attribution + GTM, once.
  useEffect(() => {
    captureAttribution();
    const gtmId: string = site.tracking.gtmId;
    if (gtmId && !document.getElementById("lp-gtm")) {
      pushDL({ "gtm.start": Date.now(), event: "gtm.js" });
      const s = document.createElement("script");
      s.id = "lp-gtm";
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(gtmId);
      document.head.appendChild(s);
    }
  }, []);

  // Exactly one page_view per page view (StrictMode-safe).
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    // No cleanup: the ref guard (not cancellation) dedupes StrictMode's double effect.
    requestAnimationFrame(() => {
      const geo = pageGeo(router.state.matches);
      pushDL({
        event: "page_view",
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title,
        page_type: window.location.pathname === "/thank-you" ? "thank_you" : "landing",
        geo_city: geo.city,
        geo_source: geo.source,
      });
    });
  }, [pathname, router]);

  return <Outlet />;
}
