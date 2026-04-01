import { useState } from "react";
import Icon from "./Icons";
import SectionHeader from "./SectionHeader";
import { useInView } from "../hooks";
import { KNOWLEDGE_TOPICS } from "../data/portfolioData";

export default function Knowledge() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();

  return (
    <section id="knowledge" ref={ref} className="py-24 px-6" style={{ background: "#070b14" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="05 // KNOWLEDGE HUB" title="Things to Know About Cybersecurity" />

        <div
          className={`grid md:grid-cols-5 gap-0 border border-cyan-900/30 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Sidebar */}
          <div className="md:col-span-2 border-r border-cyan-900/30">
            {KNOWLEDGE_TOPICS.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-full text-left p-4 border-b border-cyan-900/20 flex items-center gap-3 transition-all duration-200"
                style={{ background: active === i ? `${t.color}08` : "transparent" }}
              >
                <div
                  className="w-1.5 h-6 shrink-0 transition-all duration-200"
                  style={{ background: active === i ? t.color : "transparent" }}
                />
                <span
                  className="text-sm leading-snug"
                  style={{
                    color: active === i ? "white" : "#6b7280",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {t.title}
                </span>
                {active === i && (
                  <span className="ml-auto text-cyan-400">
                    <Icon.ChevronRight />
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="md:col-span-3 p-8 bg-black/30 flex flex-col justify-center">
            <div
              className="text-xs tracking-widest mb-3 font-bold"
              style={{
                fontFamily: "'Courier New', monospace",
                color: KNOWLEDGE_TOPICS[active].color,
              }}
            >
              // {KNOWLEDGE_TOPICS[active].title.toUpperCase()}
            </div>
            <p className="text-gray-300 leading-relaxed text-base">
              {KNOWLEDGE_TOPICS[active].content}
            </p>
            <div
              className="mt-6 h-px"
              style={{
                background: `linear-gradient(90deg, ${KNOWLEDGE_TOPICS[active].color}, transparent)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
