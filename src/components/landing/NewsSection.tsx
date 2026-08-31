import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

export function NewsSection() {
  const articles = [
    {
      title: "Cost Forensics for South Sudan Enterprises: Protecting Margins in Volatile Markets",
      category: "Finance & Cost Control",
      date: "Strategic Brief 2026",
      readTime: "4 min read",
      summary: "How SMEs in Juba can reduce expenditure by up to 20% through rigorous procurement controls and waste audits.",
    },
    {
      title: "Structuring Accountable Teams: Overcoming the Talent Retention Dilemma in Juba",
      category: "HR & Org Development",
      date: "Executive Advisory",
      readTime: "5 min read",
      summary: "Key principles for building clear job grading, KPI scorecards, and performance-based incentives in South Sudan.",
    },
    {
      title: "Unlocking Regional Trade Corridors: Market Expansion Strategies for Local MSMEs",
      category: "Business Development",
      date: "Market Intelligence",
      readTime: "6 min read",
      summary: "Analyzing export readiness, cross-border value chains, and competitor differentiation in East Africa.",
    },
  ];

  return (
    <section className="py-20 bg-[#FDF5EC]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-[#ef9d4a] text-xs font-extrabold uppercase tracking-widest mb-3">
              Knowledge & Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A237E] tracking-tight">
              South Sudan Business Performance Briefs
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Practical guides, diagnostics, and management frameworks from IPI consultants.
            </p>
          </div>

          <Link
            to="/knowledge-hub"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1A237E] text-[#1A237E] font-bold text-xs hover:bg-[#1A237E] hover:text-white transition-all"
          >
            Access All Toolkits <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-orange-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span className="font-bold text-[#ef9d4a] uppercase text-[10px] tracking-wider">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock size={12} /> {item.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#1A237E] mb-3 leading-snug hover:text-[#ef9d4a] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400 font-medium">{item.date}</span>
                <Link
                  to="/knowledge-hub"
                  className="text-xs font-bold text-[#ef9d4a] hover:text-[#e6892e] inline-flex items-center gap-1"
                >
                  Read Brief <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
