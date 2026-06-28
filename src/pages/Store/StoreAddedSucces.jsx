import React from "react";
import {
  Search,
  BadgeCheck,
  Store,
  CheckCircle2,
  Circle,
  AlertCircle,
  ChevronRight,
  ShieldCheck,
  NotebookText,
  Send,
  Star,
  ShoppingCart,
  Plus,
  Bell,
  List,
  Lightbulb,
} from "lucide-react";

const LIFECYCLE = [
  { label: "Store Profile Created", state: "done" },
  { label: "Owner Linked", state: "done" },
  { label: "Verification Pending", state: "current", meta: "Estimated 24h" },
  { label: "Product Catalog Pending", state: "todo" },
];

const NEXT_STEPS = [
  { label: "Verify Store", sub: "Check docs", icon: ShieldCheck },
  { label: "Add Catalog", sub: "Import items", icon: NotebookText },
  { label: "Send Welcome", sub: "Email invite", icon: Send },
  { label: "Feature Store", sub: "Top listing", icon: Star },
];

export default function StoreAddedSuccess() {
  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        backgroundColor: "#F5F5F7",
        minHeight: "100vh",
        maxWidth: 390,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 20px 12px",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              overflow: "hidden",
              background: "#e0d4f7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {/* Avatar placeholder with person silhouette */}
            <svg width="34" height="34" viewBox="0 0 34 34">
              <circle cx="17" cy="13" r="6" fill="#9B72E8" />
              <ellipse cx="17" cy="28" rx="10" ry="7" fill="#9B72E8" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: "#6C2BD9",
              letterSpacing: "-0.3px",
            }}
          >
            Hittofit
          </span>
        </div>
        <Search size={20} color="#6C2BD9" />
      </div>

      <div style={{ padding: "0 16px 32px" }}>
        {/* Hero illustration */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            height: 200,
            background: "linear-gradient(180deg, #F0EEF5 0%, #E8E4F0 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginTop: 12,
          }}
        >
          <NetworkArt />
          {/* Badge pill */}
          <div
            style={{
              position: "absolute",
              bottom: 14,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#fff",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              borderRadius: 50,
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#6C2BD9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <BadgeCheck size={12} color="#fff" />
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#1A1A2E",
              }}
            >
              New Ecosystem Partner Linked
            </span>
          </div>
        </div>

        {/* Title */}
        <div style={{ marginTop: 20, marginBottom: 4, textAlign: "center" }}>
          <p
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "#0F0F1A",
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Store Added
            <br />
            Successfully
          </p>
          <p
            style={{
              fontSize: 13,
              color: "#9CA3AF",
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            The store is now part of the Hittofit ecosystem
            <br />
            and is entering the verification queue.
          </p>
        </div>

        {/* Store summary card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: "18px 16px",
            marginTop: 20,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          {/* Store icon */}
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#EDE9FB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <Store size={24} color="#6C2BD9" />
          </div>

          <p
            style={{
              fontSize: 15,
              fontWeight: 700,
              color: "#0F0F1A",
              margin: 0,
            }}
          >
            FitFuel Nutrition
          </p>
          <p style={{ fontSize: 12, color: "#9CA3AF", margin: "2px 0 8px" }}>
            Supplements & Nutrition
          </p>

          {/* Active badge */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              fontSize: 10,
              fontWeight: 700,
              color: "#6C2BD9",
              background: "#EDE9FB",
              padding: "4px 10px",
              borderRadius: 50,
              letterSpacing: "0.5px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#6C2BD9",
                display: "inline-block",
              }}
            />
            ACTIVE
          </span>

          <div
            style={{
              height: 1,
              background: "#F3F4F6",
              margin: "14px 0",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  margin: 0,
                }}
              >
                OWNER
              </p>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#0F0F1A",
                  margin: "2px 0 0",
                }}
              >
                Rohit Sharma
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  margin: 0,
                }}
              >
                LOCATION
              </p>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#0F0F1A",
                  margin: "2px 0 0",
                }}
              >
                Pune, India
              </p>
            </div>
          </div>

          <div
            style={{
              height: 1,
              background: "#F3F4F6",
              margin: "14px 0",
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <AlertCircle size={14} color="#F59E0B" />
              <span style={{ fontSize: 12, color: "#F59E0B", fontWeight: 500 }}>
                Verification Pending Review
              </span>
            </div>
            <button
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#6C2BD9",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              View
              <br />
              Policy
            </button>
          </div>
        </div>

        {/* Onboarding Lifecycle */}
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: "18px 16px",
            marginTop: 12,
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          }}
        >
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "1px",
              margin: "0 0 14px",
            }}
          >
            ONBOARDING LIFECYCLE
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {LIFECYCLE.map(({ label, state, meta }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  {/* Icon */}
                  {state === "done" && (
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "#6C2BD9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle2 size={14} color="#fff" />
                    </div>
                  )}
                  {state === "current" && (
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "#6C2BD9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: "#fff",
                        }}
                      />
                    </div>
                  )}
                  {state === "todo" && (
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "#F3F4F6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1.5px dashed #D1D5DB",
                      }}
                    >
                      <List size={12} color="#D1D5DB" />
                    </div>
                  )}

                  <span
                    style={{
                      fontSize: 13,
                      fontWeight:
                        state === "current"
                          ? 700
                          : state === "todo"
                            ? 400
                            : 600,
                      color:
                        state === "current"
                          ? "#6C2BD9"
                          : state === "todo"
                            ? "#D1D5DB"
                            : "#0F0F1A",
                    }}
                  >
                    {label}
                  </span>
                </div>
                {meta && (
                  <span
                    style={{
                      fontSize: 11,
                      color: "#9CA3AF",
                      textAlign: "right",
                      lineHeight: 1.3,
                    }}
                  >
                    {meta}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Next steps */}
        <p
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "#0F0F1A",
            margin: "20px 0 12px",
          }}
        >
          Next steps
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
          }}
        >
          {NEXT_STEPS.map(({ label, sub, icon: Icon }) => (
            <button
              key={label}
              style={{
                background: "#fff",
                border: "1px solid #F3F4F6",
                borderRadius: 16,
                padding: "14px 14px 14px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 10,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: "#F3EFFE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={16} color="#6C2BD9" />
              </div>
              <div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#0F0F1A",
                    margin: 0,
                  }}
                >
                  {label}
                </p>
                <p
                  style={{
                    fontSize: 10,
                    color: "#9CA3AF",
                    margin: "2px 0 0",
                  }}
                >
                  {sub}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginTop: 12,
          }}
        >
          {/* View Store Profile */}
          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "linear-gradient(90deg, #6C2BD9 0%, #4F1FA8 100%)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              padding: "14px 18px",
              borderRadius: 14,
              border: "none",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <ShoppingCart size={15} />
              View Store Profile
            </span>
            <ChevronRight size={16} />
          </button>

          {/* Add Another Store */}
          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#EDE9FB",
              color: "#6C2BD9",
              fontSize: 13,
              fontWeight: 700,
              padding: "14px 18px",
              borderRadius: 14,
              border: "none",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <Plus size={15} />
            Add Another Store
          </button>

          {/* Send Notification */}
          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#F3F4F6",
              color: "#6B7280",
              fontSize: 13,
              fontWeight: 600,
              padding: "14px 18px",
              borderRadius: 14,
              border: "none",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <Bell size={15} />
            Send Notification
          </button>

          {/* Back to Stores List */}
          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#fff",
              color: "#6B7280",
              fontSize: 13,
              fontWeight: 500,
              padding: "14px 18px",
              borderRadius: 14,
              border: "1px solid #F3F4F6",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <List size={15} />
            Back to Stores List
          </button>
        </div>

        {/* Productivity Insight */}
        <div
          style={{
            background: "linear-gradient(135deg, #EDE9FB 0%, #DDD4F7 100%)",
            borderRadius: 16,
            padding: "14px 16px",
            marginTop: 12,
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <Lightbulb
            size={17}
            color="#6C2BD9"
            style={{ marginTop: 1, flexShrink: 0 }}
          />
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#0F0F1A",
                margin: 0,
              }}
            >
              Productivity Insight
            </p>
            <p
              style={{
                fontSize: 11.5,
                color: "#4B2A8A",
                lineHeight: 1.5,
                margin: "4px 0 0",
              }}
            >
              Verified stores receive{" "}
              <strong style={{ color: "#6C2BD9" }}>2.7x more</strong>{" "}
              <strong style={{ color: "#6C2BD9" }}>
                customer interactions
              </strong>{" "}
              and product views compared to unverified partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NetworkArt() {
  // Positions of outer nodes matching the Figma design
  const nodes = [
    { x: 190, y: 28 },
    { x: 248, y: 55 },
    { x: 274, y: 110 },
    { x: 248, y: 158 },
    { x: 190, y: 178 },
    { x: 120, y: 178 },
    { x: 62, y: 158 },
    { x: 36, y: 110 },
    { x: 62, y: 55 },
    { x: 120, y: 28 },
  ];

  const cx = 155,
    cy = 103;

  return (
    <svg
      viewBox="0 0 310 206"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {/* Connection lines */}
      {nodes.map((n, i) => (
        <path
          key={i}
          d={`M${cx},${cy} Q${cx + (n.x - cx) * 0.45},${cy + (n.y - cy) * 0.45} ${n.x},${n.y}`}
          stroke="#9B72E8"
          strokeWidth="1.2"
          fill="none"
          opacity="0.55"
        />
      ))}

      {/* Outer nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="12" fill="#7C3AED" opacity="0.2" />
          <circle cx={n.x} cy={n.y} r="8" fill="#7C3AED" opacity="0.85" />
          <circle cx={n.x} cy={n.y} r="4" fill="#B39FEE" opacity="0.9" />
        </g>
      ))}

      {/* Center store building shadow */}
      <ellipse
        cx={cx}
        cy={cy + 22}
        rx="38"
        ry="10"
        fill="#5B21B6"
        opacity="0.2"
      />

      {/* Store building body */}
      <rect
        x={cx - 26}
        y={cy - 20}
        width="52"
        height="38"
        rx="5"
        fill="#6C2BD9"
      />
      {/* Roof / header bar */}
      <rect
        x={cx - 26}
        y={cy - 20}
        width="52"
        height="13"
        rx="5"
        fill="#8B5CF6"
      />
      {/* Store pillars */}
      <rect
        x={cx - 20}
        y={cy - 5}
        width="7"
        height="22"
        rx="1"
        fill="white"
        opacity="0.9"
      />
      <rect
        x={cx - 8}
        y={cy - 5}
        width="7"
        height="22"
        rx="1"
        fill="white"
        opacity="0.9"
      />
      <rect
        x={cx + 4}
        y={cy - 5}
        width="7"
        height="22"
        rx="1"
        fill="white"
        opacity="0.9"
      />
      <rect
        x={cx + 16}
        y={cy - 5}
        width="7"
        height="22"
        rx="1"
        fill="white"
        opacity="0.9"
      />
    </svg>
  );
}
