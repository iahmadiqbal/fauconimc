import { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import {
  PageHero,
  IndustryFramework,
  Audience,
  Sectors,
  Markets,
  Testimonial,
  CTAStrip,
} from "../components/site/sections";
import { Reveal, WaveDivider } from "../components/site/Motion";

export default function IndustriesPage() {
  useEffect(() => {
    document.title = "Industries — USA & UAE Markets · Faucon IMC";
  }, []);

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
        <WaveDivider />
        <Reveal direction="left"><IndustryFramework /></Reveal>
        <WaveDivider />
        <Reveal direction="right"><Audience /></Reveal>
        <WaveDivider />
        <Reveal direction="zoom"><Markets /></Reveal>
        <WaveDivider />
        <Reveal direction="blur"><Sectors /></Reveal>
        <WaveDivider />
        <Reveal><Testimonial /></Reveal>
        <WaveDivider />
        <Reveal><CTAStrip /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
