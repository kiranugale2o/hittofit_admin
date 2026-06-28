import React, { useState } from "react";
import {
  ArrowLeft,
  User,
  LayoutGrid,
  Flame,
  Dumbbell,
  PersonStanding,
  Swords,
  Footprints,
  Crown,
  MapPin,
  Search,
  ChevronDown,
  Award,
  Sparkles,
  Building2,
  Waves,
} from "lucide-react";

const GYM_TYPES = [
  { key: "fitness", label: "Fitness Gym", icon: Flame },
  { key: "strength", label: "Strength Training", icon: Dumbbell },
  { key: "yoga", label: "Yoga Studio", icon: PersonStanding },
  { key: "mma", label: "MMA & Boxing", icon: Swords },
  { key: "functional", label: "Functional Training", icon: Footprints },
  { key: "sports", label: "Sports & Wellness", icon: Crown },
];

const MEMBERSHIPS = ["Monthly", "Quarterly", "Yearly", "Pay Per Session"];

const FACILITIES = [
  "Personal Training",
  "Parking",
  "Locker Room",
  "Steam Bath",
  "Swimming Pool",
];

export default function AddGymStep1() {
  const [gymType, setGymType] = useState("fitness");
  const [memberships, setMemberships] = useState(["Monthly"]);
  const [facilities, setFacilities] = useState(["Locker Room"]);

  const toggle = (list, setList, value) =>
    setList(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
    );

  return (
    <div className="flex-1 overflow-y-auto pb-28">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-3 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <button className="text-[#6C2BD9]">
            <ArrowLeft size={19} strokeWidth={2.2} />
          </button>
          <div>
            <p className="text-[14px] font-bold text-gray-900 leading-none">
              Add Gym
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Create a new gym profile
            </p>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center">
          <User size={14} className="text-orange-400" />
        </div>
      </div>

      <div className="px-4 mt-3 space-y-3">
        {/* Gym Information */}
        <section className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center">
              <LayoutGrid size={13} className="text-[#6C2BD9]" />
            </div>
            <p className="text-[12px] font-bold text-gray-900">
              Gym Information
            </p>
          </div>

          <Field label="Gym Name" placeholder="e.g. FitZone Elite" />
          <Field label="Owner Name" placeholder="Full legal name" />
          <Field label="Mobile Number" placeholder="+91 00000 00000" />
          <Field label="Email Address" placeholder="contact@gym.com" last />
        </section>

        {/* Gym Type */}
        <section className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center">
              <Sparkles size={13} className="text-[#6C2BD9]" />
            </div>
            <p className="text-[12px] font-bold text-gray-900">Gym Type</p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {GYM_TYPES.map(({ key, label, icon: Icon }) => {
              const isActive = gymType === key;
              return (
                <button
                  key={key}
                  onClick={() => setGymType(key)}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl py-4 border transition-colors ${
                    isActive
                      ? "border-[#6C2BD9] bg-purple-50"
                      : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    className={isActive ? "text-[#6C2BD9]" : "text-gray-500"}
                  />
                  <span
                    className={`text-[10px] text-center leading-tight ${
                      isActive
                        ? "text-[#6C2BD9] font-semibold"
                        : "text-gray-500"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Location Details */}
        <section className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center">
              <MapPin size={13} className="text-[#6C2BD9]" />
            </div>
            <p className="text-[12px] font-bold text-gray-900">
              Location Details
            </p>
          </div>

          <label className="text-[11px] text-gray-500 mb-1 block">
            Full Address
          </label>
          <div className="relative mb-3">
            <Search
              size={13}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              placeholder="Search for address..."
              className="w-full text-[11px] pl-8 pr-3 py-2.5 rounded-xl border border-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#6C2BD9]"
            />
          </div>

          <Field label="City" placeholder="e.g. Pune" />

          <label className="text-[11px] text-gray-500 mb-1 block">State</label>
          <div className="relative mb-3">
            <select className="w-full text-[11px] px-3 py-2.5 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:border-[#6C2BD9] appearance-none bg-white">
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Delhi</option>
            </select>
            <ChevronDown
              size={13}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          <Field label="Pincode" placeholder="411001" last />
        </section>

        {/* Membership */}
        <section className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center">
              <Award size={13} className="text-[#6C2BD9]" />
            </div>
            <p className="text-[12px] font-bold text-gray-900">Membership</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {MEMBERSHIPS.map((m) => {
              const active = memberships.includes(m);
              return (
                <button
                  key={m}
                  onClick={() => toggle(memberships, setMemberships, m)}
                  className={`text-[11px] px-3 py-1.5 rounded-full border ${
                    active
                      ? "bg-[#6C2BD9] text-white border-[#6C2BD9]"
                      : "bg-gray-50 text-gray-600 border-gray-200"
                  }`}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </section>

        {/* Facilities */}
        <section className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center">
              <Building2 size={13} className="text-[#6C2BD9]" />
            </div>
            <p className="text-[12px] font-bold text-gray-900">Facilities</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FACILITIES.map((f) => {
              const active = facilities.includes(f);
              return (
                <button
                  key={f}
                  onClick={() => toggle(facilities, setFacilities, f)}
                  className={`text-[11px] px-3 py-1.5 rounded-full border ${
                    active
                      ? "bg-[#6C2BD9] text-white border-[#6C2BD9]"
                      : "bg-gray-50 text-gray-600 border-gray-200"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </section>

        {/* Live Preview */}
        <section className="rounded-2xl p-4 bg-gradient-to-br from-[#6C2BD9] to-[#4F1FA8] text-white shadow-md">
          <div className="flex items-center gap-1.5 mb-3">
            <Waves size={12} />
            <p className="text-[10px] font-semibold uppercase tracking-wide opacity-90">
              Live Preview
            </p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Building2 size={15} />
            </div>
            <div>
              <p className="text-[13px] font-bold leading-none">
                FitZone Elite
              </p>
              <p className="text-[10px] opacity-80 mt-0.5">Pune, Maharashtra</p>
            </div>
          </div>
          <div className="flex gap-1.5 mb-3">
            <span className="text-[9px] px-2 py-1 rounded-full bg-white/20">
              FITNESS GYM
            </span>
            <span className="text-[9px] px-2 py-1 rounded-full bg-white/20">
              MONTHLY
            </span>
            <span className="text-[9px] px-2 py-1 rounded-full bg-white/20">
              YEARLY
            </span>
          </div>
          <p className="text-[9px] uppercase tracking-wide opacity-70 mb-1.5">
            Included Facilities
          </p>
          <div className="flex gap-1.5 mb-3">
            <span className="text-[9px] px-2 py-1 rounded-full bg-white/20">
              Parking
            </span>
            <span className="text-[9px] px-2 py-1 rounded-full bg-white/20">
              +2
            </span>
          </div>
          <div className="flex items-center justify-between text-[9px] mb-1">
            <span className="opacity-80">Setup Progress</span>
            <span className="font-semibold">65%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: "65%" }}
            />
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="px-4 mt-4">
        <button className="w-full bg-[#6C2BD9] text-white text-[13px] font-semibold py-3 rounded-full flex items-center justify-center gap-1.5">
          Create Gym <ArrowLeft size={13} className="rotate-180" />
        </button>
        <button className="w-full text-[11px] text-gray-400 py-2.5">
          Save Draft
        </button>
      </div>
    </div>
  );
}

function Field({ label, placeholder, last }) {
  return (
    <div className={last ? "" : "mb-3"}>
      <label className="text-[11px] text-gray-500 mb-1 block">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full text-[11px] px-3 py-2.5 rounded-xl border border-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#6C2BD9]"
      />
    </div>
  );
}
