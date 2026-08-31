import { Search, PenTool, GraduationCap, PlayCircle, LineChart } from "lucide-react";

// The IPI 5-Stage Approach — flowing journey with bezier curve connector
const STEPS = [
  {
    num: "01",
    color: "#ef9d4a",
    icon: Search,
    title: "Diagnose",
    desc: "Understand business, market, people and operational challenges",
    bg: "bg-[#FFF7F2]",
  },
  {
    num: "02",
    color: "#1A237E",
    icon: PenTool,
    title: "Design",
    desc: "Develop practical interventions based on identified needs",
    bg: "bg-blue-50/50",
  },
  {
    num: "03",
    color: "#ef9d4a",
    icon: GraduationCap,
    title: "Build Capacity",
    desc: "Train and coach staff, entrepreneurs and business owners",
    bg: "bg-[#FFF7F2]",
  },
  {
    num: "04",
    color: "#1A237E",
    icon: PlayCircle,
    title: "Implement",
    desc: "Support the organization to put recommendations into practice",
    bg: "bg-blue-50/50",
  },
  {
    num: "05",
    color: "#ef9d4a",
    icon: LineChart,
    title: "Measure",
    desc: "Track agreed KPIs and assess verifiable results",
    bg: "bg-[#FFF7F2]",
  },
];

export function ApproachSteps() {
  return (
    <section className="py-20 px-6 bg-[#F6F1EB]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="text-[10px] font-bold tracking-widest text-[#ef9d4a] uppercase bg-white border border-[#ECE7E2] px-3 py-1 rounded-full">
            THE IPI APPROACH
          </span>
        </div>
        <h2 className="text-3xl font-bold text-[#1A237E] text-center mt-3 mb-3 tracking-tight">
          Building Sustainable Businesses for South Sudan's Future
        </h2>
        <p className="text-[#667085] text-xs text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          IPI uses a rigorous, practical five-stage methodology designed to ensure every recommendation
          translates into operational excellence, cost efficiency, and measurable commercial results.
        </p>

        {/* Journey with flowing bezier line */}
        <div className="relative">
          {/* SVG Bezier Curve connecting all steps */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ top: "75px" }}>
            <svg
              className="w-full"
              viewBox="0 0 1100 100"
              fill="none"
              preserveAspectRatio="none"
              style={{ height: "100px" }}
            >
              <defs>
                <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef9d4a" />
                  <stop offset="25%" stopColor="#1A237E" />
                  <stop offset="50%" stopColor="#ef9d4a" />
                  <stop offset="75%" stopColor="#1A237E" />
                  <stop offset="100%" stopColor="#ef9d4a" />
                </linearGradient>
              </defs>
              <path
                d="M 110 20 C 200 80, 310 0, 385 20 C 460 40, 570 80, 660 20 C 750 -30, 840 80, 935 20 C 990 0, 1010 40, 1070 20"
                stroke="url(#flowGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="8 4"
              />
            </svg>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center group">
                  {/* Number circle */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold mb-4 shadow-[0_6px_20px_rgba(16,42,91,0.12)] border-[3px] border-white relative z-10"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.num}
                  </div>

                  {/* Process card — circle */}
                  <div className="w-[140px] h-[140px] rounded-full bg-white border border-[#ECE7E2] shadow-md flex flex-col items-center justify-center gap-2 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 mb-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.bg}`} style={{ color: step.color }}>
                      <Icon size={24} />
                    </div>
                  </div>

                  <h3 className="text-[12px] font-bold text-[#1A237E] leading-snug">{step.title}</h3>
                  <p className="text-[10px] text-[#667085] font-semibold mt-1 leading-snug max-w-[150px]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
