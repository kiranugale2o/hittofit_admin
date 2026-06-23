import {
  Home,
  BarChart2,
  User,
  Plus,
  MoreHorizontal,
  ArrowRight,
  Settings,
  PenLine,
  Calendar,
  Send,
  Megaphone,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Gavel,
  TrendingUp,
} from "lucide-react";

export default function CampaignsScreen() {
  return (
    <div className="flex justify-center bg-gray-200 min-h-screen">
      <div className="relative w-full max-w-sm bg-white min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Header */}
          <div className="px-4 pt-2 pb-4 flex items-center justify-between bg-gray-50 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-[#6C2BD9] rounded-[2px]" />
                <div className="w-2 h-2 bg-[#6C2BD9] rounded-[2px]" />
                <div className="w-2 h-2 bg-[#6C2BD9] rounded-[2px]" />
                <div className="w-2 h-2 bg-[#6C2BD9] rounded-[2px]" />
              </div>
              <span className="text-[#6C2BD9] font-bold text-lg">Hittofit</span>
            </div>
            <Settings size={22} color="#6C2BD9" />
          </div>

          <div className="px-4 mt-5">
            {/* Title + Create */}
            <div className="flex items-start justify-between mb-1">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">
                  Campaigns
                </h2>
                <p className="text-xs text-gray-500 mt-1 leading-snug max-w-[160px]">
                  Manage and grow platform engagement.
                </p>
              </div>
              <button className="flex items-center gap-1.5 bg-[#6C2BD9] text-white text-sm font-semibold px-4 py-2.5 rounded-full whitespace-nowrap mt-1">
                <Plus size={15} /> Create
              </button>
            </div>

            {/* Snapshot */}
            <div className="bg-gradient-to-br from-violet-100 via-violet-50 to-white border border-violet-100 rounded-2xl p-4 mt-4 mb-6">
              <div className="flex items-start justify-between">
                <p className="text-[10px] font-bold text-[#6C2BD9] tracking-widest mb-2">
                  CAMPAIGN SNAPSHOT
                </p>
                <div className="w-9 h-9 bg-violet-100/70 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles size={16} color="#6C2BD9" />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-extrabold text-gray-900">19</span>
                <span className="text-xs font-bold text-violet-700 bg-violet-200/70 px-2 py-0.5 rounded-full">
                  +18%
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-3">
                Engagement growth this month
              </p>
              <div className="border-t border-violet-200/60 pt-3 grid grid-cols-3 divide-x divide-violet-200/60">
                {[
                  ["Active", 12],
                  ["Drafts", 4],
                  ["Scheduled", 3],
                ].map(([l, v]) => (
                  <div key={l} className="px-1 first:pl-0">
                    <p className="text-xs text-gray-500 mb-0.5">{l}</p>
                    <p className="text-sx font-bold text-gray-900">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Campaigns */}
            <div className="flex items-center justify-between mb-3">
              <p className="font-bold text-gray-900 text-lg">
                Active Campaigns
              </p>
              <span className="text-sm text-[#6C2BD9] font-semibold">
                See all
              </span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1 mb-6 -mx-4 px-4">
              {[
                {
                  title: "Summer Fitness Challenge",
                  badge: "LIVE",
                  badgeColor: "text-green-700 bg-green-100",
                  stat: "88% Engagement",
                  stat2: "1.2k Participants",
                },
                {
                  title: "Member Loyalty Drive",
                  badge: "ACTIVE",
                  badgeColor: "text-blue-700 bg-blue-100",
                  stat: "74% Engagement",
                  stat2: "850 Participants",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 border border-gray-200 rounded-2xl p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[10px] font-bold px-2 py-1 rounded-full ${c.badgeColor}`}
                    >
                      {c.badge}
                    </span>
                    <MoreHorizontal size={16} color="#9CA3AF" />
                  </div>
                  <p className="text-base font-bold text-gray-900 leading-tight mb-3">
                    {c.title}
                  </p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{c.stat}</p>
                      <p className="text-sm font-semibold text-gray-800">
                        {c.stat2}
                      </p>
                    </div>
                    <button className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ArrowRight size={16} color="#6C2BD9" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Drafts */}
            <p className="font-bold text-gray-900 text-lg mb-3">Drafts</p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { title: "Fall Re-engagement", time: "Last edited 2h ago" },
                { title: "New Year Early Bird", time: "Last edited 1d ago" },
              ].map((d) => (
                <div
                  key={d.title}
                  className="flex items-center gap-3 border border-gray-200 rounded-2xl p-3.5"
                >
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <PenLine size={17} color="#6C2BD9" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {d.title}
                    </p>
                    <p className="text-xs text-gray-400">{d.time}</p>
                  </div>
                  <button className="text-sm font-semibold text-[#6C2BD9] flex items-center gap-0.5 whitespace-nowrap">
                    Continue <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Recent Performance */}
            <p className="font-bold text-gray-900 text-lg mb-3">
              Recent Performance
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                {
                  icon: "🔥",
                  text: "Referral Week generated 24% more signups than previous month.",
                  highlight: "24% more signups",
                },
                {
                  icon: "⚡",
                  text: "Transformation Challenge reached 8,200 members across 5 regions.",
                  highlight: "8,200 members",
                },
                {
                  icon: "📈",
                  text: "Weekend campaign engagement increased steadily throughout Sunday.",
                  highlight: null,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border border-gray-200 rounded-2xl p-3.5"
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  <p className="text-sm text-gray-700 leading-snug">
                    {item.highlight
                      ? (() => {
                          const [before, after] = item.text.split(
                            item.highlight,
                          );
                          return (
                            <>
                              {before}
                              <span className="text-[#6C2BD9] font-semibold">
                                {item.highlight}
                              </span>
                              {after}
                            </>
                          );
                        })()
                      : item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <p className="font-bold text-gray-900 text-lg mb-3">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { icon: Megaphone, label: "Create Campaign" },
                { icon: Calendar, label: "Schedule Campaign" },
                { icon: Send, label: "Send Announcement" },
                { icon: BarChart2, label: "View Analytics" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={label + i}
                  className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center gap-2.5 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center">
                    <Icon size={20} color="#1F2937" />
                  </div>
                  <span className="text-sm font-bold text-gray-900 text-center">
                    {label}
                  </span>
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
              <Icon size={20} color="#374151" />
              <span className="text-[10px] font-bold text-gray-700">
                {label}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center flex-1">
            <div className="bg-[#6C2BD9] rounded-full px-4 py-2 flex flex-col items-center gap-1">
              <User size={18} color="white" />
              <span className="text-[10px] font-bold text-white">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
