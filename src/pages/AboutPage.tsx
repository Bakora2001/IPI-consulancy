import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  Target,
  Users,
  TrendingUp,
  MapPin,
  ArrowRight,
  MessageCircle,
  Phone,
  Lock,
  Building,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO, LONG_TERM_VISION } from "../lib/constants";

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

        {/* Overview & Meaning of IPI */}
        <section className="py-20 px-6 sm:px-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-orange-100 text-[#ef9d4a] text-xs font-extrabold uppercase tracking-widest">
                  Our Identity & Name Meaning
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A237E] leading-tight">
                What does IPI Stand For?
              </h2>
              <div className="p-5 rounded-2xl bg-[#FDF5EC] border border-orange-200">
                <p className="text-base font-black text-[#1A237E]">
                  IPI = <span className="text-[#ef9d4a]">IDEAL PROFESSIONAL INVESTMENT</span>
                </p>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                  Registered in South Sudan as <strong>Ideal Professional Investment Ltd</strong>, we operate as <strong>IPI Consultancy</strong> to provide specialized management, strategic advisory, cost optimization, and institutional capacity building.
                </p>
              </div>

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

            {/* Right Card: Strategic Overview with Logo */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#1A237E] to-[#283593] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
                  <img
                    src="/images/ipi-logo-new.png"
                    alt="IPI Consultancy Logo"
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black">Strategic Direction (2026–2030)</h3>
                  <p className="text-xs text-[#ef9d4a] font-bold">Ideal Professional Investment Ltd</p>
                  <p className="text-[11px] text-white/70">Juba, South Sudan</p>
                </div>
              </div>

              <blockquote className="text-sm text-white/95 leading-relaxed italic border-l-2 border-[#ef9d4a] pl-3">
                "{COMPANY_INFO.overallObjective}"
              </blockquote>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#ef9d4a] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">Build World Centre</span>
                    <p className="text-white/80 text-[11px]">Nyakuron West, Juba, South Sudan</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#ef9d4a] shrink-0" />
                  <span>Direct Call: {COMPANY_INFO.phoneCall}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-green-400 shrink-0" />
                  <span>WhatsApp: {COMPANY_INFO.whatsApp}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/strategy"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ef9d4a] text-white font-bold text-xs shadow-md hover:brightness-110 transition-all"
                >
                  Our Strategic Roadmap <ArrowRight size={14} />
                </Link>
                <Link
                  to="/privacy"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white font-bold text-xs hover:bg-white/10 transition-all"
                >
                  <Lock size={12} /> Data Privacy Policy
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
                Why IPI in the South Sudan Market
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

        {/* Institutional Foundation & Long-Term Vision Showcase */}
        <section className="py-20 px-6 sm:px-8 bg-white border-t border-orange-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
                Institutional Trust
              </span>
              <h2 className="text-3xl font-black text-[#1A237E]">
                Client Confidentiality & Strict Data Protection
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Management consulting requires mutual trust. At IPI Consultancy, all financial evaluations, HR payroll data, vendor cost disclosures, and market strategies are protected under our mandatory Non-Disclosure Agreements (NDA) and institutional data privacy protocols.
              </p>

              <div className="space-y-3">
                {[
                  "Mandatory mutual Non-Disclosure Agreement (NDA) executed before all client diagnostics.",
                  "Zero data monetization or third-party sharing of organizational records.",
                  "Encrypted digital records and secure role-based file handling.",
                  "Full client ownership and discretionary deletion upon project handover.",
                ].map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700">
                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/privacy"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ef9d4a] hover:underline"
                >
                  Read our complete Data Privacy & Confidentiality Policy →
                </Link>
              </div>
            </div>

            {/* Long-Term Vision Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#101828] text-white space-y-5 border border-white/10 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ef9d4a]">
                <Building size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#ef9d4a]">
                Continental Ambition
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Our Long-Term Vision
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-semibold italic border-l-2 border-[#ef9d4a] pl-4">
                "{LONG_TERM_VISION}"
              </p>
              <div className="pt-2">
                <Link
                  to="/strategy"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ef9d4a] text-white font-bold text-xs hover:brightness-110 transition-all"
                >
                  Explore Strategic Roadmap (2026–2030) <ArrowRight size={14} />
                </Link>
              </div>
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
              Visit us at Build World Centre, Nyakuron West, Juba, or schedule an initial diagnostic consultation with our leadership team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-[#ef9d4a] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all"
              >
                Schedule Diagnostic Consultation
              </Link>
              <a
                href={COMPANY_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-green-600 text-white font-bold text-sm shadow-xl hover:bg-green-700 transition-all flex items-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp: +254 759 964753
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
