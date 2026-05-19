import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import { PageHero, IndustryFramework, Audience, Sectors, Markets, Testimonial, CTAStrip } from "../components/site/sections";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — USA & UAE Markets · Faucon IMC" },
      { name: "description", content: "Cross-border financial support for startups, established enterprises, healthcare, expats and SMEs across USA and UAE." },
      { property: "og:title", content: "Industries — Faucon IMC" },
      { property: "og:description", content: "Two jurisdictions. One trusted partner." },
    ],
  }),
});

function IndustriesPage() {
  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Industries"
          title="Two jurisdictions."
          highlight="One trusted partner."
          subtitle="From Manhattan to Dubai Marina, we serve businesses operating where the world's most ambitious capital flows."
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }]}
        />
        <IndustryFramework />
        <Audience />
        <Markets />
        <Sectors />
        <Testimonial />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}
