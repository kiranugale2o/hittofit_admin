import React, { useState } from "react";
import {
  ArrowLeft,
  Rocket,
  FileEdit,
  CreditCard,
  BadgeCheck,
  Eye,
  Pencil,
  CalendarClock,
  ListChecks,
  ChevronDown,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

const durations = [
  { key: "monthly", label: "Monthly", sub: "30 Days", popular: true },
  { key: "quarterly", label: "Quarterly", sub: "90 Days" },
  { key: "halfyear", label: "Half-Year", sub: "180 Days" },
  { key: "annual", label: "Annual", sub: "365 Days" },
];

const benefitOptions = [
  "Gym Access",
  "Group Classes",
  "Personal Training",
  "Steam Bath",
  "Locker Access",
  "Guest Pass",
  "Nutrition Consult",
];

const statusOptions = [
  { key: "active", label: "Active", sub: "Available now", icon: Rocket },
  { key: "draft", label: "Draft", sub: "Work in progress", icon: Pencil },
  {
    key: "scheduled",
    label: "Scheduled",
    sub: "Release later",
    icon: CalendarClock,
  },
];

const inputClass =
  "w-full border border-gray-200 rounded-xl px-3.5 py-3 text-[13.5px] text-gray-900 outline-none bg-[#FAFAFB] box-border font-sans";

export default function CreateMembershipPlanScreen() {
  const [planName, setPlanName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("monthly");
  const [amount, setAmount] = useState("4999");
  const [benefits, setBenefits] = useState(["Gym Access", "Personal Training"]);
  const [status, setStatus] = useState("active");
  const [limitsOpen, setLimitsOpen] = useState(false);

  const toggleBenefit = (b) =>
    setBenefits((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b],
    );

  const selectedDuration = durations.find((d) => d.key === duration);
  const displayName = planName || "Platinum Elite Fitness";
  const displayDesc =
    description ||
    "Full access to premium gym floor and specialized athlete-focused personal training sessions.";
  const displayAmount = amount || "0";

  return (
    <div className="font-sans bg-gray-50 min-h-screen max-w-[420px] mx-auto pb-24">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-2 pb-4">
        <div className="flex items-center gap-3.5">
          <ArrowLeft size={22} color="#6C2BD9" strokeWidth={2.2} />
          <h1 className="text-[14px] font-extrabold text-[#6C2BD9] m-0 leading-[1.25]">
            Create
            <br />
            Membership Plan
          </h1>
        </div>
        <button className="bg-gradient-to-br from-[#6C2BD9] to-[#4A1BA0] border-none text-white text-[12.5px] font-bold px-4 py-[11px] rounded-[22px] flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
          Publish Plan 🚀
        </button>
      </div>

      {/* Plan Basics */}
      <div className="px-5">
        <div className="bg-white rounded-2xl p-[18px] shadow-sm">
          <div className="flex items-center gap-2 text-[15px] font-bold text-gray-900 mb-4">
            <FileEdit size={16} color="#6C2BD9" strokeWidth={2} />
            Plan Basics
          </div>
          <label className="text-[12.5px] font-semibold text-gray-500">
            Plan Name
          </label>
          <input
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
            placeholder="e.g. Platinum Elite Fitness"
            className={`${inputClass} mt-1.5 mb-4`}
          />
          <label className="text-[12.5px] font-semibold text-gray-500">
            Plan Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what makes this plan special..."
            rows={3}
            className={`${inputClass} mt-1.5 resize-none`}
          />
        </div>
      </div>

      {/* Duration & Pricing */}
      <div className="px-5 pt-3.5">
        <div className="bg-white rounded-2xl p-[18px] shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-[15px] font-bold text-gray-900">
              <CreditCard size={16} color="#6C2BD9" strokeWidth={2} />
              Duration &amp; Pricing
            </div>
            <span className="bg-[#EDE9FA] text-[#6C2BD9] text-[11px] font-bold px-3 py-1 rounded-[14px] whitespace-nowrap">
              Popular: Monthly
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {durations.map((d) => {
              const selected = duration === d.key;
              return (
                <button
                  key={d.key}
                  onClick={() => setDuration(d.key)}
                  className={`rounded-[14px] p-3.5 text-left cursor-pointer transition-all ${
                    selected
                      ? "bg-[#F5F0FF] border-2 border-[#6C2BD9]"
                      : "bg-[#FAFAFB] border border-gray-200"
                  }`}
                >
                  <div className="text-sm font-bold text-gray-900">
                    {d.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{d.sub}</div>
                </button>
              );
            })}
            <button className="bg-[#FAFAFB] border border-gray-200 rounded-[14px] p-3.5 flex flex-col items-center gap-1 cursor-pointer">
              <span className="text-[16px] font-bold text-[#6C2BD9]">+</span>
              <span className="text-[13px] font-bold text-gray-900">
                Custom
              </span>
            </button>
          </div>
          <label className="block text-[12.5px] font-semibold text-gray-500 mt-[18px]">
            Amount (₹)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
            placeholder="₹ 4,999"
            className={`${inputClass} mt-1.5 font-semibold`}
          />
        </div>
      </div>

      {/* Included Benefits */}
      <div className="px-5 pt-3.5">
        <div className="bg-white rounded-2xl p-[18px] shadow-sm">
          <div className="flex items-center gap-2 text-[15px] font-bold text-gray-900 mb-3.5">
            <BadgeCheck size={16} color="#6C2BD9" strokeWidth={2} />
            Included Benefits
          </div>
          <div className="flex flex-wrap gap-2.5">
            {benefitOptions.map((b) => {
              const selected = benefits.includes(b);
              return (
                <button
                  key={b}
                  onClick={() => toggleBenefit(b)}
                  className={`flex items-center gap-1.5 rounded-[20px] px-3.5 py-2.5 text-[12.5px] font-semibold cursor-pointer transition-all ${
                    selected
                      ? "bg-[#EDE9FA] border-[1.5px] border-[#6C2BD9] text-[#6C2BD9]"
                      : "bg-[#FAFAFB] border border-gray-200 text-gray-500"
                  }`}
                >
                  {selected && (
                    <CheckCircle2
                      size={13}
                      strokeWidth={2.3}
                      fill="#6C2BD9"
                      color="#fff"
                      className="rounded-full"
                    />
                  )}
                  {b}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Plan Status */}
      <div className="px-5 pt-3.5">
        <div className="flex items-center gap-2 text-[15px] font-bold text-gray-900 mb-3">
          <Eye size={16} color="#6C2BD9" strokeWidth={2} />
          Plan Status
        </div>
        <div className="flex flex-col gap-2.5">
          {statusOptions.map((s) => {
            const selected = status === s.key;
            const Icon = s.icon;
            return (
              <button
                key={s.key}
                onClick={() => setStatus(s.key)}
                className={`flex items-center gap-3.5 rounded-2xl px-4 py-3.5 cursor-pointer text-left transition-all ${
                  selected
                    ? "bg-[#F5F0FF] border-2 border-[#6C2BD9] shadow-none"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${selected ? "bg-[#6C2BD9]" : "bg-gray-100"}`}
                >
                  <Icon
                    size={16}
                    color={selected ? "#fff" : "#6B7280"}
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {s.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Member Limits & Fees */}
      <div className="px-5 pt-4">
        <button
          onClick={() => setLimitsOpen((v) => !v)}
          className="w-full bg-white border border-gray-100 rounded-2xl px-[18px] py-4 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <ListChecks size={16} color="#6C2BD9" strokeWidth={2} />
            <span className="text-[14.5px] font-bold text-gray-900">
              Member Limits &amp; Fees
            </span>
            <span className="text-xs text-gray-400">(Optional)</span>
          </div>
          <ChevronDown
            size={18}
            color="#6B7280"
            strokeWidth={2}
            className={`transition-transform duration-200 ${limitsOpen ? "rotate-180" : ""}`}
          />
        </button>
        {limitsOpen && (
          <div className="bg-white border border-gray-100 border-t-0 rounded-b-2xl px-[18px] pb-[18px] pt-3.5 -mt-px">
            <label className="text-[12.5px] font-semibold text-gray-500">
              Max Members (optional)
            </label>
            <input
              placeholder="No limit"
              className={`${inputClass} mt-1.5 mb-3.5`}
            />
            <label className="text-[12.5px] font-semibold text-gray-500">
              Setup Fee (₹)
            </label>
            <input placeholder="0" className={`${inputClass} mt-1.5`} />
          </div>
        )}
      </div>

      {/* Plan Preview */}
      <div className="px-5 pt-[18px]">
        <div className="bg-[#FFFFFF] border border-[#EDE9FA] rounded-[18px] p-5">
          <div className="flex justify-between items-center">
            <span className="bg-[#6C2BD9] text-white text-[11px] font-extrabold px-3 py-1.5 rounded-[14px] tracking-[0.4px]">
              PLAN PREVIEW
            </span>
            <span className="flex items-center gap-1.5 text-[12.5px] font-bold text-green-500">
              <span className="w-[7px] h-[7px] rounded-full bg-green-500 inline-block" />
              {statusOptions.find((s) => s.key === status)?.label}
            </span>
          </div>
          <div className="text-[17px] font-extrabold text-gray-900 mt-4">
            {displayName}
          </div>
          <p className="text-[13px] text-gray-500 leading-[1.5] mt-1.5">
            {displayDesc}
          </p>
          <div className="flex items-baseline gap-1.5 mt-3.5">
            <span className="text-[24px] font-extrabold text-[#6C2BD9]">
              ₹{Number(displayAmount).toLocaleString("en-IN")}
            </span>
            <span className="text-[13px] text-gray-500">
              /{" "}
              {selectedDuration?.label === "Monthly"
                ? "Month"
                : selectedDuration?.label}
            </span>
          </div>
          <div className="mt-4">
            <div className="text-[13px] font-bold text-gray-900 mb-2">
              Includes:
            </div>
            {(benefits.length ? benefits : ["Gym Access"])
              .slice(0, 4)
              .map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 text-[13px] text-gray-900 mb-1.5"
                >
                  <CheckCircle2 size={15} color="#6C2BD9" strokeWidth={2.3} />
                  {b}
                </div>
              ))}
          </div>
          <button
            disabled
            className="w-full mt-2 bg-gray-200 border-none rounded-xl py-3.5 text-[13.5px] font-bold text-gray-400 cursor-not-allowed"
          >
            Select Plan
          </button>
        </div>
      </div>

      {/* Pro tip */}
      <div className="px-5 pt-4">
        <div className="bg-[#F5F0FF] rounded-[14px] p-4 flex gap-3 items-start">
          <div className="w-[30px] h-[30px] rounded-full bg-[#6C2BD9] flex items-center justify-center flex-shrink-0">
            <Lightbulb size={15} color="#fff" strokeWidth={2} />
          </div>
          <p className="text-[13px] text-gray-900 m-0 leading-[1.5]">
            <strong>Pro Tip:</strong> Monthly plans generate the highest
            signups, while annual plans deliver the strongest retention.
          </p>
        </div>
      </div>

      {/* Footer meta */}
      <div className="flex justify-between px-5 pt-4 text-xs text-gray-400">
        <span>Last edited: Just now</span>
        <span className="font-bold">v1.0.4 Beta</span>
      </div>

      {/* Sticky publish button */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] px-5 pt-3.5 pb-[22px] bg-[linear-gradient(180deg,rgba(249,250,251,0)_0%,#F9FAFB_30%)] box-border">
        <button className="w-full bg-gradient-to-br from-[#6C2BD9] to-[#4A1BA0] border-none text-white text-[15px] font-bold py-4 rounded-2xl cursor-pointer shadow-[0_8px_20px_rgba(108,43,217,0.35)]">
          Publish Plan
        </button>
      </div>
    </div>
  );
}
