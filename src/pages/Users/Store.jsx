import {
  LayoutGrid,
  Plus,
  Sparkles,
  MoreHorizontal,
  Star,
  Package,
  Home,
  BarChart2,
  Lightbulb,
  Bell,
  User,
  ShieldCheck,
  TrendingUp,
  Flame,
  AlertCircle,
} from "lucide-react";

const tabs = ["Members", "Gyms", "Trainers", "Stores"];

const stores = [
  {
    name: "FitFuel Nutrition",
    owner: "Rohit Sharma",
    avatar: "https://i.pravatar.cc/72?img=12",
    category: "Supplements",
    inventory: "120 Products",
    tag: "Top Seller",
    tagColor: "bg-amber-100 text-amber-700",
    status: "active",
    label: "Redirect Store →",
  },
  {
    name: "HealthHub Store",
    owner: "Priya Mehta",
    avatar: "https://i.pravatar.cc/72?img=47",
    category: "Nutrition",
    inventory: "85 Products",
    tag: "Fast Growing",
    tagColor: "bg-violet-100 text-[#6C2BD9]",
    status: "active",
    label: "View Store →",
  },
  {
    name: "PureEquip Gear",
    owner: "Akash Verma",
    avatar: "https://i.pravatar.cc/72?img=33",
    category: "Equipment",
    inventory: "43 Products",
    tag: "Needs Attention",
    tagColor: "bg-red-100 text-red-600",
    status: "incomplete",
    label: "View Store →",
  },
];

export default function Store() {
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
                    i === 3
                      ? "bg-[#6C2BD9] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Quick stats */}
            <div className="flex items-center gap-2 mb-4 text-[10px] text-gray-500 flex-wrap">
              <span className="flex items-center gap-1 bg-white rounded-full px-2.5 py-1 shadow-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#6C2BD9] inline-block" />{" "}
                120 Partners
              </span>
              <span className="flex items-center gap-1 bg-white rounded-full px-2.5 py-1 shadow-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />{" "}
                12 New
              </span>
              <span className="flex items-center gap-1 bg-white rounded-full px-2.5 py-1 shadow-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />{" "}
                7% Verified
              </span>
              <span className="flex items-center gap-1 bg-white rounded-full px-2.5 py-1 shadow-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />{" "}
                19 Fast
              </span>
            </div>

            {/* Store Cards */}
            <div className="flex flex-col gap-3">
              {stores.map(
                ({
                  name,
                  owner,
                  avatar,
                  category,
                  inventory,
                  tag,
                  tagColor,
                  status,
                  label,
                }) => (
                  <div
                    key={name}
                    className="bg-white rounded-2xl p-3.5 shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center overflow-hidden">
                            <img
                              src={avatar}
                              alt={name}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">
                            {name}
                          </p>
                          <p className="text-[10px] text-gray-400">{owner}</p>
                        </div>
                      </div>
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${tagColor}`}
                      >
                        {tag}
                      </span>
                    </div>

                    <div className="flex gap-3 mb-3">
                      <div className="flex-1 bg-gray-50 rounded-xl p-2">
                        <p className="text-[9px] text-gray-400">CATEGORY</p>
                        <p className="text-xs font-bold text-gray-800">
                          {category}
                        </p>
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-xl p-2">
                        <p className="text-[9px] text-gray-400">INVENTORY</p>
                        <p className="text-xs font-bold text-gray-800">
                          {inventory}
                        </p>
                      </div>
                    </div>

                    {status === "incomplete" && (
                      <div className="flex items-center gap-1.5 bg-red-50 rounded-xl px-2.5 py-2 mb-3">
                        <AlertCircle size={11} color="#DC2626" />
                        <span className="text-[10px] font-semibold text-red-600">
                          Profile Incomplete
                        </span>
                      </div>
                    )}

                    {status === "active" && (
                      <div className="flex items-center gap-1.5 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-semibold text-emerald-600">
                          Active
                        </span>
                      </div>
                    )}

                    <button className="w-full bg-[#6C2BD9] text-white text-xs font-bold py-2.5 rounded-full">
                      {label}
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
