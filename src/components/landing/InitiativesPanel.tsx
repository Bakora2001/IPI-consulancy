import { TrendingUp, DollarSign, Users, Headphones, Compass } from "lucide-react";
import { Link } from "react-router-dom";

// Programs/Initiatives section with orbit diagram on right + list on left
const PROGRAMS = [
  {
    title: "Business Development & Sales",
    desc: "Market expansion, revenue scaling models, sales pipelines and customer retention",
    icon: TrendingUp,
    color: "#ef9d4a",
    bg: "bg-[#FFF7F2]",
  },
  {
    title: "Finance & Cost Control",
    desc: "Forensic cost audits, budgeting discipline, procurement controls and waste elimination",
    icon: DollarSign,
    color: "#1A237E",
    bg: "bg-blue-50/50",
  },
  {
    title: "HR & Org Development",
    desc: "Workforce planning, job descriptions, KPI performance appraisals and leadership training",
    icon: Users,
    color: "#ef9d4a",
    bg: "bg-[#FFF7F2]",
  },
  {
    title: "Customer Care & Admin",
    desc: "Service excellence standards, front-desk protocols, customer satisfaction and admin SOPs",
    icon: Headphones,
    color: "#1A237E",
    bg: "bg-blue-50/50",
  },
  {
    title: "General Management Advisory",
    desc: "Strategic 5-year business planning, corporate governance, board advisory and mentorship",
    icon: Compass,
    color: "#ef9d4a",
    bg: "bg-[#FFF7F2]",
  },
];

// Orbit positions (angle in degrees) for 5 satellite programs
const ORBIT_ANGLES = [72, 144, 216, 288, 360];

export function InitiativesPanel() {
  return (
    <section className="bg-[#FDFAF8] py-20 px-6 sm:px-8 w-full max-w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: Text + Program List */}
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#ef9d4a] uppercase bg-[#FFF7F2] border border-[#ECE7E2] px-3 py-1 rounded-full">
              CORE SERVICE PORTFOLIOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A237E] mt-4 mb-3 leading-tight tracking-tight">
              Programs Driving<br />
              <span className="text-[#ef9d4a]">Performance & Growth</span>
            </h2>
            <p className="text-[#667085] text-xs leading-relaxed mb-8">
              From financial cost containment to human resource structuring and market expansion,
              our consultancy practices deliver verifiable operational results in South Sudan.
            </p>

            <div className="space-y-4">
              {PROGRAMS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-[#ECE7E2] shadow-sm hover:shadow-md transition-all duration-200 group text-left"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm ${p.bg}`}
                      style={{ color: p.color }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-[12px] font-bold text-[#1A237E] leading-none mb-1">{p.title}</p>
                      <p className="text-[10px] text-[#667085] font-semibold leading-snug">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-left">
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1A237E] text-white text-xs font-bold hover:brightness-110 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore All Services →
              </Link>
            </div>
          </div>

          {/* RIGHT: Orbit Diagram (Responsive scaling) */}
          <div className="flex items-center justify-center w-full overflow-hidden py-4">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px]">
              {/* Outer orbit ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420">
                <circle
                  cx="210" cy="210" r="160"
                  stroke="#ECE7E2"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  fill="none"
                />
              </svg>

              {/* Center IPI Logo circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[110px] sm:w-[130px] h-[110px] sm:h-[130px] rounded-full bg-white border-2 border-[#ECE7E2] shadow-xl flex flex-col items-center justify-center p-2 sm:p-3 text-center">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-[#1A237E] text-white flex items-center justify-center font-black text-xs sm:text-base shadow-sm mb-1">
                    <span className="text-[#ef9d4a]">I</span>PI
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-black text-[#1A237E] tracking-tight leading-none">IPI CONSULTANCY</span>
                  <span className="text-[7px] sm:text-[8px] font-bold text-[#ef9d4a] mt-0.5">South Sudan</span>
                </div>
              </div>

              {/* Satellite program nodes */}
              {PROGRAMS.map((p, i) => {
                const angle = (((ORBIT_ANGLES[i] ?? 0) * Math.PI) / 180);
                const r = 160;
                const cx = 210 + r * Math.cos(angle);
                const cy = 210 + r * Math.sin(angle);
                const color = p.color;
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `${(cx / 420) * 100}%`,
                      top: `${(cy / 420) * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Node bubble */}
                    <div
                      className="relative z-10 w-9 sm:w-12 h-9 sm:h-12 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white"
                      style={{ backgroundColor: color }}
                    >
                      <Icon size={16} className="sm:w-5 sm:h-5" />
                    </div>
                    <p className="text-[8px] sm:text-[9px] font-bold text-[#1A237E] mt-1 text-center leading-tight max-w-[65px] sm:max-w-[70px]">
                      {p.title.split(" ")[0]} {p.title.split(" ")[1] ?? ""}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
