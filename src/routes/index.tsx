import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import { Hero, ValueProp, AboutPreview, ServicesPreview, IndustriesPreview, PartnerPreview, StatsBand, Testimonial, CTAStrip } from "../components/site/sections";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Faucon IMC — Strategy Execution for USA & UAE Businesses" },
      { name: "description", content: "Faucon International Management Consultancy: accounting, audit, tax and advisory built for cross-border growth across USA and UAE." },
      { property: "og:title", content: "Faucon IMC — Strategy Execution" },
      { property: "og:description", content: "Accelerate strategy execution and consistency in revenue growth." },
    ],
  }),
});

function HomePage() {
  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <ValueProp />
        <AboutPreview />
        <ServicesPreview />
        <IndustriesPreview />
        <PartnerPreview />
        <Testimonial />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}
