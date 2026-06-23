import {
  Home,
  CheckSquare,
  BarChart2,
  Shield,
  User,
  ChevronLeft,
  MoreVertical,
  Eye,
  Share2,
  Activity,
  LayoutDashboard,
  Rocket,
  Radio,
} from "lucide-react";

function BottomNav({ active = "profile" }) {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "approvals", icon: CheckSquare, label: "Approvals" },
    { id: "insights", icon: BarChart2, label: "Insights" },
    { id: "moderation", icon: Shield, label: "Moderation" },
    { id: "profile", icon: User, label: "Profile" },
  ];
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 flex z-50">
      {tabs.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          className={`flex-1 flex flex-col items-center py-3 gap-0.5 ${active === id ? "text-[#6C2BD9]" : "text-gray-400"}`}
        >
          {active === id ? (
            <div className="bg-[#6C2BD9] rounded-full p-1.5">
              <Icon size={18} color="white" />
            </div>
          ) : (
            <Icon size={20} />
          )}
          <span
            className={`text-[10px] font-medium ${active === id ? "text-[#6C2BD9]" : "text-gray-400"}`}
          >
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}

export default function CampaignSuccessScreen() {
  return (
    <div className="flex justify-center bg-gray-200 min-h-screen">
      <div className="relative w-full max-w-sm bg-white min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3 border-b border-gray-100">
            <button className="flex items-center gap-1 text-gray-600">
              <ChevronLeft size={20} />
            </button>
            <span className="text-sm font-bold text-[#6C2BD9]">
              Campaign Success
            </span>
            <MoreVertical size={18} color="#6B7280" />
          </div>

          <div className="px-4">
            {/* Success Illustration */}
            <div className="flex flex-col items-center py-8">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mb-4">
                <Rocket size={36} color="#6C2BD9" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Campaign Launched 🚀
              </h2>
              <p className="text-xs text-gray-500 text-center px-8">
                Your campaign is now live across the Hittofit ecosystem.
              </p>
            </div>

            {/* Live Badge */}
            <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-green-600">
                  LIVE NOW
                </span>
              </div>
              <p className="text-sm font-bold text-gray-900 mb-0.5">
                Summer Fitness Challenge
              </p>
              <p className="text-xs text-gray-500">
                Strategic engagement drive for seasonal wellness
              </p>
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 tracking-wide">
                    VISIBLE TO
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    12,400 Members
                  </p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 tracking-wide">
                    STARTS
                  </p>
                  <p className="text-sm font-bold text-gray-900">Tomorrow</p>
                </div>
              </div>
            </div>

            {/* Reach Projection */}
            <div className="border border-gray-200 rounded-xl p-3 mb-3 flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Radio size={15} color="#F97316" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  Reach Projection
                </p>
                <p className="text-xs text-[#6C2BD9] font-semibold">
                  Expected reach: 18,000+
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-3 mb-5 flex items-start gap-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity size={15} color="#F59E0B" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">
                  Conversion Signal
                </p>
                <p className="text-xs text-[#6C2BD9] font-semibold">
                  High engagement potential (+22%)
                </p>
              </div>
            </div>

            {/* Immediate Actions */}
            <p className="text-[9px] font-bold text-gray-500 tracking-widest mb-3">
              IMMEDIATE ACTIONS
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Eye, label: "View Campaign" },
                { icon: Share2, label: "Share Campaign" },
                { icon: Activity, label: "Track Performance" },
                { icon: LayoutDashboard, label: "Back to Dashboard" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition"
                >
                  <div className="w-9 h-9 bg-violet-50 rounded-full flex items-center justify-center">
                    <Icon size={17} color="#6C2BD9" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-700 text-center leading-tight">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <BottomNav active="profile" />
      </div>
    </div>
  );
}
