import React, { useState } from "react";
import {
  ChevronLeft,
  MoreVertical,
  Check,
  Plus,
  AlignJustify,
  LayoutList,
  CircleSlash,
  Grid3x3,
  Home,
  ShieldCheck,
  TrendingUp,
  Layers,
  User,
  Circle,
} from "lucide-react";

const PURPLE = "#5B21D4";

function Toggle({ on }) {
  return (
    <div
      className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${on ? "bg-[#5B21D4]" : "bg-gray-200"}`}
    >
      <div
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${on ? "translate-x-6" : "translate-x-0.5"}`}
      />
    </div>
  );
}

/* Light theme preview card */
function LightThemeCard({ selected }) {
  return (
    <div
      className={`rounded-2xl border-2 overflow-hidden ${selected ? "border-[#5B21D4]" : "border-gray-200"} relative`}
    >
      {selected && (
        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#5B21D4] flex items-center justify-center z-10">
          <Check size={11} color="#fff" strokeWidth={3} />
        </div>
      )}
      <div className="bg-white p-2.5">
        <div className="h-1.5 w-12 bg-gray-200 rounded mb-1.5" />
        <div className="h-1 w-8 bg-gray-100 rounded mb-2" />
        <div className="bg-gray-100 rounded-lg p-2 mb-1.5">
          <div className="h-1 w-10 bg-gray-200 rounded mb-1" />
          <div className="h-1 w-7 bg-gray-200 rounded" />
        </div>
        <div className="bg-gray-100 rounded-lg p-2">
          <div className="h-1 w-10 bg-gray-200 rounded mb-1" />
          <div className="h-1 w-7 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

/* Dark theme preview card */
function DarkThemeCard() {
  return (
    <div className="rounded-2xl border-2 border-transparent overflow-hidden">
      <div className="bg-gray-900 p-2.5">
        <div className="h-1.5 w-12 bg-gray-600 rounded mb-1.5" />
        <div className="h-1 w-8 bg-gray-700 rounded mb-2" />
        <div className="bg-gray-800 rounded-lg p-2 mb-1.5">
          <div className="h-1 w-10 bg-gray-600 rounded mb-1" />
          <div className="h-1 w-7 bg-gray-600 rounded" />
        </div>
        <div className="bg-gray-800 rounded-lg p-2">
          <div className="h-1 w-10 bg-gray-600 rounded mb-1" />
          <div className="h-1 w-7 bg-gray-600 rounded" />
        </div>
      </div>
    </div>
  );
}

/* System theme preview card */
function SystemThemeCard() {
  return (
    <div className="rounded-2xl border-2 border-gray-200 overflow-hidden">
      <div className="flex">
        <div className="bg-white p-2 flex-1">
          <div className="h-1.5 w-5 bg-[#A78BFA] rounded mb-1" />
          <div className="h-1 w-4 bg-gray-200 rounded" />
        </div>
        <div className="bg-gray-900 p-2 flex-1">
          <div className="flex justify-end">
            <div className="w-4 h-2.5 bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppearanceScreen() {
  const [selectedTheme, setSelectedTheme] = useState("Light");
  const [selectedColor, setSelectedColor] = useState(0);
  const [density, setDensity] = useState("Comfortable");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [glassmorphism, setGlassmorphism] = useState(true);

  const colors = ["#5B21D4", "#3B82F6", "#EA580C", "#16A34A"];

  return (
    <div className="flex flex-col min-h-screen max-w-[390px] mx-auto bg-white font-['Inter',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-3 bg-white">
        <ChevronLeft
          size={22}
          color={PURPLE}
          strokeWidth={2.5}
          className="cursor-pointer"
        />
        <span className="text-[16px] font-bold text-[#5B21D4]">Appearance</span>
        <MoreVertical size={18} color="#9CA3AF" />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4 pb-6">
        {/* Page title */}
        <div className="mt-3 mb-6">
          <h1 className="text-[22px] font-black text-gray-900 leading-tight mb-1">
            Appearance
          </h1>
          <p className="text-[12px] text-gray-400">
            Customize how your CRM workspace looks and feels.
          </p>
        </div>

        {/* THEME */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">
            Theme
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div
              onClick={() => setSelectedTheme("Light")}
              className="cursor-pointer"
            >
              <LightThemeCard selected={selectedTheme === "Light"} />
              <p
                className={`text-center text-[11px] font-semibold mt-1.5 ${selectedTheme === "Light" ? "text-[#5B21D4]" : "text-gray-500"}`}
              >
                Light
              </p>
            </div>
            <div
              onClick={() => setSelectedTheme("Dark")}
              className="cursor-pointer"
            >
              <DarkThemeCard />
              <p
                className={`text-center text-[11px] font-semibold mt-1.5 ${selectedTheme === "Dark" ? "text-[#5B21D4]" : "text-gray-500"}`}
              >
                Dark
              </p>
            </div>
            <div
              onClick={() => setSelectedTheme("System")}
              className="cursor-pointer"
            >
              <SystemThemeCard />
              <p
                className={`text-center text-[11px] font-semibold mt-1.5 ${selectedTheme === "System" ? "text-[#5B21D4]" : "text-gray-500"}`}
              >
                System
              </p>
            </div>
          </div>
        </div>

        {/* ACCENT COLOR */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-0.5">
            Accent Color
          </p>
          <p className="text-[12px] text-gray-500 mb-3">
            Choose your primary workspace color.
          </p>
          <div className="flex items-center gap-3">
            {colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(i)}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: color }}
              >
                {selectedColor === i && (
                  <Check size={18} color="#fff" strokeWidth={3} />
                )}
              </button>
            ))}
            {/* Custom color */}
            <button className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
              <Plus size={16} color="#9CA3AF" />
            </button>
          </div>
        </div>

        {/* UI DENSITY */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">
            UI Density
          </p>
          <div className="flex bg-gray-100 rounded-2xl p-1">
            {["Comfortable", "Compact"].map((d) => (
              <button
                key={d}
                onClick={() => setDensity(d)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-[12px] font-semibold transition-all ${
                  density === d
                    ? "bg-white shadow-sm text-gray-800"
                    : "text-gray-400"
                }`}
              >
                {d === "Comfortable" ? (
                  <LayoutList size={14} />
                ) : (
                  <AlignJustify size={14} />
                )}
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* VISUAL EFFECTS */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-3">
            Visual Effects
          </p>
          <div className="flex flex-col gap-2">
            {/* Reduced Motion */}
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-4 py-3.5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center">
                  <CircleSlash size={15} color={PURPLE} />
                </div>
                <span className="text-[13px] font-medium text-gray-800">
                  Reduced Motion
                </span>
              </div>
              <div
                onClick={() => setReducedMotion(!reducedMotion)}
                className="cursor-pointer"
              >
                <Toggle on={reducedMotion} />
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-4 py-3.5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Circle size={15} color={PURPLE} />
                </div>
                <span className="text-[13px] font-medium text-gray-800">
                  High Contrast
                </span>
              </div>
              <div
                onClick={() => setHighContrast(!highContrast)}
                className="cursor-pointer"
              >
                <Toggle on={highContrast} />
              </div>
            </div>

            {/* Show Glassmorphism */}
            <div className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl px-4 py-3.5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center">
                  <Grid3x3 size={15} color={PURPLE} />
                </div>
                <span className="text-[13px] font-medium text-gray-800">
                  Show Glassmorphism
                </span>
              </div>
              <div
                onClick={() => setGlassmorphism(!glassmorphism)}
                className="cursor-pointer"
              >
                <Toggle on={glassmorphism} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
