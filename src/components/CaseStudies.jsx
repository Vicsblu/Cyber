import Icon from "./Icons";
import SectionHeader from "./SectionHeader";
import { useInView } from "../hooks";
import { CASES } from "../data/portfolioData";

const SEVERITY_COLORS = { HIGH: "#ff4444", CRITICAL: "#ff0000", MEDIUM: "#ffa500" };

function CaseCard({ cs, idx }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="relative border border-cyan-900/30 bg-black/50 overflow-hidden transition-all duration-500 group hover:border-opacity-60"
      style={{
        transitionDelay: `${idx * 80}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        borderColor: inView ? undefined : "transparent",
      }}
    >
      {/* Top colour stripe */}
      <div className="h-[2px] w-full" style={{ background: cs.color }} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-xs px-2 py-0.5 border"
                style={{
                  fontFamily: "'Courier New', monospace",
                  color: cs.color,
                  borderColor: cs.color,
                  background: `${cs.color}10`,
                }}
              >
                {cs.id}
              </span>
              <span
                className="text-xs text-gray-500 tracking-widest"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {cs.category.toUpperCase()}
              </span>
            </div>
            <h3 className="text-white font-bold text-lg leading-snug group-hover:text-cyan-300 transition-colors duration-200">
              {cs.title}
            </h3>
          </div>
          <div className="text-right shrink-0 ml-4">
            <div
              className="text-xs px-2 py-0.5 mb-1"
              style={{
                fontFamily: "'Courier New', monospace",
                color: SEVERITY_COLORS[cs.severity],
                background: `${SEVERITY_COLORS[cs.severity]}10`,
                border: `1px solid ${SEVERITY_COLORS[cs.severity]}40`,
              }}
            >
              {cs.severity}
            </div>
            <div className="text-xs text-green-400" style={{ fontFamily: "'Courier New', monospace" }}>
              {cs.status}
            </div>
          </div>
        </div>

        {/* PAR content */}
        <div className="space-y-4 text-sm text-gray-400">
          {[
            { label: "// PROBLEM", text: cs.problem, className: "" },
            { label: "// ACTION",  text: cs.action,  className: "" },
            { label: "// RESULT",  text: cs.result,  className: "text-gray-300" },
          ].map(({ label, text, className }) => (
            <div key={label}>
              <span
                className="text-xs tracking-widest text-gray-600 block mb-1"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {label}
              </span>
              <p className={className}>{text}</p>
            </div>
          ))}
        </div>

        {/* Tool badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {cs.tools.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 border border-cyan-900/50 text-cyan-600"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 pt-4 border-t border-cyan-900/20 flex items-center justify-between">
          <span
            className="text-xs text-gray-600"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Full write-up on Notion →
          </span>
          <a
            href={cs.notionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs px-4 py-2 border font-semibold transition-all duration-200 hover:bg-opacity-20"
            style={{
              fontFamily: "'Courier New', monospace",
              color: cs.color,
              borderColor: cs.color,
              background: `${cs.color}08`,
            }}
          >
            READ MORE <Icon.ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 px-6" style={{ background: "#070b14" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="03 // CASE STUDIES" title="Investigations & Analysis" />

        {/* Notion banner */}
        <div className="mb-12 p-4 border border-cyan-900/40 bg-cyan-950/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-cyan-400">
              <Icon.Database />
            </div>
            <div style={{ fontFamily: "'Courier New', monospace" }}>
              <div className="text-xs text-cyan-400 tracking-widest">KNOWLEDGE BASE // NOTION</div>
              <div className="text-xs text-gray-500">Full documented write-ups, screenshots &amp; findings</div>
            </div>
          </div>
          <a
            href="https://www.notion.so/Security-Awareness-for-Everyone-3355f04dec65804bb6a4edf0fa414c80?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-5 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-200 flex items-center gap-2 font-bold"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            EXPLORE NOTION <Icon.ExternalLink />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CASES.map((cs, i) => (
            <CaseCard key={cs.id} cs={cs} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
