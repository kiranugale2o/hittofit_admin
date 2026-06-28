import React from "react";
import {
  ArrowLeft,
  MoreVertical,
  Eye,
  TrendingUp,
  Star,
  MapPin,
  Sparkles,
  Flame,
  Lightbulb,
  Zap,
  CheckCircle2,
  Hourglass,
  ShieldCheck,
  BarChart3,
  X,
} from "lucide-react";

export default function FeaturedListingDetail() {
  return (
    <div className="flex-1 overflow-y-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-2">
        <div className="flex items-center gap-2">
          <button className="text-[#6C2BD9]">
            <ArrowLeft size={19} strokeWidth={2.2} />
          </button>
          <p className="text-[13px] font-bold text-[#6C2BD9]">
            Featured Listing
          </p>
        </div>
        <MoreVertical size={16} className="text-gray-500" />
      </div>

      <div className="px-4 mt-2 space-y-3">
        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden h-36 bg-gradient-to-br from-amber-900/40 via-stone-800 to-stone-900">
          <div className="absolute inset-x-2.5 bottom-2.5 bg-white/90 backdrop-blur rounded-xl p-2.5 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
              <Flame size={15} className="text-[#6C2BD9]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-[11.5px] font-bold text-gray-900">
                  FitZone Elite
                </p>
                <span className="text-[8.5px] bg-amber-100 text-amber-600 font-semibold px-2 py-0.5 rounded-full">
                  ★ FEATURED
                </span>
              </div>
              <p className="text-[10px] text-gray-500">Gym • Pune</p>
              <div className="flex items-center justify-between mt-0.5">
                <p className="text-[9px] text-gray-400">Since 12 June 2026</p>
                <p className="text-[9px] text-emerald-500 font-semibold">
                  Status: Active
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-3.5 shadow-sm grid grid-cols-3 text-center">
          <div>
            <p className="text-[9px] text-gray-400 uppercase">Started</p>
            <p className="text-[11.5px] font-bold text-gray-900 mt-0.5">
              12 June
            </p>
          </div>
          <div className="border-x border-gray-100">
            <p className="text-[9px] text-gray-400 uppercase">Expires</p>
            <p className="text-[11.5px] font-bold text-gray-900 mt-0.5">
              30 June
            </p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 uppercase">Remaining</p>
            <p className="text-[11.5px] font-bold text-[#6C2BD9] mt-0.5">
              18 Days
            </p>
          </div>
        </div>

        {/* Performance impact */}
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
          Performance Impact
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          <StatCard
            icon={Eye}
            iconColor="text-[#6C2BD9]"
            iconBg="bg-purple-50"
            value="+42%"
            label="Profile Views"
          />
          <StatCard
            icon={TrendingUp}
            iconColor="text-emerald-500"
            iconBg="bg-emerald-50"
            value="+18%"
            label="Lead Growth"
          />
          <StatCard
            icon={Star}
            iconColor="text-[#6C2BD9]"
            iconBg="bg-purple-50"
            value="+12%"
            label="Engagement"
          />
          <StatCard
            icon={MapPin}
            iconColor="text-[#6C2BD9]"
            iconBg="bg-purple-50"
            value="Pune"
            label="Top Region"
            valuePurple
          />
        </div>

        {/* High impact score */}
        <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
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
                strokeDasharray={`${2 * Math.PI * 24 * 0.91} ${2 * Math.PI * 24}`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[13px] font-bold text-[#6C2BD9] leading-none">
                91
              </span>
            </div>
          </div>
          <div>
            <p className="text-[11.5px] font-bold text-gray-900">High Impact</p>
            <p className="text-[10.5px] text-gray-500 leading-snug mt-0.5">
              Your listing is performing better than 94% of local partners.
            </p>
          </div>
        </div>

        {/* Insight rows */}
        <div className="space-y-2">
          <div className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
              <Flame size={13} className="text-orange-400" />
            </div>
            <p className="text-[10.5px] text-gray-700 font-medium">
              Most viewed in evening hours
            </p>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-sm flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
              <TrendingUp size={13} className="text-emerald-500" />
            </div>
            <p className="text-[10.5px] text-gray-700 font-medium">
              Driving new high-intent leads
            </p>
          </div>
        </div>

        {/* AI recommendations */}
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide flex items-center gap-1.5">
          <Sparkles size={11} className="text-[#6C2BD9]" /> AI Recommendations
        </p>
        <div className="bg-amber-50 rounded-xl p-3.5 flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
            <Hourglass size={13} className="text-amber-500" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-900">
              Extend feature for 30 days
            </p>
            <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
              Maintaining momentum is key for holiday season growth.
            </p>
          </div>
        </div>
        <div className="bg-purple-50 rounded-xl p-3.5 flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
            <Zap size={13} className="text-[#6C2BD9]" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-900">
              Candidate for homepage spotlight
            </p>
            <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
              Your engagement scores qualify you for spotlight placement.
            </p>
          </div>
        </div>

        {/* Feature history */}
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
          Feature History
        </p>
        <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3.5">
          <HistoryRow
            icon={CheckCircle2}
            title="Feature Extended"
            meta="24 June • Admin Panel"
          />
          <HistoryRow
            icon={CheckCircle2}
            title="Placement Activated"
            meta="12 June • System Auto"
          />
          <HistoryRow
            icon={CheckCircle2}
            title="Featured Approved"
            meta="10 June • Partner Success"
          />
        </div>
      </div>

      {/* CTAs */}
      <div className="px-4 mt-4 space-y-2">
        <button className="w-full bg-gradient-to-r from-[#6C2BD9] to-[#4F1FA8] text-white text-[12px] font-semibold py-3 rounded-full flex items-center justify-center gap-1.5">
          <Hourglass size={13} /> Extend Feature
        </button>
        <button className="w-full bg-purple-100 text-[#6C2BD9] text-[12px] font-semibold py-3 rounded-full flex items-center justify-center gap-1.5">
          <ShieldCheck size={13} /> Upgrade Visibility
        </button>
        <button className="w-full bg-white border border-gray-200 text-gray-700 text-[12px] font-semibold py-3 rounded-full flex items-center justify-center gap-1.5">
          <BarChart3 size={13} /> View Performance
        </button>
        <button className="w-full text-red-500 text-[11.5px] font-semibold py-2 flex items-center justify-center gap-1.5">
          <X size={13} /> Remove Feature
        </button>
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  iconColor,
  iconBg,
  value,
  label,
  valuePurple,
}) {
  return (
    <div className="bg-white rounded-xl p-3.5 shadow-sm">
      <div
        className={`w-7 h-7 rounded-lg ${iconBg} flex items-center justify-center mb-2`}
      >
        <Icon size={13} className={iconColor} />
      </div>
      <p
        className={`text-[13px] font-bold ${valuePurple ? "text-[#6C2BD9]" : "text-gray-900"}`}
      >
        {value}
      </p>
      <p className="text-[9.5px] text-gray-400">{label}</p>
    </div>
  );
}

function HistoryRow({ icon: Icon, title, meta }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-5 h-5 rounded-full bg-[#6C2BD9] flex items-center justify-center shrink-0">
        <Icon size={11} className="text-white" />
      </div>
      <div>
        <p className="text-[11px] font-semibold text-gray-900">{title}</p>
        <p className="text-[9px] text-gray-400">{meta}</p>
      </div>
    </div>
  );
}
