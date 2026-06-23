import React, { useState } from "react";
import {
  ShieldCheck,
  AlertCircle,
  FileText,
  ArrowRight,
  Star,
  Zap,
  Home,
  CheckSquare,
  BarChart2,
  Flag,
  User,
  LayoutGrid,
} from "lucide-react";

// ── Brand tokens (matches Hittofit design system) ───────────────────────────
const PURPLE = "#7C3AED";
const PURPLE_DARK = "#6C2BD9";

// ── Trust gauge (SVG full circular ring, matches Figma) ─────────────────────
const TrustGauge = ({ percent = 94 }) => {
  const size = 160;
  const cx = size / 2;
  const cy = size / 2;
  const R = 62; // ring radius
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * R;
  const filled = (percent / 100) * circumference;

  return (
    <svg
      width="140"
      height="140"
      viewBox={`0 0 ${size} ${size}`}
      className="overflow-visible"
    >
      {/* Filled disc behind the ring (darker purple), per Figma */}
      <circle
        cx={cx}
        cy={cy}
        r={R - strokeWidth / 2 - 5}
        fill="rgba(0,0,0,0.08)"
      />

      {/* Track ring */}
      <circle
        cx={cx}
        cy={cy}
        r={R}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />

      {/* Progress ring */}
      <circle
        cx={cx}
        cy={cy}
        r={R}
        stroke="white"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${circumference}`}
        strokeDashoffset={circumference * 0.25}
        transform={`rotate(-90 ${cx} ${cy})`}
      />

      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        fill="white"
        fontSize="26"
        fontWeight="800"
        fontFamily="'Plus Jakarta Sans', sans-serif"
      >
        {percent}%
      </text>
      <text
        x={cx}
        y={cy + 17}
        textAnchor="middle"
        fill="rgba(255,255,255,0.8)"
        fontSize="10"
        fontWeight="600"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        letterSpacing="2"
      >
        HEALTH
      </text>
    </svg>
  );
};

// ── Thumbnail placeholders ───────────────────────────────────────────────────
const GymThumbnail = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    className="rounded-[10px] shrink-0"
  >
    <rect width="48" height="48" rx="10" fill="#2D1B69" />
    <circle cx="24" cy="20" r="8" fill="#4C3399" opacity="0.8" />
    <rect
      x="8"
      y="32"
      width="32"
      height="10"
      rx="4"
      fill="#4C3399"
      opacity="0.6"
    />
  </svg>
);

const ReviewThumbnail = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    className="rounded-[10px] shrink-0"
  >
    <rect width="48" height="48" rx="10" fill="#1A3A2A" />
    <rect
      x="6"
      y="10"
      width="36"
      height="28"
      rx="4"
      fill="#2D5E3A"
      opacity="0.7"
    />
    <circle cx="24" cy="24" r="8" fill="#3D7A4A" opacity="0.8" />
  </svg>
);

// ── Main Screen ──────────────────────────────────────────────────────────────
const ModerationScreen = () => {
  const [activeTab, setActiveTab] = useState("Content");
  const queueTabs = ["Content", "Users", "Disputes", "Partners"];

  return (
    <div
      className="flex flex-col h-screen max-w-md mx-auto bg-white"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ── Header ── */}
      <div className="bg-white px-4 pt-2 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutGrid size={22} color="#5A18D6" strokeWidth={2.5} />
          <span
            className="text-[22px] font-extrabold"
            style={{ color: "#4F16D1" }}
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
      <div className="px-5 pb-2.5 bg-white">
        <p className="text-[13px] text-[#9791B0]">
          Maintain a healthy and trusted ecosystem.
        </p>
      </div>

      {/* ── Scrollable Body ── */}
      <div className="flex-1 overflow-y-auto bg-[#F5F4FA] px-5 pt-4 pb-5 flex flex-col gap-4">
        {/* ── Community Trust Health ── */}
        <div
          className="rounded-[20px] px-7 py-5 flex flex-col items-center"
          style={{
            background: `linear-gradient(160deg, ${PURPLE} 0%, ${PURPLE_DARK} 100%)`,
          }}
        >
          <TrustGauge percent={94} />
          <h2 className="text-lg font-bold text-white mt-3">
            Community Trust Health
          </h2>
          <div className="flex items-center gap-1.5 bg-white/[0.18] rounded-full px-3.5 py-1.5 mt-2.5">
            <ShieldCheck size={14} color="white" strokeWidth={2.5} />
            <span className="text-white text-[13px] font-medium">
              Healthy &amp; Active
            </span>
          </div>
        </div>

        {/* ── Needs Attention ── */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h3 className="text-base font-bold text-[#1A1040]">
              Needs Attention
            </h3>
            <div className="bg-[#FAECE7] rounded-full px-2.5 py-1">
              <span className="text-[11px] font-semibold text-[#D85A30]">
                Action Required
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            {/* Card 1 */}
            <button className="flex-1 bg-white rounded-[14px] p-4 border border-[#E8E6F0] flex flex-col gap-3 text-left active:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center bg-[#FAECE7]">
                <AlertCircle size={18} color="#D85A30" strokeWidth={2.5} />
              </div>
              <p className="text-[15px] font-bold text-[#1A1040] leading-5">
                3 High Priority Reports
              </p>
              <div className="flex items-center gap-1">
                <span
                  className="text-xs font-semibold"
                  style={{ color: PURPLE }}
                >
                  Review Now
                </span>
                <ArrowRight size={12} color={PURPLE} strokeWidth={2.5} />
              </div>
            </button>
            {/* Card 2 */}
            <button className="flex-1 bg-white rounded-[14px] p-4 border border-[#E8E6F0] flex flex-col gap-3 text-left active:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center bg-[#EEEDFE]">
                <FileText size={18} color={PURPLE} strokeWidth={2} />
              </div>
              <p className="text-[15px] font-bold text-[#1A1040] leading-5">
                7 Content Pending
              </p>
              <div className="flex items-center gap-1">
                <span
                  className="text-xs font-semibold"
                  style={{ color: PURPLE }}
                >
                  Review Now
                </span>
                <ArrowRight size={12} color={PURPLE} strokeWidth={2.5} />
              </div>
            </button>
          </div>
        </div>

        {/* ── Review Queue ── */}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-bold text-[#1A1040]">Review Queue</h3>
          {/* Tabs */}
          <div className="overflow-x-auto -mx-5 px-5 scrollbar-hide">
            <div className="flex gap-2 w-max">
              {queueTabs.map((tab) => {
                const active = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="rounded-full px-4 py-[7px] border text-[13px] font-medium whitespace-nowrap transition-colors"
                    style={
                      active
                        ? {
                            backgroundColor: PURPLE,
                            borderColor: PURPLE,
                            color: "white",
                            fontWeight: 600,
                          }
                        : {
                            backgroundColor: "white",
                            borderColor: "#E8E6F0",
                            color: "#9791B0",
                          }
                    }
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
          {/* Items */}
          <div className="flex flex-col gap-2.5">
            <button className="bg-white rounded-[14px] p-3 border border-[#E8E6F0] flex items-center gap-3 text-left active:opacity-80 transition-opacity">
              <GymThumbnail />
              <div className="flex-1 flex flex-col gap-1 min-w-0">
                <p className="text-sm font-semibold text-[#1A1040] truncate">
                  Elite Fitness Hub
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#9791B0]">2 hours ago</span>
                  <span className="text-[#9791B0] text-[10px]">•</span>
                  <span className="text-xs font-medium text-[#D85A30]">
                    Flagged Listing
                  </span>
                </div>
              </div>
              <span
                className="rounded-[10px] px-3.5 py-[7px] text-xs font-semibold shrink-0"
                style={{ backgroundColor: "#F0EBF9", color: PURPLE }}
              >
                Review
              </span>
            </button>

            <button className="bg-white rounded-[14px] p-3 border border-[#E8E6F0] flex items-center gap-3 text-left active:opacity-80 transition-opacity">
              <ReviewThumbnail />
              <div className="flex-1 flex flex-col gap-1 min-w-0">
                <p className="text-sm font-semibold text-[#1A1040] truncate">
                  Review by @alex_fit
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-[#9791B0]">4 hours ago</span>
                  <span className="text-[#9791B0] text-[10px]">•</span>
                  <span
                    className="text-xs font-medium"
                    style={{ color: PURPLE }}
                  >
                    Content Check
                  </span>
                </div>
              </div>
              <span
                className="rounded-[10px] px-3.5 py-[7px] text-xs font-semibold shrink-0"
                style={{ backgroundColor: "#F0EBF9", color: PURPLE }}
              >
                Review
              </span>
            </button>
          </div>
        </div>

        {/* ── Resolved Today ── */}
        <div className="bg-[#F0EBFA] rounded-2xl p-4 flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: PURPLE }}
            >
              <Star size={14} color="white" strokeWidth={2} fill="white" />
            </div>
            <h4 className="text-[17px] font-bold text-[#1A1040]">
              Resolved Today
            </h4>
          </div>
          <div className="flex">
            <div className="flex-1 flex flex-col items-center gap-1">
              <span className="text-2xl font-bold" style={{ color: PURPLE }}>
                12
              </span>
              <span className="text-[10px] text-[#9791B0] font-medium tracking-wide text-center leading-[14px]">
                REPORTS
                <br />
                RESOLVED
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1">
              <span className="text-2xl font-bold" style={{ color: PURPLE }}>
                5
              </span>
              <span className="text-[10px] text-[#9791B0] font-medium tracking-wide text-center leading-[14px]">
                DISPUTES
                <br />
                CLOSED
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1">
              <span className="text-2xl font-bold" style={{ color: PURPLE }}>
                28
              </span>
              <span className="text-[10px] text-[#9791B0] font-medium tracking-wide text-center leading-[14px]">
                CONTENT
                <br />
                APPROVED
              </span>
            </div>
          </div>
        </div>

        {/* ── AI Trust Assistant ── */}
        <div className="bg-white rounded-2xl p-4 border border-[#E8E6F0] flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-[10px] flex items-center justify-center"
              style={{ backgroundColor: PURPLE_DARK }}
            >
              <Zap size={18} color="white" strokeWidth={2} fill="white" />
            </div>
            <h4 className="text-[17px] font-bold text-[#1A1040]">
              AI Trust Assistant
            </h4>
          </div>
          <p className="text-[13px] text-[#4A4060] leading-5 italic">
            "Most reports today relate to{" "}
            <span
              className="font-semibold not-italic underline"
              style={{ color: PURPLE }}
            >
              duplicate gym listings
            </span>{" "}
            in the metropolitan area. I suggest implementing a geo-verification
            step for new partners."
          </p>
          <button
            className="rounded-xl py-3.5 flex items-center justify-center gap-2 text-white text-sm font-semibold active:opacity-90 transition-opacity"
            style={{ backgroundColor: PURPLE_DARK }}
          >
            View Recommendation
            <ArrowRight size={16} color="white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* ── Bottom Tab Bar ── */}
      <div className="flex bg-white border-t border-[#E8E6F0] pt-2.5 pb-1.5">
        <button className="flex-1 flex flex-col items-center gap-0.5">
          <Home size={22} color="#9791B0" strokeWidth={1.8} />
          <span className="text-[10px] text-[#9791B0]">Home</span>
        </button>
        <button className="flex-1 flex flex-col items-center gap-0.5">
          <CheckSquare size={22} color="#9791B0" strokeWidth={1.8} />
          <span className="text-[10px] text-[#9791B0]">Approvals</span>
        </button>
        <button className="flex-1 flex flex-col items-center gap-0.5">
          <BarChart2 size={22} color="#9791B0" strokeWidth={1.8} />
          <span className="text-[10px] text-[#9791B0]">Insights</span>
        </button>
        <button
          className="flex-1 flex flex-col items-center gap-0.5 rounded-2xl py-1"
          style={{ backgroundColor: PURPLE }}
        >
          <Flag size={22} color="white" strokeWidth={1.8} />
          <span className="text-[10px] font-medium text-white">Moderation</span>
        </button>
        <button className="flex-1 flex flex-col items-center gap-0.5">
          <User size={22} color="#9791B0" strokeWidth={1.8} />
          <span className="text-[10px] text-[#9791B0]">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default ModerationScreen;
