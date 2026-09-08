import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, MessageCircle, ShieldCheck, Linkedin, Facebook } from "lucide-react";
import { XIcon } from "../common/XIcon";
import { COMPANY_INFO } from "../../lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Strategic Roadmap", href: "/strategy" },
  { label: "Partners & Sectors", href: "/partners" },
  { label: "Data Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#ef9d4a]/40 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#101828] text-white text-[11px] py-1.5 px-6 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5 text-white/80">
            <span className="flex items-center gap-1.5 text-[#ef9d4a] font-bold">
              <ShieldCheck size={13} /> Ideal Professional Investment Ltd
            </span>
            <span className="text-white/40">|</span>
            <span className="text-white/70">Build World Centre, Nyakuron West, Juba</span>
          </div>

          <div className="flex items-center gap-6">
            {/* Call */}
            <a
              href={`tel:${COMPANY_INFO.phoneCall}`}
              className="flex items-center gap-1.5 hover:text-[#ef9d4a] transition-colors font-semibold"
            >
              <Phone size={12} className="text-[#ef9d4a]" />
              <span>Call: {COMPANY_INFO.phoneCall}</span>
            </a>

            {/* WhatsApp */}
            <div className="flex items-center gap-1.5 text-green-400 font-bold">
              <MessageCircle size={13} />
              <span>WhatsApp:</span>
              <a
                href={COMPANY_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors underline decoration-green-500/50"
                title="Chat via WhatsApp"
              >
                +254 759 964753
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-3 border-l border-white/20">
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-5 h-5 rounded flex items-center justify-center hover:text-[#ef9d4a] text-white/70 transition-colors"
              >
                <Linkedin size={12} />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-5 h-5 rounded flex items-center justify-center hover:text-[#ef9d4a] text-white/70 transition-colors"
              >
                <Facebook size={12} />
              </a>
              <a
                href={COMPANY_INFO.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                className="w-5 h-5 rounded flex items-center justify-center hover:text-[#ef9d4a] text-white/70 transition-colors"
              >
                <XIcon size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar - Clean, spacious layout with larger logo alone and well-spaced navigation links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex h-20 sm:h-24 items-center justify-between">
        {/* Brand / Logo (Bigger logo, text removed as requested) */}
        <Link to="/" className="flex items-center shrink-0 group py-1">
          <img
            src="/images/ipi-logo-new.png"
            alt="IPI Consultancy Logo"
            className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm"
          />
        </Link>

        {/* Desktop Nav - Beautifully and generously spaced */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link
            to="/"
            className={`text-[13.5px] font-bold tracking-wide transition-colors py-2 ${
              isActive("/") ? "text-[#ef9d4a] border-b-2 border-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`text-[13.5px] font-bold tracking-wide transition-colors py-2 ${
              isActive("/about") ? "text-[#ef9d4a] border-b-2 border-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 text-[13.5px] font-bold tracking-wide transition-colors py-2 ${
                isActive("/services") ? "text-[#ef9d4a] border-b-2 border-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
              }`}
            >
              Services <ChevronDown size={14} className="opacity-80" />
            </Link>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 w-64 rounded-2xl border border-orange-100 bg-white py-3 shadow-2xl z-50 animate-fade-in">
                <Link
                  to="/services#business-development"
                  className="block px-5 py-2.5 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a] transition-colors"
                >
                  Business Development & Sales
                </Link>
                <Link
                  to="/services#cost-control"
                  className="block px-5 py-2.5 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a] transition-colors"
                >
                  Finance & Cost Control
                </Link>
                <Link
                  to="/services#human-resources"
                  className="block px-5 py-2.5 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a] transition-colors"
                >
                  HR & Organizational Development
                </Link>
                <Link
                  to="/services#customer-care"
                  className="block px-5 py-2.5 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a] transition-colors"
                >
                  Customer Care & Admin
                </Link>
                <Link
                  to="/services#general-advisory"
                  className="block px-5 py-2.5 text-xs font-semibold text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a] transition-colors"
                >
                  General Management & Advisory
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/approach"
            className={`text-[13.5px] font-bold tracking-wide transition-colors py-2 ${
              isActive("/approach") ? "text-[#ef9d4a] border-b-2 border-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            Our Approach
          </Link>

          <Link
            to="/strategy"
            className={`text-[13.5px] font-bold tracking-wide transition-colors py-2 ${
              isActive("/strategy") ? "text-[#ef9d4a] border-b-2 border-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            Strategic Roadmap
          </Link>

          <Link
            to="/partners"
            className={`text-[13.5px] font-bold tracking-wide transition-colors py-2 ${
              isActive("/partners") ? "text-[#ef9d4a] border-b-2 border-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            Partners & Sectors
          </Link>

          <Link
            to="/privacy"
            className={`text-[13.5px] font-bold tracking-wide transition-colors py-2 ${
              isActive("/privacy") ? "text-[#ef9d4a] border-b-2 border-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            Data Privacy
          </Link>
        </nav>

        {/* CTA Button Only (Duplicate WhatsApp number removed as requested) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-6 py-2.5 text-[13px] font-bold bg-[#ef9d4a] text-white rounded-full hover:brightness-95 transition-all shadow-md hover:scale-105"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#1A237E] p-2"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t bg-white border-gray-100 px-6 py-5 lg:hidden shadow-xl animate-fade-in">
          {/* Quick contact banner */}
          <div className="mb-4 pb-3 border-b border-gray-100 flex flex-col gap-2 text-xs">
            <a
              href={`tel:${COMPANY_INFO.phoneCall}`}
              className="flex items-center gap-2 text-gray-700 font-semibold"
            >
              <Phone size={14} className="text-[#ef9d4a]" />
              <span>Call: {COMPANY_INFO.phoneCall}</span>
            </a>
            <div className="flex items-center gap-2 text-green-700 font-bold flex-wrap">
              <MessageCircle size={14} className="text-green-600 shrink-0" />
              <span>WhatsApp:</span>
              <a
                href={COMPANY_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-800"
              >
                +254 759 964753
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-semibold transition-colors py-1 ${
                  isActive(link.href) ? "text-[#ef9d4a] font-bold" : "text-gray-700 hover:text-[#ef9d4a]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 text-sm font-bold bg-[#ef9d4a] text-white rounded-full shadow-md"
              >
                Book Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
