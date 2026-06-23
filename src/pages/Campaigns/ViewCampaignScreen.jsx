import {
  Home,
  ChevronLeft,
  MoreVertical,
  Eye,
  Flame,
  TrendingUp,
  Edit3,
  Copy,
  PauseCircle,
  BarChart,
  Share2,
  Plus,
  Rocket,
  Send,
  Users,
  ShieldCheck,
  Gavel,
  User,
  Sparkles,
  Zap,
  Dumbbell,
  Award,
} from "lucide-react";

const activity = [
  {
    icon: Rocket,
    title: "Campaign launched",
    time: "Jun 1, 2024 • 09:00 AM",
  },
  {
    icon: Award,
    title: "Participant milestone reached",
    time: "Jun 5, 2024 • 02:30 PM",
  },
  {
    icon: TrendingUp,
    title: "Engagement increased by 18%",
    time: "Jun 10, 2024 • 11:15 AM",
  },
  {
    icon: Send,
    title: "Campaign shared to partners",
    time: "Today • 08:45 AM",
  },
];

export default function ViewCampaignScreen() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3">
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <ChevronLeft size={18} color="#374151" />
              </button>
              <div>
                <p className="text-lg font-bold text-gray-900 leading-tight">
                  Summer Fitness C
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-600">Live</span>
                </div>
              </div>
            </div>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <MoreVertical size={16} color="#374151" />
            </button>
          </div>

          <div className="px-4 mt-2">
            {/* Hero Banner */}
            <div
              className="rounded-3xl p-5 mb-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #6C2BD9 0%, #8B5CF6 100%)",
              }}
            >
              <span className="text-[10px] font-bold text-white/70 tracking-widest">
                ACTIVE CAMPAIGN
              </span>
              <h2 className="text-xl font-bold text-white mt-1 mb-4 leading-tight">
                Summer Fitness
                <br />
                Challenge
              </h2>
              <div className="flex gap-3">
                <div className="bg-white/15 rounded-xl px-4 py-2.5 flex-1">
                  <p className="text-[10px] text-white/70">Visible to</p>
                  <p className="text-sm font-bold text-white">12,400 Members</p>
                </div>
                <div className="bg-white/15 rounded-xl px-4 py-2.5 flex-1">
                  <p className="text-[10px] text-white/70">Ends in</p>
                  <p className="text-sm font-bold text-white">12 Days</p>
                </div>
              </div>
              {/* decorative icon */}
              <Dumbbell
                size={26}
                color="rgba(255,255,255,0.3)"
                className="absolute top-5 right-5"
              />
            </div>

            {/* Performance */}
            <div className="flex items-center justify-between mb-3">
              <p className="text-base font-bold text-gray-900">Performance</p>
              <span className="text-xs text-[#6C2BD9] font-semibold">
                Real-time
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              {[
                { icon: Eye, label: "Views", val: "18.2K" },
                { icon: Flame, label: "Participants", val: "3.4K" },
                { icon: TrendingUp, label: "Engagement", val: "24%" },
              ].map(({ icon: Icon, label, val }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-3.5 shadow-sm"
                >
                  <Icon size={18} color="#6C2BD9" />
                  <p className="text-lg font-bold text-gray-900 mt-2">{val}</p>
                  <p className="text-xs text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Audience Snapshot */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-bold text-gray-900">
                  Audience Snapshot
                </p>
                <Users size={16} color="#374151" />
              </div>
              <div className="w-full h-2.5 bg-gray-100 rounded-full flex overflow-hidden mb-4">
                <div className="h-full bg-[#6C2BD9]" style={{ width: "85%" }} />
                <div className="h-full bg-slate-500" style={{ width: "10%" }} />
                <div className="h-full bg-gray-800" style={{ width: "5%" }} />
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Members", pct: 85, color: "bg-[#6C2BD9]" },
                  { label: "Trainers", pct: 10, color: "bg-slate-500" },
                  { label: "Gym Owners", pct: 5, color: "bg-gray-800" },
                ].map(({ label, pct, color }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                      <span className="text-xs text-gray-700">{label}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {pct}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Insights */}
            <p className="text-base font-bold text-gray-900 mb-3">
              AI Insights
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <div className="bg-violet-50 rounded-2xl p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6C2BD9] flex items-center justify-center flex-shrink-0">
                  <Sparkles size={18} color="white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#6C2BD9] mb-1">
                    Weekend Surge
                  </p>
                  <p className="text-xs text-gray-600 leading-snug">
                    Weekend participation is strongest. Consider scheduling push
                    reminders for Friday evenings.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                  <Zap size={18} color="#6C2BD9" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    Trainer Referrals
                  </p>
                  <p className="text-xs text-gray-500 leading-snug">
                    Trainer referrals are increasing engagement. Encouraging
                    more 1:1 invites could boost reach.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <p className="text-base font-bold text-gray-900 mb-3">Actions</p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { icon: Edit3, label: "Edit Campaign" },
                { icon: Copy, label: "Duplicate" },
                { icon: PauseCircle, label: "Pause Stream" },
                { icon: BarChart, label: "Full Analytics" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="bg-white rounded-2xl p-4 flex flex-col items-start gap-2.5 shadow-sm"
                >
                  <div className="w-10 h-10 bg-violet-50 rounded-xl flex items-center justify-center">
                    <Icon size={18} color="#6C2BD9" />
                  </div>
                  <span className="text-xs font-bold text-gray-900">
                    {label}
                  </span>
                </button>
              ))}
            </div>

            <button className="w-full bg-[#5B21B6] text-white font-bold text-sm py-3 rounded-full flex items-center justify-center gap-2 mb-6">
              <Share2 size={17} /> Share Campaign Report
            </button>

            {/* Activity */}
            <p className="text-base font-bold text-gray-900 mb-4">Activity</p>
            <div className="relative pl-2">
              <div className="absolute left-[19px] top-5 bottom-5 w-px bg-gray-200" />
              {activity.map(({ icon: Icon, title, time }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 mb-6 last:mb-0 relative"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 z-10">
                    <Icon size={17} color="#6C2BD9" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {title}
                    </p>
                    <p className="text-xs text-gray-400">{time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAB */}
          <button className="fixed bottom-24 right-5 w-14 h-14 bg-[#6C2BD9] rounded-2xl shadow-lg shadow-violet-400/50 flex items-center justify-center z-40">
            <Plus size={24} color="white" />
          </button>
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
