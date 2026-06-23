import {
  ArrowLeft,
  Bell,
  Sparkles,
  Tag,
  ShieldAlert,
  TrendingUp,
  Megaphone,
  CalendarClock,
  Clock,
  Home,
  ShieldCheck,
  Gavel,
  User,
} from "lucide-react";

const priorityAlerts = [
  {
    icon: Tag,
    bg: "bg-orange-100",
    color: "#EA580C",
    title: "Campaign reached 10,000 members",
    sub: "The 'Summer Sprint' campaign has exceeded performance goals by 12%.",
  },
  {
    icon: ShieldAlert,
    bg: "bg-red-100",
    color: "#DC2626",
    title: "Partner verification required",
    sub: "New Gym 'Iron Haven' requires manual document review to launch.",
  },
  {
    icon: TrendingUp,
    bg: "bg-emerald-100",
    color: "#059669",
    title: "Activity increased 18%",
    sub: "Weekly engagement surge detected across all active gym portals.",
  },
];

const quickActions = [
  { icon: Megaphone, label: "Send Announcement" },
  { icon: Bell, label: "Create Notification" },
  { icon: CalendarClock, label: "Schedule Alert" },
  { icon: Sparkles, label: "View Delivery Stats" },
];

const recentActivity = [
  {
    title: "Trainer Approved",
    sub: "Alex Rivera's credentials have been verified successfully.",
    time: "2h ago",
  },
  {
    title: "Campaign Launched",
    sub: "'Power Week' automation sequence is now live for all users.",
    time: "5h ago",
  },
  {
    title: "New Gym Onboarded",
    sub: "'Urban Zen Studio' has completed the onboarding flow.",
    time: "Yesterday",
  },
];

const scheduledQueue = [
  {
    tag: "MEMBERSHIP REMINDER",
    time: "Tomorrow 10:00 AM",
    sub: "Automated push to 450 users with expiring trials.",
  },
  {
    tag: "REFERRAL PUSH",
    time: "Friday 6:00 PM",
    sub: "Weekend referral incentive for platinum members.",
  },
];

export default function NotificationCenterScreen() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3">
            <button className="flex items-center gap-1.5">
              <ArrowLeft size={18} color="#6C2BD9" />
              <span className="text-base font-bold text-[#6C2BD9]">
                Notifications
              </span>
            </button>
            <div className="w-9 h-9 bg-[#6C2BD9] rounded-full flex items-center justify-center">
              <Bell size={16} color="white" />
            </div>
          </div>

          <div className="px-4 mt-2">
            <h2 className="text-xl font-extrabold text-gray-900">
              Stay connected
            </h2>
            <p className="text-xs text-gray-500 mt-0.5 mb-4">
              With your Hittofit ecosystem updates.
            </p>

            {/* Hub Status */}
            <div
              className="rounded-2xl p-4 mb-5 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold text-white bg-white/20 px-2.5 py-1 rounded-full">
                  Hub Status
                </span>
                <Sparkles size={16} color="rgba(255,255,255,0.7)" />
              </div>
              <div className="grid grid-cols-3">
                {[
                  ["12", "UNREAD"],
                  ["4", "SCHEDULED"],
                  ["3", "UPDATES"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <p className="text-xl font-bold text-white">{val}</p>
                    <p className="text-[9px] font-semibold text-white/60 tracking-wide">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority Alerts */}
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[11px] font-bold text-gray-500 tracking-wide">
                PRIORITY ALERTS
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-[#6C2BD9]" />
            </div>
            <div className="flex flex-col gap-2.5 mb-5">
              {priorityAlerts.map(({ icon: Icon, bg, color, title, sub }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-3.5 shadow-sm flex items-start gap-3"
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}
                  >
                    <Icon size={16} color={color} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">{title}</p>
                    <p className="text-[11px] text-gray-500 leading-snug mt-0.5">
                      {sub}
                    </p>
                    <button className="text-[11px] font-bold text-[#6C2BD9] mt-1">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Hub Actions */}
            <p className="text-[11px] font-bold text-gray-500 tracking-wide mb-2.5">
              QUICK HUB ACTIONS
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {quickActions.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="bg-white rounded-2xl p-3.5 flex flex-col items-start gap-2 shadow-sm"
                >
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center">
                    <Icon size={15} color="#6C2BD9" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-700 text-left leading-tight">
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Recent Activity */}
            <p className="text-[11px] font-bold text-gray-500 tracking-wide mb-2.5">
              RECENT ACTIVITY
            </p>
            <div className="relative pl-3 mb-5">
              <div className="absolute left-[3px] top-2 bottom-2 w-px bg-violet-200" />
              {recentActivity.map(({ title, sub, time }) => (
                <div key={title} className="relative mb-2.5 last:mb-0">
                  <div className="absolute -left-3 top-3 w-1.5 h-1.5 rounded-full bg-[#6C2BD9]" />
                  <div className="bg-gray-100 rounded-2xl p-3">
                    <p className="text-xs font-bold text-gray-900">{title}</p>
                    <p className="text-[11px] text-gray-500 leading-snug mt-0.5">
                      {sub}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">{time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Scheduled Queue */}
            <p className="text-[11px] font-bold text-gray-500 tracking-wide mb-2.5">
              SCHEDULED QUEUE
            </p>
            <div className="flex flex-col gap-2.5">
              {scheduledQueue.map(({ tag, time, sub }) => (
                <div
                  key={tag}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <div className="p-3.5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock size={11} color="#6C2BD9" />
                      <span className="text-[10px] font-bold text-[#6C2BD9] tracking-wide">
                        {tag}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-gray-900">{time}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">{sub}</p>
                  </div>
                  <div className="grid grid-cols-2 border-t border-gray-100">
                    <button className="text-xs font-semibold text-gray-600 py-2.5 border-r border-gray-100">
                      Edit →
                    </button>
                    <button className="text-xs font-bold text-[#6C2BD9] py-2.5">
                      Send Now →
                    </button>
                  </div>
                </div>
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
