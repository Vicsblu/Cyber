import Icon from "./Icons";
import { useTypingEffect } from "../hooks";
import { TYPING_WORDS, HERO_STATS } from "../data/portfolioData";

export default function Hero() {
  const typed = useTypingEffect(TYPING_WORDS);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#000d1a" }}
    >
      {/* Deep layered background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 0%, #001a33 0%, #000d1a 55%, #000508 100%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(#00f5ff 1px, transparent 1px), linear-gradient(90deg, #00f5ff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal accent lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #00f5ff 0px, #00f5ff 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,50,80,0.8) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[500px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,100,140,0.35) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #0a3a1a, transparent 70%)" }}
        />
        <div
          className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #003344, transparent 70%)" }}
        />
      </div>

      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.025]">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="absolute left-0 right-0 h-px bg-cyan-400" style={{ top: `${i * 2}%` }} />
        ))}
      </div>

      {/* Corner decorations */}
      {["top-8 left-8", "top-8 right-8", "bottom-8 left-8", "bottom-8 right-8"].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-12 h-12 opacity-30`}>
          <div
            className={`absolute ${i < 2 ? "top-0" : "bottom-0"} ${i % 2 === 0 ? "left-0" : "right-0"} w-4 h-4 border-cyan-400`}
            style={{
              borderTop: i < 2 ? "1px solid" : "none",
              borderBottom: i >= 2 ? "1px solid" : "none",
              borderLeft: i % 2 === 0 ? "1px solid" : "none",
              borderRight: i % 2 === 1 ? "1px solid" : "none",
            }}
          />
        </div>
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-cyan-900 bg-cyan-950/30">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span
            className="text-xs text-cyan-400 tracking-[0.3em]"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            SYSTEM ACTIVE // LAGOS, NIGERIA
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-black text-white mb-2 leading-none tracking-tight"
          style={{
            fontFamily: "'Courier New', monospace",
            textShadow: "0 0 60px rgba(0,245,255,0.4), 0 2px 20px rgba(0,0,0,0.9)",
          }}
        >
          VICTOR
        </h1>
        <h1
          className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight"
          style={{
            fontFamily: "'Courier New', monospace",
            background: "linear-gradient(90deg, #00f5ff, #39ff14)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 20px rgba(0,245,255,0.5))",
          }}
        >
          OGUNTOYINBO
        </h1>

        <div
          className="text-lg md:text-xl text-gray-200 mb-4 tracking-widest uppercase"
          style={{
            fontFamily: "'Courier New', monospace",
            textShadow: "0 1px 12px rgba(0,0,0,0.8)",
          }}
        >
          Cybersecurity Analyst{" "}
          <span className="text-cyan-500">|</span> Threat Detection{" "}
          <span className="text-cyan-500">|</span> System Security
        </div>

        {/* Typing effect */}
        <div className="h-12 flex items-center justify-center mb-10">
          <span
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: "'Courier New', monospace",
              color: "#39ff14",
              textShadow: "0 0 20px rgba(57,255,20,0.6)",
            }}
          >
            &gt; {typed}
            <span className="animate-pulse" style={{ color: "#00f5ff" }}>_</span>
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById("cases")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 font-bold tracking-widest text-sm uppercase transition-all duration-300"
            style={{
              fontFamily: "'Courier New', monospace",
              background: "linear-gradient(90deg, #00f5ff, #39ff14)",
              color: "#000",
            }}
          >
            VIEW CASE STUDIES
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 font-bold tracking-widest text-sm uppercase border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            CONTACT ME
          </button>
          <a
            href="https://drive.google.com/file/d/1Y9ZW1uXGafaxy9ZY8VwBKybED9wi_p4A/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-bold tracking-widest text-sm uppercase border border-gray-600 text-gray-400 hover:border-green-400 hover:text-green-400 transition-all duration-300 flex items-center gap-2"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            <Icon.ExternalLink /> DOWNLOAD CV
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          {HERO_STATS.map(([val, label]) => (
            <div key={label} className="text-center">
              <div
                className="text-2xl font-black text-cyan-300"
                style={{
                  fontFamily: "'Courier New', monospace",
                  textShadow: "0 0 16px rgba(0,245,255,0.5)",
                }}
              >
                {val}
              </div>
              <div
                className="text-xs text-gray-300 tracking-widest uppercase mt-1"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
