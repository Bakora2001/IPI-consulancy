import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";
import {
  Search,
  PenTool,
  GraduationCap,
  PlayCircle,
  LineChart,
  CheckCircle2,
} from "lucide-react";
import { APPROACH_STAGES } from "../lib/constants";

export function ApproachPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-[#0e1647] via-[#1A237E] to-[#121858] text-white py-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#ef9d4a]/50 text-xs font-bold text-[#ef9d4a] uppercase tracking-widest">
              Execution Methodology
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Our Five-Stage Approach
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              A structured, evidence-based process engineered to diagnose real operational bottlenecks, design pragmatic solutions, train local teams, implement changes, and measure commercial returns.
            </p>
          </div>
        </section>

        {/* 5 Stages Breakdown */}
        <section className="py-20 px-6 sm:px-8 bg-white">
          <div className="max-w-5xl mx-auto space-y-16">
            {APPROACH_STAGES.map((stage, idx) => {
              return (
                <div
                  key={stage.step}
                  className="p-8 sm:p-10 rounded-3xl bg-[#FDF5EC]/40 border border-orange-100 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute right-6 top-6 text-7xl font-black text-orange-100 select-none pointer-events-none">
                    {stage.number}
                  </div>

                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center font-bold">
                        {idx === 0 && <Search size={24} />}
                        {idx === 1 && <PenTool size={24} />}
                        {idx === 2 && <GraduationCap size={24} />}
                        {idx === 3 && <PlayCircle size={24} />}
                        {idx === 4 && <LineChart size={24} />}
                      </div>
                      <div>
                        <span className="text-xs font-black text-[#ef9d4a] uppercase tracking-widest">
                          Stage {stage.number}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#1A237E]">
                          {stage.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-gray-700 font-medium leading-relaxed max-w-3xl">
                      {stage.description}
                    </p>

                    <div className="bg-white p-6 rounded-2xl border border-orange-200 space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A237E]">
                        Key Stage Activities & Milestones
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {stage.activities.map((act, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-gray-800">
                            <CheckCircle2 size={16} className="text-[#ef9d4a] shrink-0 mt-0.5" />
                            <span className="font-semibold">{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#1A237E] text-white py-16 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black">
              Put the 5-Stage Framework to Work for Your Business
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Start with Stage 01 (Diagnose) and uncover your primary cost drivers and growth bottlenecks.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-[#ef9d4a] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all"
              >
                Request Stage 01 Diagnostic
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
