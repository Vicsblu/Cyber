export default function SectionHeader({ label, title }) {
  return (
    <div className="mb-12">
      <div
        className="text-xs text-cyan-400 tracking-[0.3em] mb-2"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        {label}
      </div>
      <h2
        className="text-3xl md:text-4xl font-black text-white"
        style={{ fontFamily: "'Courier New', monospace" }}
      >
        {title}
        <span className="text-cyan-400">.</span>
      </h2>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-px w-16 bg-cyan-400" />
        <div className="h-px w-4 bg-cyan-400 opacity-40" />
        <div className="h-px w-2 bg-cyan-400 opacity-20" />
      </div>
    </div>
  );
}
