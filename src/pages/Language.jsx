import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  Check,
  CalendarDays,
  Banknote,
  Clock,
  Lightbulb,
} from "lucide-react";

const LANGUAGES = [
  { code: "EN", name: "English", sub: "English (International)", full: true },
  { code: "हिं", name: "हिन्दी (Hindi)", sub: "Standard Hindi", full: true },
  { code: "म", name: "मराठी (Marathi)", sub: "Standard Marathi", full: true },
  {
    code: "ગુ",
    name: "ગુજરાતી (Gujarati)",
    sub: "Standard Gujarati",
    full: true,
  },
  { code: "ಕ", name: "ಕನ್ನಡ (Kannada)", sub: null, full: false },
  { code: "த", name: "தமிழ் (Tamil)", sub: null, full: false },
];

export default function Language() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("EN");
  const [timeFormat, setTimeFormat] = useState("12h");

  const fullWidth = LANGUAGES.filter((l) => l.full);
  const halfWidth = LANGUAGES.filter((l) => !l.full);

  return (
    <div className="flex-1 overflow-y-auto pb-8">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-2">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="text-[#6C2BD9]">
            <ArrowLeft size={20} strokeWidth={2.2} />
          </button>
          <p className="text-[14px] font-bold text-[#6C2BD9]">Language</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0" />
      </div>

      <div className="px-4 mt-2">
        <p className="text-[11.5px] text-gray-500 leading-snug">
          Choose how the CRM communicates with you.
        </p>
      </div>

      <div className="px-4 mt-3 space-y-4">
        {/* Current language card */}
        <section className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm relative overflow-hidden">
          <div className="absolute right-3 top-3 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center">
            <Globe size={17} className="text-[#6C2BD9]" />
          </div>
          <span className="text-[10px] font-semibold text-[#6C2BD9] bg-purple-100 px-2.5 py-1 rounded-full">
            Active
          </span>
          <p className="text-[13px] font-bold text-gray-900 mt-2.5">
            Current Language: English (India)
          </p>
          <p className="text-[11px] text-gray-500 leading-snug mt-1 pr-10">
            All menus, labels, and notifications will appear in this language.
          </p>
        </section>

        {/* Available languages */}
        <section>
          <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
            Available Languages
          </p>
          <div className="space-y-2.5">
            {fullWidth.map((lang) => {
              const active = selected === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => setSelected(lang.code)}
                  className={`w-full flex items-center justify-between rounded-2xl p-3.5 border ${
                    active
                      ? "border-[#6C2BD9] bg-white"
                      : "border-gray-100 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-600 shrink-0">
                      {lang.code}
                    </div>
                    <div className="text-left">
                      <p className="text-[12.5px] font-semibold text-gray-900">
                        {lang.name}
                      </p>
                      <p className="text-[10.5px] text-gray-400">{lang.sub}</p>
                    </div>
                  </div>
                  <div
                    className={`w-5.5 h-5.5 rounded-full flex items-center justify-center shrink-0 ${
                      active ? "bg-[#6C2BD9]" : "border border-gray-300"
                    }`}
                    style={{ width: "22px", height: "22px" }}
                  >
                    {active && (
                      <Check size={12} className="text-white" strokeWidth={3} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2.5 mt-2.5">
            {halfWidth.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelected(lang.code)}
                className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-600 shrink-0">
                  {lang.code}
                </div>
                <span className="text-[12px] font-medium text-gray-800">
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Preview */}
        <section>
          <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
            Preview
          </p>
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-3.5">
            <div className="flex items-center justify-between mb-1.5">
              <div>
                <p className="text-[9px] text-gray-400 uppercase">Dashboard</p>
                <p className="text-[11.5px] font-semibold text-[#6C2BD9]">
                  Dashboard
                </p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-400 uppercase">
                  Notifications
                </p>
                <p className="text-[11.5px] font-semibold text-gray-900 flex items-center gap-1 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />{" "}
                  Notifications
                </p>
              </div>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 mt-2">
              <p className="text-[9px] text-gray-400 uppercase tracking-wide">
                Campaign Management
              </p>
              <p className="text-[12px] font-semibold text-gray-900 mt-0.5">
                Active Campaigns (12)
              </p>
              <div className="w-full h-1.5 rounded-full bg-gray-200 mt-2 overflow-hidden">
                <div
                  className="h-full bg-[#6C2BD9] rounded-full"
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Regional preferences */}
        <section>
          <p className="text-[10.5px] font-semibold text-gray-400 uppercase tracking-wide mb-2.5">
            Regional Preferences
          </p>
          <div className="space-y-2.5">
            <div className="bg-white border border-gray-100 rounded-xl p-3.5 flex items-center justify-between">
              <span className="flex items-center gap-2.5 text-[12px] text-gray-800">
                <CalendarDays size={15} className="text-gray-500" /> Date Format
              </span>
              <span className="text-[12px] font-semibold text-[#6C2BD9]">
                DD/MM/YYYY
              </span>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-3.5 flex items-center justify-between">
              <span className="flex items-center gap-2.5 text-[12px] text-gray-800">
                <Banknote size={15} className="text-gray-500" /> Currency
              </span>
              <span className="text-[12px] font-semibold text-[#6C2BD9]">
                Indian Rupee (₹)
              </span>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-3.5 flex items-center justify-between">
              <span className="flex items-center gap-2.5 text-[12px] text-gray-800">
                <Clock size={15} className="text-gray-500" /> Time Format
              </span>
              <div className="bg-gray-100 rounded-full p-0.5 flex">
                <button
                  onClick={() => setTimeFormat("12h")}
                  className={`text-[10.5px] font-semibold px-2.5 py-1 rounded-full ${
                    timeFormat === "12h"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-400"
                  }`}
                >
                  12h
                </button>
                <button
                  onClick={() => setTimeFormat("24h")}
                  className={`text-[10.5px] font-semibold px-2.5 py-1 rounded-full ${
                    timeFormat === "24h"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-400"
                  }`}
                >
                  24h
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Language tip */}
        <div className="bg-purple-50 rounded-xl p-3.5 flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#6C2BD9] flex items-center justify-center shrink-0">
            <Lightbulb size={15} className="text-white" />
          </div>
          <div>
            <p className="text-[12px] font-semibold text-[#6C2BD9]">
              Language Tip
            </p>
            <p className="text-[11px] text-gray-600 leading-snug mt-0.5">
              Choose a language that helps your team work more efficiently.
              Native language support often increases data entry accuracy by up
              to 40%.
            </p>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="px-4 mt-4 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-[12.5px] font-medium text-gray-500 px-4 py-3"
        >
          Cancel
        </button>
        <button className="flex-1 bg-[#6C2BD9] text-white text-[13px] font-semibold py-3 rounded-full">
          Apply Language
        </button>
      </div>
    </div>
  );
}
