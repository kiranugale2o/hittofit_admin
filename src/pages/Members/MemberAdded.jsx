import {
  X,
  MoreVertical,
  MapPin,
  Sparkles,
  MessageSquareText,
  Gift,
  Smartphone,
  Trophy,
  ChevronRight,
  UserCircle2,
  UserPlus,
  BellRing,
  Home,
} from "lucide-react";

export default function MemberAdded() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-10">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3 bg-white border-b border-gray-100">
            <div className="flex items-center gap-3">
              <button className="w-7 h-7 flex items-center justify-center">
                <X size={18} color="#374151" />
              </button>
              <span className="text-sm font-bold text-[#6C2BD9]">
                Member Added
              </span>
            </div>
            <button className="w-7 h-7 flex items-center justify-center">
              <MoreVertical size={16} color="#9CA3AF" />
            </button>
          </div>

          <div className="px-4 pt-4">
            {/* Success Hero Banner */}
            <div
              className="relative rounded-2xl p-5 mb-4 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #2A2438 0%, #1C1828 100%)",
              }}
            >
              <div
                className="absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-20"
                style={{ background: "#6C2BD9" }}
              />
              <div
                className="absolute right-8 bottom-2 w-16 h-16 rounded-full opacity-10"
                style={{ background: "#A78BFA" }}
              />
              <p className="text-xl font-extrabold text-white leading-tight mb-1 relative z-10">
                Member Added
                <br />
                Successfully 🎉
              </p>
              <p className="text-[11px] text-gray-300 relative z-10 mt-2 max-w-[80%]">
                The member is now part of the Hittofit ecosystem.
              </p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/72?img=12"
                    alt="Rahul"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Rahul Sharma
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[9px] font-bold bg-[#6C2BD9] text-white px-2 py-0.5 rounded-full">
                        Premium Plus Member
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-[9px] font-bold bg-green-50 text-green-600 px-2 py-1 rounded-full">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 mb-1">
                    LOCATION
                  </p>
                  <div className="flex items-center gap-1">
                    <MapPin size={11} color="#6C2BD9" />
                    <span className="text-xs font-semibold text-gray-700">
                      Pune
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 mb-1">
                    INTERESTS
                  </p>
                  <div className="flex gap-1">
                    <span className="text-[9px] font-bold bg-violet-50 text-[#6C2BD9] px-2 py-0.5 rounded-full">
                      Weight Loss
                    </span>
                    <span className="text-[9px] font-bold bg-violet-50 text-[#6C2BD9] px-2 py-0.5 rounded-full">
                      Running
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Tip */}
            <div className="bg-violet-50 rounded-2xl p-3.5 mb-5 flex items-start gap-2.5">
              <Sparkles
                size={15}
                color="#6C2BD9"
                className="mt-0.5 flex-shrink-0"
              />
              <div>
                <p className="text-[10px] font-bold text-[#6C2BD9] mb-0.5">
                  Growth Tip
                </p>
                <p className="text-[11px] text-violet-700 leading-snug">
                  Members who receive a welcome message are 28% more likely to
                  complete their first challenge.
                </p>
              </div>
            </div>

            {/* Recommended Next Steps */}
            <p className="text-xs font-bold text-gray-800 mb-2 px-1">
              Recommended Next Steps
            </p>
            <div className="bg-white rounded-2xl shadow-sm mb-5 overflow-hidden">
              {[
                {
                  icon: MessageSquareText,
                  label: "Send Welcome Message",
                },
                {
                  icon: Gift,
                  label: "Assign Welcome Offer",
                },
                {
                  icon: Smartphone,
                  label: "Send App Introduction",
                },
                {
                  icon: Trophy,
                  label: "Recommend First Challenge",
                },
              ].map(({ icon: Icon, label }, idx) => (
                <button
                  key={label}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 ${
                    idx !== 3 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} color="#6C2BD9" />
                  </div>
                  <span className="flex-1 text-left text-xs font-semibold text-gray-800">
                    {label}
                  </span>
                  <ChevronRight size={14} color="#C4B5FD" />
                </button>
              ))}
            </div>

            {/* Quick Actions */}
            <p className="text-xs font-bold text-gray-800 mb-2 px-1">
              Quick Actions
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { icon: UserCircle2, label: "View Member Profile" },
                { icon: UserPlus, label: "Add Another Member" },
                { icon: BellRing, label: "Send Welcome Notification" },
                { icon: Home, label: "Back to Members List" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="bg-white rounded-2xl shadow-sm py-4 flex flex-col items-center gap-2"
                >
                  <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center">
                    <Icon size={16} color="#6C2BD9" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-700 text-center leading-tight px-2">
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
