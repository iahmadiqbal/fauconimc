import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FiMail, FiArrowUpRight, FiMapPin, FiPhone, FiClock, FiSend } from "react-icons/fi";
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
const INDUSTRIES = ["US Expats", "Startups", "Established Enterprises", "Cross-Border Businesses", "Healthcare Sector", "SMEs & Family Offices"];

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep text-slate-300 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-400/10 rounded-full blur-3xl" />

      {/* CTA Strip */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16">
        <div className="rounded-3xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 animate-gradient p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 glow-gold">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-navy-deep/70 mb-2">Ready when you are</div>
            <div className="font-display font-black text-navy-deep text-2xl lg:text-4xl leading-tight">Let's build the financial backbone of your business.</div>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-navy-deep text-white font-bold hover:bg-navy transition shrink-0">
            Start a Conversation <FiArrowUpRight />
          </Link>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* 1. Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img src={logo} alt="Faucon IMC" className="h-14 w-14 object-contain" loading="lazy" />
              <div>
                <div className="font-display font-bold text-white text-lg">FAUCON <span className="text-gold">IMC</span></div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-amber-200/70">Precision · Purpose</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Among the top accounting and bookkeeping firms across the USA and UAE — financial clarity, engineered.
            </p>
            <div className="flex gap-2 flex-wrap">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full border border-amber-300/20 flex items-center justify-center text-slate-300 hover:bg-gold hover:border-gold hover:text-navy-deep transition-all hover:scale-110">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK.map((q) => (
                <li key={q.l}>
                  <Link to={q.to} className="text-sm text-slate-400 hover:text-gold transition flex items-center gap-2 group">
                    <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-3" />
                    {q.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Services */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-slate-400 hover:text-gold transition">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Industries */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3">
              {INDUSTRIES.map((s) => (
                <li key={s}>
                  <Link to="/industries" className="text-sm text-slate-400 hover:text-gold transition">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Reach + Newsletter */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">Reach Us</h4>
            <ul className="space-y-3 text-sm text-slate-400 mb-6">
              <li className="flex items-start gap-3"><FiMail className="w-4 h-4 mt-1 text-gold" /><a href="mailto:info@fauconimc.com" className="hover:text-white">info@fauconimc.com</a></li>
              <li className="flex items-start gap-3"><FaWhatsapp className="w-4 h-4 mt-1 text-gold" /><a href="https://wa.me/971507917150" className="hover:text-white">UAE · +971 50 791 7150</a></li>
              <li className="flex items-start gap-3"><FaWhatsapp className="w-4 h-4 mt-1 text-gold" /><a href="https://wa.me/18187236166" className="hover:text-white">USA · +1 (818) 723-6166</a></li>
              <li className="flex items-start gap-3"><FiClock className="w-4 h-4 mt-1 text-gold" />Mon–Sat · 09:00 – 19:00</li>
            </ul>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input type="email" placeholder="your@email.com" className="w-full pl-4 pr-12 py-3 rounded-full bg-white/5 border border-amber-300/15 text-white placeholder-slate-500 text-sm outline-none focus:border-amber-300/50" />
              <button className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-gold text-navy-deep flex items-center justify-center hover:bg-amber-300 transition" aria-label="Subscribe">
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-amber-300/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Faucon International Management Consultancy LLC. All rights reserved.</div>
          <div className="flex items-center gap-2 text-amber-200/60">
            <FiMapPin className="w-3 h-3" /> Dubai, UAE · Los Angeles, USA
          </div>
          <div className="font-display tracking-[0.3em] text-amber-200/60">PRECISION · PURPOSE</div>
        </div>
      </div>
    </footer>
  );
}
