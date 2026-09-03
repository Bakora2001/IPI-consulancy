import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Target, TrendingUp } from "lucide-react";
import { COMPANY_INFO } from "../../lib/constants";

export function ImpactBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1A237E] via-[#283593] to-[#1A237E] text-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="impact-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="#fff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#impact-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ef9d4a]/20 border border-[#ef9d4a]/40 text-xs font-extrabold text-[#ef9d4a] uppercase tracking-wider">
              <Target size={14} /> Five-Year Strategic Direction (2026–2030)
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              GROW · CONTROL · DEVELOP
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Our consultancy will focus on helping businesses in South Sudan grow sustainably, control costs, and build high-performing teams through practical, knowledge-driven consultancy solutions.
            </p>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                Overall Five-Year Strategic Objective
              </h4>
              <p className="text-sm font-semibold text-white/95 leading-relaxed">
                "{COMPANY_INFO.overallObjective}"
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/strategy"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#ef9d4a] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all duration-200 hover:scale-105"
              >
                Explore Strategic Roadmap <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/60 text-white font-bold text-sm hover:bg-white/10 transition-all"
              >
                About Our Firm
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md space-y-5">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <TrendingUp className="text-[#ef9d4a]" size={20} />
                Strategic Pillars at a Glance
              </h3>

              {[
                { title: "Grow Businesses", desc: "Revenue scaling, sales pipeline architecture & market expansion." },
                { title: "Control Costs", desc: "Forensic cost audits, waste reduction & procurement discipline." },
                { title: "Develop People", desc: "KPI performance systems, leadership coaching & talent retention." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <CheckCircle2 size={18} className="text-[#ef9d4a] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
