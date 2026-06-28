import React from "react";
import {
  ArrowLeft,
  Search,
  MoreVertical,
  ShieldCheck,
  MapPin,
  Calendar,
  Tag,
  Phone,
  MessageCircle,
  Mail,
  Sparkles,
  Lightbulb,
  ArrowUpCircle,
  Users,
  Swords,
  Eye,
  Star,
  ParkingCircle,
  Waves,
  Lock,
  UsersRound,
  Droplets,
  TrendingUp,
  Clock,
  Repeat,
  Megaphone,
  LineChart,
  StickyNote,
  UserCog,
} from "lucide-react";

const stats = [
  { label: "MEMBERS", value: "1,240", icon: Users },
  { label: "TRAINERS", value: "18", icon: Swords },
  { label: "MONTHLY VISITS", value: "2,800", icon: Eye },
  {
    label: "RATING",
    value: "4.8",
    icon: Star,
    tint: "#FEF3E2",
    iconColor: "#F59E0B",
  },
];

const facilities = [
  { label: "Parking", icon: ParkingCircle },
  { label: "Steam Bath", icon: Droplets },
  { label: "Locker Room", icon: Lock },
  { label: "Group Classes", icon: UsersRound },
  { label: "Swimming Pool", icon: Waves },
];

const trainers = [
  { name: "Amit Patel", role: "Strength Coach" },
  { name: "Sarah J.", role: "Yoga Specialist" },
  { name: "Vikram Singh", role: "CrossFit Trainer" },
];

const performance = [
  {
    label: "MoM New Memberships",
    value: "+18% Growth",
    icon: TrendingUp,
    color: "#22C55E",
  },
  {
    label: "Peak Activity Window",
    value: "6PM – 9PM",
    icon: Clock,
    color: "#6C2BD9",
  },
  {
    label: "Annual Member Loyalty",
    value: "92% Retention",
    icon: Repeat,
    color: "#6C2BD9",
  },
];

const quickActions = [
  { label: "Verify Gym", icon: ShieldCheck },
  { label: "Manage Plans", icon: Tag },
  { label: "Manage Trainers", icon: UserCog },
  { label: "Announcement", icon: Megaphone },
  { label: "Performance", icon: LineChart },
  { label: "Add CRM Note", icon: StickyNote },
];

function StatCard({ stat }) {
  const Icon = stat.icon;
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div
        className="w-[34px] h-[34px] rounded-[10px] flex items-center justify-center mb-2.5"
        style={{ background: stat.tint || "#EDE9FA" }}
      >
        <Icon size={16} color={stat.iconColor || "#6C2BD9"} strokeWidth={2} />
      </div>
      <div className="text-[11px] font-bold text-gray-400 tracking-[0.4px]">
        {stat.label}
      </div>
      <div className="text-[19px] font-extrabold text-gray-900 mt-0.5">
        {stat.value}
      </div>
    </div>
  );
}

export default function GymProfileScreen() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen max-w-[420px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-3.5">
          <ArrowLeft size={22} color="#6C2BD9" strokeWidth={2.2} />
          <h1 className="text-[18px] font-extrabold text-[#6C2BD9] m-0">
            Gym Profile
          </h1>
        </div>
        <div className="flex gap-4">
          <Search size={20} color="#111827" strokeWidth={2} />
          <MoreVertical size={20} color="#111827" strokeWidth={2} />
        </div>
      </div>

      {/* Hero image */}
      <div className="px-5 pt-1">
        <div className="relative rounded-[20px] overflow-hidden h-[200px] bg-[linear-gradient(180deg,#3a2f4a_0%,#6b5a73_45%,#c9a876_100%)]">
          <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full">
            <rect width="400" height="200" fill="#caa57a" opacity="0.3" />
            {Array.from({ length: 6 }).map((_, i) => (
              <rect
                key={i}
                x={20 + i * 65}
                y="60"
                width="8"
                height="110"
                fill="#2a2230"
                opacity="0.5"
              />
            ))}
            <rect
              x="0"
              y="150"
              width="400"
              height="50"
              fill="#1a1622"
              opacity="0.4"
            />
          </svg>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_30%,rgba(0,0,0,0.55)_100%)]" />
          <div className="absolute top-3.5 left-3.5 flex gap-2">
            <span className="bg-[#6C2BD9] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-2xl flex items-center gap-1">
              <ShieldCheck size={12} strokeWidth={2.3} /> Verified Partner
            </span>
            <span className="bg-[#22C55E] text-white text-[11px] font-bold px-3 py-1.5 rounded-2xl">
              Active
            </span>
          </div>
          <div className="absolute bottom-3.5 left-4 text-white">
            <div className="text-[18px] font-extrabold">FitZone Elite</div>
            <div className="flex items-center gap-3.5 mt-1.5 text-xs">
              <span className="flex items-center gap-1">
                <MapPin size={12} strokeWidth={2.2} /> Pune
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} strokeWidth={2.2} /> Joined: Jan 2026
              </span>
            </div>
            <span className="flex items-center gap-1 mt-1 text-xs">
              <Tag size={12} strokeWidth={2.2} /> Partner Since: 8 Months
            </span>
          </div>
        </div>
      </div>

      {/* Owner card */}
      <div className="px-5 pt-4">
        <div className="bg-white rounded-2xl p-[18px] shadow-sm flex flex-col items-center">
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#6C2BD9] to-[#4A1BA0] flex items-center justify-center">
            <span className="text-white text-[22px] font-bold">RS</span>
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#6C2BD9] border-2 border-white flex items-center justify-center">
              <ShieldCheck size={11} color="#fff" strokeWidth={2.5} />
            </div>
          </div>
          <div className="text-[16px] font-bold text-gray-900 mt-3">
            Rahul Sharma
          </div>
          <div className="text-[12.5px] text-gray-500 mt-0.5">
            Owner &amp; Manager
          </div>
          <div className="flex gap-2.5 mt-4 w-full">
            {[
              { label: "Call", icon: Phone },
              { label: "Chat", icon: MessageCircle },
              { label: "Mail", icon: Mail },
            ].map((btn) => {
              const Icon = btn.icon;
              return (
                <div
                  key={btn.label}
                  className="flex-1 bg-gray-50 border border-gray-100 rounded-xl py-2.5 flex flex-col items-center gap-1.5"
                >
                  <Icon size={16} color="#6C2BD9" strokeWidth={2} />
                  <span className="text-xs font-semibold text-gray-900">
                    {btn.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="px-5 pt-3.5">
        <div className="bg-gradient-to-br from-[#6C2BD9] to-[#4A1BA0] rounded-2xl p-[18px] relative overflow-hidden">
          <div className="flex items-center gap-1.5 text-[12.5px] font-bold text-white tracking-[0.4px] mb-3.5">
            <Sparkles size={14} strokeWidth={2.2} /> AI INSIGHTS
          </div>
          {[
            {
              icon: Lightbulb,
              text: "Suggest: Add more evening sessions based on 6PM peak.",
            },
            {
              icon: ArrowUpCircle,
              text: "Upgrade candidate for featured listing in Pune West.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`flex gap-2.5 items-start ${i === 0 ? "mb-3" : ""}`}
              >
                <Icon
                  size={16}
                  color="#fff"
                  strokeWidth={2}
                  className="flex-shrink-0 mt-0.5"
                />
                <p className="text-[13px] text-white m-0 leading-[1.5]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stat grid */}
      <div className="px-5 pt-4">
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>

      {/* Membership Plans preview */}
      <div className="pl-5 pt-5">
        <div className="flex justify-between items-center pr-5 mb-3">
          <div className="text-[16px] font-extrabold text-gray-900">
            Membership Plans
          </div>
          <div className="text-[13px] font-bold text-[#6C2BD9] flex items-center gap-0.5">
            View All →
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pr-5 pb-1">
          <div className="min-w-[150px] flex-shrink-0 bg-white rounded-2xl p-4 shadow-sm">
            <div className="text-[13.5px] text-gray-500 font-semibold">
              Basic
            </div>
            <div className="text-[17px] font-extrabold text-gray-900 mt-1">
              $29 <span className="text-xs font-medium text-gray-500">/mo</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2">
              <Users size={13} strokeWidth={2} /> 450 Members
            </div>
            <button className="w-full mt-3.5 bg-gray-100 border-none rounded-[10px] py-2.5 text-[12.5px] font-bold text-gray-900 cursor-pointer">
              Manage Plan
            </button>
          </div>
          <div className="min-w-[150px] flex-shrink-0 bg-gradient-to-br from-[#6C2BD9] to-[#4A1BA0] rounded-2xl p-4">
            <div className="text-[13.5px] text-white/85 font-semibold">
              Premium
            </div>
            <div className="text-[17px] font-extrabold text-white mt-1">
              $79 <span className="text-xs font-medium text-white/80">/mo</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-white/85 mt-2">
              <Users size={13} strokeWidth={2} /> 620 Members
            </div>
            <button className="w-full mt-3.5 bg-white/20 border-none rounded-[10px] py-2.5 text-[12.5px] font-bold text-white cursor-pointer">
              Manage Plan
            </button>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="px-5 pt-6">
        <div className="text-[16px] font-extrabold text-gray-900 mb-3">
          Facilities
        </div>
        <div className="flex flex-wrap gap-2.5">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-[20px] px-3.5 py-2.5"
              >
                <Icon size={14} color="#6C2BD9" strokeWidth={2} />
                <span className="text-[12.5px] font-semibold text-gray-900">
                  {f.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trainers */}
      <div className="pl-5 pt-[22px]">
        <div className="flex justify-between items-center pr-5 mb-3">
          <div className="text-[16px] font-extrabold text-gray-900">
            Trainers
          </div>
          <div className="text-[13px] font-bold text-[#6C2BD9]">View All →</div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm pr-5 overflow-hidden">
          {trainers.map((t, i) => (
            <div
              key={t.name}
              className={`flex items-center gap-3 px-4 py-3.5 ${i !== trainers.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#EDE9FA] flex items-center justify-center flex-shrink-0">
                <span className="text-[13px] font-bold text-[#6C2BD9]">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance */}
      <div className="px-5 pt-[22px]">
        <div className="text-[16px] font-extrabold text-gray-900 mb-3">
          Performance
        </div>
        <div className="bg-white rounded-2xl shadow-sm px-4 py-1.5">
          {performance.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className={`flex items-center gap-3 py-3 ${i !== performance.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <div className="w-[34px] h-[34px] rounded-[10px] bg-[#EDE9FA] flex items-center justify-center flex-shrink-0">
                  <Icon size={16} color={p.color} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: p.color }}>
                    {p.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{p.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick actions */}
      <div className="px-5 pt-[22px]">
        <div className="text-[16px] font-extrabold text-gray-900 mb-3">
          Quick Actions
        </div>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.label}
                className="bg-white border border-gray-100 rounded-2xl py-[18px] px-3 flex flex-col items-center gap-2.5"
              >
                <Icon size={19} color="#6C2BD9" strokeWidth={1.8} />
                <span className="text-[12.5px] font-semibold text-gray-900 text-center">
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
