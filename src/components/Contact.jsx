import { useState } from "react";
import Icon from "./Icons";
import SectionHeader from "./SectionHeader";
import { useInView } from "../hooks";
import { CONTACT_INFO } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [ref, inView] = useInView();

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6" style={{ background: "#070b14" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="07 // CONTACT" title="Get In Touch" />

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: info */}
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm actively looking for cybersecurity analyst roles, internships, and collaborative
              opportunities. Whether you have a question, a project, or a position — let's talk.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO.map((c) => {
                const IconComp = Icon[c.iconKey];
                return (
                  <a
                    key={c.label}
                    href={c.href || undefined}
                    target={c.href?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 border border-cyan-900/30 bg-black/30 hover:border-cyan-700/50 transition-all duration-200 group"
                  >
                    <div style={{ color: c.color }}>
                      <IconComp />
                    </div>
                    <span
                      className="text-sm text-gray-400 group-hover:text-white transition-colors"
                      style={{ fontFamily: "'Courier New', monospace" }}
                    >
                      {c.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <div className="border border-cyan-900/30 p-6 bg-black/40">
            <div
              className="text-xs text-cyan-400 tracking-widest mb-6"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              // SEND A MESSAGE
            </div>

            <div className="space-y-4">
              {[
                { key: "name",  label: "Name",  type: "text",  placeholder: "Your name"       },
                { key: "email", label: "Email", type: "email", placeholder: "your@email.com"  },
              ].map((f) => (
                <div key={f.key}>
                  <label
                    className="text-xs text-gray-500 tracking-widest block mb-1"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  >
                    {f.label.toUpperCase()}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                    className="w-full bg-black border border-cyan-900/40 px-4 py-3 text-sm text-gray-300 outline-none focus:border-cyan-400 transition-colors placeholder-gray-700"
                    style={{ fontFamily: "'Courier New', monospace" }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="text-xs text-gray-500 tracking-widest block mb-1"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full bg-black border border-cyan-900/40 px-4 py-3 text-sm text-gray-300 outline-none focus:border-cyan-400 transition-colors placeholder-gray-700 resize-none"
                  style={{ fontFamily: "'Courier New', monospace" }}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-3 text-sm font-bold tracking-widest uppercase transition-all duration-200"
                style={{
                  fontFamily: "'Courier New', monospace",
                  background: sent ? "#39ff14" : "linear-gradient(90deg, #00f5ff, #39ff14)",
                  color: "#000",
                }}
              >
                {sent ? "MESSAGE SENT ✓" : "SEND MESSAGE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
