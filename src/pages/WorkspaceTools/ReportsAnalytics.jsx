import React from "react";
import {
  Search,
  CalendarDays,
  TrendingUp,
  Users,
  Dumbbell,
  User,
  Store,
  Flame,
  PersonStanding,
  ChevronRight,
  Sparkles,
  MapPin,
  AlertTriangle,
  ClipboardList,
  Download,
  Megaphone,
  Medal,
  ClipboardCheck,
} from "lucide-react";

const SNAPSHOT = [
  {
    label: "Members",
    value: "+18%",
    icon: Flame,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
  {
    label: "Gyms",
    value: "+12%",
    icon: Dumbbell,
    iconColor: "text-[#6C2BD9]",
    iconBg: "bg-purple-50",
  },
  {
    label: "Trainers",
    value: "+9%",
    icon: PersonStanding,
    iconColor: "text-[#6C2BD9]",
    iconBg: "bg-purple-50",
  },
];

const PERFORMANCE = [
  { label: "Membership Revenue", pct: 84 },
  { label: "Store Revenue", pct: 62 },
  { label: "Campaign Reach", pct: 91 },
  { label: "Partner Engagement", pct: 75 },
];

const TOP_PERFORMERS = [
  { tag: "TOP GYM", name: "FitZone Elite", icon: Dumbbell },
  { tag: "TOP TRAINER", name: "Amit Patel", icon: User },
  { tag: "TOP STORE", name: "FitFuel Nutrition", icon: Store },
];

const CAMPAIGNS = [
  {
    name: "Summer Transformation Challenge",
    status: "ACTIVE",
    reach: "12.4k",
    engagement: "38%",
    active: true,
  },
  {
    name: "Morning Yoga Series",
    status: "COMPLETED",
    reach: "8.2k",
    engagement: "42%",
    active: false,
  },
];

const QUICK_ACTIONS = [
  { label: "Export Report", icon: Download },
  { label: "Campaigns", icon: Megaphone },
  { label: "Top Performers", icon: Medal },
  { label: "Resolve Issues", icon: ClipboardCheck },
];

export default function ReportsAnalytics() {
  return (
    <div className="flex-1 overflow-y-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <Search size={15} className="text-[#6C2BD9]" />
          <p className="text-[13px] font-bold text-[#6C2BD9]">WellnessOS</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden shrink-0" />
      </div>

      <div className="px-4 mt-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-[15px] font-bold text-gray-900">
            Reports & Analytics
          </p>
          <p className="text-[10.5px] text-gray-400 mt-0.5 leading-snug">
            Track platform growth and business health.
          </p>
        </div>
        <button className="flex items-center gap-1 bg-gray-100 text-[10px] font-medium text-gray-600 px-2.5 py-1.5 rounded-full shrink-0 whitespace-nowrap">
          <CalendarDays size={11} /> Last 30 Days
        </button>
      </div>

      <div className="px-4 mt-3 space-y-3">
        {/* Health score */}
        <section className="rounded-2xl p-4 bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
              <TrendingUp size={10} /> Strong Growth
            </span>
            <p className="text-[20px] font-bold text-[#6C2BD9] mt-2.5">
              92/100
            </p>
            <p className="text-[9.5px] font-semibold text-gray-500 uppercase tracking-wide mt-0.5">
              Platform Health Score
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-3.5">
            <MetricItem icon={Users} value="42.4k" label="Members" />
            <MetricItem icon={Dumbbell} value="184" label="Gyms" />
            <MetricItem icon={User} value="1.2k" label="Trainers" />
            <MetricItem icon={Store} value="56" label="Stores" />
          </div>
        </section>

        {/* Growth snapshot */}
        <p className="text-[11px] font-semibold text-gray-700 flex items-center gap-1.5">
          <Sparkles size={12} className="text-[#6C2BD9]" /> Growth Snapshot
        </p>
        <div className="grid grid-cols-3 gap-2.5">
          {SNAPSHOT.map(({ label, value, icon: Icon, iconColor, iconBg }) => (
            <div
              key={label}
              className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm"
            >
              <div
                className={`w-7 h-7 rounded-full ${iconBg} flex items-center justify-center mb-2`}
              >
                <Icon size={13} className={iconColor} />
              </div>
              <p className="text-[10.5px] text-gray-700">{label}</p>
              <p className="text-[11.5px] font-bold text-emerald-500 mt-0.5">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Business performance */}
        <section className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-3">
            Business Performance
          </p>
          <div className="space-y-3">
            {PERFORMANCE.map(({ label, pct }) => (
              <div key={label}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[11px] text-gray-800">{label}</p>
                  <p className="text-[10.5px] font-bold text-[#6C2BD9]">
                    {pct}% of Goal
                  </p>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full bg-[#6C2BD9] rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top performers */}
        <p className="text-[11px] font-semibold text-gray-700">
          Top Performers
        </p>
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm divide-y divide-gray-100">
          {TOP_PERFORMERS.map(({ tag, name, icon: Icon }) => (
            <button
              key={tag}
              className="w-full flex items-center justify-between p-3.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-[#6C2BD9]" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] text-gray-400 uppercase tracking-wide">
                    {tag}
                  </p>
                  <p className="text-[11.5px] font-bold text-gray-900">
                    {name}
                  </p>
                </div>
              </div>
              <ChevronRight size={14} className="text-gray-300" />
            </button>
          ))}
        </div>

        {/* AI Business Insights */}
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-gray-700">
            AI Business Insights
          </p>
          <span className="text-[8.5px] font-bold bg-[#6C2BD9] text-white px-2 py-1 rounded-full">
            POWERED BY HITTOFIT AI
          </span>
        </div>
        <div className="bg-purple-50 rounded-xl p-3.5 flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#6C2BD9] flex items-center justify-center shrink-0">
            <Sparkles size={14} className="text-white" />
          </div>
          <div>
            <p className="text-[11px] text-gray-800 leading-snug">
              Premium memberships are growing{" "}
              <span className="font-semibold">3x faster</span> than basic plans
              in urban hubs.
            </p>
            <button className="text-[10.5px] font-semibold text-[#6C2BD9] mt-1.5">
              Explore Premium Trends →
            </button>
          </div>
        </div>
        <div className="bg-purple-50 rounded-xl p-3.5 flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#6C2BD9] flex items-center justify-center shrink-0">
            <MapPin size={14} className="text-white" />
          </div>
          <div>
            <p className="text-[11px] text-gray-800 leading-snug">
              Pune region is outperforming all other cities in trainer
              onboarding metrics.
            </p>
            <button className="text-[10.5px] font-semibold text-[#6C2BD9] mt-1.5">
              Scale Pune Model →
            </button>
          </div>
        </div>

        {/* Attention required */}
        <p className="text-[11px] font-semibold text-gray-700">
          Attention Required
        </p>
        <div className="space-y-2">
          <button className="w-full bg-red-50 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle size={14} className="text-red-500" />
              <span className="text-[11px] font-semibold text-red-600">
                4 Gyms Need Verification
              </span>
            </div>
            <span className="text-[10.5px] font-semibold text-red-500">
              Resolve
            </span>
          </button>
          <button className="w-full bg-red-50 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ClipboardList size={14} className="text-red-500" />
              <span className="text-[11px] font-semibold text-red-600">
                8 Trainers Pending Review
              </span>
            </div>
            <span className="text-[10.5px] font-semibold text-red-500">
              Review
            </span>
          </button>
        </div>

        {/* Top campaigns */}
        <p className="text-[11px] font-semibold text-gray-700">Top Campaigns</p>
        <div className="space-y-2.5">
          {CAMPAIGNS.map((c) => (
            <div
              key={c.name}
              className="bg-white border border-gray-100 rounded-xl p-3.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11.5px] font-semibold text-gray-900">
                  {c.name}
                </p>
                <span
                  className={`text-[8.5px] font-bold px-2 py-1 rounded-full ${
                    c.active
                      ? "bg-purple-100 text-[#6C2BD9]"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {c.status}
                </span>
              </div>
              <div className="flex gap-6 mt-2.5">
                <div>
                  <p className="text-[9px] text-gray-400 uppercase">Reach</p>
                  <p className="text-[11px] font-bold text-[#6C2BD9] mt-0.5">
                    {c.reach}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase">
                    Engagement
                  </p>
                  <p className="text-[11px] font-bold text-[#6C2BD9] mt-0.5">
                    {c.engagement}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <p className="text-[11px] font-semibold text-gray-700">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2.5">
          {QUICK_ACTIONS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="bg-white border border-gray-100 rounded-xl py-5 flex flex-col items-center gap-2 shadow-sm"
            >
              <div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center">
                <Icon size={15} className="text-[#6C2BD9]" />
              </div>
              <span className="text-[10.5px] font-medium text-gray-700">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricItem({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center mb-1.5 shadow-sm">
        <Icon size={15} className="text-[#6C2BD9]" />
      </div>
      <p className="text-[12px] font-bold text-gray-900">{value}</p>
      <p className="text-[9px] text-gray-500">{label}</p>
    </div>
  );
}
