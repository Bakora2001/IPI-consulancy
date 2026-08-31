import { TrendingUp, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: TrendingUp, label: "Grow", sub: "Revenue & Market expansion" },
  { icon: DollarSign, label: "Control", sub: "Costs & waste reduction" },
  { icon: Users, label: "Develop", sub: "Productive, skilled teams" },
];

export function VideoSection() {
  return (
    <section className="bg-[#FDFAF8] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: African Business Presentation Card — 60% */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(16,42,91,0.12)] bg-[#0A1128]"
              style={{ aspectRatio: "16/9" }}
            >
              {/* African business summit & speakers image */}
              <img
                src="/images/news-summit.jpg"
                alt="African business leaders and consultants speaking in conference"
                className="w-full h-full object-cover"
              />

              {/* Dark gradient overlay & caption */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 text-white text-left"
                style={{ background: "linear-gradient(to top, rgba(10,17,40,0.88) 0%, rgba(10,17,40,0.3) 60%, transparent 100%)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#ef9d4a] mb-1">
                  OUR MISSION
                </p>
                <p className="text-xl font-bold leading-snug tracking-tight text-white">
                  Translating Investments <br />
                  Into Verifiable Results
                </p>
                <p className="text-xs text-white/85 mt-1 max-w-md">
                  Helping businesses, entrepreneurs and development programmes in South Sudan achieve measurable commercial and operational performance.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Our Story — 40% */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[10px] font-bold tracking-widest text-[#ef9d4a] uppercase bg-[#FFF7F2] border border-[#ECE7E2] px-3 py-1 rounded-full">
              CONSULTANCY MISSION
            </span>

            <h2 className="text-3xl font-bold text-[#1B2559] mt-4 leading-tight tracking-tight">
              Empowering Change<br />
              <span className="text-[#ef9d4a]">Through Performance</span>
            </h2>

            <p className="text-[#667085] text-xs leading-relaxed mt-4">
              IPI Consultancy works at the intersection of private-sector development and organizational
              performance. We provide practical, knowledge-driven solutions to help South Sudan businesses
              scale revenue, control expenditures, and build high-performing teams.
            </p>

            {/* 3 Feature icons */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex flex-col items-start text-left">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF7F2] border border-[#ECE7E2] flex items-center justify-center text-[#ef9d4a] mb-3 shadow-sm">
                      <Icon size={20} />
                    </div>
                    <p className="text-[11px] font-bold text-[#1B2559] leading-none mb-1">{f.label}</p>
                    <p className="text-[9px] text-[#98A2B3] font-semibold leading-snug">{f.sub}</p>
                  </div>
                );
              })}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#1A237E] text-[#1A237E] text-xs font-bold hover:bg-[#1A237E] hover:text-white transition-all duration-200 group"
            >
              Learn More About IPI
              <svg className="group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M10 8l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
