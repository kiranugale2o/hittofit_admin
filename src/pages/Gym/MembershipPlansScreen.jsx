import React from "react";
import {
  ArrowLeft,
  Plus,
  Flame,
  Zap,
  ArrowRight,
  Pencil,
  Users,
  BarChart2,
  TrendingUp,
  PlusSquare,
  ArrowLeftRight,
  Megaphone,
  Download,
} from "lucide-react";

const activePlans = [
  {
    name: "PREMIUM PLUS",
    price: "₹2,999",
    period: "/ Month",
    members: 420,
    growth: "+18%",
  },
  {
    name: "PREMIUM ANNUAL",
    price: "₹24,999",
    period: "/ Year",
    members: 180,
    growth: "+12%",
  },
];

const manageActions = [
  {
    label: "Create New Plan",
    icon: PlusSquare,
    tint: "#EDE4FB",
    iconColor: "#6C2BD9",
  },
  {
    label: "Compare Plans",
    icon: ArrowLeftRight,
    tint: "#EDE4FB",
    iconColor: "#6C2BD9",
  },
  {
    label: "Promotional Offer",
    icon: Megaphone,
    tint: "#FEF3E2",
    iconColor: "#F59E0B",
  },
  {
    label: "Export Report",
    icon: Download,
    tint: "#DCFCE7",
    iconColor: "#22C55E",
  },
];

function PlanCard({ plan }) {
  return (
    <div className="bg-white rounded-2xl px-4 py-4 shadow-sm mb-3">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-[11px] font-extrabold text-[#6C2BD9] tracking-[0.5px]">
            {plan.name}
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-[17px] font-extrabold text-gray-900">
              {plan.price}
            </span>
            <span className="text-[11px] text-gray-400 font-medium">
              {plan.period}
            </span>
          </div>
        </div>
        <span className="bg-[#F3EFFE] text-[#6C2BD9] text-[10px] font-semibold px-3 py-1 rounded-full">
          Active
        </span>
      </div>

      <div className="border-t border-gray-100 my-3" />

      <div className="flex justify-between mb-3">
        <div>
          <div className="text-[10px] text-gray-400 font-medium mb-0.5">
            Members
          </div>
          <div className="text-[15px] font-bold text-gray-900">
            {plan.members}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-gray-400 font-medium mb-0.5">
            Growth
          </div>
          <div className="text-[12px] font-bold text-green-500 flex items-center gap-0.5 justify-end">
            {plan.growth}
            <TrendingUp size={11} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div className="flex gap-1.5 items-center">
        {[Pencil, Users, BarChart2].map((Icon, i) => (
          <button
            key={i}
            className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center border-none cursor-pointer flex-shrink-0"
          >
            <Icon size={13} color="#9CA3AF" strokeWidth={2} />
          </button>
        ))}
        <button className="flex-1 h-8 rounded-lg bg-gray-100 flex items-center justify-center gap-1.5 border-none cursor-pointer">
          <BarChart2 size={12} color="#6C2BD9" strokeWidth={2.2} />
          <span className="text-[11px] font-bold text-[#6C2BD9]">
            Performance
          </span>
        </button>
      </div>
    </div>
  );
}

export default function MembershipPlansScreen() {
  return (
    <div className="font-sans bg-[#F6F5FA] min-h-screen max-w-[420px] mx-auto pb-10">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-5 pb-4">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center border-none cursor-pointer">
            <ArrowLeft size={16} color="#6C2BD9" strokeWidth={2.5} />
          </button>
          <div>
            <h1 className="text-[17px] font-extrabold text-gray-900 m-0 leading-tight">
              MembershipPlans
            </h1>
            <div className="text-[11px] text-gray-400 mt-0.5 font-medium">
              FitZone Elite
            </div>
          </div>
        </div>
        <button className="bg-[#6C2BD9] text-white text-[12px] font-bold px-4 py-2 rounded-full flex items-center gap-1 border-none cursor-pointer shadow-md">
          <Plus size={13} strokeWidth={2.8} />
          Add
        </button>
      </div>

      {/* Revenue Hero Card */}
      <div className="px-4">
        <div className="bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-[22px] p-4 pb-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-[10px] font-bold text-white/70 tracking-[1px] uppercase mb-1">
                Monthly Revenue
              </div>
              <div className="text-[32px] font-extrabold text-white leading-none">
                ₹8.2L
              </div>
            </div>
            <div className="bg-white/20 rounded-xl px-3 py-2 text-center">
              <div className="text-white text-[11px] font-semibold leading-snug">
                Premium Plus
                <br />
                Leading
              </div>
            </div>
          </div>

          <div className="flex gap-2.5">
            <div className="flex-1 bg-white/20 rounded-xl px-3 py-2.5">
              <div className="text-[10px] text-white/75 font-semibold mb-0.5">
                Active Plans
              </div>
              <div className="text-[20px] font-extrabold text-white">8</div>
            </div>
            <div className="flex-1 bg-white/20 rounded-xl px-3 py-2.5">
              <div className="text-[10px] text-white/75 font-semibold mb-0.5">
                Subscribers
              </div>
              <div className="text-[20px] font-extrabold text-white">1,240</div>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Insights */}
      <div className="pt-5 pl-4">
        <div className="text-[15px] font-extrabold text-gray-900 mb-2.5">
          Revenue Insights
        </div>
        <div className="flex gap-2.5 overflow-x-auto pr-4 pb-2">
          {[
            {
              icon: Flame,
              iconColor: "#F59E0B",
              title: "Growth Opportunity",
              text: "Introduce a quarterly membership. Predicted retention is 24% higher than monthly tiers.",
            },
            {
              icon: Zap,
              iconColor: "#F59E0B",
              fill: "#F59E0B",
              title: "Retention Alert",
              text: "Annual plans show strongest retention. Consider a discount on annual upgrades.",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="min-w-[170px] max-w-[170px] flex-shrink-0 bg-white rounded-xl p-3 shadow-sm flex flex-col"
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon
                    size={12}
                    color={card.iconColor}
                    strokeWidth={2.2}
                    fill={card.fill || "none"}
                  />
                  <span className="text-[11px] font-bold text-[#6C2BD9] leading-tight">
                    {card.title}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 leading-[1.5] m-0 flex-1">
                  {card.text}
                </p>
                <div className="flex items-center gap-0.5 text-[11px] font-bold text-[#6C2BD9] mt-2">
                  Suggested Action <ArrowRight size={10} strokeWidth={2.5} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Plans */}
      <div className="px-4 pt-5">
        <div className="flex justify-between items-center mb-3">
          <div className="text-[15px] font-extrabold text-gray-900">
            Active Plans
          </div>
          <div className="text-[12px] font-bold text-[#6C2BD9]">View All</div>
        </div>
        {activePlans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>

      {/* Behavioral Insights */}
      <div className="px-4 pt-3">
        <div className="text-[15px] font-extrabold text-gray-900 mb-2.5">
          Behavioral Insights
        </div>
        <div className="flex gap-2.5 mb-2.5">
          {[
            {
              icon: Flame,
              bg: "#FEF3E2",
              iconColor: "#F59E0B",
              text: "Premium Plus has highest retention rate (92%)",
            },
            {
              icon: Zap,
              bg: "#EDE9FA",
              iconColor: "#6C2BD9",
              fill: "#6C2BD9",
              text: "Annual plans growing 4% faster than last month",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex-1 bg-white rounded-xl p-3 shadow-sm">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                  style={{ background: item.bg }}
                >
                  <Icon
                    size={14}
                    color={item.iconColor}
                    strokeWidth={2}
                    fill={item.fill || "none"}
                  />
                </div>
                <p className="text-[11px] text-gray-800 leading-[1.5] m-0 font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-3 shadow-sm flex gap-2.5 items-center">
          <div className="w-8 h-8 rounded-lg bg-[#DCFCE7] flex items-center justify-center flex-shrink-0">
            <TrendingUp size={14} color="#22C55E" strokeWidth={2} />
          </div>
          <p className="text-[11px] text-gray-800 leading-[1.5] m-0 font-medium">
            Evening members prefer premium tiers for extended hours access.
          </p>
        </div>
      </div>

      {/* Manage */}
      <div className="px-4 pt-5">
        <div className="text-[15px] font-extrabold text-gray-900 mb-2.5">
          Manage
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {manageActions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.label}
                className="bg-white rounded-xl py-5 px-3 flex flex-col items-center gap-2.5 shadow-sm cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: action.tint }}
                >
                  <Icon size={18} color={action.iconColor} strokeWidth={1.8} />
                </div>
                <span className="text-[12px] font-semibold text-gray-800 text-center">
                  {action.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
