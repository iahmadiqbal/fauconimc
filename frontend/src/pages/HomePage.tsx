import { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import {
  Hero,
  ValueProp,
  AboutPreview,
  ServicesPreview,
  IndustriesPreview,
  PartnerPreview,
  StatsBand,
  Testimonial,
  CTAStrip,
} from "../components/site/sections";
import { Reveal, WaveDivider } from "../components/site/Motion";

export default function HomePage() {
  useEffect(() => {
    document.title = "Faucon IMC — Strategy Execution for USA & UAE Businesses";
  }, []);

  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <WaveDivider />
        <Reveal><StatsBand /></Reveal>
        <WaveDivider />
        <Reveal direction="zoom"><ValueProp /></Reveal>
        <WaveDivider />
        <Reveal direction="left"><AboutPreview /></Reveal>
        <WaveDivider />
        <Reveal direction="right"><ServicesPreview /></Reveal>
        <WaveDivider />
        <Reveal direction="blur"><IndustriesPreview /></Reveal>
        <WaveDivider />
        <Reveal direction="zoom"><PartnerPreview /></Reveal>
        <WaveDivider />
        <Reveal><Testimonial /></Reveal>
        <WaveDivider />
        <Reveal direction="up"><CTAStrip /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
