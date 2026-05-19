import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
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
  FiZap,
  FiMessageCircle,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import heroImg from "../../assets/hero.jpg";
import aboutImg from "../../assets/about.jpg";
import servicesImg from "../../assets/services.jpg";
import industriesImg from "../../assets/industries.jpg";
import partnerImg from "../../assets/partner.jpg";

/* ============== PAGE HERO ============== */
export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  image = heroImg,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  image?: string;
  breadcrumb: { label: string; to?: string }[];
}) {
  return (
    <section className="relative pt-32 pb-20 bg-navy-deep overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/90 to-navy-deep" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 animate-fade-up">
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          {breadcrumb.map((b, i) => (
            <span key={b.label} className="flex items-center gap-2">
              {b.to ? (
                <Link to={b.to} className="hover:text-gold transition">{b.label}</Link>
              ) : (
                <span className="text-gold">{b.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="text-amber-300/30">/</span>}
            </span>
          ))}
        </nav>
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5">{eyebrow}</div>
        <h1 className="font-display font-black text-white text-5xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
          {title} {highlight && <span className="text-shimmer">{highlight}</span>}
        </h1>
        <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}

/* ============== HOME HERO ============== */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/85 to-navy-deep" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <h1 className="font-display font-black text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
            STRATEGY <br />
            <span className="text-shimmer">EXECUTION</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-slate-300 leading-relaxed">
            Accelerate strategy execution and consistency in revenue growth with precision accounting, audit and advisory — built for cross-border ambition across the USA and UAE.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 font-bold glow-gold hover:scale-[1.03] transition-all" style={{ color: "#060a1a" }}>
              Get Started <FiArrowUpRight className="group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-amber-300/30 text-white hover:bg-amber-300/5 transition">
              Explore Services
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[{ v: "0+", l: "Years of Proud Existence" }, { v: "4+", l: "Succeeded Projects" }, { v: "2+", l: "Satisfied Clients" }].map((s) => (
              <div key={s.l} className="border-l-2 border-amber-300/40 pl-4">
                <div className="font-display font-black text-3xl lg:text-4xl text-white">{s.v}</div>
                <div className="text-xs text-slate-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-amber-300/20 glow-gold">
            <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass border border-amber-300/20 rounded-2xl p-5">
              <div className="text-[10px] uppercase tracking-widest text-gold mb-2">Guiding Principle</div>
              <div className="font-display font-bold text-white text-xl">Precision Meets Purpose</div>
              <div className="text-sm text-slate-300 mt-2">Financial clarity engineered for cross-border growth.</div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 glass border border-amber-300/30 rounded-2xl p-4 w-44 animate-float-slow">
            <FiTrendingUp className="w-6 h-6 text-gold mb-2" />
            <div className="text-xs text-slate-400">Revenue Growth</div>
            <div className="font-display font-bold text-white">Consistent</div>
          </div>
          <div className="absolute -bottom-6 -left-6 glass border border-amber-300/30 rounded-2xl p-4 w-44 animate-float-slow" style={{ animationDelay: "1s" }}>
            <FiShield className="w-6 h-6 text-gold mb-2" />
            <div className="text-xs text-slate-400">Compliance</div>
            <div className="font-display font-bold text-white">Audit-Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== VALUE PROP ============== */
export function ValueProp() {
  const items = [
    { icon: FiClock, title: "Efficient Accounting Systems", body: "Save valuable time during audit procedures with structured, automation-friendly workflows." },
    { icon: FiCheck, title: "Audit Time Savings", body: "Structured approaches that streamline compliance and reporting end-to-end." },
    { icon: FiBarChart2, title: "Comprehensive Financial Clarity", body: "Turn financial management from a compliance task into a strategic growth advantage." },
  ];
  return (
    <section className="relative bg-navy py-24 border-t border-amber-300/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why Faucon</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">A systematic process is the backbone of every successful business.</h2>
          <p className="mt-5 text-slate-400 text-lg leading-relaxed">
            Faucon International Management Consultancy LLC is recognized among the top accounting and bookkeeping firms in the USA and UAE — built on accuracy, compliance, and strategic financial insight.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-amber-300/10 hover:border-amber-300/40 transition-all hover:-translate-y-1">
              <div className="absolute top-6 right-6 text-6xl font-display font-black text-amber-300/10 group-hover:text-amber-300/20 transition">0{i + 1}</div>
              <div className="w-14 h-14 rounded-2xl bg-amber-300/10 border border-amber-300/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy-deep transition">
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

/* ============== ABOUT FOUNDATION (F.A.U.C.) ============== */
export function Foundation() {
  return (
    <section className="relative bg-navy py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-amber-300/20">
            <img src={aboutImg} alt="Partnership" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-8 glass border border-amber-300/30 rounded-3xl p-6 w-64 glow-gold">
            <div className="text-xs uppercase tracking-widest text-gold mb-2">F.A.U.C.</div>
            <div className="font-display font-bold text-white text-lg leading-tight">Financial Accuracy · Understanding · Clarity</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">The Foundation</div>
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
              <div key={x.k} className="p-5 rounded-2xl bg-white/[0.03] border border-amber-300/10">
                <div className="font-display font-black text-gold text-3xl mb-2">{x.k}</div>
                <div className="text-white font-semibold text-sm">{x.t}</div>
                <div className="text-xs text-slate-400 mt-1">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== MISSION & VISION ============== */
export function MissionVision() {
  const items = [
    { icon: FiTarget, t: "Mission", d: "To empower businesses to reach their full potential through precision financial systems and forward-looking advisory." },
    { icon: FiAward, t: "Vision", d: "To be a trusted partner in driving organizational excellence and innovation across the USA and UAE markets." },
    { icon: FiZap, t: "Values", d: "Accuracy, accountability, transparency and proactive partnership in every engagement we touch." },
  ];
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What drives us</div>
        <h2 className="font-display font-bold text-white text-4xl lg:text-5xl mb-12">Mission · Vision · Values.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((m) => (
            <div key={m.t} className="p-8 rounded-3xl bg-gradient-to-br from-amber-400/15 to-transparent border border-amber-300/25 hover:border-amber-300/60 transition">
              <m.icon className="w-8 h-8 text-gold mb-5" />
              <div className="text-xs uppercase tracking-widest text-gold mb-2">{m.t}</div>
              <div className="text-white leading-relaxed">{m.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== WHY US ============== */
export function WhyUs() {
  const why = [
    { icon: FiAward, t: "Expert Advice", d: "Professional guidance on mergers, acquisitions, and business establishment." },
    { icon: FiUsers, t: "Employee Evaluation", d: "Counseling services designed to improve operational efficiency." },
    { icon: FiDollarSign, t: "Financial Management", d: "Professional accounting services tailored to specific client needs." },
    { icon: FiGlobe, t: "New Connections", d: "Establishing vital links with industry professionals and networks." },
    { icon: FiLayers, t: "Streamlining Procedures", d: "Improving company workflows for maximum productivity." },
    { icon: FiBarChart2, t: "Comprehensive Reporting", d: "Budgeting and reporting tools for strategic, data-driven decisions." },
  ];
  return (
    <section className="relative bg-navy py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Why Us</div>
          <h3 className="font-display font-bold text-white text-3xl lg:text-4xl">A diverse, dedicated team — built for today's challenging environments.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {why.map((w) => (
            <div key={w.t} className="group p-6 rounded-2xl bg-white/[0.03] border border-amber-300/10 hover:border-amber-300/40 hover:bg-white/[0.05] transition">
              <div className="w-12 h-12 rounded-xl bg-amber-300/10 border border-amber-300/30 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-navy-deep transition">
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

/* ============== APPROACH (timeline) ============== */
export function Approach() {
  const steps = [
    { t: "Discovery", d: "We map your business, jurisdiction, and growth horizon before recommending anything." },
    { t: "Diagnostic", d: "Books, tax posture, compliance, controls — assessed against international standards." },
    { t: "Design", d: "A tailored finance stack: tools, workflows, calendar, ownership." },
    { t: "Deliver", d: "Monthly closes, audits, filings — on time, accurate, defensible." },
    { t: "Advise", d: "Quarterly strategy reviews to convert numbers into next moves." },
  ];
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Approach</div>
        <h2 className="font-display font-bold text-white text-4xl lg:text-5xl mb-14">How we work.</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.t} className="relative p-6 rounded-2xl bg-white/[0.03] border border-amber-300/10 hover:border-amber-300/40 transition">
              <div className="font-display font-black text-gold text-4xl mb-3">0{i + 1}</div>
              <div className="font-display font-bold text-white mb-2">{s.t}</div>
              <div className="text-sm text-slate-400">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== PARTNER STORY ============== */
export function PartnerStory() {
  return (
    <section className="relative bg-navy py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Partner Spotlight</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">NestedSol — <span className="text-shimmer">technology that ships.</span></h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            A specialized partnership delivering exceptional IT services. Founded in 2021, NestedSol has evolved from a promising technology startup into a leading software development company serving thousands of customers worldwide.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            They maintain a commitment to the latest technological advancements to ensure clients receive modern software solutions that meet specific business needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["IT Services", "Software Development", "Cloud", "Product Engineering"].map((c) => (
              <span key={c} className="px-4 py-2 rounded-full border border-amber-300/30 text-amber-100 text-xs uppercase tracking-wider bg-amber-300/5">{c}</span>
            ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-amber-300/20 glow-gold">
          <img src={partnerImg} alt="Partner network" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

/* ============== PARTNER STACK (digital services) ============== */
export function PartnerStack() {
  const items = [
    { icon: FiTrendingUp, t: "Digital Marketing", d: "Strategic online marketing consultancy to fulfill modern business needs." },
    { icon: FiCpu, t: "Web Development", d: "Rapid development of unique digital products to outshine the competition." },
    { icon: FiLayers, t: "Graphic Designing", d: "Brand development fueled by global awareness and data-driven analytics." },
  ];
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Ancillary Stack</div>
        <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-12">Powered by our partner framework.</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((s) => (
            <div key={s.t} className="p-7 rounded-3xl border border-amber-300/15 bg-white/[0.03] hover:border-amber-300/40 transition">
              <s.icon className="w-8 h-8 text-gold mb-4" />
              <div className="font-display font-bold text-white text-lg">{s.t}</div>
              <div className="text-slate-400 text-sm mt-2">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== PARTNER SYNERGY ============== */
export function PartnerSynergy() {
  const rows = [
    { l: "Founded", v: "2021" },
    { l: "Customers", v: "Thousands worldwide" },
    { l: "Specialization", v: "Custom software & cloud" },
    { l: "Engagement", v: "End-to-end product delivery" },
  ];
  return (
    <section className="relative bg-navy py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why this partnership matters</div>
          <h3 className="font-display font-bold text-white text-3xl lg:text-4xl leading-tight">
            Finance and technology, <span className="text-shimmer">under one roof.</span>
          </h3>
          <p className="mt-5 text-slate-400 leading-relaxed">
            With Faucon IMC handling financial strategy and NestedSol shipping the digital backbone, our clients move from idea to in-market without juggling vendors.
          </p>
        </div>
        <div className="divide-y divide-amber-300/10 rounded-3xl border border-amber-300/15 bg-white/[0.02] overflow-hidden">
          {rows.map((r) => (
            <div key={r.l} className="flex items-center justify-between px-6 py-5">
              <div className="text-xs uppercase tracking-widest text-gold">{r.l}</div>
              <div className="text-white font-display font-semibold">{r.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== SERVICES — PILLARS ============== */
const PILLARS = [
  { t: "Dual Jurisdiction Mastery", d: "Seamless expertise in both UAE and USA tax systems for expats and cross-border businesses." },
  { t: "End-to-End Solutions", d: "Complete financial department support — accounting, tax, audit, and strategy fully aligned." },
  { t: "Technology-Driven Efficiency", d: "QuickBooks Online, Xero, and Zoho Books — real-time visibility, always-on books." },
  { t: "Proactive Insights", d: "Forward-looking tax planning and growth advisory — shape the future, don't just report history." },
  { t: "Dedicated Partnership Model", d: "Each client gets a dedicated account manager and senior advisor for consistency." },
  { t: "Transparent Pricing", d: "Clear, fixed-fee structures so you can budget with confidence — no surprises." },
];

export function Pillars() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-navy py-28 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden border border-amber-300/20 sticky top-28">
            <img src={servicesImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Core Value Pillars</div>
          <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-8">Six commitments behind every engagement.</h3>
          <div className="space-y-3">
            {PILLARS.map((p, i) => (
              <button key={p.t} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-5 rounded-2xl bg-white/[0.03] border border-amber-300/10 hover:border-amber-300/40 transition">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display font-bold text-gold text-sm w-8">0{i + 1}</span>
                    <span className="font-display font-bold text-white text-lg">{p.t}</span>
                  </div>
                  <FiChevronDown className={`w-5 h-5 text-gold transition ${open === i ? "rotate-180" : ""}`} />
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
    </section>
  );
}

/* ============== CORE SERVICES ============== */
export const CORE_SERVICES = [
  { icon: FiShield, t: "Auditing and Assurance", d: "Essential monitoring of financial health and transparency to ensure accuracy and compliance." },
  { icon: FiBarChart2, t: "Accounting Services", d: "Systematic identification, recording, evaluation, and summarization of financial data." },
  { icon: FiDollarSign, t: "USA & UAE Tax Services", d: "Specialized VAT consultancy — registration, de-registration, and corporate tax strategy." },
  { icon: FiBriefcase, t: "Business Setup Services", d: "Strategic guidance for running and scaling businesses amidst fierce market competition." },
  { icon: FiHeart, t: "Healthcare Licensing", d: "Professional assistance obtaining DHA, HAAD, MOHAP and DHCC licenses." },
];

export function CoreServices() {
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Service Categories</div>
          <h3 className="font-display font-bold text-white text-3xl lg:text-4xl">Core financial services.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_SERVICES.map((s) => (
            <div key={s.t} className="group relative overflow-hidden p-7 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-amber-300/10 hover:border-amber-300/50 transition-all hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-amber-400/0 group-hover:bg-amber-400/10 blur-2xl transition" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gold text-navy-deep flex items-center justify-center mb-5 glow-gold">
                  <s.icon className="w-6 h-6" />
                </div>
                <div className="font-display font-bold text-white text-xl mb-2">{s.t}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{s.d}</div>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all">
                  Enquire <FiArrowUpRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== ANCILLARY ============== */
export const ANCILLARY = [
  { icon: FiTrendingUp, t: "Digital Marketing", d: "Strategic online marketing consultancy to fulfill modern business needs." },
  { icon: FiCpu, t: "Web Development", d: "Rapid development of unique digital products to outshine the competition." },
  { icon: FiLayers, t: "Graphic Designing", d: "Brand development fueled by global awareness and data-driven analytics." },
];

export function Ancillary() {
  return (
    <section className="relative bg-navy py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Ancillary Services</div>
          <h3 className="font-display font-bold text-white text-3xl lg:text-4xl">Partner-framework offerings.</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {ANCILLARY.map((s) => (
            <div key={s.t} className="p-7 rounded-3xl border border-amber-300/15 bg-white/[0.03] hover:border-amber-300/40 transition">
              <s.icon className="w-8 h-8 text-gold mb-4" />
              <div className="font-display font-bold text-white text-lg">{s.t}</div>
              <div className="text-slate-400 text-sm mt-2">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== PROCESS (service delivery) ============== */
export function Process() {
  const steps = [
    { t: "Engage", d: "Kickoff workshop · scope · KPIs." },
    { t: "Onboard", d: "Books migration · tooling · access." },
    { t: "Operate", d: "Monthly close · filings · payroll · audit." },
    { t: "Optimize", d: "Quarterly reviews · forecasting · planning." },
  ];
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Delivery Process</div>
        <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-12">From signature to insight in 4 steps.</h3>
        <div className="grid md:grid-cols-4 gap-5 relative">
          {steps.map((s, i) => (
            <div key={s.t} className="relative p-7 rounded-3xl bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-300/20">
              <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-gold text-navy-deep text-xs font-bold">STEP {i + 1}</div>
              <div className="font-display font-bold text-white text-xl mt-4 mb-2">{s.t}</div>
              <div className="text-slate-400 text-sm">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== INDUSTRIES — FRAMEWORK ============== */
export function IndustryFramework() {
  const frameworks = [
    { icon: FiGlobe, t: "Strategic Jurisdictions", d: "Integrated compliance and strategy for the USA and UAE Markets." },
    { icon: FiLayers, t: "Cross-Border Businesses", d: "Specialized support for local businesses with international dealings." },
    { icon: FiHeart, t: "Healthcare Sector", d: "Professional licensing support for DHA, HAAD, MOHAP and DHCC sectors." },
  ];
  return (
    <section className="relative bg-navy py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Industry Framework</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">Two jurisdictions. <span className="text-shimmer">One trusted partner.</span></h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            From Manhattan to Dubai Marina — we serve businesses that operate where the world's most ambitious capital flows.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-5">
            {frameworks.map((f) => (
              <div key={f.t} className="p-5 rounded-2xl bg-white/[0.03] border border-amber-300/15">
                <f.icon className="w-6 h-6 text-gold mb-3" />
                <div className="text-white font-semibold text-sm">{f.t}</div>
                <div className="text-xs text-slate-400 mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-amber-300/20 glow-gold">
          <img src={industriesImg} alt="UAE and USA" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex justify-between">
            <span className="glass px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white border border-amber-300/30">UAE</span>
            <span className="glass px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white border border-amber-300/30">USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== INDUSTRIES — AUDIENCE ============== */
export function Audience() {
  const audience = [
    { t: "US Expats", d: "Individuals requiring integrated tax compliance and strategy under dual jurisdictions." },
    { t: "Startups", d: "New entities seeking strategic guidance and foundational business setup services." },
    { t: "Established Enterprises", d: "Organizations seeking operational excellence, internal audits, and advanced financial advisory." },
  ];
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Target Audience</div>
        <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-10">Built for those who build.</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {audience.map((a, i) => (
            <div key={a.t} className="relative p-8 rounded-3xl bg-gradient-to-br from-amber-400/15 to-transparent border border-amber-300/20">
              <div className="absolute top-4 right-5 font-display font-black text-5xl text-amber-300/20">0{i + 1}</div>
              <div className="font-display font-bold text-white text-xl mb-3">{a.t}</div>
              <div className="text-slate-400">{a.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== INDUSTRY SECTORS ============== */
export function Sectors() {
  const sectors = [
    "E-commerce & Retail", "Real Estate", "Healthcare & Clinics", "F&B and Hospitality",
    "Professional Services", "Technology & SaaS", "Trading & Logistics", "Construction",
    "Manufacturing", "Education", "Family Offices", "Non-Profits",
  ];
  return (
    <section className="relative bg-navy py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Sectors we serve</div>
        <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-12">If you operate it, we can structure it.</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {sectors.map((s) => (
            <div key={s} className="p-5 rounded-2xl border border-amber-300/15 bg-white/[0.02] hover:border-amber-300/50 hover:bg-amber-300/5 transition text-slate-200 text-sm font-medium">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== INDUSTRY GEOGRAPHIES ============== */
export function Markets() {
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
        {[
          { t: "United Arab Emirates", d: "VAT, corporate tax, DED & free-zone setup, audit, ICV, healthcare licensing.", code: "UAE", c: "Dubai · Abu Dhabi · Sharjah" },
          { t: "United States of America", d: "Federal & state tax, IRS compliance, bookkeeping, payroll, expat strategy.", code: "USA", c: "Los Angeles · New York · Houston" },
        ].map((m) => (
          <div key={m.t} className="relative p-10 rounded-3xl bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-300/20 overflow-hidden">
            <div className="absolute top-6 right-6 font-display font-black text-6xl text-amber-300/20">{m.code}</div>
            <FiMapPin className="w-7 h-7 text-gold mb-4" />
            <div className="font-display font-bold text-white text-2xl mb-2">{m.t}</div>
            <div className="text-slate-400 mb-3">{m.d}</div>
            <div className="text-xs uppercase tracking-widest text-gold">{m.c}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============== BLOG — FEATURED ============== */
export function FeaturedPost() {
  return (
    <section className="relative bg-navy py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-amber-300/20 glow-gold">
          <img src={servicesImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-gold text-navy-deep text-xs font-bold uppercase tracking-wider">Featured</span>
            <span className="flex items-center gap-1 text-xs text-slate-400"><FiCalendar className="w-3 h-3" /> December 27, 2024</span>
          </div>
          <h2 className="font-display font-bold text-white text-3xl lg:text-5xl leading-tight">
            Elevate Your Business with <span className="text-shimmer">Strategic Accounting Solutions.</span>
          </h2>
          <p className="mt-5 text-slate-400 leading-relaxed">
            How modern finance teams are using systematic accounting workflows to compress audit timelines, reduce error rates, and unlock real-time decision-making for leadership.
          </p>
          <button className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-navy-deep font-bold hover:bg-amber-300 transition">
            Read Article <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ============== BLOG — POSTS ============== */
export function PostsGrid() {
  const posts = [
    { t: "Enhance Financial Transparency with Auditing & Assurance Services", d: "December 27, 2024", c: "Audit" },
    { t: "Streamline Your Tax Compliance with Expert Guidance", d: "December 27, 2024", c: "Tax" },
    { t: "Why Cloud Bookkeeping is the New Standard for SMEs", d: "December 20, 2024", c: "Accounting" },
    { t: "UAE Corporate Tax: What Business Owners Must Know in 2025", d: "December 15, 2024", c: "Tax" },
    { t: "Healthcare Licensing in the UAE: A Step-by-Step Guide", d: "December 10, 2024", c: "Healthcare" },
    { t: "Setting Up a US LLC as a UAE Resident — The Complete Map", d: "December 5, 2024", c: "Setup" },
  ];
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Latest articles</div>
        <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-12">Insights from the desk.</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={p.t} className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-amber-300/10 hover:border-amber-300/40 transition-all hover:-translate-y-2 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl group-hover:bg-amber-400/30 transition" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-amber-300/10 text-gold text-xs font-semibold uppercase tracking-wider border border-amber-300/30">{p.c}</span>
                  <span className="flex items-center gap-1 text-xs text-slate-500"><FiCalendar className="w-3 h-3" /> {p.d}</span>
                </div>
                <div className="font-display font-bold text-white text-xl leading-snug mb-6">{p.t}</div>
                <div className="font-display font-black text-7xl text-amber-300/10 group-hover:text-amber-300/30 transition absolute bottom-4 right-6">0{i + 1}</div>
                <button className="inline-flex items-center gap-1 text-gold text-sm font-semibold hover:gap-2 transition-all">
                  Read article <FiArrowUpRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== BLOG — CATEGORIES ============== */
export function Categories() {
  const cats = [
    { t: "Accounting", c: 14 }, { t: "Tax", c: 11 }, { t: "Audit", c: 8 },
    { t: "Business Setup", c: 7 }, { t: "Healthcare", c: 5 }, { t: "Strategy", c: 9 },
  ];
  return (
    <section className="relative bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Browse by category</div>
        <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-10">Filter what matters most.</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {cats.map((c) => (
            <button key={c.t} className="p-5 rounded-2xl bg-white/[0.03] border border-amber-300/15 hover:border-gold hover:bg-amber-300/5 transition group text-left">
              <div className="text-white font-display font-bold">{c.t}</div>
              <div className="text-xs text-gold mt-1">{c.c} articles</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== BLOG — NEWSLETTER ============== */
export function Newsletter() {
  return (
    <section className="relative bg-navy-deep py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-10 lg:p-14 rounded-3xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 animate-gradient overflow-hidden glow-gold">
          <div className="absolute inset-0 opacity-20 grid-pattern" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-navy-deep/70 mb-3">Newsletter</div>
              <h3 className="font-display font-bold text-navy-deep text-3xl lg:text-4xl leading-tight">Join our subscribers list to get the latest news and special offers.</h3>
            </div>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="email" required placeholder="Email Address" className="w-full pl-11 pr-4 py-4 rounded-full bg-white text-navy-deep placeholder-slate-400 outline-none focus:ring-4 ring-white/40" />
              </div>
              <button className="px-7 py-4 rounded-full bg-navy-deep text-white font-semibold hover:bg-navy transition flex items-center justify-center gap-2">
                Subscribe <FiArrowUpRight />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== CONTACT — INFO ============== */
export function ContactInfo() {
  return (
    <section className="relative bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-5">
        {[
          { i: FiMail, t: "Official Email", v: "info@fauconimc.com", h: "mailto:info@fauconimc.com", s: "Reply within 1 business day." },
          { i: FaWhatsapp, t: "WhatsApp · UAE", v: "+971 50 791 7150", h: "https://wa.me/971507917150", s: "Direct line for UAE inquiries." },
          { i: FaWhatsapp, t: "WhatsApp · USA", v: "+1 (818) 723-6166", h: "https://wa.me/18187236166", s: "Direct line for USA inquiries." },
        ].map((c) => (
          <a key={c.t} href={c.h} className="group p-7 rounded-3xl bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-300/20 hover:border-gold transition">
            <div className="w-12 h-12 rounded-xl bg-gold text-navy-deep flex items-center justify-center mb-5 glow-gold"><c.i className="w-5 h-5" /></div>
            <div className="text-xs uppercase tracking-widest text-gold mb-1">{c.t}</div>
            <div className="text-white text-lg font-display font-bold">{c.v}</div>
            <div className="text-sm text-slate-400 mt-2">{c.s}</div>
            <div className="mt-5 inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
              Open <FiArrowUpRight />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============== CONTACT — FORM ============== */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3 text-center">Send a message</div>
        <h2 className="font-display font-bold text-white text-3xl lg:text-5xl text-center mb-10">Let's talk <span className="text-shimmer">strategy.</span></h2>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="p-8 lg:p-12 rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-amber-300/20 backdrop-blur-xl glow-gold">
          {sent ? (
            <div className="p-8 text-center">
              <FiCheck className="w-12 h-12 text-gold mx-auto mb-4" />
              <div className="text-white font-display font-bold text-2xl">Thank you!</div>
              <div className="text-slate-300 mt-2">Your message is on its way to our team.</div>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="px-5 py-4 rounded-xl bg-white/[0.03] border border-amber-300/10 focus:border-gold text-white placeholder-slate-500 outline-none transition" />
              <input required type="email" placeholder="Email" className="px-5 py-4 rounded-xl bg-white/[0.03] border border-amber-300/10 focus:border-gold text-white placeholder-slate-500 outline-none transition" />
              <select required className="sm:col-span-2 px-5 py-4 rounded-xl bg-white/[0.03] border border-amber-300/10 focus:border-gold text-white outline-none transition">
                <option value="" className="bg-navy-deep">Service Interest</option>
                {CORE_SERVICES.map((s) => <option key={s.t} className="bg-navy-deep">{s.t}</option>)}
                {ANCILLARY.map((s) => <option key={s.t} className="bg-navy-deep">{s.t}</option>)}
              </select>
              <textarea required rows={5} placeholder="Message" className="sm:col-span-2 px-5 py-4 rounded-xl bg-white/[0.03] border border-amber-300/10 focus:border-gold text-white placeholder-slate-500 outline-none transition resize-none" />
              <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 font-bold glow-gold hover:scale-[1.02] transition" style={{ color: "#060a1a" }}>
                Send Message <FiArrowUpRight />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/* ============== CONTACT — OFFICES ============== */
export function Offices() {
  return (
    <section className="relative bg-navy py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Where to find us</div>
        <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-12">Two regions. One playbook.</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { c: "Dubai, UAE", a: "Business Bay · Strategic Tower, Dubai, United Arab Emirates", t: "Sun – Thu · 09:00 – 19:00" },
            { c: "Los Angeles, USA", a: "Wilshire Blvd · Suite 800, Los Angeles, California", t: "Mon – Fri · 09:00 – 18:00 PST" },
          ].map((o) => (
            <div key={o.c} className="p-8 rounded-3xl bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-300/20">
              <FiMapPin className="w-7 h-7 text-gold mb-4" />
              <div className="font-display font-bold text-white text-2xl">{o.c}</div>
              <div className="text-slate-400 mt-2">{o.a}</div>
              <div className="text-xs uppercase tracking-widest text-gold mt-4">{o.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== CONTACT — FAQ ============== */
export function FAQ() {
  const faqs = [
    { q: "Do you serve both USA and UAE clients?", a: "Yes — Faucon IMC operates across both jurisdictions with dedicated teams for each." },
    { q: "What accounting platforms do you support?", a: "QuickBooks Online, Xero, Zoho Books — plus migration support from legacy systems." },
    { q: "How fast can you onboard a new client?", a: "Most engagements move from kickoff to first close within 2–4 weeks." },
    { q: "Is your pricing transparent?", a: "Yes. Fixed-fee structures with no hidden costs. You always know what you're paying for." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3 text-center">FAQ</div>
        <h3 className="font-display font-bold text-white text-3xl lg:text-4xl mb-12 text-center">Quick answers.</h3>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <button key={f.q} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left p-5 rounded-2xl bg-white/[0.03] border border-amber-300/10 hover:border-amber-300/40 transition">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display font-bold text-white text-lg">{f.q}</span>
                <FiChevronDown className={`w-5 h-5 text-gold transition shrink-0 mt-1 ${open === i ? "rotate-180" : ""}`} />
              </div>
              <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden text-slate-400">{f.a}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== HOME PREVIEW STRIPS ============== */
export function AboutPreview() {
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[5/4] rounded-3xl overflow-hidden border border-amber-300/20">
          <img src={aboutImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About Faucon</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl leading-tight">
            Bridging traditional accounting and <span className="text-shimmer">forward-thinking strategy.</span>
          </h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            The "F.A.U.C." acronym — Financial Accuracy, Understanding, and Clarity — encodes how we operate on every engagement.
          </p>
          <Link to="/about" className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-navy-deep font-bold hover:bg-amber-300 transition">
            Discover Our Story <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="relative bg-navy py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">What we do</div>
            <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">Services built to scale with you.</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all">
            All Services <FiArrowUpRight />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_SERVICES.slice(0, 6).map((s) => (
            <Link to="/services" key={s.t} className="group p-7 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-amber-300/10 hover:border-amber-300/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-gold text-navy-deep flex items-center justify-center mb-4 glow-gold">
                <s.icon className="w-5 h-5" />
              </div>
              <div className="font-display font-bold text-white text-lg mb-2">{s.t}</div>
              <div className="text-sm text-slate-400">{s.d}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustriesPreview() {
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Industries</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">From Manhattan to <span className="text-shimmer">Dubai Marina.</span></h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Specialized cross-border support — wherever ambitious capital flows.
          </p>
          <Link to="/industries" className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-navy-deep font-bold hover:bg-amber-300 transition">
            View Industries <FiArrowUpRight />
          </Link>
        </div>
        <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-amber-300/20 glow-gold">
          <img src={industriesImg} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex justify-between">
            <span className="glass px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white border border-amber-300/30">UAE</span>
            <span className="glass px-4 py-2 rounded-full text-xs uppercase tracking-widest text-white border border-amber-300/30">USA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PartnerPreview() {
  return (
    <section className="relative bg-navy py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-amber-300/20 glow-gold order-2 lg:order-1">
          <img src={partnerImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Partner Spotlight</div>
          <h2 className="font-display font-bold text-white text-4xl lg:text-5xl">NestedSol · <span className="text-shimmer">technology that ships.</span></h2>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Finance and engineering — the two halves of a modern business — delivered through one trusted relationship.
          </p>
          <Link to="/partner" className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-navy-deep font-bold hover:bg-amber-300 transition">
            Meet Our Partner <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============== CTA STRIP (shared) ============== */
export function CTAStrip() {
  return (
    <section className="relative bg-navy-deep py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-amber-400/15 via-transparent to-amber-300/10 border border-amber-300/25 p-10 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Let's begin</div>
              <h2 className="font-display font-bold text-white text-3xl lg:text-5xl leading-tight">
                Talk to a senior advisor. <br /><span className="text-shimmer">No sales script.</span>
              </h2>
              <p className="mt-5 text-slate-300 max-w-lg">
                A 30-minute call to understand your business and outline what a Faucon engagement looks like for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 font-bold glow-gold hover:scale-[1.03] transition" style={{ color: "#060a1a" }}>
                Book a Call <FiArrowUpRight />
              </Link>
              <a href="https://wa.me/971507917150" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-amber-300/30 text-white hover:bg-amber-300/5 transition">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== STATS BAND (shared) ============== */
export function StatsBand() {
  const stats = [
    { v: "0+", l: "Years of Proud Existence", i: FiAward },
    { v: "4+", l: "Succeeded Projects", i: FiCheck },
    { v: "2+", l: "Satisfied Clients", i: FiHeart },
    { v: "2", l: "Strategic Jurisdictions", i: FiGlobe },
  ];
  return (
    <section className="relative bg-navy py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.l} className="p-7 rounded-3xl bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-300/20 text-center">
            <s.i className="w-7 h-7 text-gold mx-auto mb-3" />
            <div className="font-display font-black text-white text-4xl lg:text-5xl">{s.v}</div>
            <div className="text-xs uppercase tracking-widest text-slate-400 mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============== TESTIMONIAL (shared filler) ============== */
export function Testimonial() {
  return (
    <section className="relative bg-navy-deep py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FiMessageCircle className="w-10 h-10 text-gold mx-auto mb-6" />
        <p className="font-display text-white text-2xl lg:text-4xl leading-tight">
          "Faucon turned our finance function from a monthly fire-drill into a <span className="text-shimmer">strategic advantage.</span>"
        </p>
        <div className="mt-8 text-sm uppercase tracking-widest text-gold">— CFO, Cross-Border SaaS Client</div>
      </div>
    </section>
  );
}
