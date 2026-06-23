import {
  ArrowLeft,
  SlidersHorizontal,
  Share2,
  Repeat,
  Dumbbell,
  Trophy,
  ShoppingBag,
  Heart,
  Mail,
  MessageCircle,
  Tag,
  Bell,
  StickyNote,
  Download,
  Home,
  ShieldCheck,
  TrendingUp,
  Gavel,
  User,
} from "lucide-react";

const filters = ["All", "Gym Visits", "Trainer Sessions", "Chat"];

const timeline = [
  {
    when: "TODAY",
    time: "09:15 AM",
    icon: Repeat,
    bg: "bg-[#6C2BD9]",
    iconColor: "white",
    title: "Checked into FitZone Elite",
    sub: "Duration: 1h 30m",
    status: null,
  },
  {
    when: "YESTERDAY",
    icon: Dumbbell,
    bg: "bg-violet-100",
    iconColor: "#6C2BD9",
    title: "Personal Training Session",
    sub: "Trainer: Amit Patel",
    status: "Completed",
    statusColor: "text-emerald-600",
  },
  {
    when: "3 DAYS AGO",
    icon: Trophy,
    bg: "bg-amber-100",
    iconColor: "#D97706",
    title: "Completed Summer Challenge",
    sub: "250 Points • Rank #18",
    card: true,
  },
  {
    when: "6 DAYS AGO",
    icon: ShoppingBag,
    bg: "bg-blue-100",
    iconColor: "#2563EB",
    title: "Purchased Whey Protein",
    sub: "Store: FitFuel Nutrition",
    price: "₹2,499",
  },
  {
    when: "LAST WEEK",
    icon: Heart,
    bg: "bg-violet-100",
    iconColor: "#6C2BD9",
    title: "Renewed Premium Plus",
    sub: "Valid Until Aug 2027",
    promo: true,
  },
  {
    when: "3 WEEKS AGO",
    icon: Mail,
    bg: "bg-gray-100",
    iconColor: "#6B7280",
    title: "Opened Challenge Reminder",
    sub: "Action: Joined Campaign",
    status: "Joined Campaign",
    statusColor: "text-emerald-600",
  },
];

const engagementSummary = [
  { emoji: "🔥", text: "Most active 6AM–9AM", highlight: "6AM–9AM" },
  {
    emoji: "⚡",
    text: "Participates in 78% challenges",
    highlight: "78%",
  },
  { emoji: "📈", text: "Activity +34% this month", highlight: "+34%" },
  { emoji: "⭐", text: "Strong renewal probability", highlight: null },
];

const riskOpportunity = [
  {
    title: "Highly Engaged Member",
    sub: "Perfect record of attendance this quarter.",
    bg: "bg-emerald-50",
    color: "#16A34A",
  },
  {
    title: "Eligible for Premium Upgrade",
    sub: "Candidate for the 'Elite' corporate plan.",
    bg: "bg-violet-100",
    color: "#6C2BD9",
  },
  {
    title: "Referral Candidate",
    sub: "Invite Rahul to the rewards referral program.",
    bg: "bg-amber-50",
    color: "#D97706",
  },
];

const quickActions = [
  { icon: MessageCircle, label: "Message Member" },
  { icon: Tag, label: "Send Offer" },
  { icon: Bell, label: "Notify" },
  { icon: StickyNote, label: "Add CRM Note" },
];

export default function ActivityTimelineScreen() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3">
            <div className="flex items-center gap-3">
              <ArrowLeft size={18} color="#6C2BD9" />
              <span className="text-base font-bold text-gray-900">
                Activity Timeline
              </span>
            </div>
            <div className="flex items-center gap-3">
              <SlidersHorizontal size={16} color="#374151" />
              <Share2 size={16} color="#374151" />
            </div>
          </div>

          <div className="px-4 mt-1">
            {/* Profile summary */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm mb-3 flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/72?img=12"
                  alt="Rahul Sharma"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900">
                    Rahul Sharma
                  </p>
                  <span className="text-[10px] font-bold text-[#6C2BD9] bg-violet-100 px-2 py-0.5 rounded-full">
                    Active Now
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mb-1.5">
                  Premium Plus Member
                </p>
                <div className="flex gap-4">
                  {[
                    ["82", "WORKOUTS"],
                    ["14", "SESSIONS"],
                    ["6", "CHALLENGES"],
                  ].map(([val, label]) => (
                    <div key={label}>
                      <p className="text-sm font-bold text-gray-900">{val}</p>
                      <p className="text-[9px] text-gray-400 tracking-wide">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-4 overflow-x-auto -mx-4 px-4">
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${
                    i === 0
                      ? "bg-[#6C2BD9] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Timeline */}
            <div className="relative pl-9 mb-5">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gray-200" />
              {timeline.map(
                (
                  {
                    when,
                    time,
                    icon: Icon,
                    bg,
                    iconColor,
                    title,
                    sub,
                    status,
                    statusColor,
                    price,
                    promo,
                  },
                  i,
                ) => (
                  <div key={i} className="relative mb-4 last:mb-0">
                    <div
                      className={`absolute -left-9 top-0 w-7 h-7 rounded-full flex items-center justify-center z-10 ${bg}`}
                    >
                      <Icon size={13} color={iconColor} />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-gray-400 tracking-wide">
                        {when}
                      </span>
                      {time && (
                        <span className="text-[10px] text-gray-400">
                          {time}
                        </span>
                      )}
                      {status && (
                        <span
                          className={`text-[10px] font-bold ${statusColor}`}
                        >
                          {status}
                        </span>
                      )}
                    </div>
                    <div
                      className={`rounded-2xl p-3 ${
                        promo ? "text-white" : "bg-white shadow-sm"
                      }`}
                      style={
                        promo
                          ? {
                              background:
                                "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
                            }
                          : {}
                      }
                    >
                      <p
                        className={`text-xs font-bold ${
                          promo ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {title}
                      </p>
                      <div className="flex items-center justify-between mt-0.5">
                        <p
                          className={`text-[11px] ${
                            promo ? "text-white/70" : "text-gray-500"
                          }`}
                        >
                          {sub}
                        </p>
                        {price && (
                          <span className="text-xs font-bold text-[#6C2BD9]">
                            {price}
                          </span>
                        )}
                        {promo && (
                          <span className="text-[10px] font-bold text-white bg-white/20 px-2 py-0.5 rounded-full">
                            LOYALTY++
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Engagement Summary */}
            <p className="text-sm font-bold text-gray-900 mb-2.5">
              Engagement Summary
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {engagementSummary.map(({ emoji, text, highlight }) => (
                <div key={text} className="bg-white rounded-2xl p-3 shadow-sm">
                  <span className="text-base">{emoji}</span>
                  <p className="text-[11px] text-gray-700 mt-1.5 leading-snug">
                    {highlight
                      ? (() => {
                          const [before, after] = text.split(highlight);
                          return (
                            <>
                              {before}
                              <span className="font-bold text-[#6C2BD9]">
                                {highlight}
                              </span>
                              {after}
                            </>
                          );
                        })()
                      : text}
                  </p>
                </div>
              ))}
            </div>

            {/* Risk & Opportunity */}
            <p className="text-sm font-bold text-gray-900 mb-2.5">
              Risk &amp; Opportunity
            </p>
            <div className="flex flex-col gap-2.5 mb-5">
              {riskOpportunity.map(({ title, sub, bg, color }) => (
                <div
                  key={title}
                  className={`rounded-2xl p-3 flex items-start gap-2.5 ${bg}`}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: color }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color }}>
                      {title}
                    </p>
                    <p className="text-[11px] text-gray-500 leading-snug">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <p className="text-sm font-bold text-gray-900 mb-2.5">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-2.5">
              {quickActions.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="bg-white border border-gray-200 rounded-2xl py-3.5 flex flex-col items-center gap-2"
                >
                  <Icon size={16} color="#6C2BD9" />
                  <span className="text-xs font-semibold text-gray-700">
                    {label}
                  </span>
                </button>
              ))}
            </div>
            <button className="w-full bg-white border border-gray-200 rounded-2xl py-3 flex items-center justify-center gap-2">
              <Download size={14} color="#6C2BD9" />
              <span className="text-xs font-semibold text-gray-700">
                Export Activity Report
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
