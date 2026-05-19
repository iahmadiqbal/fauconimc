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
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200 py-2"
          : "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={logo}
            alt="Faucon IMC"
            className="h-11 w-11 object-contain group-hover:scale-105 transition"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-slate-900 text-lg tracking-wide">
              FAUCON <span style={{ color: "#c9922a" }}>IMC</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
              Precision · Purpose
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.to}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all flex items-center gap-1 ${
                  isActive(item.to)
                    ? "text-amber-600 bg-amber-50 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {item.label}
                {"children" in item && (
                  <FiChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>

              {"children" in item && (
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  <div className="w-72 bg-white border border-slate-200 rounded-2xl p-2 shadow-xl shadow-slate-200/60">
                    {item.children.map((c) => (
                      <Link
                        key={c}
                        to="/services"
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:text-amber-700 hover:bg-amber-50 rounded-xl transition flex items-center justify-between group/it"
                      >
                        <span>{c}</span>
                        <FiArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/it:opacity-100 group-hover/it:translate-x-0 transition text-amber-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-[1.03] hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #d4a017, #f5c462)",
              color: "#1a0f00",
              boxShadow: "0 4px 14px rgba(212,160,23,0.35)",
            }}
          >
            Get in Touch <FiArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition"
            aria-label="Menu"
          >
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mt-2 mx-4 mb-3 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition ${
                isActive(item.to)
                  ? "text-amber-700 bg-amber-50 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 pt-2 border-t border-slate-100">
            <Link
              to="/contact"
              className="block text-center px-4 py-3 rounded-xl font-bold text-sm transition hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #d4a017, #f5c462)",
                color: "#1a0f00",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
