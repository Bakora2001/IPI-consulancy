import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY_INFO } from "../../lib/constants";

export function MapSection() {
  return (
    <section className="py-20 bg-[#F6F1EB] border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#ECE7E2] text-[#ef9d4a] text-xs font-extrabold uppercase tracking-widest">
            Physical Location & Accessibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A237E] tracking-tight">
            Visit Our Juba Headquarters
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Located at Build World Centre, Nyakuron West, Juba. Accessible to corporate clients, SMEs, and international development agencies across South Sudan.
          </p>
        </div>

        {/* Grid: Details Card (5 cols) + Embedded Map (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-orange-200/80 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center font-bold shadow-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#1A237E]">IPI Consultancy</h3>
                  <p className="text-xs text-[#ef9d4a] font-bold uppercase tracking-wider">
                    Ideal Professional Investment Ltd
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-2 text-xs">
                {/* Physical Address */}
                <div className="p-4 rounded-2xl bg-[#FDF5EC] border border-orange-200/60 space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-wider text-gray-400">Head Office</p>
                  <p className="text-sm font-black text-[#1A237E]">Build World Centre</p>
                  <p className="text-gray-700 font-medium">Nyakuron West</p>
                  <p className="text-gray-600">Juba, South Sudan</p>
                </div>

                {/* Direct Calls */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <Phone size={18} className="text-[#ef9d4a] shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Voice Calls (Start with +211)</p>
                    <a href={`tel:${COMPANY_INFO.phoneCall}`} className="text-xs font-bold text-[#1A237E] hover:text-[#ef9d4a] transition-colors">
                      {COMPANY_INFO.phoneCall}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-green-50 border border-green-200">
                  <MessageCircle size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <div className="flex-1 space-y-1">
                    <p className="text-[10px] font-bold text-green-800 uppercase">WhatsApp Instant Chat</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-green-950">+254 759 964753</span>
                        <a
                          href={COMPANY_INFO.whatsAppLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-green-700 hover:text-green-900 underline flex items-center gap-0.5"
                        >
                          KE <ExternalLink size={10} />
                        </a>
                      </div>
                      <span className="text-gray-300 hidden sm:inline">|</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-black text-green-950">+211 922 596464</span>
                        <a
                          href={COMPANY_INFO.whatsAppSecondaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-green-700 hover:text-green-900 underline flex items-center gap-0.5"
                        >
                          SS <ExternalLink size={10} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <Clock size={18} className="text-[#ef9d4a] shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Operating Hours</p>
                    <p className="text-xs font-semibold text-gray-800">Mon – Fri: 8:00 AM – 5:00 PM CAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="flex-1 py-3 px-5 text-center text-xs font-bold rounded-full bg-[#ef9d4a] text-white hover:brightness-105 transition-all shadow-md"
              >
                Book Diagnostic Session
              </Link>
              <a
                href="https://maps.google.com/?q=Nyakuron+West,+Juba,+South+Sudan"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 text-xs font-bold rounded-full border border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E] hover:text-white transition-all flex items-center gap-1.5"
              >
                Get Directions <ExternalLink size={13} />
              </a>
            </div>

          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-orange-200 shadow-lg relative min-h-[420px] bg-gray-100">
            <iframe
              title="IPI Consultancy - Build World Centre Location Map"
              src="https://maps.google.com/maps?q=Nyakuron+West,+Juba,+South+Sudan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-xl border border-orange-100 flex items-center gap-3 select-none pointer-events-none">
              <div className="w-8 h-8 rounded-xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center font-black text-xs shadow-sm">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-[#1A237E] leading-none">Build World Centre</p>
                <p className="text-[10px] font-bold text-gray-500 mt-0.5">Nyakuron West · Juba, South Sudan</p>
              </div>
            </div>

            {/* Floating Bottom Link */}
            <div className="absolute bottom-4 right-4">
              <a
                href="https://maps.google.com/?q=Nyakuron+West,+Juba,+South+Sudan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-[#1A237E] shadow-lg border border-gray-200 hover:bg-[#1A237E] hover:text-white transition-all flex items-center gap-1.5"
              >
                Open Full Map <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
