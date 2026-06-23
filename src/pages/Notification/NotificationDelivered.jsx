import {
  ArrowLeft,
  MoreVertical,
  Megaphone,
  Zap,
  TrendingUp,
  Eye,
  BarChart2,
  PlusCircle,
  Home,
} from "lucide-react";

export default function NotificationDelivered() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3">
            <button>
              <ArrowLeft size={18} color="#6C2BD9" />
            </button>
            <span className="text-base font-bold text-[#6C2BD9]">
              Delivery Status
            </span>
            <MoreVertical size={16} color="#374151" />
          </div>

          <div className="px-4 mt-2">
            {/* Hero illustration */}
            <div className="flex justify-center mb-4">
              <div
                className="w-40 h-40 rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background:
                    "radial-gradient(circle at 50% 35%, #C026D3 0%, #4F1FA8 45%, #0B0414 100%)",
                }}
              >
                <div className="absolute w-20 h-20 rounded-full bg-fuchsia-400/40 blur-xl" />
                <Megaphone size={36} color="white" className="relative z-10" />
              </div>
            </div>
            <h2 className="text-center text-lg font-extrabold text-gray-900 mb-1">
              Notification Delivered 🚀
            </h2>
            <p className="text-center text-xs text-gray-500 mb-5">
              Your message has been sent across the Hittofit ecosystem.
            </p>

            {/* Delivered summary card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#6C2BD9] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Megaphone size={16} color="white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Challenge Reminder
                  </p>
                  <p className="text-[11px] font-bold text-[#6C2BD9]">
                    DELIVERED JUST NOW
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-gray-100">
                <span className="text-xs text-gray-500">Delivery Method</span>
                <span className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
                  Push + In-App
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-t border-gray-100">
                <span className="text-xs text-gray-500">System Status</span>
                <span className="text-[11px] font-bold text-gray-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C2BD9]" />
                  Active Sync
                </span>
              </div>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-2.5 mb-3">
              {[
                ["12,400", "Members"],
                ["280", "Gym Owners"],
                ["540", "Trainers"],
              ].map(([val, label]) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-3 shadow-sm text-center"
                >
                  <p className="text-base font-bold text-[#6C2BD9]">{val}</p>
                  <p className="text-[10px] text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Delivery rate */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm mb-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap size={14} color="#6C2BD9" />
                </div>
                <span className="text-xs font-semibold text-gray-800 flex-1">
                  Delivery rate
                </span>
                <span className="text-sm font-bold text-[#6C2BD9]">98%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full">
                <div
                  className="h-1.5 rounded-full bg-[#6C2BD9]"
                  style={{ width: "98%" }}
                />
              </div>
            </div>

            {/* Engagement expected */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm mb-5 flex items-center gap-3">
              <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp size={14} color="#6C2BD9" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">
                  Engagement Expected
                </p>
                <p className="text-[11px] text-gray-500">
                  Peak interaction within 2 hours
                </p>
              </div>
            </div>

            {/* Action grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { icon: Eye, label: "View Notification" },
                { icon: BarChart2, label: "Delivery Analytics" },
                { icon: PlusCircle, label: "Create Another" },
                { icon: Home, label: "Center Home" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="bg-white rounded-2xl p-3.5 shadow-sm flex flex-col items-start gap-2"
                >
                  <Icon size={18} color="#6C2BD9" />
                  <span className="text-xs font-semibold text-gray-800 text-left">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
