import {
  ArrowLeft,
  ChevronDown,
  Check,
  Home,
  BarChart2,
  Lightbulb,
  Bell,
  User,
} from "lucide-react";
import { useState } from "react";

const plans = [
  {
    id: "basic",
    label: "Basic",
    sub: "Lobby access only",
    icon: "🏠",
    color: "bg-gray-100",
  },
  {
    id: "premium",
    label: "Premium",
    sub: "All Access + PT Sessions",
    icon: "⭐",
    color: "bg-amber-50",
  },
  {
    id: "premium_plus",
    label: "Premium Plus",
    sub: "Elite Perks & Recovery",
    icon: "💎",
    color: "bg-violet-50",
  },
];

const interests = [
  "Weight Loss",
  "Muscle Gain",
  "Yoga",
  "Running",
  "CrossFit",
  "Nutrition",
];

export default function AddMember() {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [selectedInterests, setSelectedInterests] = useState([
    "Weight Loss",
    "Muscle Gain",
    "Yoga",
    "Running",
  ]);

  const toggleInterest = (tag) =>
    setSelectedInterests((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-32">
          {/* Top Bar */}
          <div className="flex items-center gap-3 px-4 pt-5 pb-3 bg-white border-b border-gray-100">
            <button className="w-7 h-7 flex items-center justify-center">
              <ArrowLeft size={18} color="#374151" />
            </button>
            <span className="text-sm font-bold text-gray-900">Add Member</span>
          </div>

          <div className="px-4 pt-4">
            {/* Section label */}
            <p className="text-xs font-bold text-gray-800 mb-0.5">
              Member Profile
            </p>
            <p className="text-[11px] text-gray-400 mb-4">
              Create a new member profile for the Hittofit community.
            </p>

            {/* Profile Preview Card */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm mb-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://i.pravatar.cc/72?img=12"
                  alt="Rahul"
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Rahul Sharma
                  </p>
                  <p className="text-[11px] text-gray-400">New Delhi, India</p>
                </div>
              </div>
              <div className="bg-violet-50 rounded-xl px-3 py-2">
                <p className="text-[9px] font-bold text-gray-400 mb-1">
                  SELECTED PLAN
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-[#6C2BD9] rounded-full flex items-center justify-center">
                      <span className="text-[9px]">⭐</span>
                    </div>
                    <span className="text-xs font-bold text-[#6C2BD9]">
                      Premium Membership
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <span className="text-[9px] font-bold bg-[#6C2BD9] text-white px-2 py-0.5 rounded-full">
                      Running
                    </span>
                    <span className="text-[9px] font-bold bg-[#6C2BD9] text-white px-2 py-0.5 rounded-full">
                      Yoga
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* General Information */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-[11px] font-bold text-gray-500 mb-3 tracking-wide">
                ✦ General Information
              </p>

              {/* Full Name */}
              <div className="mb-3">
                <p className="text-[10px] font-semibold text-gray-400 mb-1">
                  FULL NAME
                </p>
                <input
                  defaultValue="Rahul Sharma"
                  className="w-full text-sm font-semibold text-gray-800 bg-gray-50 rounded-xl px-3 py-2.5 outline-none border border-gray-100 focus:border-[#6C2BD9]"
                />
              </div>

              {/* Mobile + Gender */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 mb-1">
                    MOBILE NUMBER
                  </p>
                  <input
                    defaultValue="+91 98765 43210"
                    className="w-full text-xs text-gray-700 bg-gray-50 rounded-xl px-3 py-2.5 outline-none border border-gray-100"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 mb-1">
                    GENDER
                  </p>
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                    <span className="text-xs text-gray-700">Male</span>
                    <ChevronDown size={13} color="#9CA3AF" />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <p className="text-[10px] font-semibold text-gray-400 mb-1">
                  EMAIL ADDRESS
                </p>
                <input
                  placeholder="rahul.sharma@example.com (Optional)"
                  className="w-full text-xs text-gray-400 bg-gray-50 rounded-xl px-3 py-2.5 outline-none border border-gray-100 focus:border-[#6C2BD9] placeholder:text-gray-300"
                />
              </div>
            </div>

            {/* Choose Plan */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-[11px] font-bold text-gray-500 mb-3 tracking-wide">
                ✦ Choose Plan
              </p>
              <div className="flex flex-col gap-2">
                {plans.map(({ id, label, sub, icon, color }) => {
                  const active = selectedPlan === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setSelectedPlan(id)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 border-2 transition-all ${
                        active
                          ? "border-[#6C2BD9] bg-violet-50"
                          : "border-transparent bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center text-base`}
                      >
                        {icon}
                      </div>
                      <div className="flex-1 text-left">
                        <p
                          className={`text-xs font-bold ${active ? "text-[#6C2BD9]" : "text-gray-800"}`}
                        >
                          {label}
                        </p>
                        <p className="text-[10px] text-gray-400">{sub}</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          active
                            ? "border-[#6C2BD9] bg-[#6C2BD9]"
                            : "border-gray-300"
                        }`}
                      >
                        {active && (
                          <Check size={11} color="white" strokeWidth={3} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* State & City */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 mb-1">
                    STATE
                  </p>
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                    <span className="text-xs text-gray-700">Delhi</span>
                    <ChevronDown size={13} color="#9CA3AF" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 mb-1">
                    CITY
                  </p>
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                    <span className="text-xs text-gray-700">New Delhi</span>
                    <ChevronDown size={13} color="#9CA3AF" />
                  </div>
                </div>
              </div>
            </div>

            {/* Interests & Goals */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
              <p className="text-[11px] font-bold text-gray-500 mb-3 tracking-wide">
                ✦ Interests & Goals
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((tag) => {
                  const active = selectedInterests.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleInterest(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        active
                          ? "bg-[#6C2BD9] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-4 border-t border-gray-100 shadow-lg">
          <button
            className="w-full py-3.5 rounded-2xl text-sm font-bold text-white mb-2"
            style={{
              background: "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
            }}
          >
            Create Member →
          </button>
          <button className="w-full text-xs font-semibold text-gray-400 py-1">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
}
