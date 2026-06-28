import React, { useState } from "react";
import {
  ArrowLeft,
  MoreVertical,
  Upload,
  ShieldCheck,
  Timer,
  FileText,
  Award,
  Sparkles,
  Check,
} from "lucide-react";

const specializations = [
  "Strength Training",
  "Weight Loss",
  "Yoga",
  "CrossFit",
  "Bodybuilding",
  "Sports Conditioning",
  "Nutrition",
  "Rehabilitation",
];

const certOptions = [
  {
    key: "verified",
    label: "Verified",
    sub: "Profile goes live immediately.",
    icon: ShieldCheck,
  },
  {
    key: "pending",
    label: "Pending Verification",
    sub: "Review takes 24–48 hours.",
    icon: Timer,
  },
  {
    key: "documents",
    label: "Documents Awaiting",
    sub: "Waiting for trainer upload.",
    icon: FileText,
  },
];

export default function AddTrainerFormScreen() {
  const [fullName, setFullName] = useState("Amit Patel");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("8");
  const [selectedSpecs, setSelectedSpecs] = useState(["Strength Training"]);
  const [gym, setGym] = useState("FitZone Elite");
  const [certStatus, setCertStatus] = useState("verified");

  const toggleSpec = (spec) => {
    setSelectedSpecs((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec],
    );
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen max-w-[420px] mx-auto pb-8">
      {/* Header */}
      <div className="flex items-start justify-between px-5 pt-2 pb-2">
        <div className="flex items-start gap-3">
          <ArrowLeft
            size={20}
            className="text-gray-900 mt-1"
            strokeWidth={2.2}
          />
          <div>
            <h1 className="text-lg font-extrabold text-gray-900 leading-tight">
              Add Trainer
            </h1>
            <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5 max-w-[230px]">
              Add a fitness professional to the ecosystem.
            </p>
          </div>
        </div>
        <MoreVertical
          size={18}
          className="text-gray-900 mt-1"
          strokeWidth={2}
        />
      </div>

      {/* Photo upload */}
      <div className="flex flex-col items-center mt-3">
        <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-sm">
          <span className="text-white text-2xl font-bold">AP</span>
          <button className="absolute -bottom-1.5 -right-1.5 w-9 h-9 rounded-full bg-primary flex items-center justify-center border-[3px] border-white">
            <Upload size={15} className="text-white" strokeWidth={2.3} />
          </button>
        </div>
        <div className="text-sm font-bold text-primary mt-2.5">Amit Patel</div>
      </div>

      {/* General Info */}
      <div className="px-5 mt-6">
        <div className="text-[11px] font-bold text-gray-500 tracking-wide mb-2.5">
          GENERAL INFO
        </div>
        <div className="space-y-3">
          <div className="border border-gray-200 rounded-xl px-3.5 py-2 bg-white">
            <label className="text-[11px] text-gray-500 block">Full Name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-sm text-gray-900 outline-none bg-transparent mt-0.5"
            />
          </div>
          <div className="border border-gray-200 rounded-xl px-3.5 py-2 bg-white">
            <label className="text-[11px] text-gray-500 block">
              Mobile Number
            </label>
            <input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className="w-full text-sm text-gray-400 outline-none bg-transparent mt-0.5 placeholder:text-gray-400"
            />
          </div>
          <div className="border border-gray-200 rounded-xl px-3.5 py-2 bg-white">
            <label className="text-[11px] text-gray-500 block">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="amit.patel@hittofit.com"
              className="w-full text-sm text-gray-400 outline-none bg-transparent mt-0.5 placeholder:text-gray-400"
            />
          </div>
          <div className="border border-gray-200 rounded-xl px-3.5 py-2 bg-white">
            <label className="text-[11px] text-gray-500 block">
              Experience (Years)
            </label>
            <input
              value={experience}
              onChange={(e) =>
                setExperience(e.target.value.replace(/[^0-9]/g, ""))
              }
              className="w-full text-sm text-gray-900 outline-none bg-transparent mt-0.5"
            />
          </div>
        </div>
      </div>

      {/* Specialization */}
      <div className="px-5 mt-6">
        <div className="text-[11px] font-bold text-gray-500 tracking-wide mb-2.5">
          SPECIALIZATION
        </div>
        <div className="flex flex-wrap gap-2.5">
          {specializations.map((spec) => {
            const selected = selectedSpecs.includes(spec);
            return (
              <button
                key={spec}
                onClick={() => toggleSpec(spec)}
                className={`text-[13px] font-medium px-4 py-2.5 rounded-full border transition-colors ${
                  selected
                    ? "bg-[#4500B4] text-white  border-primary"
                    : "bg-white text-gray-600 border-gray-200"
                }`}
              >
                {spec}
              </button>
            );
          })}
        </div>
      </div>

      {/* Assign Gym */}
      <div className="px-5 mt-6">
        <div className="text-[11px] font-bold text-gray-500 tracking-wide mb-2.5">
          ASSIGN GYM
        </div>
        <select
          value={gym}
          onChange={(e) => setGym(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-medium text-gray-900 outline-none bg-white appearance-none"
        >
          <option>FitZone Elite</option>
          <option>Pune West Branch</option>
          <option>Hinjewadi Hub</option>
        </select>
      </div>

      {/* Certification Status */}
      <div className="px-5 mt-6">
        <div className="text-[11px] font-bold text-gray-500 tracking-wide mb-2.5">
          CERTIFICATION STATUS
        </div>
        <div className="space-y-3">
          {certOptions.map((opt) => {
            const selected = certStatus === opt.key;
            const Icon = opt.icon;
            return (
              <button
                key={opt.key}
                onClick={() => setCertStatus(opt.key)}
                className={`w-full flex items-center gap-3.5 rounded-2xl p-4 text-left ${
                  selected
                    ? "bg-primary-soft border-2 border-primary"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    selected ? "bg-[#4500B4]" : "bg-gray-100"
                  }`}
                >
                  <Icon
                    size={19}
                    className={selected ? "text-white" : "text-gray-400"}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <div
                    className={`text-[15px] font-semibold ${selected ? "text-primary" : "text-gray-900"}`}
                  >
                    {opt.label}
                  </div>
                  <div className="text-[13px] text-gray-500 mt-0.5">
                    {opt.sub}
                  </div>
                </div>
                {selected && (
                  <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <Check size={13} className="text-primary" strokeWidth={3} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Preview card */}
      <div className="px-5 mt-6">
        <div className="bg-gradient-to-br from-[#5E23DC] to-[#4500B4] rounded-3xl p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-700 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">AP</span>
              </div>
              <div>
                <div className="text-lg font-extrabold text-white leading-tight">
                  {fullName || "Amit Patel"}
                </div>
                <div className="flex items-center gap-1.5 text-[13px] text-purple-100 mt-0.5">
                  <Award size={13} strokeWidth={2} />
                  Strength Coach
                </div>
              </div>
            </div>
            <span className="bg-white/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 whitespace-nowrap">
              <ShieldCheck size={11} strokeWidth={2.3} /> VERIFIED
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-white/15 rounded-xl px-3.5 py-2.5">
              <div className="text-[11px] text-purple-200 font-semibold tracking-wide">
                EXPERIENCE
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                {experience || "0"} Years
              </div>
            </div>
            <div className="bg-white/15 rounded-xl px-3.5 py-2.5">
              <div className="text-[11px] text-purple-200 font-semibold tracking-wide">
                GYM
              </div>
              <div className="text-sm font-bold text-white mt-0.5">{gym}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pro tip */}
      <div className="px-5 mt-5">
        <div className="bg-gray-100 rounded-2xl p-4 flex gap-3 items-start">
          <Sparkles
            size={16}
            className="text-gray-400 mt-0.5 flex-shrink-0"
            strokeWidth={2}
          />
          <p className="text-[13px] text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-700">Pro Tip:</span>{" "}
            Verified trainers receive{" "}
            <span className="underline font-medium">2.8× more</span> member
            bookings.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="px-5 mt-5 space-y-2">
        <button className="w-full bg-gradient-to-r from-[#4500B4] to-[#5E23DC] text-white text-base font-semibold py-4 rounded-2xl shadow-purple flex items-center justify-center gap-2">
          Create Trainer →
        </button>
        <button className="w-full text-center text-sm font-medium text-gray-500 py-1">
          Save Draft
        </button>
      </div>
    </div>
  );
}
