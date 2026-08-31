import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  ShieldCheck,
  Target,
  Users,
  CheckCircle2,
  TrendingUp,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO, PERFORMANCE_MEASURES } from "../lib/constants";

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-[#0e1647] via-[#1A237E] to-[#121858] text-white py-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#ef9d4a]/50 text-xs font-bold text-[#ef9d4a] uppercase tracking-widest">
              About IPI Consultancy
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              South Sudan-Focused Business & Management Consultancy
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Supporting organizations, businesses, and entrepreneurs in Juba and across South Sudan to improve performance, strengthen internal systems, and achieve sustainable growth.
            </p>
          </div>
        </section>

        {/* Overview & Positioning Section */}
        <section className="py-20 px-6 sm:px-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#ef9d4a]">
                Our Identity & Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A237E] leading-tight">
                Bridging Private-Sector Growth & Organizational Rigor
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {COMPANY_INFO.aboutText}
              </p>
              <div className="p-6 rounded-2xl bg-[#FDF5EC] border-l-4 border-[#ef9d4a] space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ef9d4a]">
                  Strategic Theme
                </p>
                <p className="text-lg font-black text-[#1A237E]">
                  {COMPANY_INFO.tagline}
                </p>
                <p className="text-xs text-gray-700">
                  {COMPANY_INFO.subTagline}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-br from-[#1A237E] to-[#283593] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#ef9d4a] text-[#1A237E] flex items-center justify-center font-black text-xl">
                  IPI
                </div>
                <div>
                  <h3 className="text-xl font-black">Strategic Direction (2026–2030)</h3>
                  <p className="text-xs text-white/70">Juba, South Sudan</p>
                </div>
              </div>

              <p className="text-sm text-white/90 leading-relaxed">
                "{COMPANY_INFO.overallObjective}"
              </p>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#ef9d4a] shrink-0" />
                  <span>Build World Centre, Nyakuron West, Juba, South Sudan</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={16} className="text-[#ef9d4a] shrink-0" />
                  <span>Knowledge-driven, measurable commercial outcomes</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/strategy"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ef9d4a] text-white font-bold text-xs shadow-md hover:brightness-110 transition-all"
                >
                  View 2026–2030 Strategic Objectives <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose IPI Section */}
        <section className="py-20 px-6 sm:px-8 bg-[#FDF5EC]/50 border-t border-orange-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                Distinctive Position
              </span>
              <h2 className="text-3xl font-black text-[#1A237E] mt-1">
                Why IPI in the Juba Market
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Not simply providing theoretical advice, but helping businesses improve their actual performance on the ground.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "1. Grow Businesses",
                  desc: "We analyze competitor dynamics, design scalable sales pipelines, and identify market expansion opportunities to increase top-line revenues.",
                  icon: TrendingUp,
                },
                {
                  title: "2. Control Costs",
                  desc: "We conduct forensic expenditure reviews and institute strict financial and procurement controls to cut operational waste and expand margins.",
                  icon: Target,
                },
                {
                  title: "3. Develop People",
                  desc: "We build structured HR policies, KPI appraisal mechanisms, and managerial training curricula to develop productive, accountable workforces.",
                  icon: Users,
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#ef9d4a] flex items-center justify-center mb-6">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-black text-[#1A237E] mb-3">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Performance Measures Grid */}
        <section className="py-20 px-6 sm:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                Accountability
              </span>
              <h2 className="text-3xl font-black text-[#1A237E] mt-1">
                How We Measure Success
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Our consultancy is evaluated against clear, verifiable client transformation benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PERFORMANCE_MEASURES.map((pm, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#FDF5EC] border border-orange-200/50 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#1A237E] text-sm">{pm.metric}</h4>
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
              Let's Discuss Your Business Growth in South Sudan
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              Visit us at Build World Centre, Nyakuron West, Juba, or schedule an initial diagnostic consultation.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-[#ef9d4a] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all"
              >
                Schedule Diagnostic Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
