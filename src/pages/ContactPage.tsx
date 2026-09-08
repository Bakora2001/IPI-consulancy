import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Phone,
  MessageCircle,
  ShieldCheck,
  Lock,
  ExternalLink,
  Linkedin,
  Facebook,
} from "lucide-react";
import { XIcon } from "../components/common/XIcon";
import { COMPANY_INFO, DEPARTMENT_EMAILS } from "../lib/constants";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    serviceNeeded: "Business Development and Sales",
    message: "",
    agreePrivacy: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-[#0e1647] via-[#1A237E] to-[#121858] text-white py-20 px-6 sm:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#ef9d4a]/50 text-xs font-bold text-[#ef9d4a] uppercase tracking-widest">
              Direct Contact & Diagnostic Bookings
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Start Your Performance Transformation
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Schedule an operational diagnostic call, message us on WhatsApp, or visit our headquarters at Build World Centre, Nyakuron West, Juba.
            </p>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-16 px-6 sm:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Card (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#ef9d4a]">
                  Direct Channels
                </span>
                <h3 className="text-2xl font-black text-[#1A237E] mt-1">
                  Connect Directly with IPI
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Our team is available Monday through Friday to address private sector, NGO, and institutional inquiries across South Sudan.
                </p>
              </div>

              <div className="space-y-4">
                {/* Physical Address */}
                <div className="p-5 rounded-2xl bg-[#FDF5EC] border border-orange-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1A237E]">Physical Address</h4>
                    <p className="text-xs text-gray-800 font-bold mt-0.5">Build World Centre</p>
                    <p className="text-xs text-gray-700">Nyakuron West</p>
                    <p className="text-xs text-gray-600">Juba, South Sudan</p>
                  </div>
                </div>

                {/* Phone Calls */}
                <div className="p-5 rounded-2xl bg-[#FDF5EC] border border-orange-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1A237E]">Telephone Calls</h4>
                    <p className="text-xs text-gray-800 font-bold mt-0.5">
                      <a href={`tel:${COMPANY_INFO.phoneCall}`} className="hover:text-[#ef9d4a] transition-colors">
                        {COMPANY_INFO.phoneCall}
                      </a>
                    </p>
                    <span className="text-[10px] text-gray-500 font-medium">Calls start with South Sudan code (+211)</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-5 rounded-2xl bg-green-50/80 border border-green-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-green-900">WhatsApp Direct Support</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Quick instant response on either line:</p>
                    <div className="mt-2 space-y-1.5">
                      <div className="flex items-center justify-between gap-2 bg-white/80 p-2 rounded-xl border border-green-100">
                        <span className="text-xs font-bold text-green-950">+254 759 964753 (KE)</span>
                        <a
                          href={COMPANY_INFO.whatsAppLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-green-700 hover:text-green-900 underline"
                        >
                          Chat Now <ExternalLink size={11} />
                        </a>
                      </div>
                      <div className="flex items-center justify-between gap-2 bg-white/80 p-2 rounded-xl border border-green-100">
                        <span className="text-xs font-bold text-green-950">+211 922 596464 (SS)</span>
                        <a
                          href={COMPANY_INFO.whatsAppSecondaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-green-700 hover:text-green-900 underline"
                        >
                          Chat Now <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Direct */}
                <div className="p-5 rounded-2xl bg-[#FDF5EC] border border-orange-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1A237E]">Official & Departmental Emails</h4>
                    <p className="text-xs text-gray-800 font-semibold mt-0.5">
                      General:{" "}
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#ef9d4a] transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                    <a
                      href="#department-emails"
                      className="inline-block text-[11px] font-bold text-[#ef9d4a] hover:underline mt-1"
                    >
                      View All 7 Departmental Inboxes ↓
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="p-5 rounded-2xl bg-[#FDF5EC] border border-orange-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1A237E]">Working Hours</h4>
                    <p className="text-xs text-gray-800 font-semibold mt-0.5">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    <p className="text-xs text-gray-500">Central Africa Time (CAT)</p>
                  </div>
                </div>
              </div>

              {/* Social Media Buttons Card */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                  Connect on Social Platforms
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 text-[#1A237E] hover:bg-[#1A237E] hover:text-white transition-all text-xs font-bold"
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                  <a
                    href={COMPANY_INFO.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 text-blue-800 hover:bg-blue-800 hover:text-white transition-all text-xs font-bold"
                  >
                    <Facebook size={15} /> Facebook
                  </a>
                  <a
                    href={COMPANY_INFO.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    title="X"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-100 text-gray-800 hover:bg-black hover:text-white transition-all text-xs font-bold"
                  >
                    <XIcon size={14} /> X
                  </a>
                </div>
              </div>
            </div>

            {/* Consultation Request Form (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-[#FDF5EC]/50 p-8 sm:p-10 rounded-3xl border border-orange-200 shadow-md">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-black text-[#1A237E]">Diagnostic Request Received</h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. An IPI management consultant will contact you via <strong>{formData.email}</strong> or call within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2 rounded-full bg-[#1A237E] text-white text-xs font-bold hover:brightness-110 transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#ef9d4a]">
                        Diagnostic Inquiry
                      </span>
                      <h3 className="text-2xl font-black text-[#1A237E] mt-1">
                        Request a Business Consultation
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        Fill out the details below and our consulting team will prepare a confidential review.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Deng"
                          className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#ef9d4a]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#ef9d4a]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Phone Number (Calls start with +211)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+211 9..."
                          className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#ef9d4a]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          Business / Organization Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Nile Logistics Ltd / NGO"
                          className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#ef9d4a]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Primary Service Focus Area *
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#ef9d4a] text-gray-800"
                      >
                        <option value="Customer Care">Customer Care & Support (customer@ipiconsultancy.com)</option>
                        <option value="Admin">Admin & Operations (admin@ipiconsultancy.com)</option>
                        <option value="Finance">Finance & Cost Control (finance@ipiconsultancy.com)</option>
                        <option value="Business Development">Business Development (businessdevelopment@ipiconsultancy.com)</option>
                        <option value="Sales">Sales & Consultancy Packages (sales@ipiconsultancy.com)</option>
                        <option value="Human Resources">Human Resources & Talent (hr@ipiconsultancy.com)</option>
                        <option value="General Inquiries">General Management & Advisory (general@ipiconsultancy.com)</option>
                        <option value="Stage 01 Full Diagnostic">Full Organizational Diagnostic (5-Stage Model)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Specific Operational Challenges / Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your company size, key operational hurdles, or strategic goals..."
                        className="w-full px-4 py-2.5 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#ef9d4a]"
                      />
                    </div>

                    {/* Data Privacy & Confidentiality Consent */}
                    <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                      <Lock size={16} className="text-[#ef9d4a] shrink-0 mt-0.5" />
                      <div className="text-[11px] text-gray-600 leading-snug">
                        <span className="font-bold text-[#1A237E]">Data Privacy Guarantee: </span>
                        All operational details and contact data shared are treated under strict client confidentiality and non-disclosure standards. Read our{" "}
                        <Link to="/privacy" className="text-[#ef9d4a] font-bold hover:underline" target="_blank">
                          Data Privacy Policy
                        </Link>.
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#ef9d4a] to-[#e6892e] text-white font-bold text-xs shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={15} /> Submit Diagnostic Request
                    </button>
                  </form>
                )}
              </div>

              {/* Map Showcase */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-[#1A237E] text-base flex items-center gap-2">
                      <MapPin size={18} className="text-[#ef9d4a]" /> Office Location Map
                    </h3>
                    <p className="text-xs text-gray-600">
                      Build World Centre, Nyakuron West, Juba, South Sudan
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Nyakuron+West,+Juba,+South+Sudan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ef9d4a] hover:underline"
                  >
                    Open in Google Maps <ExternalLink size={12} />
                  </a>
                </div>

                {/* Embedded Responsive Map */}
                <div className="w-full h-80 rounded-3xl overflow-hidden border border-orange-200 shadow-md relative bg-gray-100">
                  <iframe
                    title="IPI Consultancy Location Map"
                    src="https://maps.google.com/maps?q=Nyakuron+West,+Juba,+South+Sudan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                  {/* Floating Location Overlay Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-lg border border-orange-100 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center shrink-0">
                      <ShieldCheck size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-black text-[#1A237E] leading-none">IPI Consultancy</p>
                      <p className="text-[9px] font-semibold text-gray-600 mt-0.5">Build World Centre · Nyakuron West</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Departmental Email Directory Section */}
        <section id="department-emails" className="py-16 px-6 sm:px-8 bg-[#FDF5EC]/70 border-t border-orange-200/60 scroll-mt-20">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#ef9d4a]/50 text-xs font-bold text-[#ef9d4a] uppercase tracking-wider">
                Direct Communication Channels
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1A237E]">
                Departmental Email Directory
              </h2>
              <p className="text-sm text-gray-700">
                Direct your message directly to the designated department at IPI Consultancy (using the <span className="font-bold text-[#1A237E]">@ipiconsultancy.com</span> domain) for fast, focused assistance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {DEPARTMENT_EMAILS.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white border border-orange-200/80 shadow-sm hover:shadow-md hover:border-[#ef9d4a]/60 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#ef9d4a] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
                        Department
                      </span>
                      <span className="w-2 h-2 rounded-full bg-green-500" title="Active communication channel" />
                    </div>
                    <h3 className="text-lg font-black text-[#1A237E]">
                      {item.department}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed min-h-[36px]">
                      {item.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 space-y-2.5">
                    <a
                      href={`mailto:${item.email}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#1A237E] hover:text-[#ef9d4a] transition-colors break-all"
                    >
                      <Mail size={14} className="text-[#ef9d4a] shrink-0" />
                      {item.email}
                    </a>
                    <a
                      href={`mailto:${item.email}`}
                      className="w-full py-2 px-3 rounded-xl bg-[#1A237E] text-center text-xs font-bold text-white hover:bg-[#ef9d4a] hover:text-white transition-all block shadow-sm"
                    >
                      Email {item.department} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
