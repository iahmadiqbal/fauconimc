import { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import {
  PageHero,
  Pillars,
  CoreServices,
  Ancillary,
  Process,
  Testimonial,
  CTAStrip,
} from "../components/site/sections";
import { Reveal, WaveDivider } from "../components/site/Motion";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services — Auditing, Tax, Accounting & Advisory · Faucon IMC";
  }, []);

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
        <WaveDivider />
        <Reveal direction="zoom"><Pillars /></Reveal>
        <WaveDivider />
        <Reveal direction="left"><CoreServices /></Reveal>
        <WaveDivider />
        <Reveal direction="right"><Ancillary /></Reveal>
        <WaveDivider />
        <Reveal direction="blur"><Process /></Reveal>
        <WaveDivider />
        <Reveal><Testimonial /></Reveal>
        <WaveDivider />
        <Reveal><CTAStrip /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
