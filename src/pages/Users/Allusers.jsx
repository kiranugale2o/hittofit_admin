import {
  LayoutGrid,
  Plus,
  Sparkles,
  UserPlus,
  Repeat,
  Dumbbell,
  Store,
  Home,
  ShieldCheck,
  TrendingUp,
  Gavel,
  User,
  ChevronRight,
} from "lucide-react";

const tabs = ["Members", "Gyms", "Trainers", "Stores"];

const recentActivity = [
  {
    name: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/72?img=12",
    status: "Active 10 mins ago",
    badge: "Premium",
    badgeColor: "bg-violet-100 text-[#6C2BD9]",
  },
  {
    name: "Priya Singh",
    avatar: "https://i.pravatar.cc/72?img=47",
    status: "Active 2 hours ago",
    badge: "Standard",
    badgeColor: "bg-violet-100 text-[#6C2BD9]",
  },
];

const quickActions = [
  { icon: UserPlus, label: "Add Member" },
  { icon: Repeat, label: "Add Gym" },
  { icon: Dumbbell, label: "Add Trainer" },
  { icon: Store, label: "Add Store" },
];

export default function AllUsers() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3">
            <div className="flex items-center gap-2">
              <LayoutGrid size={18} color="#6C2BD9" />
              <span className="text-base font-bold text-[#6C2BD9]">
                Hittofit
              </span>
            </div>
            <button className="flex items-center gap-1 bg-[#6C2BD9] text-white text-xs font-semibold px-3.5 py-2 rounded-full">
              <Plus size={13} /> Add
            </button>
          </div>

          <div className="px-4 mt-1">
            <p className="text-sm font-bold text-gray-900">People Management</p>
            <p className="text-xs text-gray-500 mb-4">
              Manage every part of the Hittofit ecosystem.
            </p>

            {/* Total Ecosystem */}
            <div
              className="rounded-2xl p-4 mb-4"
              style={{
                background: "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-white/60 tracking-widest">
                  TOTAL ECOSYSTEM
                </span>
                <div className="w-7 h-7 bg-white/15 rounded-lg flex items-center justify-center">
                  <Sparkles size={13} color="white" />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-bold text-white">13,344</span>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-900/30 px-1.5 py-0.5 rounded-full">
                  +420
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ["Members", "12,400"],
                  ["Gym Owners", "284"],
                  ["Trainers", "540"],
                  ["Store Owners", "120"],
                ].map(([label, val]) => (
                  <div key={label} className="bg-white/10 rounded-xl p-2.5">
                    <p className="text-[10px] text-white/60">{label}</p>
                    <p className="text-sm font-bold text-white">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-5 overflow-x-auto -mx-4 px-4">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap ${
                    i === 0
                      ? "bg-[#6C2BD9] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-sm font-bold text-gray-900">Recent Activity</p>
              <span className="text-xs font-semibold text-[#6C2BD9]">
                View All →
              </span>
            </div>
            <div className="flex flex-col gap-2.5 mb-5">
              {recentActivity.map(
                ({ name, avatar, status, badge, badgeColor }) => (
                  <div
                    key={name}
                    className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm"
                  >
                    <img
                      src={avatar}
                      alt={name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900">{name}</p>
                      <p className="text-[11px] text-gray-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {status}
                      </p>
                    </div>
                    <span
                      className={`text-[10px] font-semibold px-2 py-1 rounded-full ${badgeColor}`}
                    >
                      {badge}
                    </span>
                    <ChevronRight size={15} color="#D1D5DB" />
                  </div>
                ),
              )}
            </div>

            {/* Quick Actions */}
            <p className="text-sm font-bold text-gray-900 mb-2.5">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {quickActions.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2.5 shadow-sm"
                >
                  <div className="w-9 h-9 bg-violet-100 rounded-full flex items-center justify-center">
                    <Icon size={16} color="#6C2BD9" />
                  </div>
                  <span className="text-xs font-semibold text-gray-800">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
