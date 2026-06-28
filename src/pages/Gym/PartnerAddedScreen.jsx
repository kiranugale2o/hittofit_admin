import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Hourglass,
  CircleDashed,
  ShieldCheck,
  Banknote,
  Users,
  UserCircle,
  StoreIcon,
  Send,
  FileText,
  Lightbulb,
} from "lucide-react";

const onboardingSteps = [
  { label: "Gym Profile Created", status: "done" },
  { label: "Owner Linked", status: "done" },
  { label: "Verification Pending", status: "pending" },
  { label: "Membership Setup Pending", status: "inactive" },
];

const nextSteps = [
  { label: "Verify Gym", icon: ShieldCheck, active: true },
  { label: "Configure Plans", icon: Banknote, active: false },
  { label: "Assign Trainers", icon: Users, active: false },
];

const quickActions = [
  { label: "View Profile", icon: UserCircle },
  { label: "Add Another", icon: StoreIcon },
  { label: "Send Welcome", icon: Send },
  { label: "Create Plan", icon: FileText },
];

function StatusIcon({ status }) {
  if (status === "done") {
    return (
      <div className="w-7 h-7 rounded-full bg-[#6C2BD9] flex items-center justify-center flex-shrink-0">
        <CheckCircle2 size={15} color="#fff" strokeWidth={2.5} fill="#6C2BD9" />
      </div>
    );
  }
  if (status === "pending") {
    return (
      <div className="w-7 h-7 rounded-full bg-[#EDEDF2] flex items-center justify-center flex-shrink-0">
        <Hourglass size={14} color="#9CA3AF" strokeWidth={2} />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 rounded-full bg-[#F1F1F4] flex items-center justify-center flex-shrink-0">
      <CircleDashed size={14} color="#C7C7CF" strokeWidth={2} />
    </div>
  );
}

export default function PartnerAddedScreen() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen max-w-[420px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center gap-3.5 px-5 pt-2 pb-0.5">
        <ArrowLeft size={22} color="#6C2BD9" strokeWidth={2.2} />
        <h1 className="text-[16px] font-bold text-[#6C2BD9] m-0">
          Partner Added
        </h1>
      </div>

      {/* Hero image */}
      <div className="px-5 pt-2">
        <div className="relative rounded-[20px] overflow-hidden h-[280px] bg-[radial-gradient(circle_at_50%_25%,#d9c9f0_0%,#8b6fc9_25%,#4a5a6e_55%,#2c3440_100%)]">
          <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="glow1" cx="50%" cy="30%" r="55%">
                <stop offset="0%" stopColor="#f3edff" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#a98be0" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#2c3440" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="280" fill="url(#glow1)" />
            {Array.from({ length: 14 }).map((_, i) => {
              const angle = (i / 14) * Math.PI * 2;
              const x2 = 200 + Math.cos(angle) * 170;
              const y2 = 175 + Math.sin(angle) * 110;
              return (
                <line
                  key={i}
                  x1="200"
                  y1="175"
                  x2={x2}
                  y2={y2}
                  stroke="#caa9f0"
                  strokeOpacity="0.35"
                  strokeWidth="1"
                />
              );
            })}
            {Array.from({ length: 22 }).map((_, i) => {
              const angle = (i / 22) * Math.PI * 2;
              const dist = 60 + (i % 5) * 30;
              const x = 200 + Math.cos(angle) * dist;
              const y = 175 + Math.sin(angle) * dist * 0.65;
              const r = 3 + (i % 3) * 2;
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={r}
                  fill="#dcc8f7"
                  opacity={0.5 + (i % 3) * 0.15}
                />
              );
            })}
            <g transform="translate(200,150)">
              <polygon
                points="-32,20 0,-30 32,20 0,35"
                fill="#7b4fc9"
                opacity="0.9"
              />
              <polygon
                points="-32,20 0,35 0,-30"
                fill="#9a72e0"
                opacity="0.7"
              />
              <rect
                x="-14"
                y="0"
                width="10"
                height="20"
                fill="#5a3aa8"
                opacity="0.8"
              />
              <rect
                x="4"
                y="0"
                width="10"
                height="20"
                fill="#5a3aa8"
                opacity="0.8"
              />
            </g>
          </svg>
          <div className="absolute bottom-[18px] left-0 right-0 text-center text-white">
            <div className="text-[13px] font-bold tracking-[0.5px]">
              HITTOFIT: CONNECTING YOU
            </div>
            <div className="text-[9.5px] opacity-80 mt-0.5">
              WELLNESS ECOSYSTEM PARTNERSHIP
            </div>
          </div>
        </div>
      </div>

      {/* Success heading */}
      <div className="px-5 pt-5 text-center">
        <h2 className="text-[22px] font-extrabold text-gray-900 m-0">
          Gym Added Successfully 🎉
        </h2>
        <p className="text-[13.5px] text-gray-500 mt-1.5">
          The gym is now part of the Hittofit partner ecosystem.
        </p>
      </div>

      {/* Gym info card */}
      <div className="px-5 pt-5">
        <div className="bg-white rounded-2xl p-[18px] shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[17px] font-bold text-gray-900">
                FitZone Elite
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.5"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                  />
                </svg>
                Pune
              </div>
            </div>
            <span className="bg-[#EDE9FA] text-[#6C2BD9] text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
              Profile Created
            </span>
          </div>

          <div className="border-t border-gray-100 my-3.5" />

          <div className="grid grid-cols-2 gap-3.5">
            <div>
              <div className="text-[10px] font-bold text-gray-400 tracking-[0.5px]">
                OWNER
              </div>
              <div className="text-sm font-semibold text-gray-900 mt-0.5">
                Rahul Sharma
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 tracking-[0.5px]">
                TYPE
              </div>
              <div className="text-sm font-semibold text-gray-900 mt-0.5">
                Fitness Gym
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 tracking-[0.5px]">
                PLANS
              </div>
              <div className="text-sm font-semibold text-gray-900 mt-0.5">
                Monthly + Yearly
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding status card */}
      <div className="px-5 pt-4">
        <div className="bg-white rounded-2xl p-[18px] shadow-sm">
          <div className="text-[15px] font-bold text-gray-900 mb-3.5">
            Onboarding Status
          </div>
          {onboardingSteps.map((step, i) => (
            <div
              key={step.label}
              className={`flex items-center gap-3 ${
                i === onboardingSteps.length - 1 ? "" : "mb-4"
              }`}
            >
              <StatusIcon status={step.status} />
              <span
                className={`text-sm font-semibold ${
                  step.status === "inactive" ? "text-gray-400" : "text-gray-900"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended next steps */}
      <div className="pl-5 pt-5">
        <div className="text-[15px] font-bold text-gray-900 mb-3">
          Recommended Next Steps
        </div>
        <div className="flex gap-2.5 overflow-x-auto pr-5 pb-1">
          {nextSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className={`min-w-[118px] flex-shrink-0 rounded-2xl px-3.5 py-[18px] flex flex-col items-center gap-2.5 ${
                  step.active ? "bg-[#6C2BD9]" : "bg-[#EDE9FA]"
                }`}
              >
                <Icon
                  size={22}
                  color={step.active ? "#fff" : "#6C2BD9"}
                  strokeWidth={2}
                />
                <span
                  className={`text-[13px] font-bold text-center ${
                    step.active ? "text-white" : "text-[#6C2BD9]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick action grid */}
      <div className="px-5 pt-5">
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.label}
                className="bg-white border border-gray-100 rounded-2xl py-5 px-3 flex flex-col items-center gap-2.5 cursor-pointer"
              >
                <Icon size={20} color="#6C2BD9" strokeWidth={1.8} />
                <span className="text-[13px] font-semibold text-gray-900">
                  {action.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pro tip */}
      <div className="px-5 pt-5">
        <div className="bg-[#F5F0FF] rounded-[14px] p-4 flex gap-3 items-start">
          <div className="w-[30px] h-[30px] rounded-full bg-[#6C2BD9] flex items-center justify-center flex-shrink-0">
            <Lightbulb size={15} color="#fff" strokeWidth={2} />
          </div>
          <p className="text-[13px] text-gray-900 m-0 leading-[1.5]">
            <strong>Pro Tip:</strong> Verified gyms receive 3× more member
            inquiries than incomplete profiles.
          </p>
        </div>
      </div>
    </div>
  );
}
