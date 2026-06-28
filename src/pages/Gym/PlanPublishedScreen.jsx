import React from "react";
import {
  ArrowLeft,
  MoreVertical,
  CheckCircle2,
  Megaphone,
  Gift,
  ArrowRight,
  Play,
  Users,
  BarChart2,
  ChevronRight,
  Lightbulb,
  Sparkles,
  Home,
  ShieldCheck,
  TrendingUp,
  User,
} from "lucide-react";

const nextSteps = [
  {
    icon: Play,
    label: "Promote Plan",
    sub: "Broadcast to member app",
  },
  {
    icon: Users,
    label: "View Eligible Members",
    sub: "Check matching profiles",
  },
  {
    icon: BarChart2,
    label: "Track Performance",
    sub: "Monitor conversions",
  },
];

const navItems = [
  { icon: Home, label: "Home" },
  { icon: ShieldCheck, label: "Approvals" },
  { icon: TrendingUp, label: "Insights" },
  { icon: Megaphone, label: "Moderation" },
  { icon: User, label: "Profile", active: true },
];

export default function PlanPublishedScreen() {
  return (
    <div className="font-sans bg-[#F4F3FA] min-h-screen max-w-[420px] mx-auto flex flex-col pb-32">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-2">
        <button className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer">
          <ArrowLeft size={18} color="#6C2BD9" strokeWidth={2.5} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer">
          <MoreVertical size={18} color="#6C2BD9" strokeWidth={2.5} />
        </button>
      </div>

      {/* Hero illustration */}
      <div className="flex flex-col items-center px-6 pt-2 pb-5">
        <div className="w-[200px] h-[200px] bg-white rounded-[28px] flex items-center justify-center shadow-sm mb-5">
          <svg viewBox="0 0 160 160" width="160" height="160">
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ede9fe" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="card1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#6C2BD9" />
              </linearGradient>
              <linearGradient id="card2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" fill="url(#glow)" />
            {/* Platform blocks */}
            <rect
              x="30"
              y="100"
              width="40"
              height="18"
              rx="4"
              fill="#c4b5fd"
              opacity="0.6"
            />
            <rect
              x="90"
              y="105"
              width="35"
              height="14"
              rx="4"
              fill="#a78bfa"
              opacity="0.5"
            />
            <rect
              x="50"
              y="86"
              width="50"
              height="18"
              rx="4"
              fill="#8b5cf6"
              opacity="0.4"
            />
            <rect
              x="40"
              y="72"
              width="35"
              height="16"
              rx="4"
              fill="#7c3aed"
              opacity="0.35"
            />
            <rect
              x="85"
              y="78"
              width="30"
              height="12"
              rx="4"
              fill="#6C2BD9"
              opacity="0.3"
            />
            {/* Main card */}
            <rect
              x="42"
              y="32"
              width="76"
              height="50"
              rx="10"
              fill="url(#card1)"
              opacity="0.92"
            />
            <rect
              x="42"
              y="32"
              width="76"
              height="50"
              rx="10"
              fill="url(#card2)"
              opacity="0.3"
            />
            {/* Card shine */}
            <ellipse
              cx="68"
              cy="44"
              rx="22"
              ry="8"
              fill="white"
              opacity="0.18"
              transform="rotate(-20 68 44)"
            />
            {/* Hittofit text on card */}
            <text
              x="54"
              y="65"
              fontSize="7"
              fill="white"
              fontWeight="bold"
              opacity="0.9"
            >
              HITTOFIT
            </text>
            {/* Card chip */}
            <rect
              x="52"
              y="44"
              width="12"
              height="9"
              rx="2"
              fill="#fde68a"
              opacity="0.7"
            />
          </svg>
        </div>

        <h2 className="text-[16px] font-extrabold text-gray-900 text-center m-0 mb-1">
          Membership Plan Published 🚀
        </h2>
        <p className="text-[12px] text-gray-500 text-center leading-[1.5] m-0 px-4">
          Your new membership offering is now available to your community.
        </p>
      </div>

      {/* Plan card */}
      <div className="mx-4 mb-4">
        <div className="bg-white rounded-2xl px-4 pt-4 pb-4 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <span className="bg-[#DCFCE7] text-[#16A34A] text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wide">
                LIVE
              </span>
              <div className="text-[15px] font-extrabold text-gray-900 mt-1.5">
                Premium Plus
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-[20px] font-extrabold text-[#6C2BD9]">
                  ₹2,999
                </span>
                <span className="text-[11px] text-gray-400 font-medium">
                  / Month
                </span>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#F0EBFF] flex items-center justify-center">
              <User size={16} color="#6C2BD9" strokeWidth={2} />
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-1.5">
            {[
              "Full Gym Access",
              "Private Steam Bath",
              "Unlimited Group Classes",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={13} color="#6C2BD9" strokeWidth={2.2} />
                <span className="text-[11px] text-gray-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Impact */}
      <div className="mx-4 mb-4">
        <div className="text-[9px] font-extrabold text-gray-400 tracking-[1px] uppercase mb-2">
          Business Impact Estimate
        </div>
        <div className="bg-white rounded-2xl px-4 py-4 shadow-sm grid grid-cols-2 gap-3">
          <div>
            <div className="text-[10px] text-gray-400 font-medium mb-0.5">
              Audience
            </div>
            <div className="text-[17px] font-extrabold text-gray-900">
              1,240
            </div>
            <div className="text-[10px] font-semibold text-green-500 mt-0.5">
              ↑ Active Members
            </div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-medium mb-0.5">
              Est. Revenue
            </div>
            <div className="text-[17px] font-extrabold text-gray-900">
              ₹3.7L
            </div>
            <div className="text-[10px] font-semibold text-[#6C2BD9] mt-0.5">
              Monthly Potential
            </div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-medium mb-0.5">
              Growth
            </div>
            <div className="text-[17px] font-extrabold text-gray-900">+12%</div>
            <div className="text-[10px] text-gray-400 mt-0.5">Next Quarter</div>
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-medium mb-0.5">
              Recommended
            </div>
            <div className="text-[14px] font-extrabold text-gray-900 leading-tight">
              Active Members
            </div>
          </div>
        </div>
      </div>

      {/* AI Intelligence */}
      <div className="mx-4 mb-4">
        <div className="flex items-center gap-1.5 mb-2">
          <Sparkles size={12} color="#6C2BD9" strokeWidth={2} />
          <div className="text-[9px] font-extrabold text-gray-400 tracking-[1px] uppercase">
            Hittofit AI Intelligence
          </div>
        </div>

        <div className="bg-[#F0EBFF] rounded-2xl px-4 py-3.5 mb-2">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0">
              <Megaphone size={14} color="#6C2BD9" strokeWidth={2} />
            </div>
            <div>
              <p className="text-[12px] text-gray-800 font-semibold m-0 mb-1 leading-snug">
                Promote this plan to existing Basic members.
              </p>
              <div className="flex items-center gap-1 text-[11px] font-bold text-[#6C2BD9]">
                Suggested Action <ArrowRight size={10} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl px-4 py-3.5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#F0EBFF] flex items-center justify-center flex-shrink-0">
              <Gift size={14} color="#6C2BD9" strokeWidth={2} />
            </div>
            <div>
              <p className="text-[12px] text-gray-800 font-semibold m-0 mb-1 leading-snug">
                Offer a limited-time upgrade bonus.
              </p>
              <div className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
                Suggested Action <ArrowRight size={10} strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Next Steps */}
      <div className="mx-4 mb-5">
        <div className="text-[9px] font-extrabold text-gray-400 tracking-[1px] uppercase mb-2">
          Recommended Next Steps
        </div>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {nextSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className={`flex items-center gap-3 px-4 py-3.5 ${i !== nextSteps.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="w-8 h-8 rounded-full bg-[#F0EBFF] flex items-center justify-center flex-shrink-0">
                  <Icon size={14} color="#6C2BD9" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-bold text-gray-900">
                    {step.label}
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    {step.sub}
                  </div>
                </div>
                <ChevronRight size={14} color="#D1D5DB" strokeWidth={2} />
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mx-4 flex flex-col gap-2.5 mb-3">
        <button className="w-full bg-[#6C2BD9] text-white text-[13px] font-bold py-3.5 rounded-2xl border-none cursor-pointer shadow-[0_6px_20px_rgba(108,43,217,0.35)]">
          View Plan
        </button>
        <button className="w-full bg-[#EDE9FA] text-[#6C2BD9] text-[13px] font-bold py-3.5 rounded-2xl border-none cursor-pointer">
          Create Another Plan
        </button>
        <button className="w-full bg-transparent text-gray-500 text-[12px] font-medium py-2 border-none cursor-pointer">
          Back to Gym Profile
        </button>
      </div>

      {/* Pro Tip */}
      <div className="mx-4 mb-4">
        <div className="bg-[#F8F7FC] rounded-xl px-3.5 py-3 flex items-start gap-2.5">
          <Lightbulb
            size={13}
            color="#9CA3AF"
            strokeWidth={2}
            className="flex-shrink-0 mt-0.5"
          />
          <p className="text-[10.5px] text-gray-500 m-0 leading-[1.55]">
            <span className="font-bold text-gray-700">Pro Tip:</span> Gyms that
            promote new plans within the first 7 days achieve 2.4× higher
            adoption rates.
          </p>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-white border-t border-gray-100 px-2 pt-2 pb-4">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`flex flex-col items-center gap-1 border-none bg-transparent cursor-pointer px-3 py-1 rounded-xl ${item.active ? "bg-[#6C2BD9]" : "bg-transparent"}`}
              >
                <Icon
                  size={18}
                  color={item.active ? "#fff" : "#9CA3AF"}
                  strokeWidth={2}
                />
                <span
                  className={`text-[9px] font-semibold ${item.active ? "text-white" : "text-gray-400"}`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
