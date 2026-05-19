import { useEffect } from "react";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import {
  PageHero,
  FeaturedPost,
  PostsGrid,
  Categories,
  Newsletter,
  CTAStrip,
} from "../components/site/sections";
import { Reveal, WaveDivider } from "../components/site/Motion";

export default function BlogsPage() {
  useEffect(() => {
    document.title = "Blog & News — Faucon IMC";
  }, []);

  return (
    <div className="bg-navy-deep text-slate-100 min-h-screen">
      <Header />
      <main>
        <PageHero
          eyebrow="Blog & News"
          title="Insights from"
          highlight="the desk."
          subtitle="Articles, perspectives and updates from across the Faucon practice — for finance leaders who think ahead."
          breadcrumb={[{ label: "Home", to: "/" }, { label: "Blogs" }]}
        />
        <WaveDivider />
        <Reveal direction="zoom"><FeaturedPost /></Reveal>
        <WaveDivider />
        <Reveal direction="left"><PostsGrid /></Reveal>
        <WaveDivider />
        <Reveal direction="right"><Categories /></Reveal>
        <WaveDivider />
        <Reveal direction="blur"><Newsletter /></Reveal>
        <WaveDivider />
        <Reveal><CTAStrip /></Reveal>
      </main>
      <Footer />
    </div>
  );
}
