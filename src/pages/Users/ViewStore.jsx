import {
  ArrowLeft,
  MoreVertical,
  ShieldCheck,
  Star,
  Package,
  ShoppingBag,
  Users,
  TrendingUp,
  Zap,
  Home,
  BarChart2,
  Lightbulb,
  Bell,
  User,
  Phone,
  MessageSquare,
  Megaphone,
  FileText,
  CheckCircle,
  ChevronRight,
  MapPin,
} from "lucide-react";

const bestSellers = [
  {
    name: "Whey Protein-Zero",
    sub: "180 Units • $12",
    img: "https://i.pravatar.cc/40?img=21",
  },
  {
    name: "Creatine Monohydrate",
    sub: "95 Units • $18",
    img: "https://i.pravatar.cc/40?img=22",
  },
];

const audiencePulse = [
  { label: "Top City", val: "Pune", sub: "12% of traffic", icon: MapPin },
  { label: "Primary Age", val: "18–35", sub: "62% of customers", icon: Users },
];

const controlHub = [
  { label: "Verify Store", icon: CheckCircle },
  { label: "Announcement", icon: Megaphone },
  { label: "Feature Store", icon: Star },
  { label: "Add CRM Note", icon: FileText },
];

export default function ViewStore() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 pt-2 pb-2 bg-white">
            <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <ArrowLeft size={16} color="#374151" />
            </button>
            <span className="text-sm font-bold text-gray-900">
              Store Profile
            </span>
            <MoreVertical size={18} color="#9CA3AF" />
          </div>

          <div className="px-4 pt-4">
            {/* Store Hero Banner */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
              {/* Banner image */}
              <div className="h-24 bg-gradient-to-r from-violet-600 to-purple-800 flex items-center justify-center relative">
                <div className="text-center">
                  <p className="text-white font-black text-lg leading-tight">
                    FitFuel
                  </p>
                  <p className="text-white/70 text-xs">Nutrition</p>
                  <p className="text-white/40 text-[9px]">
                    supplements & wellness
                  </p>
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <ShieldCheck size={14} color="white" />
                </div>
              </div>

              <div className="p-3.5">
                {/* Owner row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://i.pravatar.cc/72?img=12"
                      alt="Rohit Sharma"
                      className="w-9 h-9 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-xs font-bold text-gray-900">
                        Rohit Sharma
                      </p>
                      <div className="flex items-center gap-1">
                        <ShieldCheck size={10} color="#10B981" />
                        <span className="text-[10px] text-emerald-600 font-semibold">
                          Verified Owner
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <button className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                      <Phone size={13} color="#6C2BD9" />
                    </button>
                    <button className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                      <MessageSquare size={13} color="#6C2BD9" />
                    </button>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Products", val: "120" },
                    { label: "Orders", val: "2,480" },
                    { label: "Rating", val: "★ 4.8" },
                    { label: "Customers", val: "1,920" },
                  ].map(({ label, val }) => (
                    <div key={label} className="bg-gray-50 rounded-xl p-2.5">
                      <p className="text-[9px] text-gray-400">{label}</p>
                      <p className="text-sm font-black text-gray-900">{val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Agent Recommendations */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-center gap-1.5 mb-3">
                <Zap size={13} color="#6C2BD9" fill="#6C2BD9" />
                <p className="text-xs font-bold text-gray-800">
                  AI Agent Recommendations
                </p>
              </div>
              <div
                className="rounded-xl p-3 mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
                }}
              >
                <p className="text-[10px] text-white/60 mb-1">
                  Growth Opportunity
                </p>
                <p className="text-xs text-white font-medium leading-relaxed">
                  Proteins who paired this bundle sold 51% more. Similar stores
                  in Pune increased revenue by Campaign with Creative.
                </p>
              </div>
              <button className="w-full bg-[#6C2BD9] text-white text-xs font-bold py-2.5 rounded-full">
                Execute Campaign
              </button>
            </div>

            {/* Key Highlights */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-gray-800">
                  Key Highlights
                </p>
                <button className="text-[11px] text-[#6C2BD9] font-semibold">
                  See Report →
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-emerald-50 rounded-xl p-2.5">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp size={11} color="#10B981" />
                    <span className="text-[9px] font-bold text-emerald-600">
                      High Growth
                    </span>
                  </div>
                  <p className="text-sm font-black text-gray-900">+22%</p>
                  <p className="text-[9px] text-gray-400">
                    Orders/week increase
                  </p>
                </div>
                <div className="bg-violet-50 rounded-xl p-2.5">
                  <div className="flex items-center gap-1 mb-1">
                    <Star size={11} color="#6C2BD9" />
                    <span className="text-[9px] font-bold text-[#6C2BD9]">
                      Category Leader
                    </span>
                  </div>
                  <p className="text-sm font-black text-gray-900">Proteins</p>
                  <p className="text-[9px] text-gray-400">
                    #1 performing category
                  </p>
                </div>
              </div>
            </div>

            {/* Best Sellers */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-gray-800">Best Sellers</p>
                <TrendingUp size={14} color="#6C2BD9" />
              </div>
              <div className="flex flex-col gap-2">
                {bestSellers.map(({ name, sub, img }) => (
                  <div key={name} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <Package size={16} color="#6C2BD9" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-800">{name}</p>
                      <p className="text-[10px] text-gray-400">{sub}</p>
                    </div>
                    <ChevronRight size={14} color="#D1D5DB" />
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Pulse */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-xs font-bold text-gray-800 mb-3">
                Audience Pulse
              </p>
              <div className="grid grid-cols-2 gap-2">
                {audiencePulse.map(({ label, val, sub, icon: Icon }) => (
                  <div
                    key={label}
                    className="bg-violet-50 rounded-xl p-3 text-center"
                  >
                    <Icon size={16} color="#6C2BD9" className="mx-auto mb-1" />
                    <p className="text-[9px] text-gray-400">{label}</p>
                    <p className="text-sm font-black text-gray-900">{val}</p>
                    <p className="text-[9px] text-gray-400">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Control Hub */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-xs font-bold text-gray-800 mb-3">
                Control Hub
              </p>
              <div className="grid grid-cols-2 gap-2">
                {controlHub.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    className="flex flex-col items-center justify-center gap-2 bg-gray-50 border border-gray-100 rounded-xl py-4 text-[11px] font-semibold text-gray-700"
                  >
                    <Icon size={16} color="#6C2BD9" />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
