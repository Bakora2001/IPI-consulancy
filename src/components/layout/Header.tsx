import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Strategy 2026–2030", href: "/strategy" },
  { label: "Partners & Sectors", href: "/partners" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#ef9d4a]/60 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 rounded-xl bg-[#1A237E] flex items-center justify-center text-white font-black text-base shadow-sm border border-white/20 group-hover:scale-105 transition-transform">
            <span className="text-[#ef9d4a]">I</span>PI
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-[#1A237E] leading-none">
              IPI <span className="text-[#ef9d4a]">CONSULTANCY</span>
            </span>
            <span className="text-[9px] font-bold tracking-wider text-gray-500 uppercase mt-0.5">
              Juba, South Sudan
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Cleanly spaced */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            to="/"
            className={`text-[13px] font-semibold transition-colors ${
              isActive("/") ? "text-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`text-[13px] font-semibold transition-colors ${
              isActive("/about") ? "text-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
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
              className={`flex items-center gap-1 text-[13px] font-semibold transition-colors ${
                isActive("/services") ? "text-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
              }`}
            >
              Services <ChevronDown size={14} className="opacity-80" />
            </Link>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 w-64 rounded-xl border border-gray-100 bg-white py-2 shadow-xl z-50">
                <Link
                  to="/services#business-development"
                  className="block px-4 py-2 text-[12px] font-medium text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a]"
                >
                  Business Development & Sales
                </Link>
                <Link
                  to="/services#cost-control"
                  className="block px-4 py-2 text-[12px] font-medium text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a]"
                >
                  Finance & Cost Control
                </Link>
                <Link
                  to="/services#human-resources"
                  className="block px-4 py-2 text-[12px] font-medium text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a]"
                >
                  HR & Organizational Development
                </Link>
                <Link
                  to="/services#customer-care"
                  className="block px-4 py-2 text-[12px] font-medium text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a]"
                >
                  Customer Care & Admin
                </Link>
                <Link
                  to="/services#general-advisory"
                  className="block px-4 py-2 text-[12px] font-medium text-gray-700 hover:bg-orange-50 hover:text-[#ef9d4a]"
                >
                  General Management & Advisory
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/approach"
            className={`text-[13px] font-semibold transition-colors ${
              isActive("/approach") ? "text-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            Our Approach
          </Link>

          <Link
            to="/strategy"
            className={`text-[13px] font-semibold transition-colors ${
              isActive("/strategy") ? "text-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            Strategy 2026–2030
          </Link>

          <Link
            to="/partners"
            className={`text-[13px] font-semibold transition-colors ${
              isActive("/partners") ? "text-[#ef9d4a]" : "text-gray-700 hover:text-[#ef9d4a]"
            }`}
          >
            Partners & Sectors
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2 text-[13px] font-semibold bg-[#ef9d4a] text-white rounded-full hover:brightness-95 transition-all shadow-md"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#1A237E]"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t bg-white border-gray-100 px-6 py-4 lg:hidden shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-[#ef9d4a]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/knowledge-hub"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#ef9d4a]"
            >
              Knowledge Hub
            </Link>
            <div className="mt-2 pt-2 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-2.5 text-sm font-semibold bg-[#ef9d4a] text-white rounded-full shadow-md"
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
