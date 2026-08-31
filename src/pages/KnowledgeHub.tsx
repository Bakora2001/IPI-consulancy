import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  Download,
  Search,
} from "lucide-react";

export function KnowledgeHub() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Business Development & Growth",
    "Finance & Cost Control",
    "HR & Organizational Systems",
    "Strategic Planning",
    "SME Incubation & MSMEs",
  ];

  const resources = [
    {
      title: "South Sudan SME Cost Reduction & Forensic Expenditure Audit Checklist",
      category: "Finance & Cost Control",
      type: "TOOLKIT",
      format: "PDF & Excel Template",
      downloads: "1.4K",
      desc: "A step-by-step diagnostic toolkit for eliminating non-productive operational overheads in commercial enterprises in Juba.",
    },
    {
      title: "IPI 5-Stage Organizational Diagnostic Framework: Self-Assessment Guide",
      category: "Strategic Planning",
      type: "GUIDE",
      format: "PDF Guide",
      downloads: "2.1K",
      desc: "Comprehensive rubric for evaluating market positioning, workflow bottlenecks, and workforce productivity.",
    },
    {
      title: "Commercial Sales Pipeline & Value Proposition Playbook for East Africa Corridors",
      category: "Business Development & Growth",
      type: "PLAYBOOK",
      format: "PDF & Slide Kit",
      downloads: "1.8K",
      desc: "Practical strategies for structuring sales teams, customer acquisition funnels, and contract retention in South Sudan.",
    },
    {
      title: "Standardized HR Policies, Job Descriptions & KPI Scorecard Templates",
      category: "HR & Organizational Systems",
      type: "TEMPLATE",
      format: "Word & Excel Kit",
      downloads: "1.9K",
      desc: "Modular templates for job grading, performance appraisals, employee handbooks, and onboarding protocols.",
    },
    {
      title: "Development Programme Implementation: Local SME Capacity Building Guide",
      category: "SME Incubation & MSMEs",
      type: "REPORT",
      format: "PDF Report",
      downloads: "950",
      desc: "Framework for international development agencies (UNDP, GIZ, World Bank) partnering with local enterprises.",
    },
    {
      title: "Customer Care Standards & Front-Desk Service Excellence Manual",
      category: "Business Development & Growth",
      type: "MANUAL",
      format: "PDF Manual",
      downloads: "820",
      desc: "Standard operating procedures for customer service recovery, front-desk etiquette, and client feedback loops.",
    },
  ];

  const filtered = resources.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.desc.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "All" || r.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <section className="bg-gradient-to-br from-[#0e1647] via-[#1A237E] to-[#121858] text-white py-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-[#ef9d4a]/50 text-xs font-bold text-[#ef9d4a] uppercase tracking-widest">
              Knowledge & Capability Platform
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              IPI Business Knowledge Hub
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Practical toolkits, management frameworks, templates, and diagnostic guides for South Sudan business owners, executives, and development practitioners.
            </p>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="py-8 bg-[#FDF5EC] border-b border-orange-200 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-[#1A237E] text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search toolkits, guides, templates..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#ef9d4a] text-gray-800"
              />
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 px-6 sm:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((res, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-orange-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#FDF5EC] text-[#ef9d4a]">
                        {res.type}
                      </span>
                      <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1">
                        <Download size={13} /> {res.downloads}
                      </span>
                    </div>

                    <p className="text-[11px] font-bold text-[#1A237E] mb-1">
                      {res.category}
                    </p>

                    <h3 className="text-base font-black text-[#1A237E] mb-3 leading-snug">
                      {res.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {res.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500 font-semibold">{res.format}</span>
                    <button
                      onClick={() => alert(`Downloading "${res.title}"...`)}
                      className="px-4 py-1.5 rounded-full bg-[#1A237E] hover:bg-[#ef9d4a] text-white font-bold text-xs transition-colors flex items-center gap-1"
                    >
                      <Download size={12} /> Download
                    </button>
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
