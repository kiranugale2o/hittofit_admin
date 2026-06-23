import {
  LayoutGrid,
  Plus,
  TrendingUp,
  Users,
  Star,
  ChevronRight,
  Home,
  BarChart2,
  Lightbulb,
  Bell,
  User,
  ArrowLeft,
  MoreVertical,
  Dumbbell,
  Zap,
  CalendarDays,
  ArrowUpRight,
  Megaphone,
  UserPlus,
  Settings,
  FileText,
} from "lucide-react";

const topTrainers = [
  {
    name: "Amit Patel",
    sub: "412 Active Clients",
    rating: 4.9,
    avatar: "https://i.pravatar.cc/72?img=11",
  },
  {
    name: "Sarah Chen",
    sub: "281 Active Clients",
    rating: 4.8,
    avatar: "https://i.pravatar.cc/72?img=45",
  },
];

const insights = [
  {
    title: "Add more evening batches",
    desc: "Evening slots are booked at 92%. Opening 2 more batches could increase revenue by 18%.",
    label: "Suggested Action →",
  },
  {
    title: "Premium memberships outperform standard",
    desc: "Upsell standard members to Elite for better long-term retention.",
    label: "Suggested Action →",
  },
];

const quickActions = [
  { label: "Promote Gym", icon: Megaphone },
  { label: "Recruit Trainers", icon: UserPlus },
  { label: "Optimize Plans", icon: Settings },
  { label: "Export Report", icon: FileText },
];

export default function ViewGym() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 pt-2 pb-2">
            <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
              <ArrowLeft size={16} color="#374151" />
            </button>
            <span className="text-sm font-bold text-gray-900">
              Gym Performance
            </span>
            <div className="flex items-center gap-1 text-[10px] text-gray-400">
              <span>Last 30 Days</span>
              <MoreVertical size={14} color="#9CA3AF" />
            </div>
          </div>

          <div className="px-4">
            {/* Business Health Score */}
            <div
              className="rounded-2xl p-4 mb-4"
              style={{
                background: "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-white/60 tracking-widest">
                  BUSINESS HEALTH SCORE
                </span>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-900/30 px-2 py-0.5 rounded-full">
                  Strong Growth
                </span>
              </div>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-4xl font-black text-white">92</span>
                <span className="text-base text-white/50 mb-1">/100</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Active Members", val: "1,240", change: "+12%" },
                  { label: "Growth Rate", val: "+12%", change: null },
                  { label: "Monthly Revenue", val: "₹42.5k", change: null },
                ].map(({ label, val, change }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-2">
                    <p className="text-[9px] text-white/50 leading-tight mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-bold text-white">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Membership Growth */}
            <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-gray-800">
                  Membership Growth
                </p>
              </div>
              <div className="flex gap-3 mb-3">
                {[
                  {
                    label: "Membership Growth",
                    val: "+18%",
                    color: "text-emerald-600",
                  },
                  {
                    label: "Renewal Rate",
                    val: "89% Rate",
                    color: "text-violet-600",
                  },
                ].map(({ label, val, color }) => (
                  <div
                    key={label}
                    className="flex-1 bg-gray-50 rounded-xl p-2.5"
                  >
                    <p className="text-[10px] text-gray-400">{label}</p>
                    <p className={`text-sm font-bold ${color}`}>{val}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                <Users size={12} />
                <span className="font-semibold text-gray-700">
                  Active Members
                </span>
                <span className="ml-auto font-bold text-gray-900">
                  1,240 Total
                </span>
              </div>
              {/* Bar chart placeholder */}
              <div className="flex items-end gap-1 mt-3 h-12">
                {[40, 55, 45, 70, 60, 80, 75, 90, 65, 85, 70, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? "#6C2BD9" : "#E9D5FF",
                      }}
                    />
                  ),
                )}
              </div>
            </div>

            {/* Top Trainers */}
            <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-gray-800">Top Trainers</p>
                <button className="text-[11px] text-[#6C2BD9] font-semibold">
                  View All →
                </button>
              </div>
              <div className="flex flex-col gap-2.5">
                {topTrainers.map(({ name, sub, rating, avatar }) => (
                  <div key={name} className="flex items-center gap-3">
                    <img
                      src={avatar}
                      alt={name}
                      className="w-10 h-10 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-800">{name}</p>
                      <p className="text-[10px] text-gray-400">{sub}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <Star size={11} fill="#FBBF24" color="#FBBF24" />
                      <span className="text-xs font-bold text-gray-700">
                        {rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Peak Activity */}
            <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
              <p className="text-xs font-bold text-gray-800 mb-3">
                Peak Activity
              </p>
              <div className="flex gap-3">
                <div className="flex-1 bg-violet-50 rounded-xl p-3 text-center">
                  <p className="text-[10px] text-gray-400">Peak Hours</p>
                  <p className="text-sm font-bold text-[#6C2BD9]">6PM – 9PM</p>
                  {/* mini bar */}
                  <div className="flex items-end gap-0.5 mt-2 h-8 justify-center">
                    {[30, 50, 70, 90, 100, 85, 40].map((h, i) => (
                      <div
                        key={i}
                        className="w-2 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 4 ? "#6C2BD9" : "#DDD6FE",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex-1 bg-violet-50 rounded-xl p-3 text-center">
                  <p className="text-[10px] text-gray-400">Busiest Days</p>
                  <p className="text-sm font-bold text-[#6C2BD9]">Mon & Wed</p>
                  <div className="flex gap-1 mt-2 justify-center flex-wrap">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          background: [0, 2].includes(i)
                            ? "#6C2BD9"
                            : "#EDE9FE",
                          color: [0, 2].includes(i) ? "white" : "#7C3AED",
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Business Insights */}
            <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
              <div className="flex items-center gap-1.5 mb-3">
                <Zap size={13} color="#6C2BD9" fill="#6C2BD9" />
                <p className="text-xs font-bold text-gray-800">
                  AI Business Insights
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {insights.map(({ title, desc, label }) => (
                  <div key={title} className="bg-violet-50 rounded-xl p-3">
                    <p className="text-xs font-bold text-gray-800 mb-1">
                      {title}
                    </p>
                    <p className="text-[10px] text-gray-500 leading-relaxed mb-2">
                      {desc}
                    </p>
                    <button className="text-[10px] font-bold text-[#6C2BD9]">
                      {label}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
              <p className="text-xs font-bold text-gray-800 mb-3">
                Quick Actions
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    className="flex flex-col items-center justify-center gap-2 bg-violet-50 rounded-xl py-4 text-[11px] font-semibold text-[#6C2BD9]"
                  >
                    <Icon size={18} color="#6C2BD9" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
