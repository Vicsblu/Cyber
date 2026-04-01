import Icon from "./Icons";
import SectionHeader from "./SectionHeader";
import { useInView } from "../hooks";
import { SKILL_GROUPS, CERTIFICATIONS } from "../data/portfolioData";

function SkillBar({ name, level, color, delay }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div ref={ref} className="mb-4" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300" style={{ fontFamily: "'Courier New', monospace" }}>
          {name}
        </span>
        <span className="text-xs" style={{ fontFamily: "'Courier New', monospace", color }}>
          {level}%
        </span>
      </div>
      <div className="h-1 bg-gray-800 relative overflow-hidden">
        <div
          className="h-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}80, ${color})`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-6"
      style={{
        background: "linear-gradient(160deg, #0d1f2d 0%, #0a1628 50%, #111827 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="04 // SKILLS" title="Arsenal & Capabilities" />

        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {SKILL_GROUPS.map((g, gi) => (
            <div
              key={g.category}
              className="border p-6"
              style={{ borderColor: "rgba(0,245,255,0.18)", background: "rgba(255,255,255,0.03)" }}
            >
              <div
                className="text-xs tracking-widest mb-6 font-bold flex items-center gap-2"
                style={{ fontFamily: "'Courier New', monospace", color: g.color }}
              >
                <span className="w-4 h-px" style={{ background: g.color }} />
                {g.category.toUpperCase()}
              </div>
              {g.items.map((s, si) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  color={g.color}
                  delay={gi * 100 + si * 80}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-14">
          <div
            className="text-xs tracking-widest mb-6 text-cyan-400 font-bold flex items-center gap-3"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            <span className="w-6 h-px bg-cyan-400" />// CERTIFICATIONS
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((c) => {
              const IconComp = Icon[c.iconKey];
              return (
                <div
                  key={c.name}
                  className="flex items-center gap-4 p-5 border transition-all duration-200 hover:border-cyan-600/50 group"
                  style={{
                    borderColor: "rgba(0,245,255,0.15)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0 border"
                    style={{
                      color: c.iconColor,
                      borderColor: `${c.iconColor}40`,
                      background: `${c.iconColor}0d`,
                    }}
                  >
                    <IconComp />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm leading-snug group-hover:text-cyan-200 transition-colors">
                      {c.name}
                    </div>
                    <div
                      className="text-xs text-gray-500 mt-0.5"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      {c.issuer}
                    </div>
                  </div>
                  <span
                    className="ml-2 shrink-0 text-xs px-2 py-1 border font-bold"
                    style={{
                      fontFamily: "'Courier New', monospace",
                      color: c.statusColor,
                      borderColor: `${c.statusColor}60`,
                      background: `${c.statusColor}10`,
                    }}
                  >
                    {c.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
