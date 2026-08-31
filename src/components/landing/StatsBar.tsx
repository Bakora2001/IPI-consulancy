import { TrendingUp, Users, Award, ShieldCheck } from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      value: "2026–2030",
      label: "Strategic Horizon",
      sub: "Five-year roadmap",
      icon: TrendingUp,
    },
    {
      value: "5-Stage",
      label: "Execution Model",
      sub: "Diagnose to Measure",
      icon: Award,
    },
    {
      value: "5 Portfolios",
      label: "Service Pillars",
      sub: "Growth, HR, Finance & Admin",
      icon: Users,
    },
    {
      value: "Juba Hub",
      label: "Build World Centre",
      sub: "Nyakuron West, Juba",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-[#1A237E] border-y border-[#ef9d4a]/30 py-8 px-6 sm:px-8 text-white relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ef9d4a]/20 text-[#ef9d4a] flex items-center justify-center shrink-0">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs font-bold text-[#ef9d4a]">{stat.label}</p>
                <p className="text-[10px] text-white/60">{stat.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
