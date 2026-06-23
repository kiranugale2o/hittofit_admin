import {
  ArrowLeft,
  BarChart2,
  Zap,
  TrendingUp,
  Sparkles,
  Clock,
  Users,
  History,
  CalendarClock,
  Copy,
  Edit3,
  Send,
  Mail,
  Eye,
  Hand,
  Home,
  ShieldCheck,
  Gavel,
  User,
} from "lucide-react";

const audienceSegments = [
  { label: "Members", pct: 82, color: "#4500B4" },
  { label: "Gym Owners", pct: 65, color: "#8B5CF6" },
  { label: "Trainers", pct: 94, color: "#4500B4" },
  { label: "Store Partners", pct: 48, color: "#A78BFA" },
];

const funnel = [
  { icon: Send, label: "Delivered", val: "12,400", solid: true, chevron: true },
  { icon: Mail, label: "Opened", val: "8,700", solid: false, chevron: true },
  {
    icon: Eye,
    label: "Viewed Content",
    val: "4,500",
    solid: false,
    chevron: true,
  },
  {
    icon: Hand,
    label: "Interacted",
    val: "3,100",
    solid: true,
    chevron: false,
  },
];

const quickActions = [
  { icon: History, label: "Resend" },
  { icon: CalendarClock, label: "Schedule" },
  { icon: Copy, label: "Duplicate" },
  { icon: Edit3, label: "Edit" },
];

export default function NotificationAnalyticsScreen() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3">
            <div className="flex items-center gap-3">
              <button>
                <ArrowLeft size={18} color="#374151" />
              </button>
              <div>
                <p className="text-base font-bold text-gray-900 leading-tight">
                  Notification Analytics
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Challenge Reminder • Today 10:00 AM
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full ring-2 ring-[#6C2BD9] overflow-hidden flex-shrink-0">
              <img
                src="https://i.pravatar.cc/72?img=12"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="px-4 mt-2">
            {/* Stats gradient card */}
            <div
              className="rounded-2xl p-4 mb-4 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
              }}
            >
              <span className="inline-block text-[11px] font-bold text-white bg-white/20 px-3 py-1.5 rounded-full mb-4">
                Campaign Health: Optimal
              </span>
              <BarChart2
                size={56}
                color="rgba(255,255,255,0.15)"
                className="absolute top-4 right-4"
              />
              <div className="grid grid-cols-2 gap-y-4">
                {[
                  ["Delivered", "12,400"],
                  ["Opened", "8,700"],
                  ["Interacted", "3,100"],
                  ["Engagement", "25%"],
                ].map(([label, val], i) => (
                  <div
                    key={label}
                    className={`${
                      i % 2 === 1 ? "border-l border-white/20 pl-4" : ""
                    } ${i >= 2 ? "border-t border-white/20 pt-3" : ""}`}
                  >
                    <p className="text-xs text-white/70">{label}</p>
                    <p className="text-xl font-bold text-white">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rate cards */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <div className="bg-white rounded-2xl p-3.5 shadow-sm flex items-center gap-2.5">
                <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap size={15} color="#16A34A" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500">Delivery Rate</p>
                  <p className="text-sm font-bold text-gray-900">98%</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-3.5 shadow-sm flex items-center gap-2.5">
                <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={15} color="#2563EB" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500">Open Rate</p>
                  <p className="text-sm font-bold text-gray-900">+12% vs</p>
                </div>
              </div>
            </div>

            {/* Audience Segment Engagement */}
            <div className="bg-white rounded-2xl p-4 mb-5 shadow-sm">
              <p className="text-sm font-bold text-gray-900 mb-3">
                Audience Segment Engagement
              </p>
              <div className="flex flex-col gap-3.5">
                {audienceSegments.map(({ label, pct, color }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-900">{label}</span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#6C2BD9" }}
                      >
                        {pct}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full">
                      <div
                        className="h-1.5 rounded-full"
                        style={{ width: `${pct}%`, background: color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Funnel */}
            <div className="bg-white rounded-2xl p-4 mb-5 shadow-sm">
              <p className="text-sm font-bold text-gray-900 mb-3">
                Engagement Funnel
              </p>
              <div className="flex flex-col gap-3.5">
                {funnel.map(({ icon: Icon, label, val, solid, chevron }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                        solid ? "bg-[#6C2BD9]" : "bg-violet-100"
                      }`}
                    >
                      <Icon size={15} color={solid ? "white" : "#6C2BD9"} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[11px] text-gray-500">{label}</p>
                      <p className="text-sm font-bold text-gray-900">{val}</p>
                    </div>
                    {chevron && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="#9CA3AF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Coach Insights */}
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles size={14} color="#6C2BD9" />
              <p className="text-sm font-bold text-gray-900">Coach Insights</p>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <div className="bg-violet-100 rounded-2xl p-3.5">
                <Clock size={16} color="#6C2BD9" className="mb-2" />
                <p className="text-xs text-gray-600 leading-snug mb-2">
                  Notifications sent between 9–11 AM perform best for this
                  audience segment.
                </p>
                <button className="text-xs font-bold text-[#6C2BD9] flex items-center gap-1">
                  Optimize Schedule →
                </button>
              </div>
              <div className="bg-violet-100 rounded-2xl p-3.5">
                <Users size={16} color="#6C2BD9" className="mb-2" />
                <p className="text-xs text-gray-600 leading-snug mb-2">
                  Trainers engage 22% more than the average. Consider creating a
                  trainer-exclusive challenge.
                </p>
                <button className="text-xs font-bold text-[#6C2BD9] flex items-center gap-1">
                  Target Segment →
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <p className="text-sm font-bold text-gray-900 mb-3">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {quickActions.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="bg-white rounded-2xl p-4 flex flex-col items-center gap-2.5 shadow-sm"
                >
                  <Icon size={18} color="#6C2BD9" />
                  <span className="text-xs font-bold text-gray-900">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 py-2.5 flex items-center justify-between">
          {[
            { icon: Home, label: "Home" },
            { icon: ShieldCheck, label: "Approvals" },
            { icon: TrendingUp, label: "Insights" },
            { icon: Gavel, label: "Moderation" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 flex-1 cursor-pointer"
            >
              <Icon size={18} color="#374151" />
              <span className="text-[9px] font-bold text-gray-700">
                {label}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#6C2BD9] rounded-full px-3.5 py-1.5 flex flex-col items-center gap-1">
              <User size={16} color="white" />
              <span className="text-[9px] font-bold text-white">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
