import { useState, useEffect } from "react";
import Icon from "./Icons";
import { NAV_LINKS } from "../data/portfolioData";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-[2px] left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,8,15,0.95)" : "rgba(5,8,15,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(0,245,255,0.12)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          <div
            className="w-8 h-8 border border-cyan-400 flex items-center justify-center"
            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          >
            <span
              className="text-cyan-400 text-xs font-bold"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              V
            </span>
          </div>
          <span
            className="text-white font-bold tracking-widest text-sm"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            VOG<span className="text-cyan-400">SEC</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-xs tracking-widest uppercase text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="text-xs px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200 tracking-widest"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            HIRE ME
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-400" onClick={() => setOpen(!open)}>
          {open ? <Icon.X /> : <Icon.Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-cyan-900">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-left text-sm tracking-widest uppercase text-gray-400 hover:text-cyan-400 transition-colors"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
