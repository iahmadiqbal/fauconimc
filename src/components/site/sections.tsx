import { useState } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiTarget,
  FiBarChart2,
  FiBriefcase,
  FiGlobe,
  FiLayers,
  FiCpu,
  FiDollarSign,
  FiAward,
  FiHeart,
  FiMail,
  FiChevronDown,
  FiCalendar,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import heroImg from "../../assets/hero.jpg";
import aboutImg from "../../assets/about.jpg";
import servicesImg from "../../assets/services.jpg";
import industriesImg from "../../assets/industries.jpg";
import partnerImg from "../../assets/partner.jpg";
import { scrollToId } from "./Header";

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      <img src={heroImg} alt="Faucon office" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/85 to-slate-900" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            USA & UAE · Strategic Consultancy
          </div>
          <h1 className="font-display font-black text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
            STRATEGY <br />
            <span className="text-shimmer">EXECUTION</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-slate-300 leading-relaxed">
            Accelerate strategy execution and consistency in revenue growth with precision accounting, audit and advisory built for cross-border ambition.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId("contact")}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold glow-blue hover:scale-[1.03] transition-all"
            >
              Get Started
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </button>
            <button
              onClick={() => scrollToId("services")}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-blue-400/30 text-white hover:bg-blue-500/10 transition"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { v: "0+", l: "Years of Proud Existence" },
              { v: "4+", l: "Succeeded Projects" },
              { v: "2+", l: "Satisfied Clients" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-blue-500/40 pl-4">
                <div className="font-display font-black text-3xl lg:text-4xl text-white">{s.v}</div>
                <div className="text-xs text-slate-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-blue-500/20 glow-blue">
            <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass border border-blue-500/20 rounded-2xl p-5">
              <div className="text-[10px] uppercase tracking-widest text-blue-300 mb-2">Guiding Principle</div>
              <div className="font-display font-bold text-white text-xl">Precision Meets Purpose</div>
              <div className="text-sm text-slate-300 mt-2">Financial clarity engineered for cross-border growth.</div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 glass border border-blue-500/30 rounded-2xl p-4 w-44 animate-float-slow">
            <FiTrendingUp className="w-6 h-6 text-blue-400 mb-2" />
            <div className="text-xs text-slate-400">Revenue Growth</div>
            <div className="font-display font-bold text-white">Consistent</div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass border border-blue-500/30 rounded-2xl p-4 w-44 animate-float-slow" style={{ animationDelay: "1s" }}>
            <FiShield className="w-6 h-6 text-blue-400 mb-2" />
            <div className="text-xs text-slate-400">Compliance</div>
            <div className="font-display font-bold text-white">Audit-Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- VALUE PROP ---------------- */
export function ValueProp() {
  const items = [
    { icon: FiClock, title: "Efficient Accounting Systems", body: "Save valuable time during audit procedures with structured, automation-friendly workflows." },
    { icon: FiCheck, title: "Audit Time Savings", body: "Structured approaches that streamline compliance and reporting end-to-end." },
    { icon: FiBarChart2, title: "Comprehensive Financial Clarity", body: "Turn financial management from a compliance task into a strategic growth advantage." },
  ];
  return (
    <section className="relative bg-slate-900 py-24 border-t border-blue-500/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">Why Faucon</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">A systematic process is the backbone of every successful business.</h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            Faucon International Management Consultancy LLC is recognized among the top accounting and bookkeeping firms in the USA and UAE — built on accuracy, compliance, and strategic financial insight.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-slate-800/60 to-slate-800/20 border border-blue-500/10 hover:border-blue-500/40 transition-all hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 text-6xl font-display font-black text-blue-500/10 group-hover:text-blue-500/20 transition">
                0{i + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                <it.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3">{it.title}</h3>
              <p className="text-slate-400 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function About() {
  const why = [
    { icon: FiAward, t: "Expert Advice", d: "Professional guidance on mergers, acquisitions, and business establishment." },
    { icon: FiUsers, t: "Employee Evaluation", d: "Counseling services designed to improve operational efficiency." },
    { icon: FiDollarSign, t: "Financial Management", d: "Professional accounting services tailored to specific client needs." },
    { icon: FiGlobe, t: "New Connections", d: "Establishing vital links with industry professionals and networks." },
    { icon: FiLayers, t: "Streamlining Procedures", d: "Improving company workflows for maximum productivity." },
    { icon: FiBarChart2, t: "Comprehensive Reporting", d: "Budgeting and reporting tools for strategic, data-driven decisions." },
  ];
  return (
    <section id="about" className="relative bg-slate-950 py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-blue-500/20">
              <img src={aboutImg} alt="Partnership" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 glass border border-blue-500/30 rounded-3xl p-6 w-64 glow-blue">
              <div className="text-xs uppercase tracking-widest text-blue-300 mb-2">F.A.U.C.</div>
              <div className="font-display font-bold text-white text-lg leading-tight">Financial Accuracy · Understanding · Clarity</div>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">About Us</div>
            <h2 className="font-display font-bold text-white text-4xl lg:text-5xl leading-tight">
              The foundation behind <span className="text-shimmer">Precision Meets Purpose.</span>
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              Faucon IMC bridges the gap between traditional number-crunching and forward-thinking business strategy through Integrated Management Consultancy.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { k: "F", t: "Financial Accuracy", d: "Precision in every entry." },
                { k: "U", t: "Understanding", d: "Deep insight into client business." },
                { k: "C", t: "Clarity", d: "Transparent strategic reporting." },
              ].map((x) => (
                <div key={x.k} className="p-5 rounded-2xl bg-slate-800/40 border border-blue-500/10">
                  <div className="font-display font-black text-blue-400 text-3xl mb-2">{x.k}</div>
                  <div className="text-white font-semibold text-sm">{x.t}</div>
                  <div className="text-xs text-slate-400 mt-1">{x.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/30">
                <FiTarget className="w-6 h-6 text-blue-400 mb-3" />
                <div className="text-xs uppercase tracking-widest text-blue-300 mb-1">Mission</div>
                <div className="text-white">To empower businesses to reach their full potential.</div>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/30">
                <FiAward className="w-6 h-6 text-blue-400 mb-3" />
                <div className="text-xs uppercase tracking-widest text-blue-300 mb-1">Vision</div>
                <div className="text-white">A trusted partner in driving organizational excellence and innovation.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-3">Why Us</div>
          <h3 className="font-display font-bold text-white text-3xl lg:text-4xl">A diverse, dedicated team — built for today's challenging environments.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {why.map((w) => (
            <div key={w.t} className="group p-6 rounded-2xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/40 hover:bg-slate-800/60 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition">
                <w.icon className="w-5 h-5" />
              </div>
              <div className="font-display font-bold text-white mb-2">{w.t}</div>
              <div className="text-sm text-slate-400">{w.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARTNER ---------------- */
export function Partner() {
  return (
    <section id="partner" className="relative bg-slate-900 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">Partner Spotlight</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">
            NestedSol — <span className="text-shimmer">technology that ships.</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            A specialized partnership delivering exceptional IT services. Founded in 2021, NestedSol has evolved from a promising technology startup into a leading software development company serving thousands of customers worldwide.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            They maintain a commitment to the latest technological advancements to ensure clients receive modern software solutions that meet specific business needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["IT Services", "Software Development", "Cloud", "Product Engineering"].map((c) => (
              <span key={c} className="px-4 py-2 rounded-full border border-blue-500/30 text-blue-200 text-xs uppercase tracking-wider bg-blue-500/5">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-blue-500/20 glow-blue">
            <img src={partnerImg} alt="Partner network" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const PILLARS = [
  { t: "Dual Jurisdiction Mastery", d: "Seamless expertise in both UAE and USA tax systems for expats and cross-border businesses." },
  { t: "End-to-End Solutions", d: "Complete financial department support — accounting, tax, audit, and strategy fully aligned." },
  { t: "Technology-Driven Efficiency", d: "QuickBooks Online, Xero, and Zoho Books — real-time visibility, always-on books." },
  { t: "Proactive Insights", d: "Forward-looking tax planning and growth advisory — shape the future, don't just report history." },
  { t: "Dedicated Partnership Model", d: "Each client gets a dedicated account manager and senior advisor for consistency." },
  { t: "Transparent Pricing", d: "Clear, fixed-fee structures so you can budget with confidence — no surprises." },
];

const CORE_SERVICES = [
  { icon: FiShield, t: "Auditing and Assurance", d: "Essential monitoring of financial health and transparency to ensure accuracy and compliance." },
  { icon: FiBarChart2, t: "Accounting Services", d: "Systematic identification, recording, evaluation, and summarization of financial data." },
  { icon: FiDollarSign, t: "USA & UAE Tax Services", d: "Specialized VAT consultancy — registration, de-registration, and corporate tax strategy." },
  { icon: FiBriefcase, t: "Business Setup Services", d: "Strategic guidance for running and scaling businesses amidst fierce market competition." },
  { icon: FiHeart, t: "Healthcare Licensing", d: "Professional assistance obtaining DHA, HAAD, MOHAP and DHCC licenses." },
];

const ANCILLARY = [
  { icon: FiTrendingUp, t: "Digital Marketing", d: "Strategic online marketing consultancy to fulfill modern business needs." },
  { icon: FiCpu, t: "Web Development", d: "Rapid development of unique digital products to outshine the competition." },
  { icon: FiLayers, t: "Graphic Designing", d: "Brand development fueled by global awareness and data-driven analytics." },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="services" className="relative bg-slate-950 py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">The Service Catalog</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">
            Everything a finance team should be — <span className="text-shimmer">in one partner.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 mb-24">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-blue-500/20 sticky top-28">
              <img src={servicesImg} alt="Services" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">Core Value Pillars</div>
            <div className="space-y-3">
              {PILLARS.map((p, i) => (
                <button
                  key={p.t}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left p-5 rounded-2xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/40 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-display font-bold text-blue-400 text-sm w-8">0{i + 1}</span>
                      <span className="font-display font-bold text-white text-lg">{p.t}</span>
                    </div>
                    <FiChevronDown className={`w-5 h-5 text-blue-400 transition ${open === i ? "rotate-180" : ""}`} />
                  </div>
                  <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="pl-12 pr-2 text-slate-400">{p.d}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-3">Service Categories</div>
          <h3 className="font-display font-bold text-white text-3xl lg:text-4xl">Core financial services.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {CORE_SERVICES.map((s) => (
            <div key={s.t} className="group relative overflow-hidden p-7 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/40 border border-blue-500/10 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-600/0 group-hover:bg-blue-600/10 blur-2xl transition" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 glow-blue">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="font-display font-bold text-white text-xl mb-2">{s.t}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{s.d}</div>
                <button onClick={() => scrollToId("contact")} className="mt-5 inline-flex items-center gap-1 text-blue-300 text-sm font-semibold hover:gap-2 transition-all">
                  Enquire <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-3">Ancillary Services</div>
          <h3 className="font-display font-bold text-white text-3xl lg:text-4xl">Partner-framework offerings.</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {ANCILLARY.map((s) => (
            <div key={s.t} className="p-7 rounded-3xl border border-blue-500/10 bg-slate-900/40 hover:border-blue-500/40 transition">
              <s.icon className="w-8 h-8 text-blue-400 mb-4" />
              <div className="font-display font-bold text-white text-lg">{s.t}</div>
              <div className="text-slate-400 text-sm mt-2">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
export function Industries() {
  const frameworks = [
    { icon: FiGlobe, t: "Strategic Jurisdictions", d: "Integrated compliance and strategy for the USA and UAE Markets." },
    { icon: FiLayers, t: "Cross-Border Businesses", d: "Specialized support for local businesses with international dealings." },
    { icon: FiHeart, t: "Healthcare Sector", d: "Professional licensing support for DHA, HAAD, MOHAP and DHCC sectors." },
  ];
  const audience = [
    { t: "US Expats", d: "Individuals requiring integrated tax compliance and strategy under dual jurisdictions." },
    { t: "Startups", d: "New entities seeking strategic guidance and foundational business setup services." },
    { t: "Established Enterprises", d: "Organizations seeking operational excellence, internal audits, and advanced financial advisory." },
  ];
  return (
    <section id="industries" className="relative py-28 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">Industries</div>
            <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">
              Two jurisdictions. <span className="text-shimmer">One trusted partner.</span>
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              From Manhattan to Dubai Marina — we serve businesses that operate where the world's most ambitious capital flows.
            </p>
          </div>
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-blue-500/20 glow-blue">
            <img src={industriesImg} alt="UAE and USA" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex justify-between">
              <span className="glass px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white border border-blue-500/30">UAE</span>
              <span className="glass px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white border border-blue-500/30">USA</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {frameworks.map((f) => (
            <div key={f.t} className="p-7 rounded-3xl bg-slate-800/40 border border-blue-500/10 hover:border-blue-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-5 text-white glow-blue">
                <f.icon className="w-5 h-5" />
              </div>
              <div className="font-display font-bold text-white text-lg mb-2">{f.t}</div>
              <div className="text-slate-400 text-sm">{f.d}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-3">Target Audience</div>
          <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-10">Built for those who build.</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {audience.map((a, i) => (
              <div key={a.t} className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-600/15 to-transparent border border-blue-500/20">
                <div className="absolute top-4 right-5 font-display font-black text-5xl text-blue-500/20">0{i + 1}</div>
                <div className="font-display font-bold text-white text-xl mb-3">{a.t}</div>
                <div className="text-slate-400">{a.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BLOGS ---------------- */
export function Blogs() {
  const posts = [
    { t: "Elevate Your Business with Strategic Accounting Solutions", d: "December 27, 2024", c: "Strategy" },
    { t: "Enhance Financial Transparency with Auditing & Assurance Services", d: "December 27, 2024", c: "Audit" },
    { t: "Streamline Your Tax Compliance with Expert Guidance", d: "December 27, 2024", c: "Tax" },
  ];
  return (
    <section id="blogs" className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">Blog & News</div>
            <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">Insights from the desk.</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {posts.map((p, i) => (
            <article
              key={p.t}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-slate-800/60 to-slate-900/40 border border-blue-500/10 hover:border-blue-500/40 transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/30 transition" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold uppercase tracking-wider border border-blue-500/30">
                    {p.c}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <FiCalendar className="w-3 h-3" /> {p.d}
                  </span>
                </div>
                <div className="font-display font-bold text-white text-xl leading-snug mb-6">{p.t}</div>
                <div className="font-display font-black text-7xl text-blue-500/10 group-hover:text-blue-500/30 transition absolute bottom-4 right-6">0{i + 1}</div>
                <button className="inline-flex items-center gap-1 text-blue-300 text-sm font-semibold hover:gap-2 transition-all">
                  Read article <FiArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="relative p-10 lg:p-14 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 overflow-hidden glow-blue">
          <div className="absolute inset-0 opacity-20 grid-pattern" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-blue-100 mb-3">Newsletter</div>
              <h3 className="font-display font-bold text-white text-3xl lg:text-4xl leading-tight">
                Join our subscribers list to get the latest news and special offers.
              </h3>
            </div>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-4 rounded-full bg-white text-slate-900 placeholder-slate-400 outline-none focus:ring-4 ring-white/30"
                />
              </div>
              <button className="px-7 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition flex items-center justify-center gap-2">
                Subscribe <FiArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 bg-slate-900 overflow-hidden">
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">Contact Us</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl leading-tight">
            Let's talk <span className="text-shimmer">strategy.</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Direct lead capture for CFO and Financial Advisory inquiries. Reach us across the USA and UAE.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="mailto:info@fauconimc.com"
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/50 border border-blue-500/10 hover:border-blue-500/40 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center glow-blue">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-blue-300">Official Email</div>
                <div className="text-white font-semibold">info@fauconimc.com</div>
              </div>
              <FiArrowRight className="ml-auto text-blue-300 opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a
              href="https://wa.me/971507917150"
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/50 border border-blue-500/10 hover:border-blue-500/40 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center glow-blue">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-blue-300">WhatsApp · UAE</div>
                <div className="text-white font-semibold">+971 50 791 7150</div>
              </div>
              <FiArrowRight className="ml-auto text-blue-300 opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a
              href="https://wa.me/18187236166"
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/50 border border-blue-500/10 hover:border-blue-500/40 transition group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center glow-blue">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-blue-300">WhatsApp · USA</div>
                <div className="text-white font-semibold">+1 (818) 723-6166</div>
              </div>
              <FiArrowRight className="ml-auto text-blue-300 opacity-0 group-hover:opacity-100 transition" />
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="p-8 lg:p-10 rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-900/40 border border-blue-500/20 backdrop-blur-xl glow-blue"
        >
          <div className="font-display font-bold text-white text-2xl mb-2">Send us a message</div>
          <div className="text-slate-400 text-sm mb-8">We respond within one business day.</div>

          {sent ? (
            <div className="p-8 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-center">
              <FiCheck className="w-10 h-10 text-blue-300 mx-auto mb-3" />
              <div className="text-white font-display font-bold text-xl">Thank you!</div>
              <div className="text-slate-300 mt-2">Your message is on its way to our team.</div>
            </div>
          ) : (
            <div className="space-y-4">
              <input required placeholder="Name" className="w-full px-5 py-4 rounded-xl bg-slate-900/70 border border-blue-500/10 focus:border-blue-500/60 text-white placeholder-slate-500 outline-none transition" />
              <input required type="email" placeholder="Email" className="w-full px-5 py-4 rounded-xl bg-slate-900/70 border border-blue-500/10 focus:border-blue-500/60 text-white placeholder-slate-500 outline-none transition" />
              <select required className="w-full px-5 py-4 rounded-xl bg-slate-900/70 border border-blue-500/10 focus:border-blue-500/60 text-white outline-none transition">
                <option value="">Service Interest</option>
                {CORE_SERVICES.map((s) => <option key={s.t}>{s.t}</option>)}
                {ANCILLARY.map((s) => <option key={s.t}>{s.t}</option>)}
              </select>
              <textarea required rows={5} placeholder="Message" className="w-full px-5 py-4 rounded-xl bg-slate-900/70 border border-blue-500/10 focus:border-blue-500/60 text-white placeholder-slate-500 outline-none transition resize-none" />
              <button className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold glow-blue hover:scale-[1.02] transition">
                Send Message <FiArrowRight />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
