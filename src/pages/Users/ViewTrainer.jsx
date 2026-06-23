import {
  ArrowLeft,
  MoreVertical,
  ShieldCheck,
  Star,
  Users,
  MapPin,
  Clock,
  TrendingUp,
  MessageSquare,
  UserPlus,
  Megaphone,
  Zap,
  Home,
  BarChart2,
  Lightbulb,
  Bell,
  User,
  CalendarDays,
  Activity,
} from "lucide-react";

const specializations = [
  { label: "Weight Loss", pct: 65 },
  { label: "Muscle Gain", pct: 52 },
  { label: "Sports Training", pct: 24 },
];

const recentActivity = [
  {
    text: "Completed 12 sessions today",
    time: "2 hours ago",
    icon: CalendarDays,
  },
  { text: "Received 5-star review", time: "5 hours ago", icon: Star },
  { text: "New client assigned", time: "Yesterday", icon: UserPlus },
];

export default function ViewTrainer() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3 bg-white">
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <ArrowLeft size={16} color="#374151" />
            </button>
            <span className="text-sm font-bold text-gray-900">
              Trainer Profile
            </span>
            <MoreVertical size={18} color="#9CA3AF" />
          </div>

          <div className="px-4 pt-4">
            {/* Profile Hero */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/72?img=11"
                    alt="Amit Patel"
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-bold text-gray-900">
                    Amit Patel
                  </p>
                  <p className="text-xs text-gray-500">
                    Strength & Conditioning Coach
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck size={9} /> Verified Trainer
                    </span>
                    <span className="text-[10px] font-bold bg-violet-100 text-[#6C2BD9] px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Joined", val: "Jan 2020" },
                  { label: "Experience", val: "6 Years" },
                  { label: "Rating", val: "★ 4.9" },
                ].map(({ label, val }) => (
                  <div
                    key={label}
                    className="text-center bg-gray-50 rounded-xl p-2"
                  >
                    <p className="text-[9px] text-gray-400">{label}</p>
                    <p className="text-xs font-bold text-gray-800">{val}</p>
                  </div>
                ))}
              </div>

              {/* Gym */}
              <div className="flex items-center justify-between mt-3 bg-violet-50 rounded-xl p-2.5">
                <div>
                  <p className="text-[10px] text-gray-400">FitZone Elite</p>
                  <p className="text-[10px] font-semibold text-[#6C2BD9]">
                    FitZone Elite
                  </p>
                  <p className="text-[9px] text-gray-400">Platinum Partner</p>
                </div>
                <button className="text-[10px] font-bold text-[#6C2BD9]">
                  View Gym →
                </button>
              </div>
            </div>

            {/* Performance Snapshot */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-xs font-bold text-gray-800 mb-3">
                Performance Snapshot
              </p>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { label: "Active Clients", val: "412" },
                  { label: "Sessions", val: "820", sub: "This Month" },
                  { label: "Avg Rating", val: "4.9", star: true },
                ].map(({ label, val, sub, star }) => (
                  <div
                    key={label}
                    className="bg-gray-50 rounded-xl p-2.5 text-center"
                  >
                    <p className="text-base font-black text-gray-900">{val}</p>
                    <p className="text-[9px] text-gray-400">{label}</p>
                    {sub && <p className="text-[8px] text-gray-300">{sub}</p>}
                  </div>
                ))}
              </div>

              {/* Health bar */}
              <div
                className="rounded-xl p-3"
                style={{
                  background:
                    "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-white/70">
                    PERFORMANCE HEALTH
                  </span>
                  <Zap size={12} color="white" fill="white" />
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-2xl font-black text-white">94</span>
                  <span className="text-sm text-white/50 mb-0.5">/100</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5 mb-1">
                  <div
                    className="h-1.5 rounded-full bg-emerald-400"
                    style={{ width: "94%" }}
                  />
                </div>
                <p className="text-[10px] text-white/70">
                  ⚡ Status: High Performing
                </p>
              </div>

              <div className="flex items-center gap-1 mt-2">
                <TrendingUp size={12} color="#10B981" />
                <span className="text-[10px] text-emerald-600 font-semibold">
                  +18% Client Growth
                </span>
              </div>
            </div>

            {/* Client Specialization */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-xs font-bold text-gray-800 mb-3">
                Client Specialization
              </p>
              <div className="flex flex-col gap-2.5">
                {specializations.map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-gray-600">{label}</span>
                      <span className="text-[11px] font-bold text-gray-800">
                        {pct}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${pct}%`,
                          background:
                            "linear-gradient(90deg, #6C2BD9, #9B5CF0)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trainer Insights */}
            <div className="bg-violet-50 rounded-2xl p-4 mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <Zap size={13} color="#6C2BD9" fill="#6C2BD9" />
                <p className="text-xs font-bold text-gray-800">
                  Trainer Insights
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-white rounded-xl p-2.5">
                  <p className="text-[11px] text-gray-700 font-medium">
                    💪 Strength programs have highest demand among current
                    clients.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-2.5">
                  <p className="text-[11px] text-gray-700 font-medium">
                    🌙 Evening slots are preferred for 70% of their clients on
                    these days.
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-gray-800">
                  Recent Activity
                </p>
                <button className="text-[11px] text-[#6C2BD9] font-semibold">
                  View Full Activity →
                </button>
              </div>
              <div className="flex flex-col gap-2.5">
                {recentActivity.map(({ text, time, icon: Icon }) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <div className="w-7 h-7 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={13} color="#6C2BD9" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-800 font-medium">
                        {text}
                      </p>
                      <p className="text-[10px] text-gray-400">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Management Actions */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-xs font-bold text-gray-800 mb-3">
                Management Actions
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: "Message", icon: MessageSquare, danger: false },
                  { label: "Reassign", icon: UserPlus, danger: false },
                  { label: "Announce", icon: Megaphone, danger: false },
                  { label: "Feature", icon: Star, danger: false },
                  { label: "Add Note", icon: Bell, danger: false },
                  { label: "Deactivate", icon: Activity, danger: true },
                ].map(({ label, icon: Icon, danger }) => (
                  <button
                    key={label}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold ${
                      danger
                        ? "bg-red-50 text-red-600 border border-red-100"
                        : "bg-gray-50 text-gray-700 border border-gray-100"
                    }`}
                  >
                    <Icon size={13} color={danger ? "#DC2626" : "#6C2BD9"} />
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
