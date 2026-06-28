import React from "react";
import {
  ArrowLeft,
  MoreVertical,
  BadgeCheck,
  MapPin,
  Users,
  Star,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  FileEdit,
  Zap,
  ShieldCheck,
  Megaphone,
  FilePlus,
  BarChart3,
  Ban,
} from "lucide-react";

const RELATIONSHIP = [
  { label: "Partner Since", value: "Jan 2026", color: "text-gray-900" },
  { label: "Last Active", value: "2 hours ago", color: "text-gray-900" },
  { label: "Featured Listing", value: "Yes", color: "text-[#6C2BD9]" },
  { label: "Growth Phase", value: "Healthy Growth", color: "text-emerald-500" },
];

const ACTIVITY = [
  {
    icon: Sparkles,
    title: "New milestone achieved",
    desc: "Completed 1,000 successful sessions this quarter.",
    time: "Today, 10:45 AM",
  },
  {
    icon: CheckCircle2,
    title: "Featured listing approved",
    desc: "Partner profile is now promoted in the 'Elite' category.",
    time: "Yesterday, 4:20 PM",
    iconColor: "text-emerald-500",
  },
  {
    icon: FileEdit,
    title: "CRM Note Added",
    desc: "Discussed expansion plans for the upcoming summer season.",
    time: "2 days ago",
  },
];

const QUICK_ACTIONS = [
  { label: "Feature Partner", icon: Star },
  { label: "Send Announcement", icon: Megaphone },
  { label: "Add CRM Note", icon: FilePlus },
  { label: "View Performance", icon: BarChart3 },
];

export default function PartnerProfile() {
  return (
    <div className="flex-1 overflow-y-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-2">
        <div className="flex items-center gap-2">
          <button className="text-[#6C2BD9]">
            <ArrowLeft size={19} strokeWidth={2.2} />
          </button>
          <p className="text-[13px] font-bold text-[#6C2BD9]">
            Partner Profile
          </p>
        </div>
        <MoreVertical size={16} className="text-gray-500" />
      </div>

      <div className="px-4 mt-2 space-y-3">
        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden h-36 bg-gradient-to-br from-amber-900/30 via-stone-800 to-stone-900">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.7))]" />
          <div className="absolute top-2.5 left-2.5 flex gap-1.5">
            <span className="flex items-center gap-1 text-[9px] bg-[#6C2BD9] text-white px-2.5 py-1 rounded-full font-medium">
              <BadgeCheck size={10} /> Verified
            </span>
            <span className="text-[9px] bg-emerald-500 text-white px-2.5 py-1 rounded-full font-medium">
              Active
            </span>
          </div>
          <div className="absolute bottom-2.5 left-2.5 text-white">
            <p className="text-[13px] font-bold leading-none">FitZone Elite</p>
            <p className="text-[10px] opacity-90 flex items-center gap-1 mt-1">
              <MapPin size={9} /> Pune, Maharashtra
            </p>
          </div>
        </div>

        {/* Partner health */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[12px] text-gray-700">Partner Health</p>
            <p className="text-[13px] font-bold text-emerald-500 mt-0.5">
              Excellent
            </p>
          </div>
          <div className="relative w-14 h-14 shrink-0">
            <svg viewBox="0 0 56 56" className="w-14 h-14 -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="#F1F0FB"
                strokeWidth="5"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="#6C2BD9"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 24 * 0.93} ${2 * Math.PI * 24}`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[13px] font-bold text-[#6C2BD9]">93</span>
            </div>
          </div>
        </div>

        {/* Relationship summary */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Relationship Summary
          </p>
          <div className="space-y-2.5">
            {RELATIONSHIP.map(({ label, value, color }) => (
              <div key={label} className="flex items-center justify-between">
                <p className="text-[11px] text-gray-600">{label}</p>
                <p className={`text-[11px] font-semibold ${color}`}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <StatRow
          icon={Users}
          iconBg="bg-purple-100"
          iconColor="text-[#6C2BD9]"
          label="Total Members"
          value="1,240"
        />
        <StatRow
          icon={Star}
          iconBg="bg-amber-100"
          iconColor="text-amber-500"
          label="Average Rating"
          value="4.9 / 5.0"
        />
        <StatRow
          icon={TrendingUp}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-500"
          label="Monthly Growth"
          value="+12%"
          valueColor="text-emerald-500"
        />

        {/* Activity overview */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] font-bold text-gray-900">
              Activity Overview
            </p>
            <button className="text-[10.5px] font-semibold text-[#6C2BD9]">
              View Full History →
            </button>
          </div>
          <div className="space-y-3.5">
            {ACTIVITY.map(({ icon: Icon, title, desc, time, iconColor }, i) => (
              <div key={title} className="flex gap-2.5">
                <div className="flex flex-col items-center">
                  <Icon size={14} className={iconColor || "text-[#6C2BD9]"} />
                  {i < ACTIVITY.length - 1 && (
                    <div className="w-px flex-1 bg-gray-100 mt-1" />
                  )}
                </div>
                <div className="pb-1">
                  <p className="text-[11px] font-bold text-gray-900">{title}</p>
                  <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
                    {desc}
                  </p>
                  <p className="text-[9px] text-gray-400 mt-1">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Opportunity */}
        <section className="rounded-2xl p-4 bg-gradient-to-br from-[#6C2BD9] to-[#4F1FA8] text-white shadow-md relative overflow-hidden">
          <div className="absolute -right-3 -top-3 opacity-15">
            <Zap size={64} />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wide flex items-center gap-1.5">
            <Sparkles size={11} /> AI Opportunity
          </p>
          <p className="text-[12.5px] font-bold mt-2">High growth potential</p>
          <p className="text-[10.5px] opacity-90 leading-snug mt-1">
            Based on local traffic patterns, FitZone Elite is 34% more likely to
            convert evening members.
          </p>
          <button className="w-full bg-white text-[#6C2BD9] text-[11px] font-semibold py-2.5 rounded-full mt-3">
            Enable Smart Campaigns
          </button>
        </section>

        {/* Premium eligibility */}
        <section className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-[#6C2BD9] uppercase tracking-wide flex items-center gap-1.5">
            <Star size={11} className="fill-[#6C2BD9]" /> Premium Eligibility
          </p>
          <p className="text-[11px] text-gray-700 leading-snug mt-1.5">
            FitZone Elite meets 5/5 criteria for the Platinum Partner Tier.
          </p>
          <button className="w-full bg-purple-100 text-[#6C2BD9] text-[11px] font-semibold py-2.5 rounded-full mt-3">
            Candidate for premium promotion
          </button>
        </section>

        {/* Quick actions */}
        <p className="text-[12px] font-bold text-gray-900">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2.5">
          {QUICK_ACTIONS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="bg-white border border-gray-100 rounded-xl py-5 flex flex-col items-center gap-2 shadow-sm"
            >
              <Icon size={17} className="text-gray-700" strokeWidth={1.6} />
              <span className="text-[10.5px] font-medium text-gray-700 text-center">
                {label}
              </span>
            </button>
          ))}
        </div>
        <button className="w-full bg-white border border-gray-100 rounded-xl py-5 flex flex-col items-center gap-2 shadow-sm">
          <Ban size={17} className="text-gray-700" strokeWidth={1.6} />
          <span className="text-[10.5px] font-medium text-gray-700">
            Suspend Partner
          </span>
        </button>
      </div>
    </div>
  );
}

function StatRow({ icon: Icon, iconBg, iconColor, label, value, valueColor }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-3.5 shadow-sm flex items-center gap-3">
      <div
        className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}
      >
        <Icon size={15} className={iconColor} />
      </div>
      <div>
        <p className="text-[10.5px] text-gray-500">{label}</p>
        <p className={`text-[13px] font-bold ${valueColor || "text-gray-900"}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
