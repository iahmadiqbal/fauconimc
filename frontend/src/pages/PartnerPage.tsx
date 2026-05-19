import { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import {
  PageHero,
  PartnerStory,
  PartnerSynergy,
  PartnerStack,
  StatsBand,
  Testimonial,
  CTAStrip,
} from "../components/site/sections";
import { Reveal, WaveDivider } from "../components/site/Motion";

export default function PartnerPage() {
  useEffect(() => {
    document.title = "Our Partner — NestedSol × Faucon IMC";
  }, []);

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
