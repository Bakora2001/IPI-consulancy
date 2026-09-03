import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Eye, FileText, Database, CheckCircle2, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "../lib/constants";

export function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-[#0e1647] via-[#1A237E] to-[#121858] text-white py-20 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#ef9d4a]/50 text-xs font-bold text-[#ef9d4a] uppercase tracking-widest">
              <ShieldCheck size={16} /> Confidentiality & Trust
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Data Privacy & Client Confidentiality Policy
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              How IPI Consultancy (Ideal Professional Investment Ltd) protects your organization's sensitive business information, operational data, and corporate communications.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 sm:px-8 bg-white">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Core Privacy Promise */}
            <div className="p-8 rounded-3xl bg-[#FDF5EC] border border-orange-200 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#1A237E] text-[#ef9d4a] flex items-center justify-center font-bold">
                  <Lock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#1A237E]">Our Confidentiality Commitment</h3>
                  <p className="text-xs text-gray-600">Strict Non-Disclosure & Professional Integrity</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                At <strong>IPI Consultancy</strong> (registered as <em>Ideal Professional Investment Ltd</em>), we understand that management consulting, financial cost-control audits, and human resource structuring require access to your most critical corporate data. We hold ourselves to international standards of client confidentiality, non-disclosure, and strict data protection.
              </p>
            </div>

            {/* Privacy Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#ef9d4a] flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <h4 className="font-black text-[#1A237E] text-base">Standard Non-Disclosure (NDA)</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Before commencing any diagnostic or advisory engagement, IPI executes a legally binding Non-Disclosure Agreement safeguarding all financial statements, organizational charts, payroll structures, and commercial plans.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1A237E] flex items-center justify-center">
                  <Database size={20} />
                </div>
                <h4 className="font-black text-[#1A237E] text-base">Secure Data Storage & Handling</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  All client files, audit spreadsheets, and proprietary toolkits are stored on encrypted corporate systems with strict role-based access. Access is strictly limited to lead consultants assigned to your project.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                  <Eye size={20} />
                </div>
                <h4 className="font-black text-[#1A237E] text-base">Zero Third-Party Sharing</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We never monetize, sell, lease, or share client data, contact lists, or internal metrics with any third-party advertisers, vendors, or external competitors under any circumstances.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-black text-[#1A237E] text-base">Data Retention & Deletion</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Clients maintain full ownership of all provided artifacts and data. Upon completion of an engagement and satisfaction of regulatory obligations, clients may request complete expungement or return of their records.
                </p>
              </div>
            </div>

            {/* Detailed Policies */}
            <div className="space-y-6 pt-4 text-sm text-gray-700 leading-relaxed">
              <h3 className="text-2xl font-black text-[#1A237E]">Information We Collect & Why</h3>
              <p>
                When you interact with IPI Consultancy through our website inquiry forms, consultation requests, or diagnostic questionnaires, we collect:
              </p>
              <ul className="space-y-2">
                {[
                  "Contact Details: Full name, official corporate email, phone number, and organization name.",
                  "Operational Needs: Service focus areas (Business Development, Finance & Cost Control, HR, Customer Care, Strategy) and brief problem descriptions.",
                  "Diagnostic Records: Quantitative and qualitative organizational metrics shared voluntarily during diagnostic review stages.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#ef9d4a] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-black text-[#1A237E] pt-6">How to Contact Our Data Officer</h3>
              <p>
                If you have questions regarding our data privacy protocols, wish to review the information we hold, or want to sign a mutual NDA before initiating discussions, please contact our administrative team:
              </p>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#ef9d4a]" />
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase">Email Inquiries</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs font-bold text-[#1A237E] hover:text-[#ef9d4a]">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#ef9d4a]" />
                  <div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase">Direct Office Line</p>
                    <a href={`tel:${COMPANY_INFO.phoneCall}`} className="text-xs font-bold text-[#1A237E] hover:text-[#ef9d4a]">
                      {COMPANY_INFO.phoneCall}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Back Button */}
            <div className="pt-8 border-t border-gray-200 flex justify-between items-center">
              <Link
                to="/"
                className="text-xs font-bold text-[#1A237E] hover:text-[#ef9d4a] transition-colors"
              >
                ← Return to Home
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full bg-[#ef9d4a] text-white font-bold text-xs shadow-md hover:brightness-105 transition-all"
              >
                Request Confidential Consultation
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
