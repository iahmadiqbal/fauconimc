import { useEffect, useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from "react-icons/fi";

const NAV = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Partner", id: "partner" },
  {
    label: "Services",
    id: "services",
    children: [
      { label: "Auditing and Assurance", id: "services" },
      { label: "Accounting Services", id: "services" },
      { label: "USA & UAE Tax Services", id: "services" },
      { label: "Business Setup Services", id: "services" },
      { label: "Healthcare Licensing", id: "services" },
      { label: "Digital Marketing", id: "services" },
      { label: "Web Development", id: "services" },
      { label: "Graphic Designing", id: "services" },
    ],
  },
  { label: "Industries", id: "industries" },
  { label: "Blogs", id: "blogs" },
];

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = ["home", "about", "partner", "services", "industries", "blogs", "contact"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-900/80 backdrop-blur-xl border-b border-blue-500/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-display font-black text-white text-lg glow-blue group-hover:scale-105 transition">
            F
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-bold text-white tracking-tight">Faucon IMC</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-blue-300/70">Precision · Purpose</div>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <button
                onClick={() => go(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition flex items-center gap-1 ${
                  active === item.id ? "text-blue-300" : "text-slate-200 hover:text-white"
                }`}
              >
                {item.label}
                {item.children && <FiChevronDown className="w-3 h-3 mt-0.5" />}
              </button>
              {item.children && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-72 glass border border-blue-500/20 rounded-2xl p-2 shadow-2xl">
                    {item.children.map((c) => (
                      <button
                        key={c.label}
                        onClick={() => go(c.id)}
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-blue-600/20 rounded-xl transition flex items-center justify-between group/it"
                      >
                        <span>{c.label}</span>
                        <FiArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/it:opacity-100 group-hover/it:translate-x-0 transition" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("contact")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-semibold transition-all hover:scale-[1.03] glow-blue"
          >
            Get in Touch <FiArrowRight />
          </button>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Menu">
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-3 mx-4 glass border border-blue-500/20 rounded-2xl p-3">
          {NAV.map((item) => (
            <button
              key={item.label}
              onClick={() => go(item.id)}
              className="w-full text-left px-4 py-3 text-slate-200 hover:bg-blue-600/20 rounded-xl"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
