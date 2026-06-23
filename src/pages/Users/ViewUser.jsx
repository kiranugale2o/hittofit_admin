import {
  LayoutGrid,
  Plus,
  Sparkles,
  MoreHorizontal,
  MapPin,
  Clock,
  MessageSquare,
  Home,
  ShieldCheck,
  TrendingUp,
  Gavel,
  User,
} from "lucide-react";

const tabs = ["Members", "Gyms", "Trainers", "Stores"];

const members = [
  {
    name: "Rahul Sharma",
    avatar: "https://i.pravatar.cc/72?img=12",
    badge: "Premium Member",
    location: "Pune, India",
    active: "Active 10 mins ago",
    tag: "Highly Active",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/72?img=45",
    badge: "Standard",
    location: "Singapore",
    active: "Last active 2 days ago",
    tag: "New Member",
    tagColor: "bg-violet-100 text-[#6C2BD9]",
  },
  {
    name: "Marcus Thorne",
    avatar: "https://i.pravatar.cc/72?img=33",
    badge: "Premium Member",
    location: "London, UK",
    active: "Active 5 mins ago",
    tag: "At Risk",
    tagColor: "bg-red-100 text-red-600",
  },
];

export default function ViewUser() {
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

            {/* Member cards */}
            <div className="flex flex-col gap-3">
              {members.map(
                ({ name, avatar, badge, location, active, tag, tagColor }) => (
                  <div
                    key={name}
                    className="bg-white rounded-2xl p-3.5 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="relative">
                          <img
                            src={avatar}
                            alt={name}
                            className="w-11 h-11 rounded-xl object-cover"
                          />
                          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {name}
                          </p>
                          <span className="text-[10px] font-semibold text-[#6C2BD9] bg-violet-100 px-2 py-0.5 rounded-full">
                            {badge}
                          </span>
                        </div>
                      </div>
                      <MoreHorizontal size={16} color="#9CA3AF" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mb-1">
                      <MapPin size={11} /> {location}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mb-2">
                      <Clock size={11} /> {active}
                    </div>
                    <span
                      className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 ${tagColor}`}
                    >
                      {tag}
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="flex-1 bg-[#6C2BD9] text-white text-xs font-bold py-2.5 rounded-full">
                        View Profile →
                      </button>
                      <button className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare size={15} color="#6C2BD9" />
                      </button>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
