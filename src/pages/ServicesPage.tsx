import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  TrendingUp,
  DollarSign,
  Users,
  Headphones,
  Compass,
  CheckCircle2,
  Package,
} from "lucide-react";
import { SERVICE_PORTFOLIOS } from "../lib/constants";

export function ServicesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-[#0e1647] via-[#1A237E] to-[#121858] text-white py-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#ef9d4a]/50 text-xs font-bold text-[#ef9d4a] uppercase tracking-widest">
              Our Service Portfolios
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Comprehensive Consultancy Solutions
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Structured across five core functional domains to help businesses in South Sudan grow revenue, control operational costs, and develop productive workforces.
            </p>
          </div>
        </section>

        {/* Services Navigation Bar */}
        <div className="sticky top-20 z-30 bg-[#FDF5EC] border-b border-orange-200 py-3 px-6 sm:px-8 hidden md:block">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 overflow-x-auto text-xs font-bold text-gray-700">
            {SERVICE_PORTFOLIOS.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-[#ef9d4a] transition-colors whitespace-nowrap px-3 py-1 rounded-full hover:bg-white"
              >
                0{idx + 1}. {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Detailed Service Sections */}
        <section className="py-16 px-6 sm:px-8 bg-white">
          <div className="max-w-6xl mx-auto space-y-20">
            {SERVICE_PORTFOLIOS.map((service, idx) => {
              const Icon =
                idx === 0
                  ? TrendingUp
                  : idx === 1
                  ? DollarSign
                  : idx === 2
                  ? Users
                  : idx === 3
                  ? Headphones
                  : Compass;

              const isEven = idx % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-36 p-8 sm:p-12 rounded-3xl border border-orange-100 shadow-lg ${
                    isEven ? "bg-[#FDF5EC]/40" : "bg-white"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center font-bold">
                          <Icon size={24} />
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#ef9d4a]">
                            Pillar 0{idx + 1} · {service.category}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-black text-[#1A237E]">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-[#ef9d4a]">
                        {service.tagline}
                      </p>

                      <p className="text-sm text-gray-700 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Key Priorities */}
                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A237E]">
                          Key Priorities & Areas of Intervention
                        </h4>
                        <div className="space-y-2">
                          {service.keyPriorities.map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                              <CheckCircle2 size={16} className="text-[#ef9d4a] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-6">
                      {/* Deliverables Box */}
                      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-orange-200 shadow-sm space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#1A237E] uppercase tracking-wider">
                          <Package size={16} className="text-[#ef9d4a]" /> Tangible Deliverables
                        </div>
                        <div className="space-y-2.5">
                          {service.deliverables.map((del, i) => (
                            <div key={i} className="p-3 rounded-xl bg-[#FDF5EC] text-xs font-semibold text-gray-800 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#ef9d4a]" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA card */}
                      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1A237E] to-[#283593] text-white flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold text-[#ef9d4a]">Interested in this service?</p>
                          <p className="text-sm font-black text-white">Book a diagnostic call for your team</p>
                        </div>
                        <Link
                          to="/contact"
                          className="px-5 py-2.5 rounded-full bg-[#ef9d4a] text-white text-xs font-bold hover:brightness-110 shrink-0 shadow-md"
                        >
                          Inquire Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Global CTA */}
        <section className="bg-[#1A237E] text-white py-16 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black">
              Need a Customized Service Combination?
            </h2>
            <p className="text-sm sm:text-base text-white/80">
              We frequently design integrated packages tailored to the unique operational challenges of South Sudan enterprises and NGOs.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full bg-[#ef9d4a] text-white font-bold text-sm shadow-xl hover:brightness-110 transition-all"
              >
                Request Custom Diagnostic Proposal
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
