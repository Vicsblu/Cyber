import SectionHeader from "./SectionHeader";
import { useInView } from "../hooks";
import { TIMELINE } from "../data/portfolioData";

export default function Timeline() {
  const [ref, inView] = useInView();

  return (
    <section id="timeline" ref={ref} className="py-24 px-6" style={{ background: "#050810" }}>
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="06 // TIMELINE" title="Learning Journey" />

        <div className={`relative transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
          {/* Vertical spine */}
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-cyan-900/40" />

          {TIMELINE.map((t, i) => (
            <div
              key={i}
              className="flex gap-8 mb-10 relative"
              style={{
                transitionDelay: `${i * 120}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: "all 0.6s ease",
              }}
            >
              {/* Year */}
              <div className="w-[56px] shrink-0 text-right">
                <span
                  className="text-xs font-bold"
                  style={{ fontFamily: "'Courier New', monospace", color: t.color }}
                >
                  {t.year}
                </span>
              </div>

              {/* Dot */}
              <div className="relative shrink-0 flex items-start pt-0.5">
                <div
                  className="w-3 h-3 rounded-full border-2 z-10"
                  style={{
                    borderColor: t.color,
                    background: "#050810",
                    boxShadow: `0 0 8px ${t.color}`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 pb-2 pl-2">
                <div className="text-white font-bold mb-1">{t.label}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
