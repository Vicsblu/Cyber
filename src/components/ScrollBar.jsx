import { useScrollProgress } from "../hooks";

export default function ScrollBar() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent">
      <div
        className="h-full transition-all duration-75"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #00f5ff, #39ff14)",
        }}
      />
    </div>
  );
}
