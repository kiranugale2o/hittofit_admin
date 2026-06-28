import React, { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  Store,
  ImagePlus,
  MapPin,
  Search,
  ShieldCheck,
  Clock4,
  FileText,
  Truck,
  Gem,
  BadgeCheck,
  MapPinned,
  ShoppingBasket,
  Eye,
  Network,
} from "lucide-react";

const CATEGORIES = [
  "Supplements",
  "Nutrition Store",
  "Fitness Equipment",
  "Fitness Apparel",
  "Health Products",
  "Multi-Category",
];

const HIGHLIGHTS = [
  "Fast Delivery",
  "Premium Products",
  "Certified Brands",
  "Local Pickup",
  "Bulk Orders",
  "Online Orders",
];

export default function AddStoreStep() {
  const [category, setCategory] = useState("Nutrition Store");
  const [verification, setVerification] = useState("verified");
  const [highlights, setHighlights] = useState([
    "Fast Delivery",
    "Premium Products",
  ]);

  const toggleHighlight = (h) =>
    setHighlights((prev) =>
      prev.includes(h) ? prev.filter((x) => x !== h) : [...prev, h],
    );

  return (
    <div className="flex-1 overflow-y-auto pb-28">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <button className="text-[#6C2BD9]">
            <ArrowLeft size={20} strokeWidth={2.2} />
          </button>
          <div>
            <p className="text-[13px] font-bold text-[#6C2BD9] leading-none">
              Add Store
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              Add a new retail partner to the ecosystem
            </p>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden shrink-0" />
      </div>

      <div className="px-4 mt-3 space-y-3">
        {/* Pro tip */}
        <div className="bg-purple-50 rounded-xl p-3 flex items-start gap-2">
          <Sparkles size={14} className="text-[#6C2BD9] mt-0.5 shrink-0" />
          <p className="text-[11px] text-purple-900 leading-snug">
            Pro Tip: Verified stores receive{" "}
            <span className="font-semibold text-[#6C2BD9]">2.6x more</span>{" "}
            customer engagement than incomplete profiles.
          </p>
        </div>

        {/* Store Details */}
        <section className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-[12px] font-bold text-gray-900 mb-3">
            Store Details
          </p>

          {/* Logo uploader */}
          <div className="flex items-center gap-3 mb-3 bg-gray-50 rounded-xl p-3">
            <div className="relative w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
              <ImagePlus size={17} className="text-gray-400" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#6C2BD9] flex items-center justify-center ring-2 ring-white">
                <Sparkles size={9} className="text-white" />
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-gray-800">
                Store Logo
              </p>
              <p className="text-[10px] text-gray-400">Recommended size</p>
              <p className="text-[10px] text-gray-400">512x512px, PNG/JPG</p>
            </div>
          </div>

          <Field label="Store Name" placeholder="e.g., FitFuel Nutrition" />
          <Field label="Owner Name" placeholder="Rohit Sharma" />
          <Field label="Mobile Number" placeholder="+91 00000 00000" />
          <Field label="Email Address" placeholder="contact@store.com" last />
        </section>

        {/* Store Category */}
        <section className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-[12px] font-bold text-gray-900 mb-3">
            Store Category
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {CATEGORIES.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl py-4 border transition-colors ${
                    active
                      ? "border-[#6C2BD9] bg-purple-50"
                      : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-md ${active ? "bg-purple-200" : "bg-gray-200"}`}
                  />
                  <span
                    className={`text-[11px] text-center leading-tight ${
                      active ? "text-[#6C2BD9] font-semibold" : "text-gray-500"
                    }`}
                  >
                    {c}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Location */}
        <section className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-[12px] font-bold text-gray-900 mb-3">Location</p>
          <div className="relative mb-3">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              placeholder="Search Address..."
              className="w-full text-[12px] pl-8 pr-3 py-2.5 rounded-xl border border-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#6C2BD9]"
            />
          </div>
          <Field label="" placeholder="City" />
          <Field label="" placeholder="State" />
          <Field label="" placeholder="Pincode" last />
        </section>

        {/* Verification Status */}
        <section>
          <p className="text-[12px] font-bold text-gray-900 mb-2 px-1">
            Verification Status
          </p>
          <div className="space-y-2">
            <StatusOption
              active={verification === "verified"}
              onClick={() => setVerification("verified")}
              icon={ShieldCheck}
              label="Verified"
              sub="Instant Activation"
            />
            <StatusOption
              active={verification === "pending"}
              onClick={() => setVerification("pending")}
              icon={Clock4}
              label="Pending"
              sub="Requires Review"
            />
            <StatusOption
              active={verification === "documents"}
              onClick={() => setVerification("documents")}
              icon={FileText}
              label="Documents"
              sub="Awaiting Upload"
            />
          </div>
        </section>

        {/* Store Highlights */}
        <section>
          <p className="text-[12px] font-bold text-gray-900 mb-2 px-1">
            Store Highlights
          </p>
          <div className="flex flex-wrap gap-2">
            {HIGHLIGHTS.map((h) => {
              const active = highlights.includes(h);
              return (
                <button
                  key={h}
                  onClick={() => toggleHighlight(h)}
                  className={`text-[11px] px-3 py-1.5 rounded-full border ${
                    active
                      ? "bg-[#6C2BD9] text-white border-[#6C2BD9]"
                      : "bg-gray-50 text-gray-600 border-gray-200"
                  }`}
                >
                  {h}
                </button>
              );
            })}
          </div>
        </section>

        {/* Live preview card */}
        <section className="rounded-2xl p-4 border-2 border-[#6C2BD9] bg-white shadow-sm">
          <div className="h-16 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 mb-3 flex items-center px-3 gap-2">
            <div className="w-9 h-9 rounded-lg bg-[#6C2BD9] flex items-center justify-center text-white text-[11px] font-bold shrink-0">
              FF
            </div>
            <div>
              <p className="text-[12px] font-bold text-white drop-shadow">
                FitFuel Nutrition
              </p>
              <p className="text-[10px] text-white/80">Nutrition Store</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] bg-emerald-100 text-emerald-600 font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <BadgeCheck size={10} /> Verified
            </span>
            <span className="text-[10px] text-gray-400">ID: #FB58821</span>
          </div>
          <p className="text-[11px] text-gray-600 flex items-center gap-1.5">
            <Store size={11} className="text-gray-400" /> Rohit Sharma
          </p>
          <p className="text-[11px] text-gray-600 flex items-center gap-1.5 mt-1">
            <MapPinned size={11} className="text-gray-400" /> Mumbai,
            Maharashtra
          </p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            </div>
            <button className="text-[10px] text-[#6C2BD9] font-semibold flex items-center gap-1">
              <Eye size={11} /> Preview Live
            </button>
          </div>
        </section>
      </div>

      {/* CTA */}
      <div className="px-4 mt-4">
        <button className="w-full bg-gradient-to-r from-[#6C2BD9] to-[#4F1FA8] text-white text-[13px] font-semibold py-3 rounded-full flex items-center justify-center gap-1.5">
          Create Store <ArrowLeft size={14} className="rotate-180" />
        </button>
        <button className="w-full text-[11px] text-gray-400 py-2.5">
          Save Draft
        </button>
      </div>

      {/* Footer note */}
      <div className="px-4">
        <div className="bg-gray-100 rounded-xl p-3 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
            <Network size={14} className="text-[#6C2BD9]" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-gray-800">
              FitEcosystem Partner
            </p>
            <p className="text-[10px] text-gray-400">
              Onboard with trust and speed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, last }) {
  return (
    <div className={last ? "" : "mb-3"}>
      {label && (
        <label className="text-[11px] text-gray-500 mb-1 block">{label}</label>
      )}
      <input
        placeholder={placeholder}
        className="w-full text-[12px] px-3 py-2.5 rounded-xl border border-gray-200 placeholder-gray-400 focus:outline-none focus:border-[#6C2BD9]"
      />
    </div>
  );
}

function StatusOption({ active, onClick, icon: Icon, label, sub }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 border bg-white text-left ${
        active ? "border-[#6C2BD9] ring-1 ring-[#6C2BD9]/30" : "border-gray-100"
      }`}
    >
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center ${
          active ? "bg-[#6C2BD9]" : "bg-gray-100"
        }`}
      >
        <Icon size={14} className={active ? "text-white" : "text-gray-400"} />
      </div>
      <div>
        <p
          className={`text-[11px] font-bold ${active ? "text-[#6C2BD9]" : "text-gray-800"}`}
        >
          {label}
        </p>
        <p className="text-[10px] text-gray-400">{sub}</p>
      </div>
    </button>
  );
}
