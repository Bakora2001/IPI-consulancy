import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import {
  COMPANY_INFO,
  STRATEGIC_OBJECTIVES,
  IMPLEMENTATION_ROADMAP,
  PERFORMANCE_MEASURES,
} from "../lib/constants";

export function StrategyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-[#0e1647] via-[#1A237E] to-[#121858] text-white py-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#ef9d4a]/50 text-xs font-bold text-[#ef9d4a] uppercase tracking-widest">
              Strategic Period: 2026–2030
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Five-Year Strategic Objectives
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Our 2026–2030 roadmap to become the most trusted business growth and performance consultancy in Juba and across South Sudan.
            </p>
          </div>
        </section>

        {/* Section 1 & 2: Strategic Direction & Overall Objective */}
        <section className="py-16 px-6 sm:px-8 bg-white border-b border-orange-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Direction */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FDF5EC] border border-orange-200/70 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                  1. Strategic Direction
                </span>
                <h2 className="text-2xl font-black text-[#1A237E] mt-2 mb-4">
                  Focused on Practical, Knowledge-Driven Solutions
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Our consultancy will focus on helping businesses in South Sudan grow sustainably, control costs and build high-performing teams through practical, knowledge-driven consultancy solutions.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white border border-orange-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ef9d4a]">
                  Strategic Theme
                </span>
                <p className="text-base font-black text-[#1A237E]">
                  GROW – CONTROL – DEVELOP
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Grow businesses · Control costs · Develop people
                </p>
              </div>
            </div>

            {/* Overall Objective */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1A237E] to-[#283593] text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                  2. Overall Five-Year Strategic Objective
                </span>
                <h2 className="text-2xl font-black mt-2 mb-4">
                  The Leading Business Consultancy in Juba
                </h2>
                <blockquote className="text-sm sm:text-base text-white/95 leading-relaxed italic border-l-4 border-[#ef9d4a] pl-4 my-4">
                  "{COMPANY_INFO.overallObjective}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#ef9d4a] font-bold">
                <ShieldCheck size={16} /> Measurable Operational Impact Across South Sudan
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Objectives and Key Priorities (1 to 5) */}
        <section className="py-20 px-6 sm:px-8 bg-[#FDF5EC]/30">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                3. Strategic Objectives & Key Priorities
              </span>
              <h2 className="text-3xl font-black text-[#1A237E] mt-1">
                Five Pillars of Long-Term Transformation
              </h2>
            </div>

            <div className="space-y-8">
              {STRATEGIC_OBJECTIVES.map((obj) => (
                <div
                  key={obj.number}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-orange-100 shadow-md space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center font-black text-lg shrink-0">
                        0{obj.number}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#ef9d4a]">
                          OBJECTIVE {obj.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#1A237E]">
                          {obj.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Goal */}
                  <div className="bg-[#FDF5EC] p-4 rounded-2xl border border-orange-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ef9d4a]">
                      Goal
                    </span>
                    <p className="text-sm font-semibold text-gray-800 mt-1">
                      {obj.goal}
                    </p>
                  </div>

                  {/* Priorities */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A237E] mb-3">
                      Key Priorities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {obj.priorities.map((pri, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle2 size={15} className="text-[#ef9d4a] shrink-0 mt-0.5" />
                          <span>{pri}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Five-Year Target */}
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs">
                    <span className="font-extrabold text-[#1A237E] uppercase tracking-wider">
                      Five-Year Target:
                    </span>{" "}
                    <span className="text-gray-700 font-medium">{obj.fiveYearTarget}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: 5-Year Implementation Roadmap */}
        <section className="py-20 px-6 sm:px-8 bg-white border-t border-orange-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                4. Implementation Timeline
              </span>
              <h2 className="text-3xl font-black text-[#1A237E] mt-1">
                Five-Year Implementation Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {IMPLEMENTATION_ROADMAP.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FDF5EC] rounded-3xl p-6 border border-orange-200 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase">
                      {item.year.split(" – ")[0]}
                    </span>
                    <p className="text-sm font-bold text-[#ef9d4a]">{item.year.split(" – ")[1]}</p>
                    <h3 className="text-xl font-black text-[#1A237E] mt-1 mb-2">
                      {item.focus}
                    </h3>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">
                      {item.keyOutcome}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-orange-200">
                    <span className="text-[10px] font-extrabold text-[#ef9d4a] uppercase tracking-wider">
                      Phase 0{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Core Performance Measures */}
        <section className="py-20 px-6 sm:px-8 bg-[#FDF5EC]/40 border-t border-orange-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                5. Performance Management
              </span>
              <h2 className="text-3xl font-black text-[#1A237E] mt-1">
                Core Performance Measures
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                The consultancy measures its continuous success through these fundamental operational indicators:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PERFORMANCE_MEASURES.map((pm, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-orange-100 shadow-sm flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ef9d4a] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-[#1A237E]">{pm.metric}</h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">{pm.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#1A237E] text-white py-16 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black">
              Partner With Us in the 2026–2030 Strategic Period
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Whether you are an enterprise seeking growth or an international development organization seeking local consulting execution, IPI is ready to deliver.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-[#ef9d4a] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all"
              >
                Inquire for Collaboration
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
