import {
  ChevronLeft,
  Settings,
  Calendar,
  Eye,
  Mail,
  Users,
  Check,
  Sparkles,
  UserPlus,
  BellRing,
  CalendarClock,
  Copy,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export default function ViewAnalysisScreen() {
  const audienceBehavior = [
    { label: "Members", pct: 65 },
    { label: "Trainers", pct: 20 },
    { label: "Gym Owners", pct: 10 },
    { label: "Store Partners", pct: 5 },
  ];

  const journey = [
    { icon: Eye, label: "Viewed", val: "18.2K", pct: "100%", done: false },
    { icon: Mail, label: "Opened", val: "7.8K", pct: "42%", done: false },
    {
      icon: Users,
      label: "Participated",
      val: "3.4K",
      pct: "18%",
      done: false,
    },
    { icon: Check, label: "Completed", val: "1.1K", pct: "6%", done: true },
  ];

  const growth = [
    {
      icon: UserPlus,
      label: "Promote to Trainers",
      sub: "Engage top 50 influencers",
    },
    {
      icon: BellRing,
      label: "Send Reminder",
      sub: "Target inactive participants",
    },
    {
      icon: CalendarClock,
      label: "Extend Campaign",
      sub: "Add 7 days of challenges",
    },
    { icon: Copy, label: "Duplicate", sub: "Use template for Fall Season" },
  ];

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-8">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3">
            <button className="flex items-center gap-1.5 text-gray-600">
              <ChevronLeft size={20} color="#374151" />
              <span className="text-base font-bold text-[#6C2BD9]">
                Campaign Analytics
              </span>
            </button>
            <Settings size={18} color="#374151" />
          </div>

          <div className="px-4 mt-2">
            {/* Campaign Label */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] font-semibold text-gray-400 tracking-widest">
                  CURRENT CAMPAIGN
                </p>
                <p className="text-sm font-bold text-gray-900">
                  SUMMER FITNESS CHALLENGE
                </p>
              </div>
              <button className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1.5">
                <Calendar size={11} color="#6B7280" />
                <span className="text-[11px] text-gray-600 font-medium">
                  Last 30 Days
                </span>
              </button>
            </div>

            {/* Total Reach Card */}
            <div
              className="rounded-2xl p-4 mb-5"
              style={{
                background: "linear-gradient(135deg, #6C2BD9 0%, #8B5CF6 100%)",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-white/70">Total Campaign Reach</p>
                  <p className="text-2xl font-bold text-white">18.2K</p>
                </div>
                <span className="text-[11px] font-bold text-white bg-white/20 px-2.5 py-1 rounded-full flex items-center gap-0.5">
                  <ArrowUpRight size={11} /> +12% vs goal
                </span>
              </div>
              <div className="grid grid-cols-3 pt-3 border-t border-white/20">
                {[
                  { label: "Participants", val: "3.4K" },
                  { label: "Engagement", val: "24%" },
                  { label: "Conversion", val: "12%" },
                ].map(({ label, val }) => (
                  <div key={label}>
                    <p className="text-[11px] text-white/70">{label}</p>
                    <p className="text-sm font-bold text-white">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Outcomes */}
            <p className="text-sm font-bold text-gray-900 mb-2.5">
              Key Outcomes
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {[
                { emoji: "🔥", val: "1,200", label: "New Signups" },
                { emoji: "⚡", val: "31%", label: "Trainer Referrals" },
                {
                  emoji: "📈",
                  val: "Weekend Traffic",
                  label: "Strongest",
                  reversed: true,
                },
                { emoji: "⭐", val: "4.8", label: "Challenge Rating" },
              ].map(({ emoji, val, label, reversed }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-3.5 shadow-sm"
                >
                  <span className="text-lg">{emoji}</span>
                  {reversed ? (
                    <>
                      <p className="text-xs text-gray-500 mt-2">{label}</p>
                      <p className="text-sm font-bold text-gray-900">{val}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-base font-bold text-gray-900 mt-2">
                        {val}
                      </p>
                      <p className="text-xs text-gray-500">{label}</p>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Audience Behavior */}
            <div className="bg-white rounded-2xl p-4 mb-5 shadow-sm">
              <p className="text-sm font-bold text-gray-900 mb-3">
                Audience Behavior
              </p>
              <div className="flex flex-col gap-3">
                {audienceBehavior.map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-600">{label}</span>
                      <span className="text-xs font-bold text-gray-900">
                        {pct}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-violet-100 rounded-full">
                      <div
                        className="h-1.5 rounded-full bg-[#6C2BD9]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Journey */}
            <div className="bg-white rounded-2xl p-4 mb-5 shadow-sm">
              <p className="text-sm font-bold text-gray-900 mb-3">
                Engagement Journey
              </p>
              <div className="relative">
                <div className="absolute left-[15px] top-7 bottom-7 w-px bg-gray-200" />
                {journey.map(({ icon: Icon, label, val, pct, done }, i) => (
                  <div
                    key={label}
                    className={`flex items-center gap-3 ${
                      i !== journey.length - 1 ? "mb-5" : ""
                    } relative`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                        done ? "bg-[#6C2BD9]" : "bg-violet-100"
                      }`}
                    >
                      <Icon size={14} color={done ? "white" : "#6C2BD9"} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">{label}</p>
                      <p className="text-sm font-bold text-gray-900">{val}</p>
                    </div>
                    <span className="text-sm font-bold text-[#6C2BD9]">
                      {pct}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles size={14} color="#6C2BD9" />
              <p className="text-sm font-bold text-gray-900">
                AI Recommendations
              </p>
            </div>
            <div className="flex gap-2.5 mb-5 overflow-x-auto -mx-4 px-4">
              <div className="flex-shrink-0 w-56 bg-violet-100 rounded-2xl p-3.5">
                <p className="text-xs text-gray-700 mb-3 leading-snug">
                  Schedule notifications for weekend mornings to capture high
                  activity spikes.
                </p>
                <button className="text-xs font-bold text-[#6C2BD9] flex items-center gap-1">
                  Schedule weekends →
                </button>
              </div>
              <div className="flex-shrink-0 w-56 bg-white shadow-sm rounded-2xl p-3.5">
                <p className="text-xs text-gray-700 mb-3 leading-snug">
                  Recover underperformed segments with targeted outreach. 2.4x
                  ROI potential.
                </p>
                <button className="text-xs font-bold text-[#6C2BD9] flex items-center gap-1">
                  Push reminder →
                </button>
              </div>
            </div>

            {/* Growth Opportunities */}
            <p className="text-sm font-bold text-gray-900 mb-2.5">
              Growth Opportunities
            </p>
            <div className="flex flex-col gap-2.5">
              {growth.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-3.5 flex items-center gap-3 shadow-sm cursor-pointer"
                >
                  <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={16} color="#374151" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-gray-900">{label}</p>
                    <p className="text-[11px] text-gray-500">{sub}</p>
                  </div>
                  <ChevronRight size={16} color="#D1D5DB" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ padding: 10, height: 100 }} />
      </div>
    </div>
  );
}
