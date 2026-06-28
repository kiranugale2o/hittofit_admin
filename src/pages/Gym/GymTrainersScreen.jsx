import React from "react";
import {
  ArrowLeft,
  Search,
  Plus,
  Star,
  Users,
  MoreVertical,
  Trophy,
  TrendingUp,
  UserPlus,
  Play,
  ArrowLeftRight,
  Award,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Home,
  ShieldCheck,
  Megaphone,
  User,
  Zap,
} from "lucide-react";

const trainers = [
  {
    name: "Amit Patel",
    role: "Strength Coach",
    rating: 4.9,
    clients: 412,
    badge: "TOP PERFORMER",
    badgeColor: "#6C2BD9",
    badgeBg: "#EDE9FA",
    online: true,
    initials: "AP",
    bg: "from-[#374151] to-[#1F2937]",
  },
  {
    name: "Neha Sharma",
    role: "Yoga Specialist",
    rating: 4.8,
    clients: 220,
    badge: "FASTEST GROWING",
    badgeColor: "#059669",
    badgeBg: "#DCFCE7",
    online: true,
    initials: "NS",
    bg: "from-[#92400E] to-[#78350F]",
  },
];

const quickActions = [
  { icon: UserPlus, label: "Assign Trainer" },
  { icon: Play, label: "Send Team Update" },
  { icon: ArrowLeftRight, label: "Compare Trainers" },
  { icon: Award, label: "Reward Performer" },
];

const aiInsights = [
  {
    title: "Resource Alert",
    text: "Evening coaching slots are at 98% capacity. Consider adding one more Yoga Trainer to balance load.",
    action: "Suggested Action: View Candidates",
    titleColor: "#6C2BD9",
  },
  {
    title: "Revenue Opportunity",
    text: "Personal training packages are growing 22% faster than memberships. Promote premium slots.",
    action: "Suggested Action: Adjust Pricing",
    titleColor: "#6C2BD9",
  },
];

const navItems = [
  { icon: Home, label: "Home" },
  { icon: ShieldCheck, label: "Approvals" },
  { icon: TrendingUp, label: "Insights" },
  { icon: Megaphone, label: "Moderation" },
  { icon: User, label: "Profile", active: true },
];

export default function GymTrainersScreen() {
  return (
    <div className="font-sans bg-[#F4F3FA] min-h-screen max-w-[420px] mx-auto pb-24">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-3">
        <div className="flex items-center gap-2.5">
          <button className="w-7 h-7 flex items-center justify-center bg-transparent border-none cursor-pointer">
            <ArrowLeft size={17} color="#6C2BD9" strokeWidth={2.5} />
          </button>
          <div>
            <h1 className="text-[17px] font-extrabold text-[#6C2BD9] m-0 leading-tight">
              Gym Trainers
            </h1>
            <div className="text-[10px] font-bold text-gray-400 tracking-[0.5px] uppercase mt-0.5">
              FitZone Elite
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <button className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer">
            <Search size={17} color="#374151" strokeWidth={2} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#6C2BD9] flex items-center justify-center border-none cursor-pointer">
            <Plus size={16} color="#fff" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Stats Hero */}
      <div className="mx-4 mb-4">
        <div className="bg-[#6C2BD9] rounded-2xl px-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] text-white/70 font-medium mb-1">
                Active Trainers
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[22px] font-extrabold text-white">
                  18
                </span>
                <span className="bg-white/20 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                  +2
                </span>
              </div>
            </div>
            <div>
              <div className="text-[10px] text-white/70 font-medium mb-1">
                Total Clients
              </div>
              <div className="text-[22px] font-extrabold text-white">1,240</div>
            </div>
            <div>
              <div className="text-[10px] text-white/70 font-medium mb-1">
                Average Rating
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[22px] font-extrabold text-white">
                  4.8
                </span>
                <Star
                  size={14}
                  color="#FCD34D"
                  fill="#FCD34D"
                  strokeWidth={0}
                />
              </div>
            </div>
            <div>
              <div className="text-[10px] text-white/70 font-medium mb-1">
                Monthly Growth
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[22px] font-extrabold text-white">
                  +12%
                </span>
                <TrendingUp size={16} color="#4ADE80" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trainer Insights */}
      <div className="px-4 mb-4">
        <div className="flex justify-between items-center mb-2.5">
          <div className="text-[14px] font-extrabold text-gray-900">
            Trainer Insights
          </div>
          <div className="text-[11px] font-bold text-[#6C2BD9]">
            View Analytics
          </div>
        </div>
        <div className="flex gap-2.5 overflow-x-auto pb-1">
          {[
            {
              icon: Zap,
              iconBg: "#EDE9FA",
              iconColor: "#6C2BD9",
              title: "Top Trainer Generated",
              value: "32%",
              sub: "of bookings",
            },
            {
              icon: TrendingUp,
              iconBg: "#FEF3E2",
              iconColor: "#F59E0B",
              title: "Strength",
              value: "Most",
              sub: "popular category",
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="min-w-[155px] bg-white rounded-xl p-3 shadow-sm flex-shrink-0"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-2"
                  style={{ background: card.iconBg }}
                >
                  <Icon size={15} color={card.iconColor} strokeWidth={2} />
                </div>
                <div className="text-[10px] text-gray-500 font-medium">
                  {card.title}
                </div>
                <div className="text-[16px] font-extrabold text-gray-900">
                  {card.value}
                </div>
                <div className="text-[10px] text-gray-400">{card.sub}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Assigned Trainers */}
      <div className="px-4 mb-4">
        <div className="flex justify-between items-center mb-2.5">
          <div className="text-[14px] font-extrabold text-gray-900">
            Assigned Trainers
          </div>
          <span className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-2.5 py-1 rounded-full">
            18 Total
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="bg-white rounded-2xl px-4 py-3.5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${trainer.bg} flex items-center justify-center`}
                  >
                    <span className="text-white text-[13px] font-bold">
                      {trainer.initials}
                    </span>
                  </div>
                  {trainer.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[13px] font-extrabold text-gray-900">
                        {trainer.name}
                      </div>
                      <div className="text-[10px] text-gray-400 font-medium mt-0.5">
                        {trainer.role}
                      </div>
                    </div>
                    <button className="border-none bg-transparent cursor-pointer">
                      <MoreVertical size={15} color="#9CA3AF" strokeWidth={2} />
                    </button>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5">
                    <div className="flex items-center gap-1">
                      <Star
                        size={11}
                        color="#F59E0B"
                        fill="#F59E0B"
                        strokeWidth={0}
                      />
                      <span className="text-[11px] font-bold text-gray-700">
                        {trainer.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={11} color="#9CA3AF" strokeWidth={2} />
                      <span className="text-[11px] text-gray-500">
                        {trainer.clients} Clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3">
                <span
                  className="text-[9px] font-extrabold px-2.5 py-1 rounded-full tracking-wide flex items-center gap-1"
                  style={{
                    color: trainer.badgeColor,
                    background: trainer.badgeBg,
                  }}
                >
                  {trainer.badge === "TOP PERFORMER" ? (
                    <Trophy size={9} strokeWidth={2} />
                  ) : (
                    <TrendingUp size={9} strokeWidth={2} />
                  )}
                  {trainer.badge}
                </span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#6C2BD9]">
                  View Trainer <ArrowRight size={11} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-4">
        <div className="text-[14px] font-extrabold text-gray-900 mb-2.5">
          Quick Actions
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.label}
                className="bg-white rounded-2xl py-5 px-3 flex flex-col items-center gap-2.5 shadow-sm cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-[#F0EBFF] flex items-center justify-center">
                  <Icon size={18} color="#6C2BD9" strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-semibold text-gray-800 text-center">
                  {action.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Ecosystem Insights */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-1.5 mb-2.5">
          <Sparkles size={13} color="#6C2BD9" strokeWidth={2} />
          <div className="text-[14px] font-extrabold text-gray-900">
            AI Ecosystem Insights
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {aiInsights.map((insight, i) => (
            <div key={i} className="bg-white rounded-2xl px-4 py-3.5 shadow-sm">
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <div
                    className="text-[12px] font-extrabold mb-1"
                    style={{ color: insight.titleColor }}
                  >
                    {insight.title}
                  </div>
                  <p className="text-[11px] text-gray-600 leading-[1.55] m-0 mb-2">
                    {insight.text}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#6C2BD9]">
                    {insight.action} <ArrowRight size={10} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#F0EBFF] flex items-center justify-center flex-shrink-0">
                  <Sparkles size={14} color="#6C2BD9" strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
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
                className={`flex flex-col items-center gap-1 border-none cursor-pointer px-3 py-1.5 rounded-xl ${item.active ? "bg-[#6C2BD9]" : "bg-transparent"}`}
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
