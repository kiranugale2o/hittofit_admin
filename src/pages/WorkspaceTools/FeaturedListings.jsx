import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Settings,
  TrendingUp,
  MoreVertical,
  Sparkles,
  UserPlus,
  BarChart3,
  Users,
  ChevronRight,
} from "lucide-react";

const FILTERS = ["All", "Gyms", "Trainers", "Stores"];

const LISTINGS = [
  {
    name: "FitZone Elite",
    sub: "Pune • Gym",
    subColor: "text-[#6C2BD9]",
    until: "Until 30 June",
    growth: "+42% Views",
    img: "bg-gradient-to-br from-gray-700 to-gray-900",
  },
  {
    name: "Amit Patel",
    sub: "Strength Coach • Trainer",
    subColor: "text-amber-500",
    until: "Until 30 June",
    growth: "+31% Visits",
    img: "bg-gradient-to-br from-gray-400 to-gray-600",
  },
  {
    name: "FitFuel Nutrition",
    sub: "Eco-friendly • Store",
    subColor: "text-emerald-500",
    until: "Until 30 June",
    growth: "+35% Views",
    img: "bg-gradient-to-br from-orange-200 to-orange-300",
  },
];

export default function FeaturedListings() {
  const [filter, setFilter] = useState("All");

  return (
    <div className="flex-1 overflow-y-auto pb-20">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden shrink-0" />
          <p className="text-[13px] font-bold text-[#6C2BD9]">Hittofit</p>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <Search size={16} />
          <SlidersHorizontal size={16} />
        </div>
      </div>

      <div className="px-4">
        <p className="text-[15px] font-bold text-gray-900 mt-1">
          Featured Listings
        </p>
        <p className="text-[11px] text-gray-400 mt-0.5">
          Manage premium visibility across the ecosystem.
        </p>
      </div>

      <div className="px-4 mt-3 space-y-3">
        {/* System pulse */}
        <section className="rounded-2xl p-4 bg-gradient-to-br from-[#6C2BD9] to-[#4F1FA8] text-white shadow-md relative overflow-hidden">
          <div className="flex items-start justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-wide opacity-80">
              System Pulse
            </p>
            <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <Settings size={13} />
            </div>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <p className="text-[28px] font-bold leading-none">24</p>
            <p className="text-[11px] opacity-85">Active Featured</p>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div>
              <p className="text-[13px] font-bold leading-none">8</p>
              <p className="text-[9.5px] opacity-75">Gyms</p>
            </div>
            <div>
              <p className="text-[13px] font-bold leading-none">10</p>
              <p className="text-[9.5px] opacity-75">Trainers</p>
            </div>
            <div>
              <p className="text-[13px] font-bold leading-none">6</p>
              <p className="text-[9.5px] opacity-75">Stores</p>
            </div>
          </div>
        </section>

        {/* Performance lifts */}
        <section>
          <p className="text-[11px] font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
            <BarChart3 size={12} className="text-[#6C2BD9]" /> Performance Lifts
          </p>
          <div className="bg-white rounded-2xl p-3.5 shadow-sm">
            <p className="text-[11px] font-semibold text-[#6C2BD9] flex items-center gap-1.5">
              <TrendingUp size={12} /> Gyms
            </p>
            <p className="text-[10.5px] text-gray-500 mt-1">
              Featured gyms receive{" "}
              <span className="font-semibold text-gray-700">
                +42% profile visits
              </span>
            </p>
            <div className="w-full h-1.5 rounded-full bg-gray-100 mt-2.5 overflow-hidden">
              <div
                className="h-full bg-[#6C2BD9] rounded-full"
                style={{ width: "62%" }}
              />
            </div>
          </div>
        </section>

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

        {/* Active featured listings */}
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-gray-700">
            Active Featured Listings
          </p>
          <button className="text-[10px] text-[#6C2BD9] font-medium">
            SORT BY EXPIRY
          </button>
        </div>

        <div className="space-y-2.5">
          {LISTINGS.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl p-3.5 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className={`w-11 h-11 rounded-xl shrink-0 ${item.img}`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[12px] font-bold text-gray-900">
                      {item.name}
                    </p>
                    <MoreVertical size={14} className="text-gray-400" />
                  </div>
                  <p className={`text-[10.5px] font-medium ${item.subColor}`}>
                    {item.sub}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <p className="text-[9.5px] text-gray-400">
                        📅 {item.until}
                      </p>
                      <p className="text-[10px] text-emerald-500 font-semibold mt-0.5">
                        ↗ {item.growth}
                      </p>
                    </div>
                    <button className="text-[10.5px] font-semibold text-white bg-[#6C2BD9] px-3.5 py-1.5 rounded-full">
                      Manage →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Priority candidates */}
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-semibold text-gray-700 flex items-center gap-1.5">
            <Sparkles size={12} className="text-[#6C2BD9]" /> Priority
            Candidates
          </p>
          <button className="text-[10px] text-[#6C2BD9] font-medium">
            View All
          </button>
        </div>
        <div className="bg-purple-50 rounded-2xl p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
              <UserPlus size={15} className="text-[#6C2BD9]" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-gray-900">
                Sarah Johnson
              </p>
              <p className="text-[9.5px] text-gray-500 leading-snug">
                Top growing Yoga trainer this week
              </p>
            </div>
          </div>
          <button className="text-[10px] font-semibold text-[#6C2BD9] text-right leading-tight shrink-0">
            Feature Now →
          </button>
        </div>

        {/* Quick actions */}
        <p className="text-[11px] font-semibold text-gray-700">Quick Actions</p>
        <div className="grid grid-cols-2 gap-2.5">
          <button className="bg-white border border-gray-100 rounded-xl py-4 flex flex-col items-center gap-1.5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
              <UserPlus size={14} className="text-[#6C2BD9]" />
            </div>
            <span className="text-[10.5px] font-medium text-gray-700">
              Feature New Partner
            </span>
          </button>
          <button className="bg-white border border-gray-100 rounded-xl py-4 flex flex-col items-center gap-1.5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
              <BarChart3 size={14} className="text-[#6C2BD9]" />
            </div>
            <span className="text-[10.5px] font-medium text-gray-700">
              View Performance
            </span>
          </button>
        </div>
        <button className="w-full bg-white border border-gray-100 rounded-xl py-3.5 px-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <Users size={14} className="text-amber-500" />
            <span className="text-[10.5px] font-medium text-gray-700">
              Review Recommended Candidates
            </span>
          </div>
          <ChevronRight size={14} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
}
