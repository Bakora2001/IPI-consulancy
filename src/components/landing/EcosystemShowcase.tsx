import { Link } from "react-router-dom";
import {
  TrendingUp,
  DollarSign,
  Users,
  Headphones,
  Compass,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SERVICE_PORTFOLIOS } from "../../lib/constants";

export function EcosystemShowcase() {
  return (
    <section className="py-20 bg-[#FDF5EC]/50 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-[#ef9d4a] text-xs font-extrabold uppercase tracking-widest mb-3">
            Core Service Items
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A237E] tracking-tight">
            Consultancy Solutions Built for South Sudan
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Our functional service practices empower corporate enterprises, growing SMEs, and development-funded programmes with end-to-end operational systems.
          </p>
        </div>

        {/* 5 Portfolios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-8 border border-orange-100/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A237E] to-[#283593] text-[#ef9d4a] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <Icon size={28} />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider text-[#ef9d4a]">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-black text-[#1A237E] mb-2 group-hover:text-[#ef9d4a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-semibold mb-4 leading-relaxed">
                    {service.tagline}
                  </p>

                  <p className="text-xs text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Key Priorities */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Key Interventions
                    </p>
                    {service.keyPriorities.slice(0, 3).map((pri, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 size={14} className="text-[#ef9d4a] shrink-0 mt-0.5" />
                        <span>{pri}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold text-[#1A237E] hover:text-[#ef9d4a] inline-flex items-center gap-1.5 transition-colors"
                  >
                    View Deliverables <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-orange-50 text-[#ef9d4a] hover:bg-[#ef9d4a] hover:text-white transition-all"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Enterprise Diagnostic */}
          <div className="bg-gradient-to-br from-[#1A237E] to-[#0E1647] rounded-3xl p-8 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#ef9d4a] flex items-center justify-center mb-6">
                <Compass size={28} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#ef9d4a]">
                Tailored Advisory
              </span>
              <h3 className="text-2xl font-black mb-2">Need a Comprehensive Diagnostic?</h3>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                We combine all 5 service pillars into a customized organizational health check for your business or development program in South Sudan.
              </p>
            </div>
            <Link
              to="/contact"
              className="w-full text-center py-3 px-4 rounded-full bg-[#ef9d4a] text-white font-bold text-xs shadow-lg hover:brightness-110 transition-all"
            >
              Book Diagnostic Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
