import React, { useState } from "react";
import {
  ChevronLeft,
  MoreVertical,
  Eye,
  Rocket,
  Check,
  LayoutDashboard,
  Users,
  Megaphone,
  FileBarChart2,
  MonitorPlay,
  Info,
  LayoutGrid,
  Bell,
  Mail,
  AlertCircle,
  Zap,
  Star,
  Save,
  Home,
  ShieldCheck,
  TrendingUp,
  Layers,
  User,
} from "lucide-react";

const PURPLE = "#5B21D4";

function Toggle({ on }) {
  return (
    <div
      className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${on ? "bg-[#5B21D4]" : "bg-gray-200"}`}
    >
      <div
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${on ? "translate-x-5" : "translate-x-0.5"}`}
      />
    </div>
  );
}

function Checkbox({ checked }) {
  return (
    <div
      className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${checked ? "bg-[#5B21D4] border-[#5B21D4]" : "border-gray-300 bg-white"}`}
    >
      {checked && <Check size={11} color="#fff" strokeWidth={3} />}
    </div>
  );
}

function SectionLabel({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-1.5 mb-2.5">
      <Icon size={13} color="#9CA3AF" />
      <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

export default function CRMPreferencesScreen() {
  const [landingPage, setLandingPage] = useState("Dashboard");
  const [dashboardExp, setDashboardExp] = useState("Operations View");
  const [pushNotif, setPushNotif] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [highPriority, setHighPriority] = useState(true);
  const [rememberScreen, setRememberScreen] = useState(true);
  const [quickActions, setQuickActions] = useState(true);
  const [upcomingTasks, setUpcomingTasks] = useState(false);
  const [smartRec, setSmartRec] = useState(true);
  const [favModules, setFavModules] = useState(["Campaigns", "Analytics"]);

  const landingPages = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "User Mgmt", icon: Users },
    { label: "Campaigns", icon: Megaphone },
    { label: "Reports", icon: FileBarChart2 },
    { label: "Content Review", icon: MonitorPlay },
  ];

  const dashboardOptions = [
    { label: "Executive View", sub: "KPI focus", preview: "chart" },
    { label: "Operations View", sub: "Task focus", preview: "laptop" },
  ];

  const allModules = ["Campaigns", "People", "Analytics", "Listings", "Alerts"];
  const toggleModule = (m) => {
    setFavModules((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m],
    );
  };

  return (
    <div className="flex flex-col min-h-screen max-w-[390px] mx-auto bg-[#F5F5F8] font-['Inter',sans-serif]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-2 pb-3 bg-white">
        <ChevronLeft
          size={22}
          color="#374151"
          strokeWidth={2.5}
          className="cursor-pointer"
        />
        <div className="text-center">
          <p className="text-[15px] font-bold text-[#5B21D4] leading-tight">
            CRM Preferences
          </p>
          <p className="text-[9px] font-bold text-gray-400 tracking-widest uppercase">
            Workspace Tuning
          </p>
        </div>
        <MoreVertical size={18} color="#9CA3AF" />
      </div>

      <div className="flex-1 overflow-y-auto pb-6">
        {/* Page title */}
        <div className="bg-white px-4 pt-5 pb-5">
          <h1 className="text-[21px] font-black text-gray-900 leading-snug mb-1">
            Customize how your workspace works.
          </h1>
          <p className="text-[11.5px] text-gray-400">
            Refine your interface for maximum flow and joyful productivity.
          </p>
        </div>

        <div className="h-2" />

        {/* Interface Mockup */}
        <div className="bg-white px-4 pt-4 pb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold text-[#5B21D4] bg-purple-50 px-3 py-1 rounded-full">
              Current Setup
            </span>
            <Eye size={16} color={PURPLE} />
          </div>
          <p className="text-[13px] font-bold text-gray-900 mb-3">
            Interface Mockup
          </p>
          {/* Mockup grid */}
          <div className="border border-purple-100 rounded-xl overflow-hidden bg-purple-50/30">
            <div className="grid grid-cols-3 gap-0 p-2 h-24">
              {/* Left col */}
              <div className="bg-white rounded-lg p-2 mr-1">
                <div className="h-1.5 w-8 bg-purple-200 rounded mb-1.5" />
                <div className="h-1 w-6 bg-gray-100 rounded mb-1" />
                <div className="h-1 w-5 bg-gray-100 rounded mb-1" />
                <div className="h-1 w-6 bg-gray-100 rounded" />
              </div>
              {/* Mid col */}
              <div className="bg-white rounded-lg p-2 mr-1">
                <div className="h-1.5 w-8 bg-gray-200 rounded mb-1.5" />
                <div className="h-1 w-full bg-gray-100 rounded mb-1" />
                <div className="h-1 w-full bg-gray-100 rounded mb-1" />
                <div className="h-1 w-4 bg-gray-100 rounded" />
              </div>
              {/* Right col */}
              <div className="bg-white border-2 border-[#5B21D4] rounded-lg p-2 flex items-center justify-center">
                <TrendingUp size={18} color="#C4B5FD" />
              </div>
            </div>
          </div>
          {/* Tab row */}
          <div className="flex items-center gap-4 mt-3 px-1">
            {[
              { icon: LayoutDashboard, label: "Dashboard" },
              { icon: Users, label: "Operations" },
              { icon: Bell, label: "Push" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1">
                <Icon size={10} color="#9CA3AF" />
                <span className="text-[10px] text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-2" />

        {/* START HERE */}
        <div className="bg-white px-4 pt-4 pb-4">
          <SectionLabel
            icon={Rocket}
            label="Start Here (Default Landing Page)"
          />
          <div className="grid grid-cols-2 gap-2.5 mb-2">
            {landingPages.slice(0, 4).map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => setLandingPage(label)}
                className={`relative flex flex-col items-start p-3 rounded-2xl border-2 transition-all ${
                  landingPage === label
                    ? "border-[#5B21D4] bg-white"
                    : "border-gray-100 bg-white"
                }`}
              >
                {landingPage === label && (
                  <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#5B21D4] flex items-center justify-center">
                    <Check size={9} color="#fff" strokeWidth={3} />
                  </div>
                )}
                <Icon
                  size={18}
                  color={landingPage === label ? PURPLE : "#9CA3AF"}
                  className="mb-2"
                />
                <span className="text-[12px] font-semibold text-gray-700">
                  {label}
                </span>
              </button>
            ))}
          </div>
          {/* Content Review full width */}
          <button
            onClick={() => setLandingPage("Content Review")}
            className={`w-full flex items-center gap-3 p-3 rounded-2xl border-2 transition-all ${
              landingPage === "Content Review"
                ? "border-[#5B21D4] bg-white"
                : "border-gray-100 bg-white"
            }`}
          >
            <MonitorPlay
              size={18}
              color={landingPage === "Content Review" ? PURPLE : "#9CA3AF"}
            />
            <span className="text-[12px] font-semibold text-gray-700">
              Content Review
            </span>
          </button>
        </div>

        {/* Insight tip */}
        <div className="mx-4 my-2 bg-purple-50 border border-purple-100 rounded-2xl px-4 py-3 flex items-start gap-2.5">
          <Info size={14} color={PURPLE} className="mt-0.5 shrink-0" />
          <p className="text-[11.5px] text-gray-700 leading-snug">
            <span className="font-bold text-[#5B21D4]">Operations View</span> is
            recommended for users who manage approvals, campaigns, and partner
            activities daily.
          </p>
        </div>

        {/* DASHBOARD EXPERIENCE */}
        <div className="bg-white px-4 pt-4 pb-4">
          <SectionLabel icon={LayoutGrid} label="Dashboard Experience" />
          <div className="flex gap-3 overflow-x-auto pb-1">
            {dashboardOptions.map(({ label, sub, preview }) => (
              <button
                key={label}
                onClick={() => setDashboardExp(label)}
                className={`flex-shrink-0 w-36 rounded-2xl border-2 overflow-hidden transition-all ${
                  dashboardExp === label
                    ? "border-[#5B21D4]"
                    : "border-gray-100"
                }`}
              >
                {/* Preview area */}
                <div
                  className={`h-20 flex items-center justify-center ${dashboardExp === label ? "bg-[#5B21D4]" : "bg-gray-50"}`}
                >
                  {preview === "chart" ? (
                    <svg viewBox="0 0 80 48" width="60" height="36">
                      <rect
                        x="5"
                        y="30"
                        width="8"
                        height="12"
                        rx="2"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.3)"
                            : "#E5E7EB"
                        }
                      />
                      <rect
                        x="17"
                        y="20"
                        width="8"
                        height="22"
                        rx="2"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.5)"
                            : "#D1D5DB"
                        }
                      />
                      <rect
                        x="29"
                        y="10"
                        width="8"
                        height="32"
                        rx="2"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.7)"
                            : "#9CA3AF"
                        }
                      />
                      <rect
                        x="41"
                        y="18"
                        width="8"
                        height="24"
                        rx="2"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.5)"
                            : "#D1D5DB"
                        }
                      />
                      <rect
                        x="53"
                        y="24"
                        width="8"
                        height="18"
                        rx="2"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.3)"
                            : "#E5E7EB"
                        }
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 80 52" width="64" height="42">
                      {/* Laptop */}
                      <rect
                        x="8"
                        y="6"
                        width="64"
                        height="38"
                        rx="4"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.15)"
                            : "#E5E7EB"
                        }
                      />
                      <rect
                        x="12"
                        y="10"
                        width="56"
                        height="30"
                        rx="2"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.25)"
                            : "#D1D5DB"
                        }
                      />
                      {/* Screen content */}
                      <rect
                        x="16"
                        y="14"
                        width="20"
                        height="3"
                        rx="1"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.6)"
                            : "#9CA3AF"
                        }
                      />
                      <rect
                        x="16"
                        y="20"
                        width="48"
                        height="2"
                        rx="1"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.3)"
                            : "#E5E7EB"
                        }
                      />
                      <rect
                        x="16"
                        y="25"
                        width="36"
                        height="2"
                        rx="1"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.3)"
                            : "#E5E7EB"
                        }
                      />
                      <rect
                        x="16"
                        y="30"
                        width="44"
                        height="2"
                        rx="1"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.3)"
                            : "#E5E7EB"
                        }
                      />
                      {/* Base */}
                      <rect
                        x="0"
                        y="44"
                        width="80"
                        height="4"
                        rx="2"
                        fill={
                          dashboardExp === label
                            ? "rgba(255,255,255,0.2)"
                            : "#E5E7EB"
                        }
                      />
                    </svg>
                  )}
                </div>
                <div className="px-3 py-2 text-left">
                  <p
                    className={`text-[11px] font-bold ${dashboardExp === label ? "text-[#5B21D4]" : "text-gray-700"}`}
                  >
                    {label}
                  </p>
                  <p
                    className={`text-[10px] ${dashboardExp === label ? "text-[#5B21D4]" : "text-gray-400"}`}
                  >
                    {sub}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="h-2" />

        {/* NOTIFICATIONS */}
        <div className="bg-white px-4 pt-4 pb-3">
          <SectionLabel icon={Bell} label="Notifications" />
          <div className="flex flex-col divide-y divide-gray-50">
            {[
              {
                icon: MonitorPlay,
                label: "Push Notifications",
                sub: "Real-time mobile alerts",
                state: pushNotif,
                set: setPushNotif,
              },
              {
                icon: Mail,
                label: "Email Alerts",
                sub: "Summary of key activities",
                state: emailAlerts,
                set: setEmailAlerts,
              },
              {
                icon: AlertCircle,
                label: "High Priority Only",
                sub: "Only interrupt for urgent tasks",
                state: highPriority,
                set: setHighPriority,
              },
            ].map(({ icon: Icon, label, sub, state, set }) => (
              <div
                key={label}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <Icon size={14} color="#9CA3AF" />
                  </div>
                  <div>
                    <p className="text-[12.5px] font-semibold text-gray-800">
                      {label}
                    </p>
                    <p className="text-[10px] text-gray-400">{sub}</p>
                  </div>
                </div>
                <div onClick={() => set(!state)} className="cursor-pointer">
                  <Toggle on={state} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-2" />

        {/* WORKSPACE PRODUCTIVITY */}
        <div className="bg-white px-4 pt-4 pb-3">
          <SectionLabel icon={Zap} label="Workspace Productivity" />
          <div className="flex flex-col divide-y divide-gray-50">
            {[
              {
                label: "Remember Last Screen",
                state: rememberScreen,
                set: setRememberScreen,
              },
              {
                label: "Quick Actions Bar",
                state: quickActions,
                set: setQuickActions,
              },
              {
                label: "Show Upcoming Tasks",
                state: upcomingTasks,
                set: setUpcomingTasks,
              },
              {
                label: "Smart Recommendations",
                state: smartRec,
                set: setSmartRec,
              },
            ].map(({ label, state, set }) => (
              <div
                key={label}
                className="flex items-center justify-between py-3"
              >
                <span className="text-[12.5px] font-medium text-gray-700">
                  {label}
                </span>
                <div onClick={() => set(!state)} className="cursor-pointer">
                  <Checkbox checked={state} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-2" />

        {/* FAVORITE MODULES */}
        <div className="bg-white px-4 pt-4 pb-4">
          <SectionLabel icon={Star} label="Favorite Modules" />
          <div className="flex flex-wrap gap-2">
            {allModules.map((m) => {
              const active = favModules.includes(m);
              return (
                <button
                  key={m}
                  onClick={() => toggleModule(m)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11.5px] font-semibold transition-all border ${
                    active
                      ? "bg-[#5B21D4] text-white border-[#5B21D4]"
                      : "bg-white text-gray-500 border-gray-200"
                  }`}
                >
                  {m === "Campaigns" && <Megaphone size={11} />}
                  {m === "People" && <User size={11} />}
                  {m === "Analytics" && <TrendingUp size={11} />}
                  {m === "Listings" && <FileBarChart2 size={11} />}
                  {m === "Alerts" && <Bell size={11} />}
                  {m}
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-2" />

        {/* Save / Reset */}
        <div className="bg-white px-4 pt-4 pb-4 flex items-center gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 bg-[#5B21D4] text-white text-[13px] font-bold py-3.5 rounded-2xl">
            <Save size={15} />
            Save Preferences
          </button>
          <button className="text-[13px] font-semibold text-gray-500 px-4 py-3.5">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
