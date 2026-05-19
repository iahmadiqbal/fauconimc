import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import { PageHero, PartnerStory, PartnerSynergy, PartnerStack, StatsBand, Testimonial, CTAStrip } from "../components/site/sections";
import { Reveal, WaveDivider } from "../components/site/Motion";

export const Route = createFileRoute("/partner")({
  component: PartnerPage,
  head: () => ({
    meta: [
      { title: "Our Partner — NestedSol × Faucon IMC" },
      { name: "description", content: "A specialized partnership delivering exceptional IT services alongside Faucon IMC's financial expertise." },
      { property: "og:title", content: "Our Partner — NestedSol" },
      { property: "og:description", content: "Finance and engineering — one trusted relationship." },
    ],
  }),
});

function PartnerPage() {
  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Our Partner"
          title="One relationship,"
          highlight="two disciplines."
          subtitle="A specialized partnership with NestedSol — bringing modern technology to every Faucon engagement."
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Partner" }]}
        />
        <WaveDivider />
        <Reveal direction="left"><PartnerStory /></Reveal>
        <WaveDivider />
        <Reveal direction="right"><PartnerSynergy /></Reveal>
        <WaveDivider />
        <Reveal direction="zoom"><PartnerStack /></Reveal>
        <WaveDivider />
        <Reveal direction="blur"><StatsBand /></Reveal>
        <WaveDivider />
        <Reveal><Testimonial /></Reveal>
        <WaveDivider />
        <Reveal><CTAStrip /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
