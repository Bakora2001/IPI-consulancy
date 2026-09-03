import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone, MessageCircle, ArrowUpRight, ShieldCheck, Lock } from "lucide-react";
import { COMPANY_INFO } from "../../lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#1A237E] text-white border-t border-[#ef9d4a]/30">
      {/* Top Banner */}
      <div className="bg-[#101828] border-b border-white/10 px-6 sm:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#ef9d4a] font-bold text-xs uppercase tracking-widest mb-1">
              <ShieldCheck size={16} /> South Sudan Business Growth Partner
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Ready to grow your business, control costs, and develop high-performing teams?
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ef9d4a] text-white font-bold text-sm shadow-lg hover:brightness-110 transition-all"
            >
              Request Diagnostic Call <ArrowUpRight size={16} />
            </Link>
            <a
              href={COMPANY_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-bold text-sm shadow-lg hover:bg-green-700 transition-all"
            >
              <MessageCircle size={16} /> WhatsApp: {COMPANY_INFO.whatsApp}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand, Meaning of IPI & Positioning */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
              <img
                src="/images/ipi-logo-new.png"
                alt="IPI Consultancy Logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white">
                IPI <span className="text-[#ef9d4a]">CONSULTANCY</span>
              </span>
              <p className="text-[11px] text-[#ef9d4a] font-bold uppercase tracking-wider">
                Ideal Professional Investment Ltd
              </p>
              <p className="text-[10px] text-white/70">Build World Centre, Nyakuron West, Juba</p>
            </div>
          </div>

          <p className="text-sm text-white/80 leading-relaxed max-w-md">
            {COMPANY_INFO.aboutText}
          </p>

          <div className="pt-1">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#ef9d4a]">
              Strategic Theme: GROW · CONTROL · DEVELOP
            </span>
          </div>

          {/* Social Media Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href={COMPANY_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ef9d4a] text-white transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={COMPANY_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ef9d4a] text-white transition-colors"
            >
              <Twitter size={16} />
            </a>
            <a
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ef9d4a] text-white transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href={COMPANY_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-green-600/80 hover:bg-green-600 flex items-center justify-center text-white transition-colors"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
            Core Services
          </p>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <Link to="/services#business-development" className="hover:text-[#ef9d4a] transition-colors">
                Business Development & Sales
              </Link>
            </li>
            <li>
              <Link to="/services#cost-control" className="hover:text-[#ef9d4a] transition-colors">
                Finance & Cost Control
              </Link>
            </li>
            <li>
              <Link to="/services#human-resources" className="hover:text-[#ef9d4a] transition-colors">
                HR & Org Development
              </Link>
            </li>
            <li>
              <Link to="/services#customer-care" className="hover:text-[#ef9d4a] transition-colors">
                Customer Care & Admin
              </Link>
            </li>
            <li>
              <Link to="/services#general-advisory" className="hover:text-[#ef9d4a] transition-colors">
                General Management Advisory
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Direct Pages Navigation */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
            Direct Pages
          </p>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <Link to="/about" className="hover:text-[#ef9d4a] transition-colors">
                About IPI Profile
              </Link>
            </li>
            <li>
              <Link to="/approach" className="hover:text-[#ef9d4a] transition-colors">
                5-Stage Methodology
              </Link>
            </li>
            <li>
              <Link to="/strategy" className="hover:text-[#ef9d4a] transition-colors">
                Our Strategic Roadmap
              </Link>
            </li>
            <li>
              <Link to="/partners" className="hover:text-[#ef9d4a] transition-colors">
                High-Priority Partners
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-[#ef9d4a] transition-colors flex items-center gap-1.5 text-[#ef9d4a]">
                <Lock size={12} /> Data Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#ef9d4a] transition-colors">
                Contact & Diagnostics
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact / Location */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
            Juba Office & Contact
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="text-[#ef9d4a] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Build World Centre</span>
                <p className="text-xs text-white/80">Nyakuron West</p>
                <p className="text-xs text-white/80">Juba, South Sudan</p>
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-[#ef9d4a] shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#ef9d4a] transition-colors">
                {COMPANY_INFO.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-[#ef9d4a] shrink-0" />
              <a href={`tel:${COMPANY_INFO.phoneCall}`} className="hover:text-[#ef9d4a] transition-colors font-semibold">
                Calls: {COMPANY_INFO.phoneCall}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle size={16} className="text-green-400 shrink-0" />
              <a
                href={COMPANY_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 text-green-400 transition-colors font-bold"
              >
                WhatsApp: {COMPANY_INFO.whatsApp}
              </a>
            </li>
            <li className="text-xs text-white/60 pt-1">
              Working Hours: Mon – Fri (8:00 AM – 5:00 PM CAT)
            </li>
          </ul>
        </div>
      </div>

    </footer>
  );
}
