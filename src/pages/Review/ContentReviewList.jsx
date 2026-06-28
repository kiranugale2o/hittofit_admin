import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  ChevronRight,
  BarChart2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Zap,
  Flame,
  Home,
  ClipboardCheck,
  TrendingUp,
  ShieldCheck,
  User,
  Plus,
} from "lucide-react";

const PURPLE = "#6C2BD9";

export default function ContentReviewList() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Trainer Content", "Gym Promotion"];

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: "#F5F5F7",
        minHeight: "100vh",
        maxWidth: 390,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          background: "#fff",
          padding: "10px 18px 14px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: PURPLE,
              margin: 0,
              letterSpacing: "-0.3px",
            }}
          >
            Content Review
          </p>
          <p style={{ fontSize: 11, color: "#9CA3AF", margin: "2px 0 0" }}>
            Review ecosystem submissions
          </p>
        </div>
        <div style={{ display: "flex", gap: 14, paddingTop: 3 }}>
          <Search size={17} color="#9CA3AF" />
          <SlidersHorizontal size={17} color="#9CA3AF" />
        </div>
      </div>

      {/* ── Scrollable Body ── */}
      <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px 24px" }}>
        {/* Stats Dashboard Card */}
        <div
          style={{
            background: `linear-gradient(135deg, ${PURPLE} 0%, #4F1FA8 100%)`,
            borderRadius: 16,
            padding: "14px 16px 16px",
            marginBottom: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 7,
                background: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BarChart2 size={13} color="#fff" />
            </div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Review Status Dashboard
            </span>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { val: "48", label: "PENDING" },
              { val: "132", label: "APPROVED" },
              { val: "6", label: "PRIORITY" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#fff",
                    margin: 0,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {val}
                </p>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.55)",
                    margin: "1px 0 0",
                    letterSpacing: "0.6px",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "6px 14px",
                borderRadius: 50,
                fontSize: 11,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: activeTab === tab ? PURPLE : "#fff",
                color: activeTab === tab ? "#fff" : "#6B7280",
                boxShadow:
                  activeTab === tab ? "none" : "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Review Queue Label */}
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#0F0F1A",
            margin: "0 0 10px",
          }}
        >
          Review Queue
        </p>

        {/* ── Card 1: Summer Transformation Challenge ── */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
            marginBottom: 10,
          }}
        >
          <div style={{ padding: "12px 12px 10px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              {/* Thumbnail */}
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 10,
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#C4B5FD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg viewBox="0 0 46 46" width="46" height="46">
                  <rect width="46" height="46" fill="#A78BFA" />
                  <ellipse
                    cx="23"
                    cy="19"
                    rx="7"
                    ry="7.5"
                    fill="#3B0764"
                    opacity="0.85"
                  />
                  <line
                    x1="23"
                    y1="26"
                    x2="23"
                    y2="38"
                    stroke="#3B0764"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  <line
                    x1="23"
                    y1="30"
                    x2="16"
                    y2="38"
                    stroke="#3B0764"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  <line
                    x1="23"
                    y1="30"
                    x2="30"
                    y2="38"
                    stroke="#3B0764"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  <line
                    x1="23"
                    y1="26"
                    x2="16"
                    y2="22"
                    stroke="#3B0764"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  <line
                    x1="23"
                    y1="26"
                    x2="30"
                    y2="22"
                    stroke="#3B0764"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#0F0F1A",
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  Summer Transformation Challenge
                </p>
                <p
                  style={{ fontSize: 10, color: "#9CA3AF", margin: "2px 0 0" }}
                >
                  by FitZone Elite • Challenge
                </p>
              </div>
              {/* HIGH PRIORITY badge */}
              <div
                style={{
                  background: "#DC2626",
                  borderRadius: 7,
                  padding: "4px 7px",
                  flexShrink: 0,
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 8,
                    fontWeight: 800,
                    color: "#fff",
                    margin: 0,
                    letterSpacing: "0.2px",
                  }}
                >
                  HIGH
                </p>
                <p
                  style={{
                    fontSize: 8,
                    fontWeight: 800,
                    color: "#fff",
                    margin: 0,
                    letterSpacing: "0.2px",
                  }}
                >
                  PRIORITY
                </p>
              </div>
            </div>

            {/* AI note */}
            <div
              style={{
                marginTop: 9,
                background: "#F5F3FF",
                borderRadius: 9,
                padding: "7px 10px",
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
              }}
            >
              <Zap
                size={11}
                color={PURPLE}
                style={{ flexShrink: 0, marginTop: 1 }}
              />
              <span
                style={{ fontSize: 10, color: "#4C1D95", lineHeight: 1.45 }}
              >
                AI: High engagement potential. Similar content previously
                approved.
              </span>
            </div>
          </div>

          {/* Card footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 12px",
              borderTop: "1px solid #F9FAFB",
            }}
          >
            <span style={{ fontSize: 10, color: "#9CA3AF" }}>2 Hours Ago</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MoreHorizontal size={15} color="#D1D5DB" />
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  background: PURPLE,
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "5px 12px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Review <ArrowRight size={10} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Card 2: Protein Bundle Offer ── */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
            marginBottom: 10,
          }}
        >
          <div style={{ padding: "12px 12px 10px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 10,
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#FDE68A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                }}
              >
                💊
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#0F0F1A",
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  Protein Bundle Offer
                </p>
                <p
                  style={{ fontSize: 10, color: "#9CA3AF", margin: "2px 0 0" }}
                >
                  by FitFuel Nutrition • Store Promotion
                </p>
              </div>
            </div>

            {/* Warning note */}
            <div
              style={{
                marginTop: 9,
                background: "#FFF7ED",
                borderRadius: 9,
                padding: "7px 10px",
                display: "flex",
                alignItems: "flex-start",
                gap: 6,
              }}
            >
              <AlertTriangle
                size={11}
                color="#F59E0B"
                style={{ flexShrink: 0, marginTop: 1 }}
              />
              <span
                style={{ fontSize: 10, color: "#92400E", lineHeight: 1.45 }}
              >
                AI: Duplicate wording. Contains previously flagged promo text.
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 12px",
              borderTop: "1px solid #F9FAFB",
            }}
          >
            <span style={{ fontSize: 10, color: "#9CA3AF" }}>1 Hour Ago</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MoreHorizontal size={15} color="#D1D5DB" />
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  background: PURPLE,
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "5px 12px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Review <ArrowRight size={10} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Card 3: Elite Yoga Flow ── */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
            marginBottom: 18,
          }}
        >
          <div style={{ padding: "12px 12px 10px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 10,
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#D1FAE5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                }}
              >
                🧘
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#0F0F1A",
                    margin: 0,
                    lineHeight: 1.35,
                  }}
                >
                  Elite Yoga Flow
                </p>
                <p
                  style={{ fontSize: 10, color: "#9CA3AF", margin: "2px 0 0" }}
                >
                  by Marcus Chen • Trainer Content
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 12px",
              borderTop: "1px solid #F9FAFB",
            }}
          >
            <span style={{ fontSize: 10, color: "#9CA3AF" }}>45 Mins Ago</span>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <MoreHorizontal size={15} color="#D1D5DB" />
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  background: PURPLE,
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "5px 12px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Review <ArrowRight size={10} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#0F0F1A",
            margin: "0 0 10px",
          }}
        >
          Quick Actions
        </p>
        <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          {[
            {
              label: "Bulk Approve",
              icon: CheckCircle2,
              iconColor: PURPLE,
              bg: "#EDE9FB",
            },
            {
              label: "Review Priority",
              icon: Flame,
              iconColor: "#DC2626",
              bg: "#FEE2E2",
            },
          ].map(({ label, icon: Icon, iconColor, bg }) => (
            <button
              key={label}
              style={{
                flex: 1,
                background: "#fff",
                border: "1px solid #F3F4F6",
                borderRadius: 14,
                padding: "14px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={16} color={iconColor} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#374151" }}>
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* Review Analytics */}
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            padding: "12px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            marginBottom: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "#EDE9FB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BarChart2 size={16} color={PURPLE} />
            </div>
            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#0F0F1A",
                  margin: 0,
                }}
              >
                Review Analytics
              </p>
              <p style={{ fontSize: 10, color: "#9CA3AF", margin: "1px 0 0" }}>
                View efficiency metrics
              </p>
            </div>
          </div>
          <ChevronRight size={16} color="#D1D5DB" />
        </div>

        {/* FAB */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: PURPLE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(108,43,217,0.4)",
            }}
          >
            <Plus size={20} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
}
