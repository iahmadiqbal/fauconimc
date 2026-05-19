import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { scrollToId } from "./Header";

const QUICK = ["home", "about", "partner", "services", "industries", "blogs", "contact"];
const SERVICES = [
  "Auditing and Assurance",
  "Accounting Services",
  "USA and UAE Tax Services",
  "Business Setup Services",
  "Healthcare Licensing",
  "Digital Marketing",
  "Web Development",
  "Graphic Designing",
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-display font-black text-white text-xl glow-blue">
                F
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">Faucon IMC</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-blue-300/70">Precision · Purpose</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Faucon International Management Consultancy LLC — among the top accounting and bookkeeping firms across the USA and UAE.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-blue-500/20 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK.map((q) => (
                <li key={q}>
                  <button
                    onClick={() => scrollToId(q)}
                    className="text-sm text-slate-400 hover:text-blue-300 transition flex items-center gap-2 group capitalize"
                  >
                    <FiArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                    {q === "contact" ? "Contact Us" : q === "about" ? "About Us" : q}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button onClick={() => scrollToId("services")} className="text-sm text-slate-400 hover:text-blue-300 transition text-left">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-wider">Reach Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <FiMail className="w-4 h-4 mt-1 text-blue-400" />
                <a href="mailto:info@fauconimc.com" className="hover:text-white">info@fauconimc.com</a>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <div className="text-xs text-slate-500">UAE</div>
                  <a href="https://wa.me/971507917150" className="hover:text-white">+971 50 791 7150</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <div className="text-xs text-slate-500">USA</div>
                  <a href="https://wa.me/18187236166" className="hover:text-white">+1 (818) 723-6166</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} Faucon International Management Consultancy LLC. All rights reserved.</div>
          <div className="font-display tracking-wider">PRECISION · MEETS · PURPOSE</div>
        </div>
      </div>
    </footer>
  );
}
