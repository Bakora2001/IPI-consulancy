import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { Search, Building2, ArrowUpRight } from "lucide-react";
import { HIGH_PRIORITY_ORGS } from "../lib/constants";

export function PartnersPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = [
    "All",
    "UN Agency",
    "Development Bank",
    "Bilateral Agency",
    "Regional Trade",
    "International NGO",
  ];

  const filtered = HIGH_PRIORITY_ORGS.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(search.toLowerCase()) ||
      org.whyEngage.toLowerCase().includes(search.toLowerCase()) ||
      org.whatIPIOtters.toLowerCase().includes(search.toLowerCase());
    const matchesCat = categoryFilter === "All" || org.category === categoryFilter;
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
              Development Ecosystem & Target Sectors
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              High-Priority Organizations in South Sudan
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Mapping our strategic value propositions, research capabilities, and consulting services to leading international development actors in Juba.
            </p>
          </div>
        </section>

        {/* Filter / Search Bar */}
        <section className="py-8 bg-[#FDF5EC] border-b border-orange-200 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategoryFilter(c)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    categoryFilter === c
                      ? "bg-[#1A237E] text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search organization or offering..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-white rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[#ef9d4a] text-gray-800"
              />
            </div>
          </div>
        </section>

        {/* Comprehensive Table View */}
        <section className="py-16 px-6 sm:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="hidden lg:block overflow-hidden rounded-3xl border border-orange-200 shadow-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1A237E] text-white text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-4 px-6">Organization</th>
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Why Engage Them</th>
                    <th className="py-4 px-6">What IPI Could Offer</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {filtered.map((org, i) => (
                    <tr
                      key={org.id}
                      className={i % 2 === 0 ? "bg-white hover:bg-orange-50/40" : "bg-[#FDF5EC]/30 hover:bg-orange-50/40"}
                    >
                      <td className="py-4 px-6 font-black text-sm text-[#1A237E]">
                        {org.name}
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#1A237E] font-bold text-[10px]">
                          {org.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-700 font-medium max-w-xs leading-relaxed">
                        {org.whyEngage}
                      </td>
                      <td className="py-4 px-6 text-gray-900 font-semibold max-w-xs leading-relaxed">
                        <div className="p-2 rounded-lg bg-orange-50/80 border border-orange-200/40 text-[#1A237E]">
                          {org.whatIPIOtters}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1 font-bold text-[#ef9d4a] hover:text-[#e6892e]"
                        >
                          Connect <ArrowUpRight size={13} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile / Tablet Cards View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
              {filtered.map((org) => (
                <div
                  key={org.id}
                  className="bg-white rounded-2xl p-6 border border-orange-100 shadow-md space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#1A237E]">
                      {org.category}
                    </span>
                    <Building2 size={18} className="text-[#ef9d4a]" />
                  </div>

                  <h3 className="text-lg font-black text-[#1A237E]">{org.name}</h3>

                  <div>
                    <p className="text-[10px] font-bold uppercase text-gray-400">Why Engage Them</p>
                    <p className="text-xs text-gray-700 mt-0.5">{org.whyEngage}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FDF5EC] border border-orange-200">
                    <p className="text-[10px] font-bold uppercase text-[#ef9d4a]">What IPI Offers</p>
                    <p className="text-xs font-semibold text-[#1A237E] mt-0.5">{org.whatIPIOtters}</p>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-[#ef9d4a] flex items-center gap-1"
                    >
                      Connect <ArrowUpRight size={13} />
                    </Link>
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
