import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { MapPin, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    serviceNeeded: "Business Development and Sales",
    message: "",
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
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#ef9d4a]/50 text-xs font-bold text-[#ef9d4a] uppercase tracking-widest">
              Contact & Diagnostics
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Get in Touch with IPI Consultancy
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Schedule an operational diagnostic call or visit our consultancy offices at Build World Centre, Nyakuron West, Juba.
            </p>
          </div>
        </section>

        {/* Contact Form & Location Grid */}
        <section className="py-20 px-6 sm:px-8 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#ef9d4a]">
                  Juba Head Office
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1A237E] mt-1 mb-4">
                  Where to Find Us
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are conveniently located in Juba to serve private sector enterprises, startups, and international development agencies across South Sudan.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-[#FDF5EC] border border-orange-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1A237E]">Physical Address</h4>
                    <p className="text-xs text-gray-700 font-semibold mt-0.5">Build World Centre</p>
                    <p className="text-xs text-gray-600">Nyakuron West, Juba, South Sudan</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FDF5EC] border border-orange-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1A237E]">Email Direct</h4>
                    <p className="text-xs text-gray-700 font-semibold mt-0.5">info@ipiconsultancy.com</p>
                    <p className="text-xs text-gray-500">Inquiries answered within 24 hours</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FDF5EC] border border-orange-200/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1A237E]">Office Hours</h4>
                    <p className="text-xs text-gray-700 font-semibold mt-0.5">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    <p className="text-xs text-gray-500">Central Africa Time (CAT)</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1A237E] to-[#283593] text-white space-y-3 shadow-lg">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ef9d4a]">
                  South Sudan Operations
                </span>
                <h4 className="text-lg font-black">Strategic Hub in Juba</h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  Serving businesses across Juba and expanding regional economic corridors in Wau, Malakal, Nimule, and beyond.
                </p>
              </div>
            </div>

            {/* Consultation Request Form (7 Cols) */}
            <div className="lg:col-span-7 bg-[#FDF5EC]/50 p-8 sm:p-10 rounded-3xl border border-orange-200 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1A237E]">Diagnostic Request Received</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. An IPI senior management consultant will contact you at <strong>{formData.email}</strong> within 24 business hours to schedule your session.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-[#1A237E] text-white text-xs font-bold"
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
                      Fill out the details below and our consulting team will prepare a targeted initial review.
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
                        Phone Number
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
                      <option value="Business Development and Sales">Business Development and Sales</option>
                      <option value="Finance & Cost Control">Finance and Cost Control</option>
                      <option value="Human Resources & Organizational Development">Human Resources & Org Development</option>
                      <option value="Customer Care and Admin">Customer Care and Admin</option>
                      <option value="General Management & Strategy">General Management & Strategic Advisory</option>
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

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#ef9d4a] to-[#e6892e] text-white font-bold text-xs shadow-lg hover:brightness-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={15} /> Submit Diagnostic Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
