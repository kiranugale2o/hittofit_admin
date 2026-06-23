import {
  LayoutGrid,
  Plus,
  Sparkles,
  Bookmark,
  ShieldCheck as VerifiedIcon,
  Star,
  Home,
  TrendingUp,
  Gavel,
  User,
} from "lucide-react";

const tabs = ["Members", "Gyms", "Trainers", "Stores"];

const miniStats = [
  { emoji: "🏋️", val: "284", label: "Total" },
  { emoji: "🔥", val: "18", label: "New Month" },
  { emoji: "⭐", val: "210", label: "Verified" },
];

const gyms = [
  {
    name: "FitZone Elite",
    location: "Aundh, Pune",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=220&fit=crop",
    badge: "VERIFIED",
    status: "Active",
    statusColor: "text-emerald-600",
    owner: "Rahul Sharma",
    members: "1,240",
    tags: [
      { label: "Fast Growing", color: "text-violet-600 bg-violet-100" },
      { label: "Premium Equipment", color: "text-gray-600 bg-gray-100" },
    ],
  },
  {
    name: "Urban Wellness Lab",
    location: "Koregaon Park, Pune",
    img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=220&fit=crop",
    badge: "TOP RATED",
    status: "Growth Mode",
    statusColor: "text-[#6C2BD9]",
    statusBg: "bg-violet-100",
    owner: "Ananya Iyer",
    members: "892",
    tags: [
      { label: "4.9 Rating", color: "text-amber-600 bg-amber-50" },
      { label: "Multi-Studio", color: "text-gray-600 bg-gray-100" },
    ],
  },
];

export default function GymScreen() {
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
            <div className="flex gap-2 mb-4 overflow-x-auto -mx-4 px-4">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap ${
                    i === 1
                      ? "bg-[#6C2BD9] text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Mini stats */}
            <div className="flex gap-2.5 mb-4 overflow-x-auto -mx-4 px-4">
              {miniStats.map(({ emoji, val, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl shadow-sm px-3.5 py-3 flex items-center gap-2 flex-shrink-0"
                >
                  <span className="text-sm">{emoji}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{val}</p>
                    <p className="text-[10px] text-gray-500">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Gym cards */}
            <div className="flex flex-col gap-4">
              {gyms.map(
                ({
                  name,
                  location,
                  img,
                  badge,
                  status,
                  statusColor,
                  statusBg,
                  owner,
                  members,
                  tags,
                }) => (
                  <div
                    key={name}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                  >
                    <div className="relative h-40">
                      <img
                        src={img}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 flex items-center gap-1 bg-white/95 text-[10px] font-bold text-[#6C2BD9] px-2.5 py-1 rounded-full">
                        {badge === "VERIFIED" ? (
                          <VerifiedIcon size={11} />
                        ) : (
                          <Star size={11} />
                        )}
                        {badge}
                      </span>
                      <button className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow">
                        <Bookmark size={14} color="#6C2BD9" />
                      </button>
                    </div>
                    <div className="p-3.5">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-sm font-bold text-gray-900">
                          {name}
                        </p>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            statusBg || "bg-emerald-100"
                          } ${statusColor}`}
                        >
                          {status}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 mb-2.5">
                        {location}
                      </p>
                      <div className="grid grid-cols-2 pt-2.5 border-t border-gray-100 mb-2.5">
                        <div>
                          <p className="text-[10px] text-gray-400">OWNER</p>
                          <p className="text-xs font-semibold text-gray-800">
                            {owner}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-400">MEMBERS</p>
                          <p className="text-xs font-semibold text-gray-800">
                            {members}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        {tags.map(({ label, color }) => (
                          <span
                            key={label}
                            className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${color}`}
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                      <button className="w-full bg-[#6C2BD9] text-white text-xs font-bold py-2.5 rounded-full">
                        View Gym →
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
