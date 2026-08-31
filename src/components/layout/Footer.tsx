import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone, ArrowUpRight, ShieldCheck } from "lucide-react";

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
              Request Free Diagnostic Call <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/strategy"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-all"
            >
              Explore 2026–2030 Roadmap
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1: Brand & Positioning */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ef9d4a] text-[#1A237E] flex items-center justify-center font-extrabold text-xl shadow-md">
              IPI
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white">
                IPI <span className="text-[#ef9d4a]">CONSULTANCY</span>
              </span>
              <p className="text-[11px] text-white/60 font-medium">Juba, South Sudan</p>
            </div>
          </div>

          <p className="text-sm text-white/80 leading-relaxed max-w-md">
            IPI Consultancy is a South Sudan-focused business and management consultancy supporting
            organizations, businesses, and entrepreneurs to improve performance, strengthen internal
            systems, and achieve sustainable growth.
          </p>

          <div className="pt-2">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-[#ef9d4a]">
              Strategic Theme: GROW · CONTROL · DEVELOP
            </span>
          </div>

          <div className="flex gap-3 pt-2">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Facebook, href: "#", label: "Facebook" },
            ].map(({ icon: Icon, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ef9d4a] text-white transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
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

        {/* Col 3: Strategy & Navigation */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
            Strategic Links
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
                5-Year Strategic Plan (2026–2030)
              </Link>
            </li>
            <li>
              <Link to="/partners" className="hover:text-[#ef9d4a] transition-colors">
                Development Partners Matrix
              </Link>
            </li>
            <li>
              <Link to="/knowledge-hub" className="hover:text-[#ef9d4a] transition-colors">
                SME Knowledge & Toolkits
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact / Location */}
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#ef9d4a]">
            Juba Office
          </p>
          <ul className="space-y-3.5 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="text-[#ef9d4a] shrink-0 mt-0.5" />
              <span>Build World Centre, Nyakuron West, Juba, South Sudan</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-[#ef9d4a] shrink-0" />
              <a href="mailto:info@ipiconsultancy.com" className="hover:text-[#ef9d4a] transition-colors">
                info@ipiconsultancy.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-[#ef9d4a] shrink-0" />
              <span>+211 920 000 000</span>
            </li>
            <li className="text-xs text-white/60 pt-1">
              Working Hours: Mon – Fri (8:00 AM – 5:00 PM CAT)
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-6 sm:px-8 bg-[#101828]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} IPI Consultancy. All Rights Reserved. Juba, South Sudan.</p>
          <p className="text-[#ef9d4a] font-bold tracking-wide">
            Grow businesses · Control costs · Develop people
          </p>
        </div>
      </div>
    </footer>
  );
}
