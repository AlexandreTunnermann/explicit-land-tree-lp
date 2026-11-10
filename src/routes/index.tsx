import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/lp/Footer";
import { Header } from "@/components/lp/Header";
import { StickyCallBar } from "@/components/lp/StickyCallBar";
import { Hero, Reviews, Services, Stats, WhyUs } from "@/components/sections/LandingA";
import {
  About,
  Difference,
  Emergency,
  Faq,
  FinalCta,
  Gallery,
  Pricing,
  Process,
  ServiceArea,
} from "@/components/sections/LandingB";
import { images } from "@/content/images";
import { EstimateProvider } from "@/lib/estimate-store";
import { resolveGeo } from "@/lib/geo";
import { GeoProvider, readStoredGeo } from "@/lib/geo-context";

type LandingSearch = Record<string, unknown> & { city?: string };

export const Route = createFileRoute("/")({
  // Pass every query parameter through untouched (utm_*, gclid, fbclid, ...). Only "city" is read.
  validateSearch: (search: Record<string, unknown>): LandingSearch => search,
  loaderDeps: ({ search }) => ({ city: typeof search.city === "string" ? search.city : undefined }),
  loader: async ({ deps }) => {
    if (typeof window !== "undefined" && !deps.city) {
      const stored = readStoredGeo();
      if (stored) return { geo: stored };
    }
    const geo = await resolveGeo({ data: { cityParam: deps.city } });
    return { geo };
  },
  head: () => ({
    links: [
      ...(images.hero_mobile.src
        ? [{ rel: "preload", as: "image", href: images.hero_mobile.src, media: "(max-width: 1023px)", fetchPriority: "high" as const }]
        : []),
      ...(images.hero.src
        ? [{ rel: "preload", as: "image", href: images.hero.src, media: "(min-width: 1024px)", fetchPriority: "high" as const }]
        : []),
    ],
  }),
  component: Landing,
});

function Landing() {
  const { geo } = Route.useLoaderData();
  return (
    <GeoProvider value={geo}>
      <EstimateProvider>
        <div className="lp lp-has-sticky">
          <a className="lp-skip" href="#content">
            Skip to content
          </a>
          <Header page="landing" />
          <main id="content" tabIndex={-1}>
            <Hero />
            <Reviews />
            <Stats />
            <Services />
            <WhyUs />
            <Difference />
            <About />
            <Pricing />
            <Gallery />
            <Process />
            <Emergency />
            <ServiceArea />
            <Faq />
            <FinalCta />
          </main>
          <Footer page="landing" />
          <StickyCallBar />
        </div>
      </EstimateProvider>
    </GeoProvider>
  );
}
