export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t border-cyan-900/20"
      style={{ background: "#030508" }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <span
          className="text-xs text-gray-600"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          © 2025 Victor Oguntoyinbo // All systems secure
        </span>
        <div
          className="flex items-center gap-2 text-xs text-gray-600"
          style={{ fontFamily: "'Courier New', monospace" }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>SYSTEM ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
