import React from "react";
import {
  ChevronLeft,
  MoreVertical,
  Clock,
  ArrowRight,
  ThumbsUp,
  AlertTriangle,
  TrendingUp,
  Zap,
  CheckCircle2,
  Check,
  MessageSquare,
  X,
  User,
  Eye,
  FileText,
  Home,
  ClipboardCheck,
  ShieldCheck,
} from "lucide-react";

const PURPLE = "#6C2BD9";
const LIGHT_PURPLE = "#EDE9FB";
const FONT = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

export default function ContentReviewDetail() {
  const checklist = [
    { label: "Community Guidelines", done: true },
    { label: "Brand Standards", done: true },
    { label: "Content Quality", done: true },
    { label: "Duplicate Messaging Check", done: false },
  ];

  const insights = [
    {
      icon: ThumbsUp,
      text: "Similar content achieved high engagement.",
      iconColor: PURPLE,
      bg: LIGHT_PURPLE,
      textColor: "#374151",
    },
    {
      icon: Zap,
      text: "Content follows platform guidelines.",
      iconColor: "#059669",
      bg: "#ECFDF5",
      textColor: "#374151",
    },
    {
      icon: AlertTriangle,
      text: "Promotional wording appears repetitive.",
      iconColor: "#F59E0B",
      bg: "#FFFBEB",
      textColor: "#92400E",
    },
    {
      icon: TrendingUp,
      text: "Rejected engagement above average.",
      iconColor: "#fff",
      bg: PURPLE,
      textColor: "#fff",
    },
  ];

  return (
    <div
      style={{
        fontFamily: FONT,
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
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <ChevronLeft size={20} color="#0F0F1A" />
          </button>
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#0F0F1A",
              letterSpacing: "-0.2px",
            }}
          >
            Content Review
          </span>
        </div>
        <MoreVertical size={18} color="#9CA3AF" />
      </div>

      {/* ── Scrollable Body ── */}
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 24 }}>
        {/* Hero Image */}
        <div style={{ position: "relative", height: 185 }}>
          <svg
            viewBox="0 0 390 185"
            style={{ width: "100%", height: "100%", display: "block" }}
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4B5FD" />
                <stop offset="50%" stopColor="#9B72E8" />
                <stop offset="100%" stopColor="#6C2BD9" />
              </linearGradient>
            </defs>
            <rect width="390" height="185" fill="url(#heroGrad)" />

            {/* Light rays */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x={260 + i * 22}
                y={-10}
                width={14}
                height={220}
                fill="rgba(255,255,255,0.06)"
                transform={`rotate(-20 ${260 + i * 22} 0)`}
              />
            ))}

            {/* Floor */}
            <ellipse
              cx="195"
              cy="170"
              rx="160"
              ry="20"
              fill="rgba(0,0,0,0.12)"
            />

            {/* Treadmill 1 */}
            <rect
              x="55"
              y="115"
              width="75"
              height="42"
              rx="6"
              fill="#4C1D95"
              opacity="0.7"
            />
            <rect
              x="55"
              y="115"
              width="75"
              height="10"
              rx="4"
              fill="#6D28D9"
              opacity="0.8"
            />
            <line
              x1="80"
              y1="115"
              x2="75"
              y2="90"
              stroke="#5B21B6"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            <line
              x1="105"
              y1="115"
              x2="100"
              y2="90"
              stroke="#5B21B6"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            <line
              x1="75"
              y1="90"
              x2="100"
              y2="90"
              stroke="#5B21B6"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Treadmill 2 */}
            <rect
              x="155"
              y="108"
              width="80"
              height="45"
              rx="6"
              fill="#4C1D95"
              opacity="0.65"
            />
            <rect
              x="155"
              y="108"
              width="80"
              height="10"
              rx="4"
              fill="#6D28D9"
              opacity="0.75"
            />
            <line
              x1="182"
              y1="108"
              x2="177"
              y2="82"
              stroke="#5B21B6"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            <line
              x1="208"
              y1="108"
              x2="203"
              y2="82"
              stroke="#5B21B6"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            <line
              x1="177"
              y1="82"
              x2="203"
              y2="82"
              stroke="#5B21B6"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Treadmill 3 */}
            <rect
              x="262"
              y="112"
              width="72"
              height="42"
              rx="6"
              fill="#4C1D95"
              opacity="0.6"
            />
            <rect
              x="262"
              y="112"
              width="72"
              height="10"
              rx="4"
              fill="#6D28D9"
              opacity="0.7"
            />
            <line
              x1="286"
              y1="112"
              x2="281"
              y2="88"
              stroke="#5B21B6"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.85"
            />
            <line
              x1="308"
              y1="112"
              x2="303"
              y2="88"
              stroke="#5B21B6"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.85"
            />
            <line
              x1="281"
              y1="88"
              x2="303"
              y2="88"
              stroke="#5B21B6"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.75"
            />

            {/* Runner - head */}
            <circle cx="200" cy="52" r="13" fill="#2D1B69" opacity="0.9" />
            {/* Runner - body */}
            <line
              x1="200"
              y1="65"
              x2="200"
              y2="95"
              stroke="#2D1B69"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* Runner - arms */}
            <line
              x1="200"
              y1="72"
              x2="184"
              y2="84"
              stroke="#2D1B69"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            <line
              x1="200"
              y1="72"
              x2="218"
              y2="80"
              stroke="#2D1B69"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* Runner - legs */}
            <line
              x1="200"
              y1="95"
              x2="186"
              y2="115"
              stroke="#2D1B69"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />
            <line
              x1="200"
              y1="95"
              x2="214"
              y2="112"
              stroke="#2D1B69"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Second figure (background) */}
            <circle cx="145" cy="60" r="9" fill="#3B0764" opacity="0.6" />
            <line
              x1="145"
              y1="69"
              x2="145"
              y2="90"
              stroke="#3B0764"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.6"
            />
            <line
              x1="145"
              y1="78"
              x2="136"
              y2="88"
              stroke="#3B0764"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />
            <line
              x1="145"
              y1="78"
              x2="154"
              y2="85"
              stroke="#3B0764"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />
            <line
              x1="145"
              y1="90"
              x2="138"
              y2="108"
              stroke="#3B0764"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />
            <line
              x1="145"
              y1="90"
              x2="152"
              y2="107"
              stroke="#3B0764"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Third figure (background right) */}
            <circle cx="260" cy="63" r="8" fill="#3B0764" opacity="0.55" />
            <line
              x1="260"
              y1="71"
              x2="260"
              y2="90"
              stroke="#3B0764"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.55"
            />
            <line
              x1="260"
              y1="79"
              x2="252"
              y2="88"
              stroke="#3B0764"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            />
            <line
              x1="260"
              y1="79"
              x2="268"
              y2="86"
              stroke="#3B0764"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            />
            <line
              x1="260"
              y1="90"
              x2="254"
              y2="108"
              stroke="#3B0764"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            />
            <line
              x1="260"
              y1="90"
              x2="266"
              y2="107"
              stroke="#3B0764"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.55"
            />
          </svg>

          {/* Pending Review pill */}
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: "#F59E0B",
              borderRadius: 50,
              padding: "5px 10px",
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Clock size={9} color="#fff" />
            <span style={{ fontSize: 9.5, fontWeight: 700, color: "#fff" }}>
              Pending Review
            </span>
          </div>
        </div>

        <div style={{ padding: "14px 16px" }}>
          {/* Category */}
          <span
            style={{
              fontSize: 9.5,
              fontWeight: 800,
              color: PURPLE,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
            }}
          >
            CHALLENGE
          </span>

          {/* Title */}
          <p
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#0F0F1A",
              margin: "4px 0 4px",
              lineHeight: 1.2,
              letterSpacing: "-0.4px",
            }}
          >
            Summer Transformation Challenge
          </p>

          {/* Submitted */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              marginBottom: 14,
            }}
          >
            <Clock size={10} color="#9CA3AF" />
            <span style={{ fontSize: 11, color: "#9CA3AF" }}>
              Submitted: 2 Hours Ago
            </span>
          </div>

          {/* Partner Card */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: LIGHT_PURPLE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                }}
              >
                🏋️
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
                  FitZone Elite
                </p>
                <p
                  style={{ fontSize: 10, color: "#9CA3AF", margin: "1px 0 0" }}
                >
                  Gym Partner
                </p>
              </div>
            </div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                fontWeight: 700,
                color: PURPLE,
                padding: 0,
              }}
            >
              View Profile <ArrowRight size={11} />
            </button>
          </div>

          {/* Description Card */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "14px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              marginBottom: 12,
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#0F0F1A",
                margin: "0 0 6px",
              }}
            >
              Transform Your Summer with Hittofit
            </p>
            <p
              style={{
                fontSize: 11.5,
                color: "#6B7280",
                lineHeight: 1.6,
                margin: "0 0 14px",
              }}
            >
              Join our exclusive 8-week transformation challenge designed for
              all fitness levels. Includes personalized coaching and community
              support.
            </p>

            {/* Meta grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
                borderTop: "1px solid #F3F4F6",
                paddingTop: 12,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#9CA3AF",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    margin: "0 0 3px",
                  }}
                >
                  TARGET AUDIENCE
                </p>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#0F0F1A",
                    margin: 0,
                  }}
                >
                  All Members
                </p>
              </div>
              <div style={{ borderLeft: "1px solid #F3F4F6", paddingLeft: 14 }}>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#9CA3AF",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    margin: "0 0 3px",
                  }}
                >
                  DURATION
                </p>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#0F0F1A",
                    margin: 0,
                  }}
                >
                  8 Weeks
                </p>
              </div>
            </div>
          </div>

          {/* AI Insights 2×2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginBottom: 12,
            }}
          >
            {insights.map(
              ({ icon: Icon, text, iconColor, bg, textColor }, i) => (
                <div
                  key={i}
                  style={{
                    background: bg,
                    borderRadius: 12,
                    padding: "11px 11px 12px",
                  }}
                >
                  <div style={{ marginBottom: 7 }}>
                    <Icon size={15} color={iconColor} />
                  </div>
                  <p
                    style={{
                      fontSize: 10.5,
                      color: textColor,
                      lineHeight: 1.45,
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ),
            )}
          </div>

          {/* Review Checklist */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "14px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              marginBottom: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#0F0F1A",
                  margin: 0,
                }}
              >
                Review Checklist
              </p>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: PURPLE,
                }}
              >
                75% Complete
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {checklist.map(({ label, done }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "9px 12px",
                    background: "#F9FAFB",
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: done ? PURPLE : "#FEF3C7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {done ? (
                      <Check size={12} color="#fff" />
                    ) : (
                      <AlertTriangle size={11} color="#F59E0B" />
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#374151",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Review Notes */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "14px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              marginBottom: 14,
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#0F0F1A",
                margin: "0 0 10px",
              }}
            >
              Internal Review Notes
            </p>
            <div
              style={{
                background: "#F9FAFB",
                borderRadius: 10,
                padding: "11px 12px",
                minHeight: 56,
                border: "1px solid #F3F4F6",
              }}
            >
              <span style={{ fontSize: 11, color: "#D1D5DB" }}>
                Add review notes...
              </span>
            </div>
          </div>

          {/* Approve CTA */}
          <button
            style={{
              width: "100%",
              background: `linear-gradient(90deg, ${PURPLE} 0%, #4F1FA8 100%)`,
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              padding: "15px",
              borderRadius: 14,
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginBottom: 10,
              boxSizing: "border-box",
            }}
          >
            <CheckCircle2 size={16} />
            Approve Content
          </button>

          {/* Request / Reject */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginBottom: 10,
            }}
          >
            <button
              style={{
                background: LIGHT_PURPLE,
                color: PURPLE,
                fontSize: 12,
                fontWeight: 700,
                padding: "12px 10px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <MessageSquare size={13} />
              Request Changes
            </button>
            <button
              style={{
                background: "#FEE2E2",
                color: "#DC2626",
                fontSize: 12,
                fontWeight: 700,
                padding: "12px 10px",
                borderRadius: 12,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <X size={13} />
              Reject Content
            </button>
          </div>

          {/* Contact / View Similar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginBottom: 8,
            }}
          >
            {[
              { label: "Contact Creator", icon: User },
              { label: "View Similar", icon: Eye },
            ].map(({ label, icon: Icon }) => (
              <button
                key={label}
                style={{
                  background: "#fff",
                  border: "1px solid #E5E7EB",
                  borderRadius: 12,
                  padding: "10px 12px",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#374151",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  boxSizing: "border-box",
                }}
              >
                <Icon size={13} color="#9CA3AF" />
                {label}
              </button>
            ))}
          </div>

          {/* Internal Note */}
          <button
            style={{
              width: "100%",
              background: "#fff",
              border: "1px solid #E5E7EB",
              borderRadius: 12,
              padding: "11px 14px",
              fontSize: 11,
              fontWeight: 600,
              color: "#374151",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6,
              boxSizing: "border-box",
            }}
          >
            <FileText size={13} color="#9CA3AF" />
            Internal Note
          </button>
        </div>
      </div>
    </div>
  );
}
