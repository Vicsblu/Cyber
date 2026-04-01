import Icon from "./Icons";
import SectionHeader from "./SectionHeader";
import { useInView } from "../hooks";
import { PROFILE_FIELDS } from "../data/portfolioData";

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} className="py-24 px-6" style={{ background: "#070b14" }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="01 // ABOUT" title="Who I Am" />

        <div
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Terminal block */}
          <div className="relative">
            <div
              className="border border-cyan-900 bg-black/60 p-6"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-4 border-b border-cyan-900 pb-3">
                <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                <span className="text-xs text-gray-500 ml-2">analyst_profile.sh</span>
              </div>

              {PROFILE_FIELDS.map(({ k, v, c }) => (
                <div key={k} className="flex gap-2 text-sm mb-2">
                  <span className="text-gray-500">{k}:</span>
                  <span className={c}>"{v}"</span>
                </div>
              ))}

              <div className="mt-4 text-xs text-gray-600">
                <span className="text-cyan-500">$</span> profile --loaded --status=active
                <span className="animate-pulse text-cyan-400">_</span>
              </div>
            </div>

            {/* Corner glow */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20"
              style={{ background: "radial-gradient(circle, #00f5ff, transparent)" }}
            />
          </div>

          {/* Narrative */}
          <div className="space-y-5 text-gray-400 leading-relaxed">
            <p className="text-white text-lg font-semibold border-l-2 border-cyan-400 pl-4">
              I started where most security professionals start — in the trenches of IT support.
            </p>
            <p>
              Working directly with systems and real users gave me something no certification can
              replicate: an intuitive understanding of how things break, how people behave under
              stress, and where the gaps in security actually live. Every ticket resolved was a
              lesson in system architecture. Every network issue was a lesson in how attackers see
              opportunity.
            </p>
            <p>
              That hands-on foundation pushed me toward cybersecurity — not as a pivot, but as a
              natural escalation. I became obsessed with the adversarial mindset: understanding
              threats, tracing attack vectors, and building defenses that actually work under
              real-world conditions.
            </p>
            <p>
              Today I work on threat analysis, network security investigations, vulnerability
              assessments, and incident response simulations. My goal is simple:{" "}
              <span className="text-cyan-400 font-semibold">
                be the person in the room who understands both the attack and the defense.
              </span>
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div
                className="flex items-center gap-2 text-xs text-green-400"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                <Icon.Map />
                <span>Lagos, Nigeria</span>
              </div>
              <div
                className="flex items-center gap-2 text-xs text-cyan-400"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                <Icon.Zap />
                <span>Open to Remote &amp; Hybrid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
