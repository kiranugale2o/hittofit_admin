import {
  LayoutGrid,
  Plus,
  Sparkles,
  MoreHorizontal,
  MapPin,
  Star,
  Users,
  Home,
  BarChart2,
  Lightbulb,
  Bell,
  User,
  ShieldCheck,
  TrendingUp,
  Flame,
} from "lucide-react";

const tabs = ["Members", "Gyms", "Trainers", "Stores"];

const stats = [
  { label: "TRAINERS", val: "540", icon: Users },
  { label: "NEW", val: "42", icon: Sparkles },
  { label: "VERIFIED", val: "480", icon: ShieldCheck },
  { label: "TOP", val: "68", icon: Star },
];

const trainers = [
  {
    name: "Amit Patel",
    role: "Strength Coach",
    gym: "FitZone Elite",
    avatar: "https://i.pravatar.cc/72?img=11",
    rating: 4.9,
    clients: 412,
    tags: ["TOP PERFORMER", "VERIFIED"],
    tagColors: [
      "bg-amber-100 text-amber-700",
      "bg-emerald-100 text-emerald-700",
    ],
  },
  {
    name: "Neha Sharma",
    role: "Yoga Specialist",
    gym: "Zen Wellness Studio",
    avatar: "https://i.pravatar.cc/72?img=47",
    rating: 4.7,
    clients: 185,
    tags: ["FAST GROWING", "VERIFIED"],
    tagColors: [
      "bg-violet-100 text-[#6C2BD9]",
      "bg-emerald-100 text-emerald-700",
    ],
  },
  {
    name: "Marcus Chen",
    role: "CrossFit Expert",
    gym: "Iron Gate CrossFit",
    avatar: "https://i.pravatar.cc/72?img=33",
    rating: 4.2,
    clients: 94,
    tags: ["NEEDS ATTENTION"],
    tagColors: ["bg-red-100 text-red-600"],
  },
];

export default function Trainer() {
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

          <div className="px-4">
            <p className="text-sm font-bold text-gray-900">People Management</p>
            <p className="text-xs text-gray-500 mb-4">
              Manage every part of the Hittofit ecosystem.
            </p>

            {/* Ecosystem Card */}
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
                    i === 2
                      ? "bg-[#6C2BD9] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {stats.map(({ label, val, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl p-2.5 shadow-sm text-center"
                >
                  <Icon size={14} color="#6C2BD9" className="mx-auto mb-1" />
                  <p className="text-sm font-bold text-gray-900">{val}</p>
                  <p className="text-[9px] text-gray-400">{label}</p>
                </div>
              ))}
            </div>

            {/* Trainer Cards */}
            <div className="flex flex-col gap-3">
              {trainers.map(
                ({
                  name,
                  role,
                  gym,
                  avatar,
                  rating,
                  clients,
                  tags,
                  tagColors,
                }) => (
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
                            className="w-12 h-12 rounded-xl object-cover"
                          />
                          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {name}
                          </p>
                          <p className="text-[10px] text-gray-400">{role}</p>
                          <p className="text-[10px] text-[#6C2BD9] font-semibold">
                            {gym}
                          </p>
                        </div>
                      </div>
                      <MoreHorizontal size={16} color="#9CA3AF" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${tagColors[i]}`}
                        >
                          ✦ {tag}
                        </span>
                      ))}
                    </div>

                    {/* Rating & Clients */}
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={12} fill="#FBBF24" color="#FBBF24" />
                        <span className="text-xs font-bold text-gray-800">
                          {rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={12} color="#9CA3AF" />
                        <span className="text-xs text-gray-500">{clients}</span>
                      </div>
                    </div>

                    <button className="w-full bg-[#6C2BD9] text-white text-xs font-bold py-2.5 rounded-full">
                      View Trainer →
                    </button>
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
