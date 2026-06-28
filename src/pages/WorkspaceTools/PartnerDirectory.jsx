import React, { useState } from "react";
import {
  Bell,
  Search,
  SlidersHorizontal,
  TrendingUp,
  Star,
  ShoppingBag,
  MoreVertical,
  BadgeCheck,
  MapPin,
  Users,
  Home,
  CalendarCheck,
  Store as StoreIcon,
  Truck,
  UserPlus,
  ShoppingCart,
  Sparkles,
  Plus,
  Dumbbell,
} from "lucide-react";

const FILTERS = ["All", "Gyms", "Trainers", "Stores"];

const HIGHLIGHTS = [
  {
    icon: TrendingUp,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    label: "Fastest Growing Gym",
    value: "Iron Peak",
  },
  {
    icon: Star,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    label: "Top Rated Trainer",
    value: "Sarah K.",
  },
  {
    icon: ShoppingBag,
    iconColor: "text-[#6C2BD9]",
    iconBg: "bg-purple-100",
    label: "Highest Performing Store",
    value: "Pure Gains",
  },
];

const WORKSPACE_ACTIONS = [
  { label: "Add Gym", icon: Home },
  { label: "Add Trainer", icon: UserPlus },
  { label: "Add Store", icon: ShoppingCart },
  { label: "Featured", icon: Sparkles },
];

export default function PartnerDirectory() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="flex-1 overflow-y-auto pb-20 relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden shrink-0" />
          <p className="text-[13px] font-bold text-[#6C2BD9]">Hittofit</p>
        </div>
        <Bell size={16} className="text-gray-600" />
      </div>

      <div className="px-4 mt-2">
        <p className="text-[17px] font-bold text-gray-900">Partner Directory</p>
        <p className="text-[10.5px] text-gray-400 mt-0.5">
          Discover and manage ecosystem partners.
        </p>
        <div className="flex gap-2 mt-2.5">
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9]">
            <Search size={14} />
          </button>
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#6C2BD9]">
            <SlidersHorizontal size={14} />
          </button>
        </div>
      </div>

      <div className="px-4 mt-3 space-y-3">
        {/* Ecosystem health */}
        <section className="rounded-2xl p-4 bg-gradient-to-br from-[#6C2BD9] to-[#4F1FA8] text-white shadow-md">
          <p className="text-[12.5px] font-semibold">Ecosystem Health</p>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div>
              <p className="text-[22px] font-bold leading-none">284</p>
              <p className="text-[9.5px] opacity-80 mt-1">GYMS</p>
            </div>
            <div>
              <p className="text-[22px] font-bold leading-none">540</p>
              <p className="text-[9.5px] opacity-80 mt-1">TRAINERS</p>
            </div>
            <div>
              <p className="text-[22px] font-bold leading-none">120</p>
              <p className="text-[9.5px] opacity-80 mt-1">STORES</p>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <div className="space-y-2.5">
          {HIGHLIGHTS.map(({ icon: Icon, iconColor, iconBg, label, value }) => (
            <div
              key={label}
              className="bg-white border border-gray-100 rounded-xl p-3.5 flex items-center gap-3 shadow-sm"
            >
              <div
                className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}
              >
                <Icon size={15} className={iconColor} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500">{label}</p>
                <p className="text-[13px] font-bold text-gray-900">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Search gyms, trainers, stores..."
            className="w-full text-[11px] pl-9 pr-3 py-2.5 rounded-full border border-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#6C2BD9]"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-[11px] px-3.5 py-1.5 rounded-full font-medium ${
                  active
                    ? "bg-[#6C2BD9] text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Partner cards */}
        <PartnerCard
          iconBg="bg-purple-100"
          icon={
            <Dumbbell size={20} className="text-[#6C2BD9]" strokeWidth={1.8} />
          }
          name="FitZone Elite"
          verified
          tag="GYM PARTNER"
          metaLeft={{ icon: MapPin, text: "Pune" }}
          metaRight={{ icon: Users, text: "1,240 Members" }}
          status="Active"
          statusColor="bg-emerald-100 text-emerald-600"
        />
        <PartnerCard
          photo
          name="Amit Patel"
          rating="4.9"
          tag="STRENGTH COACH"
          metaLeft={{ icon: Home, text: "FitZone Elite" }}
          metaRight={{ icon: CalendarCheck, text: "Available" }}
          status="Premium"
          statusColor="bg-blue-100 text-blue-600"
        />
        <PartnerCard
          iconBg="bg-purple-100"
          icon={
            <StoreIcon size={20} className="text-gray-700" strokeWidth={1.6} />
          }
          name="FitFuel Nutrition"
          verified
          tag="SUPPLEMENTS"
          metaLeft={{ icon: StoreIcon, text: "120 Products" }}
          metaRight={{ icon: Truck, text: "Global Ship" }}
          status="Partner"
          statusColor="bg-purple-100 text-[#6C2BD9]"
        />

        {/* Workspace actions */}
        <p className="text-[13px] font-bold text-gray-900 mt-2">
          Workspace Actions
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {WORKSPACE_ACTIONS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="bg-white border border-gray-100 rounded-xl py-5 flex flex-col items-center gap-2 shadow-sm"
            >
              <Icon size={18} className="text-[#6C2BD9]" />
              <span className="text-[11px] font-medium text-gray-700">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Floating add button */}
      <button className="absolute right-4 bottom-[88px] w-12 h-12 rounded-full bg-gradient-to-br from-[#6C2BD9] to-[#4F1FA8] flex items-center justify-center shadow-lg text-white">
        <Plus size={20} />
      </button>
    </div>
  );
}

function PartnerCard({
  iconBg,
  icon,
  photo,
  name,
  verified,
  rating,
  tag,
  metaLeft,
  metaRight,
  status,
  statusColor,
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-3.5 shadow-sm">
      <div className="flex items-start justify-between">
        {photo ? (
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 shrink-0" />
        ) : (
          <div
            className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center shrink-0`}
          >
            {icon}
          </div>
        )}
        <MoreVertical size={15} className="text-gray-400" />
      </div>
      <div className="flex items-center gap-1.5 mt-2.5">
        <p className="text-[13px] font-bold text-gray-900">{name}</p>
        {verified && (
          <BadgeCheck
            size={13}
            className="text-blue-500 fill-blue-500 text-white"
          />
        )}
        {rating && (
          <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5">
            <Star size={9} className="fill-amber-500 text-amber-500" /> {rating}
          </span>
        )}
      </div>
      <p className="text-[10px] font-semibold text-[#6C2BD9] uppercase tracking-wide mt-0.5">
        {tag}
      </p>
      <div className="flex items-center gap-4 mt-2 text-gray-500">
        <span className="flex items-center gap-1 text-[10.5px]">
          <metaLeft.icon size={11} /> {metaLeft.text}
        </span>
        <span className="flex items-center gap-1 text-[10.5px]">
          <metaRight.icon size={11} /> {metaRight.text}
        </span>
      </div>
      <div className="h-px bg-gray-100 my-2.5" />
      <div className="flex items-center justify-between">
        <button className="text-[11px] font-semibold text-[#6C2BD9]">
          View Partner →
        </button>
        <span
          className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${statusColor}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
