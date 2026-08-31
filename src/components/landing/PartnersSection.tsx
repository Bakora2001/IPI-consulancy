import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Search, ArrowUpRight } from "lucide-react";
import { HIGH_PRIORITY_ORGS } from "../../lib/constants";

export function PartnersSection() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "UN Agency", "Development Bank", "Bilateral Agency", "Regional Trade", "International NGO"];

  const filteredOrgs = HIGH_PRIORITY_ORGS.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(search.toLowerCase()) ||
      org.whyEngage.toLowerCase().includes(search.toLowerCase()) ||
      org.whatIPIOtters.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || org.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-[#ef9d4a] text-xs font-extrabold uppercase tracking-widest mb-3">
              Strategic Target Sectors & Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A237E] tracking-tight">
              High-Priority Organizations in South Sudan
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              We partner with international development agencies, financial institutions, and NGOs to translate private-sector development initiatives into measurable operational impact on the ground.
            </p>
          </div>

          <Link
            to="/partners"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1A237E] text-[#1A237E] font-bold text-xs hover:bg-[#1A237E] hover:text-white transition-all shrink-0"
          >
            View Full Partner Framework <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="bg-[#FDF5EC] rounded-2xl p-4 sm:p-5 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#1A237E] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search partner or offer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#ef9d4a] text-gray-800"
            />
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrgs.map((org) => (
            <div
              key={org.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-[#1A237E]">
                    {org.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#ef9d4a] group-hover:scale-110 transition-transform">
                    <Building2 size={16} />
                  </div>
                </div>

                <h3 className="text-lg font-black text-[#1A237E] mb-3 group-hover:text-[#ef9d4a] transition-colors">
                  {org.name}
                </h3>

                {/* Why Engage */}
                <div className="mb-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Why Engage Them
                  </p>
                  <p className="text-xs text-gray-700 leading-relaxed font-medium">
                    {org.whyEngage}
                  </p>
                </div>

                {/* What IPI Offers */}
                <div className="p-3 rounded-xl bg-[#FDF5EC] border border-orange-200/50">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#ef9d4a] mb-1">
                    What IPI Offers
                  </p>
                  <p className="text-xs text-[#1A237E] font-semibold leading-relaxed">
                    {org.whatIPIOtters}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-gray-400 text-[11px]">Juba & Field Operations</span>
                <Link
                  to="/contact"
                  className="font-bold text-[#ef9d4a] hover:text-[#e6892e] inline-flex items-center gap-1"
                >
                  Propose Collaboration <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
