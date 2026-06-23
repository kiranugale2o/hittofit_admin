import { useState, useRef, useEffect } from "react";
import { ChevronRight, Pencil, User } from "lucide-react";

/* ─────────────────────────────────────────
   OTP 1 — Enter Code
───────────────────────────────────────── */
export function OTPEnter({
  phone = "+91 98XXXXXX21",
  onVerify,
  onResend,
  onChangeNumber,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [detecting, setDetecting] = useState(true);
  const inputs = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => setDetecting(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) inputs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0)
      inputs.current[idx - 1]?.focus();
  };

  const filled = otp.every((d) => d !== "");

  return (
    <>
      <style>{`
        .otp1-root {
          min-height: 100vh;
          background: #F0EEF8;
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
        }

        /* ── Mobile header ── */
        .otp1-mob-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 0;
        }
        .otp1-dsk-header { display: none; }

        /* hero gradient blob */
        .otp1-hero {
          background: radial-gradient(ellipse at 50% 0%, #DDD6FE 0%, #F0EEF8 70%);
          padding: 32px 24px 24px;
          text-align: center;
        }
        .otp1-hero h1 {
          font-size: 26px;
          font-weight: 800;
          color: #111;
          letter-spacing: -0.02em;
          margin-bottom: 6px;
        }
        .otp1-hero p { font-size: 14px; color: #888; line-height: 1.5; }
        .otp1-hero strong { color: #444; font-weight: 600; }

        /* OTP box */
        .otp1-card {
          background: #fff;
          border-radius: 20px;
          padding: 24px 20px 20px;
          margin: 0 20px 20px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
        }

        .otp-inputs {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 16px;
        }
        .otp-input {
          width: 46px;
          height: 52px;
          border: 2px solid #E5E5E5;
          border-radius: 14px;
          text-align: center;
          font-size: 22px;
          font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #5B21B6;
          background: #fafafa;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          caret-color: #7C3AED;
        }
        .otp-input:focus {
          border-color: #7C3AED;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(124,58,237,0.1);
        }
        .otp-input.filled { border-color: #7C3AED; background: #F5F0FF; }

        .sms-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #EDE9FE;
          border-radius: 50px;
          padding: 9px 20px;
          font-size: 13px;
          font-weight: 600;
          color: #6D28D9;
        }
        .sms-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #7C3AED;
          animation: pulse-dot 1.2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        /* live activity */
        .activity-label {
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #aaa;
          margin: 0 20px 12px;
        }
        .activity-pills {
          display: flex;
          gap: 10px;
          margin: 0 20px 24px;
        }
        .activity-pill {
          flex: 1;
          background: #fff;
          border-radius: 14px;
          padding: 12px 14px;
          font-size: 13px;
          color: #222;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          line-height: 1.4;
        }
        .activity-pill strong { font-weight: 700; }
        .zap { font-size: 14px; }

        /* CTA */
        .otp1-cta {
          margin: 0 20px;
        }
        .verify-btn {
          width: 100%;
          background: #5B21B6;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 16px 0;
          font-size: 16px;
          font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 16px;
          transition: background 0.2s;
        }
        .verify-btn:disabled { background: #A78BFA; cursor: not-allowed; }

        .otp1-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding-bottom: 32px;
        }
        .resend-btn {
          background: none; border: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px; font-weight: 600;
          color: #5B21B6; cursor: pointer;
        }
        .change-btn {
          background: none; border: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          color: #888; cursor: pointer;
          display: flex; align-items: center; gap: 5px;
        }

        /* ── Desktop overrides ── */
        @media (min-width: 768px) {
          .otp1-root { background: #EEECE7; justify-content: center; align-items: center; }
          .otp1-mob-header { display: none; }
          .otp1-dsk-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 18px 40px;
            position: fixed;
            top: 0; left: 0; right: 0;
            background: #EEECE7;
            z-index: 10;
          }
          .otp1-panel {
            width: 100%;
            max-width: 440px;
            background: #fff;
            border-radius: 28px;
            box-shadow: 0 4px 40px rgba(0,0,0,0.1);
            overflow: hidden;
            margin: 80px auto 40px;
          }
          .otp1-hero { padding: 36px 32px 28px; border-radius: 0; }
          .otp1-hero h1 { font-size: 28px; }
          .otp1-card { margin: 0 28px 20px; }
          .otp-input { width: 52px; height: 58px; font-size: 24px; }
          .activity-label { margin: 0 28px 12px; }
          .activity-pills { margin: 0 28px 24px; }
          .otp1-cta { margin: 0 28px; }
          .otp1-links { padding-bottom: 36px; }
        }
      `}</style>

      <div className="otp1-root">
        {/* Desktop header */}
        <header className="otp1-dsk-header">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#5B21B6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <polygon
                  points="13,2 3,14 12,14 11,22 21,10 12,10"
                  fill="white"
                />
              </svg>
            </div>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#3D1FA3" }}>
              Hittofit
            </span>
          </div>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#EDE9FE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <User size={16} color="#5B21B6" />
          </div>
        </header>

        <div className="otp1-panel">
          {/* Mobile header */}
          <div className="otp1-mob-header">
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#5B21B6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <polygon
                    points="13,2 3,14 12,14 11,22 21,10 12,10"
                    fill="white"
                  />
                </svg>
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#3D1FA3" }}>
                Hittofit
              </span>
            </div>
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "#EDE9FE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <User size={16} color="#5B21B6" />
            </div>
          </div>

          {/* Hero */}
          <div className="otp1-hero">
            <h1>Almost there 👋</h1>
            <p>
              We sent a verification code to
              <br />
              <strong>{phone}</strong>
            </p>
          </div>

          {/* OTP Card */}
          <div className="otp1-card">
            <div className="otp-inputs">
              {otp.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => (inputs.current[i] = el)}
                  className={`otp-input${d ? " filled" : ""}`}
                  type="tel"
                  maxLength={1}
                  value={d}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  autoFocus={i === 0}
                />
              ))}
            </div>

            <div className="sms-pill">
              {detecting ? (
                <>
                  <div className="sms-dot" />
                  &nbsp;SMS Auto-detecting...
                </>
              ) : (
                <>
                  <span>✓</span>&nbsp;SMS Detected
                </>
              )}
            </div>
          </div>

          {/* Live Activity */}
          <p className="activity-label">LIVE ECOSYSTEM ACTIVITY</p>
          <div className="activity-pills">
            <div className="activity-pill">
              <strong>12 gyms</strong> approved today
            </div>
            <div className="activity-pill">
              <span className="zap">⚡</span> <strong>28 trainers</strong>{" "}
              joined this week
            </div>
          </div>

          {/* CTA */}
          <div className="otp1-cta">
            <button
              className="verify-btn"
              disabled={!filled}
              onClick={onVerify}
            >
              Verify &amp; Continue <ChevronRight size={18} />
            </button>
          </div>

          <div className="otp1-links">
            <button className="resend-btn" onClick={onResend}>
              Resend OTP
            </button>
            <button className="change-btn" onClick={onChangeNumber}>
              <Pencil size={13} color="#888" /> Change Number
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   OTP 2 — Access Verified
───────────────────────────────────────── */
export function OTPVerified({ onEnter }) {
  return (
    <>
      <style>{`
        .otp2-root {
          min-height: 100vh;
          background: #F0EEF8;
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
        }

        .otp2-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 0;
        }
        .otp2-topbar-title {
          font-size: 16px;
          font-weight: 600;
          color: #222;
        }
        .check-circle {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: #5B21B6;
          display: flex; align-items: center; justify-content: center;
        }

        /* icon ring */
        .icon-ring-wrap {
          display: flex;
          justify-content: center;
          padding: 36px 0 20px;
        }
        .icon-ring-outer {
          width: 140px; height: 140px;
          border-radius: 50%;
          border: 2px solid #DDD6FE;
          display: flex; align-items: center; justify-content: center;
        }
        .icon-ring-inner {
          width: 100px; height: 100px;
          border-radius: 50%;
          border: 2px solid #C4B5FD;
          display: flex; align-items: center; justify-content: center;
        }
        .icon-circle {
          width: 68px; height: 68px;
          border-radius: 50%;
          background: #5B21B6;
          display: flex; align-items: center; justify-content: center;
        }

        .otp2-heading {
          text-align: center;
          padding: 0 24px 8px;
        }
        .otp2-heading h1 {
          font-size: 28px; font-weight: 800; color: #111;
          letter-spacing: -0.02em; margin-bottom: 8px;
        }
        .otp2-heading p { font-size: 14px; color: #888; line-height: 1.5; }

        /* activity mini card */
        .activity-mini {
          background: #fff;
          border-radius: 18px;
          padding: 16px 18px;
          margin: 20px 20px 24px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
        }
        .activity-mini-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .activity-mini-label {
          display: flex; align-items: center; gap: 7px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.08em; color: #444;
        }
        .live-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22C55E;
        }
        .live-now {
          font-size: 12px; font-weight: 700; color: #5B21B6;
        }

        /* bar chart */
        .bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 52px;
          margin-bottom: 14px;
        }
        .bar {
          flex: 1;
          border-radius: 6px 6px 0 0;
          background: #DDD6FE;
        }
        .bar.active { background: #5B21B6; }

        /* avatar row */
        .avatar-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .avatar-stack { display: flex; }
        .avatar {
          width: 26px; height: 26px;
          border-radius: 50%;
          border: 2px solid #fff;
          overflow: hidden;
          margin-left: -8px;
        }
        .avatar:first-child { margin-left: 0; }
        .plus-badge {
          background: #EDE9FE;
          border: 2px solid #fff;
          border-radius: 20px;
          padding: 2px 6px;
          font-size: 10px;
          font-weight: 700;
          color: #5B21B6;
          margin-left: -4px;
        }
        .preparing {
          font-size: 12px;
          color: #aaa;
          margin-left: auto;
          font-style: italic;
        }

        /* CTA */
        .otp2-cta {
          margin: 0 20px;
        }
        .enter-btn {
          width: 100%;
          background: #5B21B6;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 16px 0;
          font-size: 16px;
          font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 14px;
          transition: background 0.2s;
        }
        .secure-label {
          text-align: center;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #bbb;
          padding-bottom: 24px;
        }

        /* Desktop */
        @media (min-width: 768px) {
          .otp2-root { background: #EEECE7; justify-content: center; align-items: center; }
          .otp2-panel {
            width: 100%;
            max-width: 400px;
            background: #F8F7FC;
            border-radius: 28px;
            box-shadow: 0 4px 40px rgba(0,0,0,0.1);
            overflow: hidden;
            margin: 0 auto;
          }
          .otp2-topbar { padding: 24px 24px 0; }
          .icon-ring-wrap { padding: 32px 0 16px; }
          .otp2-heading h1 { font-size: 30px; }
          .activity-mini { margin: 20px 24px 24px; }
          .otp2-cta { margin: 0 24px; }
        }
      `}</style>

      <div className="otp2-root">
        <div className="otp2-panel">
          {/* Topbar */}
          <div className="otp2-topbar">
            <span className="otp2-topbar-title">Verification</span>
            <div className="check-circle">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8l3.5 3.5L13 5"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Icon rings */}
          <div className="icon-ring-wrap">
            <div className="icon-ring-outer">
              <div className="icon-ring-inner">
                <div className="icon-circle">
                  {/* hub/network icon */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="3" fill="white" />
                    <circle cx="16" cy="6" r="2.5" fill="white" />
                    <circle cx="16" cy="26" r="2.5" fill="white" />
                    <circle cx="6" cy="16" r="2.5" fill="white" />
                    <circle cx="26" cy="16" r="2.5" fill="white" />
                    <line
                      x1="16"
                      y1="13"
                      x2="16"
                      y2="8.5"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="16"
                      y1="19"
                      x2="16"
                      y2="23.5"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="13"
                      y1="16"
                      x2="8.5"
                      y2="16"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="19"
                      y1="16"
                      x2="23.5"
                      y2="16"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="otp2-heading">
            <h1>Access verified</h1>
            <p>
              Your secure connection to the
              <br />
              ecosystem is confirmed
            </p>
          </div>

          {/* Activity mini card */}
          <div className="activity-mini">
            <div className="activity-mini-top">
              <div className="activity-mini-label">
                <div className="live-dot" />
                ECOSYSTEM ACTIVITY
              </div>
              <span className="live-now">Live Now</span>
            </div>

            {/* Bar chart */}
            <div className="bar-chart">
              {[35, 55, 45, 85, 60, 40, 50].map((h, i) => (
                <div
                  key={i}
                  className={`bar${i === 3 ? " active" : ""}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            {/* Avatar row */}
            <div className="avatar-row">
              <div className="avatar-stack">
                {["#D1B89A", "#B0C4D8", "#C4B5FD"].map((bg, i) => (
                  <div
                    key={i}
                    className="avatar"
                    style={{ background: bg, zIndex: 3 - i }}
                  >
                    <svg viewBox="0 0 26 26" width="26" height="26">
                      <circle
                        cx="13"
                        cy="10"
                        r="5"
                        fill={
                          bg === "#D1B89A"
                            ? "#c4956a"
                            : bg === "#B0C4D8"
                              ? "#8aafc8"
                              : "#9d7fe8"
                        }
                      />
                      <ellipse
                        cx="13"
                        cy="22"
                        rx="9"
                        ry="7"
                        fill={
                          bg === "#D1B89A"
                            ? "#b07d52"
                            : bg === "#B0C4D8"
                              ? "#6e90aa"
                              : "#7c5ec7"
                        }
                      />
                    </svg>
                  </div>
                ))}
                <div className="plus-badge">+12</div>
              </div>
              <span className="preparing">Preparing workspace…</span>
            </div>
          </div>

          {/* Enter button */}
          <div className="otp2-cta">
            <button className="enter-btn" onClick={onEnter}>
              Enter Command Center <ChevronRight size={18} />
            </button>
          </div>

          <p className="secure-label">SECURE SESSION ESTABLISHED</p>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   Default export — preview both screens
───────────────────────────────────────── */
export default function OTPScreensPreview() {
  const [screen, setScreen] = useState("otp1");

  if (screen === "otp2") {
    return <OTPVerified onEnter={() => alert("Entering command center!")} />;
  }

  return (
    <OTPEnter
      phone="+91 98XXXXXX21"
      onVerify={() => setScreen("otp2")}
      onResend={() => alert("OTP Resent!")}
      onChangeNumber={() => alert("Change number")}
    />
  );
}
