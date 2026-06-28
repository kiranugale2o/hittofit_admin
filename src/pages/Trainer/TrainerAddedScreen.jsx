import React from "react";
import {
  Dumbbell,
  BadgeCheck,
  UserCircle2,
  MapPin,
  Clock3,
  ShieldCheck,
  Megaphone,
  Star,
  Bell,
  UserPlus,
  Home,
  ChevronRight,
  Hourglass,
  Clock,
  Check,
  TrendingUp,
  ShieldQuestion,
  LineChart,
} from "lucide-react";

const onboardingProgress = [
  {
    label: "Trainer Profile Created",
    sub: "Identity and credentials verified",
    status: "done",
  },
  {
    label: "Gym Assignment Complete",
    sub: "Linked to FitZone Elite branch",
    status: "done",
  },
  {
    label: "Verification Pending",
    sub: "Awaiting document approval",
    status: "pending",
  },
  {
    label: "First Booking Pending",
    sub: "Waiting for initial client sync",
    status: "inactive",
  },
];

const nextSteps = [
  { label: "Verify Trainer", icon: ShieldCheck },
  { label: "Welcome Message", icon: Megaphone },
  { label: "Feature Trainer", icon: Star },
  { label: "Assigned Gym", icon: Dumbbell },
];

const bottomNav = [
  { label: "Home", icon: Home, active: false },
  { label: "Approvals", icon: ShieldCheck, active: false },
  { label: "Insights", icon: LineChart, active: false },
  { label: "Moderation", icon: ShieldQuestion, active: false },
  { label: "Profile", icon: UserCircle2, active: true },
];

function StatusDot({ status }) {
  if (status === "done") {
    return (
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          backgroundColor: "#6B3FE8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Check size={13} color="#fff" strokeWidth={3} />
      </div>
    );
  }
  if (status === "pending") {
    return (
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          backgroundColor: "#F2F2F2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Hourglass size={13} color="#BBBBBB" strokeWidth={2} />
      </div>
    );
  }
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        backgroundColor: "#F2F2F2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <Clock size={13} color="#D0D0D0" strokeWidth={2} />
    </div>
  );
}

export default function TrainerAddedScreen() {
  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
        backgroundColor: "#F5F5F7",
        minHeight: "100vh",
        maxWidth: 420,
        margin: "0 auto",
        paddingBottom: 90,
      }}
    >
      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px 12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            color: "#6B3FE8",
            fontWeight: 800,
            fontSize: 17,
          }}
        >
          <Dumbbell size={20} color="#6B3FE8" strokeWidth={2.4} />
          Hittofit
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "#334155",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UserCircle2 size={22} color="#fff" strokeWidth={1.5} />
        </div>
      </div>

      {/* ── Hero Illustration ── */}
      <div style={{ padding: "0 16px" }}>
        <div
          style={{
            borderRadius: 24,
            overflow: "hidden",
            height: 220,
            background:
              "linear-gradient(135deg, #F0EAFF 0%, #EAF6FF 50%, #E8FFF4 100%)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 358 220"
            width="100%"
            height="100%"
            style={{ position: "absolute", inset: 0 }}
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Left botanical leaves */}
            <ellipse
              cx="38"
              cy="155"
              rx="28"
              ry="12"
              fill="#6DCFAE"
              opacity="0.7"
              transform="rotate(-35 38 155)"
            />
            <ellipse
              cx="22"
              cy="135"
              rx="22"
              ry="9"
              fill="#4DB894"
              opacity="0.6"
              transform="rotate(-55 22 135)"
            />
            <ellipse
              cx="55"
              cy="170"
              rx="20"
              ry="8"
              fill="#8AD8C0"
              opacity="0.55"
              transform="rotate(-20 55 170)"
            />
            <ellipse
              cx="15"
              cy="168"
              rx="18"
              ry="7"
              fill="#3BA87E"
              opacity="0.5"
              transform="rotate(-70 15 168)"
            />
            <ellipse
              cx="42"
              cy="195"
              rx="16"
              ry="6"
              fill="#6DCFAE"
              opacity="0.45"
              transform="rotate(-10 42 195)"
            />
            {/* Left accent dots */}
            <circle cx="28" cy="118" r="5" fill="#A78BFA" opacity="0.6" />
            <circle cx="18" cy="128" r="3" fill="#C4B5FD" opacity="0.5" />
            <circle cx="60" cy="150" r="4" fill="#7C3AED" opacity="0.4" />
            {/* Right botanical leaves */}
            <ellipse
              cx="320"
              cy="145"
              rx="32"
              ry="13"
              fill="#6DCFAE"
              opacity="0.7"
              transform="rotate(40 320 145)"
            />
            <ellipse
              cx="338"
              cy="125"
              rx="25"
              ry="10"
              fill="#4DB894"
              opacity="0.65"
              transform="rotate(60 338 125)"
            />
            <ellipse
              cx="305"
              cy="165"
              rx="22"
              ry="9"
              fill="#8AD8C0"
              opacity="0.6"
              transform="rotate(25 305 165)"
            />
            <ellipse
              cx="345"
              cy="160"
              rx="20"
              ry="8"
              fill="#3BA87E"
              opacity="0.5"
              transform="rotate(75 345 160)"
            />
            <ellipse
              cx="315"
              cy="190"
              rx="18"
              ry="7"
              fill="#6DCFAE"
              opacity="0.5"
              transform="rotate(15 315 190)"
            />
            {/* Right accent dots */}
            <circle cx="330" cy="110" r="5" fill="#A78BFA" opacity="0.55" />
            <circle cx="342" cy="122" r="3.5" fill="#C4B5FD" opacity="0.5" />
            <circle cx="298" cy="148" r="4" fill="#7C3AED" opacity="0.4" />
            {/* Hexagonal network nodes */}
            <polygon
              points="180,28 195,37 195,55 180,64 165,55 165,37"
              fill="none"
              stroke="#B8A4F0"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <polygon
              points="130,55 140,61 140,73 130,79 120,73 120,61"
              fill="none"
              stroke="#B8A4F0"
              strokeWidth="1.2"
              opacity="0.45"
            />
            <polygon
              points="230,55 240,61 240,73 230,79 220,73 220,61"
              fill="none"
              stroke="#B8A4F0"
              strokeWidth="1.2"
              opacity="0.45"
            />
            <polygon
              points="155,95 163,100 163,110 155,115 147,110 147,100"
              fill="none"
              stroke="#B8A4F0"
              strokeWidth="1"
              opacity="0.35"
            />
            <polygon
              points="205,95 213,100 213,110 205,115 197,110 197,100"
              fill="none"
              stroke="#B8A4F0"
              strokeWidth="1"
              opacity="0.35"
            />
            {/* Connecting lines */}
            <line
              x1="180"
              y1="64"
              x2="155"
              y2="100"
              stroke="#C4B5FD"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="180"
              y1="64"
              x2="205"
              y2="100"
              stroke="#C4B5FD"
              strokeWidth="1"
              opacity="0.4"
            />
            <line
              x1="180"
              y1="28"
              x2="130"
              y2="61"
              stroke="#C4B5FD"
              strokeWidth="1"
              opacity="0.35"
            />
            <line
              x1="180"
              y1="28"
              x2="230"
              y2="61"
              stroke="#C4B5FD"
              strokeWidth="1"
              opacity="0.35"
            />
            {/* Central figure */}
            <ellipse
              cx="180"
              cy="95"
              rx="28"
              ry="28"
              fill="#7B4FE0"
              opacity="0.12"
            />
            <circle cx="180" cy="88" r="11" fill="#7B4FE0" />
            <rect x="172" y="99" width="16" height="30" rx="6" fill="#7B4FE0" />
            {/* Orbiting dots */}
            <circle cx="152" cy="82" r="4" fill="#9A72E0" opacity="0.55" />
            <circle cx="145" cy="100" r="3.5" fill="#9A72E0" opacity="0.45" />
            <circle cx="208" cy="82" r="4" fill="#9A72E0" opacity="0.55" />
            <circle cx="215" cy="100" r="3.5" fill="#9A72E0" opacity="0.45" />
            <circle cx="165" cy="68" r="3" fill="#9A72E0" opacity="0.4" />
            <circle cx="195" cy="68" r="3" fill="#9A72E0" opacity="0.4" />
          </svg>
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 0,
              right: 0,
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#B0B0C8",
                letterSpacing: "0.15em",
              }}
            >
              HITTOFIT ECOSYSTEM
            </span>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: 700,
            color: "#111",
            marginTop: 16,
          }}
        >
          Trainer Added Successfully 🎉
        </p>
        <p
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#888",
            marginTop: 6,
            lineHeight: 1.5,
          }}
        >
          The trainer is now part of the Hittofit ecosystem.
        </p>
      </div>

      {/* ── Trainer Card ── */}
      <div style={{ padding: "16px 16px 0" }}>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
            border: "1px solid #EFEFEF",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            padding: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  backgroundColor: "#6B3FE8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <UserCircle2 size={26} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#111" }}>
                  Amit Patel
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#888",
                    letterSpacing: "0.05em",
                    marginTop: 2,
                    lineHeight: 1.4,
                  }}
                >
                  STRENGTH &amp; CONDITIONING
                  <br />
                  COACH
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#EDE8FD",
                color: "#6B3FE8",
                fontSize: 12,
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: 20,
                whiteSpace: "nowrap",
              }}
            >
              <BadgeCheck size={13} color="#6B3FE8" strokeWidth={2.2} />
              Active
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #F0F0F0",
              margin: "14px 0",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#B0B0B0",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                EXPERIENCE
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#111",
                  marginTop: 4,
                }}
              >
                8 Years
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#B0B0B0",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                ASSIGNED GYM
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#6B3FE8",
                  marginTop: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <MapPin size={13} color="#6B3FE8" strokeWidth={2.2} />
                FitZone Elite
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#F7F7F7",
              borderRadius: 12,
              padding: "10px 14px",
              marginTop: 14,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Clock3 size={14} color="#999" strokeWidth={2} />
            <span style={{ fontSize: 13, color: "#666" }}>
              Verification:{" "}
              <span style={{ fontWeight: 600, color: "#222" }}>
                Pending Review
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* ── Onboarding Progress ── */}
      <div style={{ padding: "24px 16px 0" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#B0B0B0",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          ONBOARDING PROGRESS
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
            border: "1px solid #EFEFEF",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            padding: 16,
          }}
        >
          {onboardingProgress.map((step, i) => (
            <div
              key={step.label}
              style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <StatusDot status={step.status} />
                {i !== onboardingProgress.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      height: 28,
                      backgroundColor: "#E5E5E5",
                      margin: "2px 0",
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  paddingBottom: i !== onboardingProgress.length - 1 ? 4 : 0,
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: step.status === "inactive" ? "#BBBBBB" : "#111",
                  }}
                >
                  {step.label}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: step.status === "inactive" ? "#CCCCCC" : "#AAA",
                    marginTop: 2,
                  }}
                >
                  {step.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Recommended Next Steps ── */}
      <div style={{ padding: "24px 16px 0" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#B0B0B0",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          RECOMMENDED NEXT STEPS
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          {nextSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  border: "1px solid #EFEFEF",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  padding: "18px 14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    backgroundColor: "#EDE8FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={18} color="#6B3FE8" strokeWidth={1.8} />
                </div>
                <span
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#111",
                    lineHeight: 1.3,
                  }}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Action Buttons ── */}
      <div
        style={{
          padding: "24px 16px 0",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {/* Primary CTA */}
        <button
          style={{
            width: "100%",
            backgroundColor: "#6B3FE8",
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            padding: "16px 20px",
            borderRadius: 18,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Dumbbell size={16} color="#fff" strokeWidth={2.2} />
          View Trainer Profile
          <ChevronRight
            size={17}
            color="#fff"
            strokeWidth={2.3}
            style={{ marginLeft: "auto" }}
          />
        </button>

        {/* Secondary buttons */}
        {[
          { icon: UserPlus, label: "Add Another Trainer" },
          { icon: Bell, label: "Send Welcome Notification" },
          { icon: Home, label: "Back to Trainers List" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            style={{
              width: "100%",
              backgroundColor: "#fff",
              color: "#111",
              fontSize: 15,
              fontWeight: 500,
              padding: "16px 20px",
              borderRadius: 18,
              border: "1px solid #E8E8E8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Icon size={17} color="#6B3FE8" strokeWidth={2} />
            {label}
            <ChevronRight
              size={17}
              color="#D0D0D0"
              strokeWidth={2.3}
              style={{ marginLeft: "auto" }}
            />
          </button>
        ))}
      </div>

      {/* ── Insight Banner ── */}
      <div style={{ padding: "20px 16px 0" }}>
        <div
          style={{
            backgroundColor: "#EDE8FD",
            borderRadius: 20,
            padding: 16,
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#6B3FE8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <TrendingUp size={16} color="#fff" strokeWidth={2.2} />
          </div>
          <p style={{ fontSize: 13.5, color: "#444", lineHeight: 1.6 }}>
            Verified trainers receive{" "}
            <span style={{ fontWeight: 700, color: "#6B3FE8" }}>3.2× more</span>{" "}
            profile views and bookings. Complete verification now to boost
            performance.
          </p>
        </div>
      </div>
    </div>
  );
}
