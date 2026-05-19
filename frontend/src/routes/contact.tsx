import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import { PageHero, ContactInfo, ContactForm, Offices, FAQ, CTAStrip } from "../components/site/sections";
import { Reveal, WaveDivider } from "../components/site/Motion";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Faucon IMC — USA & UAE" },
      { name: "description", content: "Direct lead capture for CFO and Financial Advisory inquiries. Email, WhatsApp UAE and WhatsApp USA." },
      { property: "og:title", content: "Contact — Faucon IMC" },
      { property: "og:description", content: "Talk to a senior advisor. No sales script." },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Let's talk"
          highlight="strategy."
          subtitle="Reach a senior advisor directly — whether you're scoping a new engagement or just exploring options."
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        />
        <WaveDivider />
        <Reveal direction="left"><ContactInfo /></Reveal>
        <WaveDivider />
        <Reveal direction="zoom"><ContactForm /></Reveal>
        <WaveDivider />
        <Reveal direction="right"><Offices /></Reveal>
        <WaveDivider />
        <Reveal direction="blur"><FAQ /></Reveal>
        <WaveDivider />
        <Reveal><CTAStrip /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
