import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ShieldCheck,
  Compass,
  TrendingUp,
  Globe2,
  Building,
  Target,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import {
  COMPANY_INFO,
  STRATEGIC_OBJECTIVES,
  STRATEGIC_ROADMAP,
  LONG_TERM_VISION,
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
              Our Strategic Roadmap & Vision
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              A phased strategic plan to establish IPI Consultancy in South Sudan, scale our private-sector impact, and position our firm across East Africa and the continent.
            </p>
          </div>
        </section>

        {/* Section 1: Strategic Direction & Overall Objective */}
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
                <ShieldCheck size={16} /> Measurable Commercial & Operational Impact Across South Sudan
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: OUR STRATEGIC ROADMAP */}
        <section className="py-20 px-6 sm:px-8 bg-[#FDF5EC]/40 border-b border-orange-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                Execution Timeline
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A237E] mt-1">
                Our Strategic Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                A 4-phase trajectory taking IPI from establishment in Juba to regional East African recognition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STRATEGIC_ROADMAP.map((item, idx) => {
                const phaseIcons = [Building, TrendingUp, Target, Globe2];
                const IconComponent = phaseIcons[idx] || Compass;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-7 border border-orange-200/80 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Top Tag & Phase Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-black px-3 py-1 rounded-full bg-[#1A237E] text-white">
                          {item.period}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#ef9d4a] flex items-center justify-center">
                          <IconComponent size={18} />
                        </div>
                      </div>

                      <h3 className="text-2xl font-black text-[#1A237E] mb-4">
                        {item.phase}
                      </h3>

                      <ul className="space-y-3">
                        {item.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed font-medium">
                            <CheckCircle2 size={15} className="text-[#ef9d4a] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-gray-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#ef9d4a]">
                        Phase 0{idx + 1}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 3: OUR LONG-TERM VISION (Prominent Showcase) */}
        <section className="py-16 px-6 sm:px-8 bg-gradient-to-r from-[#101828] via-[#1A237E] to-[#101828] text-white">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ef9d4a]/20 border border-[#ef9d4a]/40 text-xs font-bold text-[#ef9d4a] uppercase tracking-wider">
              <Compass size={15} /> Long-Term Vision
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Our Long-Term Vision
            </h2>

            <blockquote className="text-xl sm:text-3xl font-extrabold text-[#ef9d4a] max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              "{LONG_TERM_VISION}"
            </blockquote>

            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto">
              Rooted in Juba, South Sudan, expanding across East Africa to build resilient commercial enterprises, strengthen governance institutions, and spur continental prosperity.
            </p>
          </div>
        </section>

        {/* Section 4: Strategic Objectives and Key Priorities (1 to 5) */}
        <section className="py-20 px-6 sm:px-8 bg-white border-t border-orange-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                3. Five Strategic Objectives
              </span>
              <h2 className="text-3xl font-black text-[#1A237E] mt-1">
                Five Pillars of Long-Term Transformation
              </h2>
            </div>

            <div className="space-y-8">
              {STRATEGIC_OBJECTIVES.map((obj) => (
                <div
                  key={obj.number}
                  className="bg-[#FDF5EC]/30 rounded-3xl p-8 sm:p-10 border border-orange-200/80 shadow-sm space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-orange-200/50 pb-4">
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
                  <div className="bg-white p-4 rounded-2xl border border-orange-200">
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
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs">
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

        {/* Bottom CTA */}
        <section className="bg-[#1A237E] text-white py-16 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black">
              Partner With Us Across the 2026–2030 Strategic Horizon
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Whether you are an enterprise seeking growth or an international development organization seeking local consulting execution, IPI is ready to deliver.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-[#ef9d4a] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all"
              >
                Inquire for Collaboration <ArrowRight size={16} className="inline ml-1" />
              </Link>
              <a
                href={COMPANY_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-green-600 text-white font-bold text-sm shadow-xl hover:bg-green-700 transition-all flex items-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp: +254 759 964753
              </a>
              <a
                href={COMPANY_INFO.whatsAppSecondaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-green-700 text-white font-bold text-sm shadow-xl hover:bg-green-800 transition-all flex items-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp: +211 922 596464
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
