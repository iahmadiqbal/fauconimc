import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiMail, FiArrowUpRight, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import logo from "../../assets/logo.png";

const QUICK = [
  { l: "Home", to: "/" as const },
  { l: "About Us", to: "/about" as const },
  { l: "Our Partner", to: "/partner" as const },
  { l: "Services", to: "/services" as const },
  { l: "Industries", to: "/industries" as const },
  { l: "Blogs", to: "/blogs" as const },
  { l: "Contact Us", to: "/contact" as const },
];
const SERVICES = [
  "Auditing and Assurance",
  "Accounting Services",
  "USA & UAE Tax Services",
  "Business Setup Services",
  "Healthcare Licensing",
  "Digital Marketing",
  "Web Development",
  "Graphic Designing",
];
const INDUSTRIES = [
  "US Expats",
  "Startups",
  "Established Enterprises",
  "Cross-Border Businesses",
  "Healthcare Sector",
  "SMEs & Family Offices",
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 text-slate-600 overflow-hidden border-t border-slate-200">
      {/* Subtle top accent line */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #d4a017, #f5c462, #d4a017)" }} />

      {/* CTA Strip */}
      <div className="relative max-w-7xl mx-auto px-6 pt-14">
        <div
          className="rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #1a0f00 0%, #060a1a 50%, #0a1024 100%)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
          }}
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: "#f5c462aa" }}>
              Ready when you are
            </div>
            <div
              className="font-display font-black text-2xl lg:text-4xl leading-tight text-white"
            >
              Let's build the financial backbone{" "}
              <span style={{ color: "#f5c462" }}>of your business.</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold shrink-0 transition hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, #d4a017, #f5c462)",
              color: "#1a0f00",
              boxShadow: "0 4px 20px rgba(212,160,23,0.4)",
            }}
          >
            Start a Conversation <FiArrowUpRight />
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* 1. Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src={logo} alt="Faucon IMC" className="h-12 w-12 object-contain" loading="lazy" />
              <div>
                <div className="font-display font-bold text-slate-900 text-lg">
                  FAUCON <span style={{ color: "#c9922a" }}>IMC</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                  Precision · Purpose
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">
              Among the top accounting and bookkeeping firms across the USA and UAE — financial clarity, engineered.
            </p>
            <div className="flex gap-2 flex-wrap">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-white transition-all hover:scale-110"
                  style={{ ["--hover-bg" as string]: "#c9922a" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#c9922a";
                    (e.currentTarget as HTMLElement).style.borderColor = "#c9922a";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "white";
                    (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0";
                    (e.currentTarget as HTMLElement).style.color = "#64748b";
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK.map((q) => (
                <li key={q.l}>
                  <Link
                    to={q.to}
                    className="text-sm text-slate-500 hover:text-amber-700 transition flex items-center gap-2 group"
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-3"
                      style={{ background: "#c9922a" }}
                    />
                    {q.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-500 hover:text-amber-700 transition"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Industries */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-3">
              {INDUSTRIES.map((s) => (
                <li key={s}>
                  <Link
                    to="/industries"
                    className="text-sm text-slate-500 hover:text-amber-700 transition"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Reach + Newsletter */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-5 text-sm uppercase tracking-wider">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 mb-6">
              <li className="flex items-start gap-3">
                <FiMail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9922a" }} />
                <a href="mailto:info@fauconimc.com" className="hover:text-slate-900 transition">
                  info@fauconimc.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9922a" }} />
                <a href="https://wa.me/971507917150" className="hover:text-slate-900 transition">
                  UAE · +971 50 791 7150
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9922a" }} />
                <a href="https://wa.me/18187236166" className="hover:text-slate-900 transition">
                  USA · +1 (818) 723-6166
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#c9922a" }} />
                Mon–Sat · 09:00 – 19:00
              </li>
            </ul>

            {/* Newsletter */}
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full pl-4 pr-12 py-3 rounded-full bg-white border border-slate-200 text-slate-800 placeholder-slate-400 text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition"
              />
              <button
                className="absolute right-1 top-1 bottom-1 px-3 rounded-full flex items-center justify-center transition hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #d4a017, #f5c462)", color: "#1a0f00" }}
                aria-label="Subscribe"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="text-slate-500">
            © {new Date().getFullYear()} Faucon International Management Consultancy LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <FiMapPin className="w-3 h-3" style={{ color: "#c9922a" }} />
            Dubai, UAE · Los Angeles, USA
          </div>
          <div className="font-display tracking-[0.3em] font-semibold" style={{ color: "#c9922a" }}>
            PRECISION · PURPOSE
          </div>
        </div>
      </div>
    </footer>
  );
}
