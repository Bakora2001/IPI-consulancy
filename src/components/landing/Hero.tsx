import { useState, useEffect, useRef } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";

// ── Single static background image (African collaboration) ───────────────────
const HERO_BG_IMAGE = "/images/hero-collaboration.jpg";

// ── Typewriter hook ────────────────────────────────────────────────────────
type TwPhase = "typing" | "pause" | "erasing";

function useTypewriter(text: string, speed = 52, pauseMs = 3200, eraseSpeed = 28) {
  const [chars, setChars] = useState("");
  const [phase, setPhase] = useState<TwPhase>("typing");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (chars.length < text.length) {
        timer = setTimeout(() => setChars(text.slice(0, chars.length + 1)), speed);
      } else {
        timer = setTimeout(() => setPhase("pause"), pauseMs);
      }
    } else if (phase === "pause") {
      timer = setTimeout(() => setPhase("erasing"), 200);
    } else {
      // erasing
      if (chars.length > 0) {
        timer = setTimeout(() => setChars(text.slice(0, chars.length - 1)), eraseSpeed);
      } else {
        timer = setTimeout(() => setPhase("typing"), 400);
      }
    }

    return () => clearTimeout(timer);
  }, [chars, phase, text, speed, pauseMs, eraseSpeed]);

  return { chars };
}

const FULL_TEXT = "Helping Businesses in South Sudan Grow, Control & Develop";
const PART1 = "Helping Businesses in South Sudan ";       // white
const PART2 = "Grow, Control";                             // orange

export function Hero() {
  // ── Typewriter ──────────────────────────────────────────────────────────
  const { chars } = useTypewriter(FULL_TEXT, 52, 3200, 28);

  const p1End = Math.min(chars.length, PART1.length);
  const p2Start = PART1.length;
  const p2End = Math.min(chars.length, PART1.length + PART2.length);
  const p3Start = PART1.length + PART2.length;
  const p3End = Math.min(chars.length, FULL_TEXT.length);

  const seg1 = chars.slice(0, p1End);
  const seg2 = chars.length > p2Start ? chars.slice(p2Start, p2End) : "";
  const seg3 = chars.length > p3Start ? chars.slice(p3Start, p3End) : "";

  // ── 3-D tilt & Overlapping Circles states ──────────────────────────────
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hoveredCircle, setHoveredCircle] = useState<"left" | "right" | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 12;
    setTilt({ x, y });
  };

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-white w-full max-w-full">

      {/* ── Single Static Background Image with Dark Navy Overlay ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={HERO_BG_IMAGE}
          alt="African professionals in collaboration"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark blue overlay to bring out white text while displaying the background clearly */}
        <div className="absolute inset-0 bg-[#1A237E]/80" />
      </div>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-14 pb-12 w-full">

        {/* LEFT: Text */}
        <div className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] z-10">
          {/* Typewriter headline */}
          <h1 className="text-[2.2rem] sm:text-[2.7rem] font-extrabold leading-[1.18] text-white min-h-[8.5rem] sm:min-h-[9rem]">
            <span>{seg1}</span>
            {seg2 && <span className="text-[#ef9d4a]">{seg2}</span>}
            {seg3 && <span className="text-white">{seg3}</span>}
            {/* Blinking cursor */}
            <span
              aria-hidden
              className="inline-block w-[3px] h-[0.8em] bg-[#ef9d4a] ml-0.5 rounded-sm animate-pulse"
              style={{
                verticalAlign: "middle",
              }}
            />
          </h1>

          <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-white/90">
            IPI Consultancy is a South Sudan-focused business and management consultancy supporting
            organizations, businesses, and entrepreneurs to improve performance, strengthen internal
            systems, and achieve sustainable growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ef9d4a] text-white font-semibold text-sm shadow-lg hover:brightness-95 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Explore Our Services <ArrowRight size={16} />
            </a>
            <a
              href="/strategy"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-[#1A237E] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Strategic Roadmap <TrendingUp size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT: Overlapping circular cards with orange swoosh + 6x5 dot grid */}
        <div
          ref={cardRef}
          className="relative flex items-center justify-center h-[420px] sm:h-[480px] w-full max-w-full overflow-hidden sm:overflow-visible my-4 lg:my-0"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            setTilt({ x: 0, y: 0 });
          }}
        >
          {/* Orange blob / swoosh behind circle */}
          <svg
            className="absolute z-0 w-[75%] sm:w-[80%] h-[75%] sm:h-[80%] right-0 bottom-0 pointer-events-none"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden
          >
            <ellipse
              cx="220"
              cy="230"
              rx="190"
              ry="170"
              fill="#ef9d4a"
              opacity="0.85"
              style={{ transform: "rotate(-12deg)", transformOrigin: "center" }}
            />
          </svg>

          {/* 6 by 5 Yellowish Dot grid — top right */}
          <div className="absolute z-0 top-3 sm:top-5 right-2 sm:right-1 opacity-90 pointer-events-none">
            <svg width="90" height="70" viewBox="0 0 90 70" fill="none" aria-hidden>
              {Array.from({ length: 5 }).map((_, row) =>
                Array.from({ length: 6 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={col * 14 + 7}
                    cy={row * 14 + 7}
                    r="3.5"
                    fill="#ef9d4a"
                  />
                ))
              )}
            </svg>
          </div>

          {/* Overlapping animated IPI consultancy circles */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Circle 1 (Left / Primary) - Strategic Performance & Cost Optimization */}
            <div
              onMouseEnter={() => setHoveredCircle("left")}
              onMouseLeave={() => setHoveredCircle(null)}
              className="absolute transition-all duration-500 ease-out rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-2xl cursor-pointer bg-gradient-to-br from-[#1A237E] via-[#283593] to-[#0D134A] p-4 sm:p-6 flex flex-col items-center justify-center text-center text-white"
              style={{
                width: "min(300px, 76vw)",
                height: "min(300px, 76vw)",
                top: "4%",
                left: "2%",
                zIndex: hoveredCircle === "left" ? 30 : hoveredCircle === "right" ? 10 : 20,
                transform: hoveredCircle === "left"
                  ? "scale(1.04) translate(4px, -4px)"
                  : hoveredCircle === "right"
                  ? "scale(0.95) opacity(0.85)"
                  : hovered
                  ? `perspective(800px) rotateY(${tilt.x * 0.4}deg) rotateX(${-tilt.y * 0.3}deg)`
                  : "scale(1)",
              }}
            >
              {/* Premium Minimal Monogram Emblem */}
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-full border border-[#ef9d4a]/50 bg-white/10 flex items-center justify-center mb-1.5 sm:mb-2 shadow-inner">
                <span className="text-[#ef9d4a] font-black text-xs tracking-wider">IPI</span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#ef9d4a]">
                GROW · CONTROL
              </span>
              <h3 className="text-xs sm:text-sm font-black text-white leading-tight mt-0.5 px-2">
                Performance Diagnostics & Cost Optimization
              </h3>
              <p className="text-[9px] sm:text-[10px] text-white/80 mt-1 max-w-[190px] leading-tight hidden xs:block sm:block">
                Forensic expenditure reviews & revenue expansion
              </p>
              <span className="mt-2 text-[8px] sm:text-[9px] font-bold bg-white/15 border border-white/30 text-white px-2.5 py-0.5 rounded-full">
                Build World Centre · Juba
              </span>
            </div>

            {/* Circle 2 (Right / Secondary) - Capacity Building & HR Systems */}
            <div
              onMouseEnter={() => setHoveredCircle("right")}
              onMouseLeave={() => setHoveredCircle(null)}
              className="absolute transition-all duration-500 ease-out rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-2xl cursor-pointer bg-gradient-to-br from-[#0c123d] via-[#1A237E] to-[#e6892e] p-3 sm:p-5 flex flex-col items-center justify-center text-center text-white"
              style={{
                width: "min(250px, 64vw)",
                height: "min(250px, 64vw)",
                bottom: "4%",
                right: "2%",
                zIndex: hoveredCircle === "right" ? 30 : 10,
                transform: hoveredCircle === "right"
                  ? "scale(1.05) translate(-4px, 4px)"
                  : hoveredCircle === "left"
                  ? "scale(0.93) opacity(0.8)"
                  : hovered
                  ? `perspective(800px) rotateY(${tilt.x * 0.3}deg) rotateX(${-tilt.y * 0.2}deg)`
                  : "scale(1)",
              }}
            >
              {/* Premium Minimal Monogram Emblem */}
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-white/50 bg-white/10 flex items-center justify-center mb-1 shadow-inner">
                <span className="text-white font-black text-[10px] sm:text-[11px] tracking-wider">HR</span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-[#ef9d4a]">
                DEVELOP PEOPLE
              </span>
              <h3 className="text-[11px] sm:text-xs font-black text-white leading-tight mt-0.5 px-2">
                Workforce Systems & Coaching
              </h3>
              <p className="text-[8px] sm:text-[9px] text-white/80 mt-0.5 max-w-[150px] leading-tight hidden xs:block sm:block">
                Accountable, productive teams in South Sudan
              </p>
              <span className="mt-1.5 text-[8px] sm:text-[9px] font-bold bg-[#ef9d4a] text-white px-2 py-0.5 rounded-full">
                5-Stage Methodology
              </span>
            </div>
          </div>

          {/* Floating stat badge */}
          <div className="absolute z-20 bottom-4 sm:bottom-8 left-2 sm:left-0 bg-white rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-xl border border-orange-100">
            <p className="text-[9px] sm:text-[10px] font-medium text-gray-400">Strategic Period</p>
            <p className="text-base sm:text-lg font-extrabold text-[#1A237E]">2026–2030</p>
          </div>
        </div>
      </div>
    </section>
  );
}
