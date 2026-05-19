import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import { PageHero, Pillars, CoreServices, Ancillary, Process, Testimonial, CTAStrip } from "../components/site/sections";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Auditing, Tax, Accounting & Advisory · Faucon IMC" },
      { name: "description", content: "Auditing, accounting, USA & UAE tax, business setup, healthcare licensing — plus partner-framework digital services." },
      { property: "og:title", content: "Services — Faucon IMC" },
      { property: "og:description", content: "Everything a finance team should be — in one partner." },
    ],
  }),
});

function ServicesPage() {
  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Our Services"
          title="Everything a finance team should be —"
          highlight="in one partner."
          subtitle="From audit to advisory, the full Faucon catalog built around your jurisdiction and growth stage."
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
        />
        <Pillars />
        <CoreServices />
        <Ancillary />
        <Process />
        <Testimonial />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}
