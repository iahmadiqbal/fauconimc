import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import { PageHero, Foundation, MissionVision, WhyUs, Approach, Testimonial, CTAStrip } from "../components/site/sections";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Faucon IMC — Precision Meets Purpose" },
      { name: "description", content: "Faucon IMC bridges traditional accounting and forward-thinking strategy through Integrated Management Consultancy." },
      { property: "og:title", content: "About — Faucon IMC" },
      { property: "og:description", content: "The story, mission, vision and team behind Faucon IMC." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Precision meets"
          highlight="purpose."
          subtitle="The foundation, mission, and team behind Faucon International Management Consultancy."
          breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
        />
        <Foundation />
        <MissionVision />
        <WhyUs />
        <Approach />
        <Testimonial />
        <CTAStrip />
      </main>
      <Footer />
    </div>
  );
}
