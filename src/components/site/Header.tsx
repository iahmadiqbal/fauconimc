import { useEffect, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { FiMenu, FiX, FiChevronDown, FiArrowUpRight } from "react-icons/fi";
import logo from "../../assets/logo.png";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Partner", to: "/partner" },
  {
    label: "Services",
    to: "/services",
    children: [
      "Auditing and Assurance",
      "Accounting Services",
      "USA & UAE Tax Services",
      "Business Setup Services",
      "Healthcare Licensing",
      "Digital Marketing",
      "Web Development",
      "Graphic Designing",
    ],
  },
  { label: "Industries", to: "/industries" },
  { label: "Blogs", to: "/blogs" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = router.state.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const isActive = (to: string) => (to === "/" ? path === "/" : path.startsWith(to));

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-deep/85 backdrop-blur-xl border-b border-amber-300/10 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img src={logo} alt="Faucon IMC" className="h-12 w-12 object-contain drop-shadow-[0_0_18px_rgba(245,196,98,0.35)] group-hover:scale-105 transition" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-white text-lg tracking-wide">FAUCON <span className="text-gold">IMC</span></div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-amber-200/70">Precision · Purpose</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.to}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition flex items-center gap-1 ${
                  isActive(item.to) ? "text-gold" : "text-slate-200 hover:text-white"
                }`}
              >
                {item.label}
                {"children" in item && <FiChevronDown className="w-3 h-3 mt-0.5" />}
              </Link>
              {"children" in item && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-72 glass border border-amber-300/15 rounded-2xl p-2 shadow-2xl">
                    {item.children.map((c) => (
                      <Link
                        key={c}
                        to="/services"
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-200 hover:text-gold hover:bg-amber-300/5 rounded-xl transition flex items-center justify-between group/it"
                      >
                        <span>{c}</span>
                        <FiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/it:opacity-100 group-hover/it:translate-x-0 transition" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 text-navy-deep text-sm font-bold transition-all hover:scale-[1.04] glow-gold"
            style={{ color: "#060a1a" }}
          >
            Get in Touch <FiArrowUpRight />
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Menu">
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-4 glass border border-amber-300/15 rounded-2xl p-3">
          {NAV.map((item) => (
            <Link key={item.label} to={item.to} className={`block px-4 py-3 rounded-xl ${isActive(item.to) ? "text-gold bg-amber-300/5" : "text-slate-200 hover:bg-white/5"}`}>
              {item.label}
            </Link>
          ))}
          <Link to="/contact" className="block mt-2 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 font-bold" style={{ color: "#060a1a" }}>
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
