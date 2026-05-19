import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import { Hero, ValueProp, About, Partner, Services, Industries, Blogs, Contact } from "../components/site/sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Faucon IMC — Strategy Execution for USA & UAE Businesses" },
      { name: "description", content: "Faucon International Management Consultancy: accounting, audit, tax, and advisory built for cross-border growth across USA and UAE." },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProp />
        <About />
        <Partner />
        <Services />
        <Industries />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
