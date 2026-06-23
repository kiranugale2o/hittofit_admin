import { useState } from "react";
import {
  Home,
  CheckSquare,
  BarChart2,
  Shield,
  User,
  ArrowRight,
  Search,
  SlidersHorizontal,
  Clock,
  CheckCircle,
  RefreshCw,
  AlertTriangle,
  LayoutGrid,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";
import { Link } from "react-router-dom";

function BottomNav({ active }) {
  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "approvals", icon: CheckSquare, label: "Approvals" },
    { id: "insights", icon: BarChart2, label: "Insights" },
    { id: "moderation", icon: Shield, label: "Moderation" },
    { id: "profile", icon: User, label: "Profile" },
  ];
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 flex z-50">
      {tabs.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          className={`flex-1 flex flex-col items-center py-3 gap-0.5 ${
            active === id ? "text-[#6C2BD9]" : "text-gray-400"
          }`}
        >
          {active === id ? (
            <div className="bg-[#6C2BD9] rounded-full p-1.5">
              <Icon size={18} color="white" />
            </div>
          ) : (
            <Icon size={20} />
          )}
          <span
            className={`text-[10px] font-medium ${
              active === id ? "text-[#6C2BD9]" : "text-gray-400"
            }`}
          >
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}

export default function ApprovalsScreen() {
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { label: "All (15)", key: "all" },
    { label: "Gyms (6)", key: "gyms" },
    { label: "Trainers (5)", key: "trainers" },
    { label: "Stores (4)", key: "stores" },
  ];

  const needsAttention = [
    {
      name: "Gold's Gym",
      location: "Mumbai • Gym",
      progress: 85,
      issue: "Clarification Required",
      issueIcon: AlertCircle,
      issueColor: "#EF4444",
      bgColor: "#F4F0FD",
      issueBg: "#FEF2F2",
      issueBorder: "#FECACA",
      badgeBg: "#FCE7E7",
      badgeText: "#EF4444",
      avatarBg: "#E8E0FA",
      avatarIcon: "gym", // special gym icon
    },
    {
      name: "Sarah Jenkins",
      location: "Delhi • Trainer",
      progress: 90,
      issue: "Missing Certification",
      issueIcon: ShieldAlert,
      issueColor: "#EF4444",
      bgColor: "#F4F0FD",
      issueBg: "#FEF2F2",
      issueBorder: "#FECACA",
      badgeBg: "#FCE7E7",
      badgeText: "#EF4444",
      avatarBg: null, // has photo
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const queue = [
    {
      name: "Iron Paradise HQ",
      location: "Pune • Gym",
      progress: 100,
      progressColor: "#7C3AED",
      tags: ["Documents Verified", "GST Verified"],
      avatarBg: "#EDE9FA",
      avatarIcon: "store",
    },
    {
      name: "FitSupplements Hub",
      location: "Bangalore • Store",
      progress: 95,
      progressColor: "#7C3AED",
      tags: ["Documents Verified"],
      avatarBg: "#EDE9FA",
      avatarIcon: "store",
    },
    {
      name: "Marcus Chen",
      location: "Chennai • Trainer",
      progress: 100,
      progressColor: "#7C3AED",
      tags: ["Certification Verified"],
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div
      className="flex justify-center bg-gray-100 min-h-screen"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div
        className="relative w-full max-w-sm min-h-screen"
        style={{ background: "#F9F8FC" }}
      >
        <div className="overflow-y-auto h-screen pb-24">
          {/* ── Header ── */}
          <div className="bg-white px-4 pt-2 pb-4">
            {/* Top row: logo + avatar */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <LayoutGrid size={22} color="#5A18D6" strokeWidth={2.5} />
                <span
                  className="text-[20px] font-extrabold"
                  style={{ color: "#4F16D1", fontFamily: "inherit" }}
                >
                  Hittofit
                </span>
              </div>
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-purple-200">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Admin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h1
              className="text-[24px] font-bold leading-tight"
              style={{ color: "#111827", letterSpacing: "-0.5px" }}
            >
              Partner Verification
            </h1>
            <p className="text-sm text-gray-400 mt-0.5 mb-4">
              15 requests waiting for review
            </p>

            {/* Search + Filter */}
            <div className="flex gap-2 mb-4">
              <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-2xl px-4 py-2.5">
                <Search size={16} color="#9CA3AF" />
                <span className="text-sm text-gray-400">
                  Search partners...
                </span>
              </div>
              <button className="w-11 h-11 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <SlidersHorizontal size={18} color="#6B7280" />
              </button>
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {tabs.map(({ label, key }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-thin transition-all"
                  style={
                    activeTab === key
                      ? {
                          background: "#6C2BD9",
                          color: "#fff",
                        }
                      : {
                          background: "#F3F4F6",
                          color: "#6B7280",
                        }
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Stats Row ── */}
          <div className="grid grid-cols-2 gap-3 px-3 mt-2">
            {[
              {
                label: "WAITING",
                val: 15,
                icon: Clock,
                iconBg: "#EDE9FA",
                iconColor: "#7C3AED",
              },
              {
                label: "READY",
                val: 7,
                icon: CheckCircle,
                iconBg: "#D1FAE5",
                iconColor: "#10B981",
              },
              {
                label: "REVIEWING",
                val: 5,
                icon: RefreshCw,
                iconBg: "#EDE9FA",
                iconColor: "#6C2BD9",
              },
              {
                label: "ACTION",
                val: 3,
                icon: AlertTriangle,
                iconBg: "#FEF3C7",
                iconColor: "#F59E0B",
              },
            ].map(({ label, val, icon: Icon, iconBg, iconColor }) => (
              <div
                key={label}
                className="bg-white rounded-2xl p-2 flex items-center gap-3"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: iconBg }}
                >
                  <Icon size={16} color={iconColor} />
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-widest"
                    style={{ color: "#9CA3AF" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-xl font-extrabold leading-none mt-0.5"
                    style={{ color: "#111827" }}
                  >
                    {val}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Needs Attention ── */}
          <div className="px-4 mt-5">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-red-500 text-base font-bold">!</span>
              <span className="text-base font-bold text-gray-900">
                Needs Attention
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {needsAttention.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    border: "1px solid #F3F0FF",
                  }}
                >
                  <div className="p-4">
                    {/* Name row */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                          className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0"
                          style={{
                            background: p.avatarUrl ? "transparent" : "#EDE9FA",
                          }}
                        >
                          {p.avatarUrl ? (
                            <img
                              src={p.avatarUrl}
                              alt={p.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z"
                                stroke="#7C3AED"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900">
                            {p.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {p.location}
                          </p>
                        </div>
                      </div>
                      {/* Badge */}
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                        style={{
                          background: "#FCE7E7",
                          color: "#EF4444",
                        }}
                      >
                        {p.progress}% Complete
                      </span>
                    </div>

                    {/* Issue pill */}
                    <div
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                      style={{
                        background: "#FEF2F2",
                        border: "1px solid #FEE2E2",
                      }}
                    >
                      <p.issueIcon size={14} color={p.issueColor} />
                      <span className="text-xs font-semibold text-red-500">
                        {p.issue}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Queue ── */}
            <p className="text-base font-bold text-gray-900 mt-5 mb-3">Queue</p>
            <div className="flex flex-col gap-3">
              {queue.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl p-4"
                  style={{
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                    border: "1px solid #F3F4F6",
                  }}
                >
                  {/* Name + badge row */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0"
                        style={{
                          background: p.avatarUrl ? "transparent" : "#EDE9FA",
                        }}
                      >
                        {p.avatarUrl ? (
                          <img
                            src={p.avatarUrl}
                            alt={p.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              x="2"
                              y="7"
                              width="20"
                              height="14"
                              rx="2"
                              stroke="#7C3AED"
                              strokeWidth="2"
                            />
                            <path
                              d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7"
                              stroke="#7C3AED"
                              strokeWidth="2"
                            />
                            <path
                              d="M12 12V16M10 14H14"
                              stroke="#7C3AED"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-base font-bold text-gray-900">
                          {p.name}
                        </p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-xs text-gray-400">
                            {p.location}
                          </span>
                          {p.progress === 100 && (
                            <>
                              <span className="text-gray-300 mx-0.5">•</span>
                              <span
                                className="text-xs font-bold"
                                style={{ color: "#7C3AED" }}
                              >
                                100% Complete
                              </span>
                            </>
                          )}
                          {p.progress !== 100 && (
                            <>
                              <span className="text-gray-300 mx-0.5">•</span>
                              <span
                                className="text-xs font-bold"
                                style={{ color: "#7C3AED" }}
                              >
                                {p.progress}% Complete
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1"
                        style={{
                          background: "#F3F4F6",
                          color: "#6B7280",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Review button */}
                  <Link to={"/reviewrequest"}>
                    <button
                      className="w-full text-white text-sm font-bold py-3 rounded-2xl flex items-center justify-center gap-2"
                      style={{ background: "#5B21B6" }}
                    >
                      Review <ArrowRight size={15} />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="h-6" />
        </div>

        <BottomNav active="approvals" />
      </div>
    </div>
  );
}
