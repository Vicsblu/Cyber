import { useState } from "react";
import Icon from "./Icons";
import SectionHeader from "./SectionHeader";
import { useInView } from "../hooks";
import { DASH_CARDS, DASH_STATUS_BAR } from "../data/portfolioData";

export default function Dashboard() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="dashboard" ref={ref} className="py-24 px-6" style={{ background: "#050810" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="02 // DASHBOARD" title="Security Operations Center" />

        {/* Status bar */}
        <div className="flex flex-wrap gap-4 mb-12 p-4 border border-cyan-900/40 bg-black/40">
          {DASH_STATUS_BAR.map(([k, v, c]) => (
            <div
              key={k}
              className="flex items-center gap-2 text-xs"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              <span className="text-gray-500">{k}:</span>
              <span style={{ color: c }}>{v}</span>
              <span className="text-gray-700">|</span>
            </div>
          ))}
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {DASH_CARDS.map((card, i) => {
            const IconComp = Icon[card.iconKey];
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative border p-6 cursor-default transition-all duration-300 group"
                style={{
                  borderColor: hovered === i ? card.color : "rgba(0,245,255,0.1)",
                  background: hovered === i ? card.glow : "rgba(0,0,0,0.4)",
                  boxShadow: hovered === i ? `0 0 30px ${card.glow}` : "none",
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div style={{ color: card.color }}>
                    <IconComp />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ background: card.statColor }}
                    />
                    <span
                      className="text-xs"
                      style={{ fontFamily: "'Courier New', monospace", color: card.statColor }}
                    >
                      {card.stat}
                    </span>
                  </div>
                </div>

                <div
                  className="text-xs tracking-widest mb-3 font-bold"
                  style={{ fontFamily: "'Courier New', monospace", color: card.color }}
                >
                  {card.label}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {card.desc}
                </p>

                {/* Corner accents */}
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderBottom: `1px solid ${card.color}`, borderRight: `1px solid ${card.color}` }}
                />
                <div
                  className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderTop: `1px solid ${card.color}`, borderLeft: `1px solid ${card.color}` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
