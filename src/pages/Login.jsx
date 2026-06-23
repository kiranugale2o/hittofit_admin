import { useState } from "react";
import { ChevronRight, ChevronDown, Fingerprint, Lock } from "lucide-react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

export default function Login({ onContinue }) {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!phone || loading) return;
    setLoading(true);
    navigate("/otp-verification");
  };

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        .login-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* ── MOBILE (default) ── */
        .login-root {
          background-color: #F0EEF8;
        }

        /* header */
        .dsk-header { display: none; }

        /* logo block (mobile only) */
        .mob-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 48px;
          padding-bottom: 24px;
        }

        /* greeting */
        .greeting { text-align: center; padding: 0 24px; margin-bottom: 24px; }
        .greeting h1 { font-size: 32px; font-weight: 800; color: #111; letter-spacing: -0.02em; }
        .greeting p  { font-size: 15px; color: #888; margin-top: 6px; }

        /* live activity */
        .activity-wrap { margin: 0 20px 24px; }

        /* body grid */
        .body-grid { display: flex; flex-direction: column; flex: 1; }
        .left-panel  { display: none; }
        .right-panel {
          display: flex;
          flex-direction: column;
          padding: 0 20px;
        }

        /* form card */
        .form-card {
          background: #fff;
          border-radius: 24px;
          padding: 28px 24px 24px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          margin-bottom: 16px;
        }
        .form-title { font-size: 24px; font-weight: 800; color: #111; margin-bottom: 20px; letter-spacing: -0.01em; }
        .form-sub   { display: none; }

        /* phone input — mobile pill */
        .phone-wrap-mob {
          display: flex;
          align-items: center;
          border: 1.5px solid #E5E5E5;
          border-radius: 50px;
          padding: 0 20px;
          height: 56px;
          background: #fafafa;
          margin-bottom: 16px;
        }
        .phone-wrap-dsk { display: none; }

        /* otp button */
        .otp-btn {
          width: 100%;
          background: #5B21B6;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 15px 0;
          font-size: 16px;
          font-weight: 700;
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          letter-spacing: 0.01em;
          transition: background 0.2s;
          margin-bottom: 20px;
        }
        .otp-btn:disabled { background: #A78BFA; cursor: not-allowed; }

        /* below button */
        .mob-secure  { display: flex; align-items: center; justify-content: center; gap: 8px; }
        .dsk-below   { display: none; }

        /* footer */
        .mob-footer {
          margin-top: auto;
          padding: 16px 0 24px;
          text-align: center;
        }
        .dsk-footer { display: none; }

        /* ── DESKTOP (≥ 768px) ── */
        @media (min-width: 768px) {
          .login-root { background-color: #EEECE7; }

          .dsk-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 18px 40px;
          }

          .mob-logo    { display: none; }
          .greeting    { display: none; }
          .activity-wrap { display: none; }

          .body-grid {
            flex-direction: row;
            flex: 1;
          }

          .left-panel {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            padding: 40px;
          }

          .right-panel {
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 64px;
          }

          .form-card {
            border-radius: 20px;
            padding: 36px 40px;
            box-shadow: 0 2px 24px rgba(0,0,0,0.06);
            width: 100%;
            max-width: 380px;
            margin-bottom: 0;
          }

          .form-title { font-size: 28px; margin-bottom: 8px; }
          .form-sub   {
            display: block;
            font-size: 13.5px;
            color: #888;
            line-height: 1.55;
            margin-bottom: 28px;
          }

          /* switch phone inputs */
          .phone-wrap-mob { display: none; }
          .phone-wrap-dsk {
            display: flex;
            gap: 8px;
            margin-bottom: 18px;
          }

          .otp-btn { font-size: 15px; padding: 14px 0; margin-bottom: 0; }

          .mob-secure { display: none; }
          .dsk-below  { display: block; }

          .mob-footer { display: none; }
          .dsk-footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            padding: 16px 0;
          }
        }
      `}</style>

      <div className="login-root">
        {/* ── Desktop Header ── */}
        <header className="dsk-header">
          <Logo size="md" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 14,
              color: "#444",
            }}
          >
            <span>Contact Security</span>
            <span style={{ color: "#bbb", fontWeight: 300 }}>|</span>
            <span>V.4.2.0</span>
          </div>
        </header>

        {/* ── Mobile Logo ── */}
        <div className="mob-logo">
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "#5B21B6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <polygon
                points="13,2 3,14 12,14 11,22 21,10 12,10"
                fill="white"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#3D1FA3",
              letterSpacing: "-0.01em",
            }}
          >
            Hittofit
          </span>
        </div>

        {/* ── Mobile Greeting ── */}
        <div className="greeting">
          <h1>👋 Good Morning</h1>
          <p>Ready to keep Hittofit moving?</p>
        </div>

        {/* ── Mobile Live Activity ── */}
        <div className="activity-wrap">
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "16px 20px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22C55E",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#333",
                  letterSpacing: "0.08em",
                }}
              >
                LIVE ACTIVITY
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <div
                  style={{ fontSize: 32, fontWeight: 800, color: "#5B21B6" }}
                >
                  42
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#999",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  NEW MEMBERS
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{ fontSize: 32, fontWeight: 800, color: "#5B21B6" }}
                >
                  15
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#999",
                    letterSpacing: "0.06em",
                    fontWeight: 600,
                  }}
                >
                  APPROVALS
                </div>
              </div>
              {/* Avatar stack */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#D1B89A",
                    border: "2px solid #fff",
                    overflow: "hidden",
                    zIndex: 2,
                  }}
                >
                  <svg viewBox="0 0 36 36" width="36" height="36">
                    <circle cx="18" cy="13" r="7" fill="#c4956a" />
                    <ellipse cx="18" cy="30" rx="12" ry="9" fill="#b07d52" />
                  </svg>
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#B0C4D8",
                    border: "2px solid #fff",
                    marginLeft: -10,
                    overflow: "hidden",
                    zIndex: 1,
                  }}
                >
                  <svg viewBox="0 0 36 36" width="36" height="36">
                    <circle cx="18" cy="13" r="7" fill="#8aafc8" />
                    <ellipse cx="18" cy="30" rx="12" ry="9" fill="#6e90aa" />
                  </svg>
                </div>
                <div
                  style={{
                    marginLeft: -6,
                    background: "#EDE9FF",
                    border: "2px solid #fff",
                    borderRadius: 20,
                    padding: "3px 8px",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#5B21B6",
                    zIndex: 3,
                    whiteSpace: "nowrap",
                  }}
                >
                  +12
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="body-grid">
          {/* Desktop Left — Image Card */}
          <div className="left-panel">
            <div
              style={{
                width: 380,
                height: 460,
                borderRadius: 24,
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
                background:
                  "linear-gradient(160deg, #d6c9b8 0%, #c8bba8 40%, #b8a890 70%, #a89878 100%)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #cec5b5 0%, #b8ae9e 30%, #a89880 60%, #c4b8a4 100%)",
                }}
              />
              <div
                className="absolute"
                style={{
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "70%",
                  height: "75%",
                  background: "rgba(255,255,255,0.10)",
                  borderLeft: "1px solid rgba(255,255,255,0.18)",
                  borderRight: "1px solid rgba(255,255,255,0.18)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: "30%",
                  background:
                    "linear-gradient(180deg, #b0a48c 0%, #c8bc9e 100%)",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                }}
              />
              <div
                className="absolute"
                style={{
                  top: "28%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 130,
                  height: 130,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 35% 35%, #a78bfa, #7C3AED 50%, #4c1d95 80%, #2d0f6e)",
                  boxShadow:
                    "0 0 60px 20px rgba(124,58,237,0.35), inset -10px -10px 30px rgba(255,255,255,0.15)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "18%",
                    left: "28%",
                    width: 35,
                    height: 25,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.32)",
                    filter: "blur(4px)",
                  }}
                />
              </div>
              {[
                { top: "22%", left: "38%" },
                { top: "26%", left: "62%" },
                { top: "35%", left: "28%" },
                { top: "18%", left: "55%" },
                { top: "40%", left: "70%" },
                { top: "15%", left: "45%" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: p.top,
                    left: p.left,
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.6)",
                  }}
                />
              ))}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  padding: "20px 24px 24px",
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.22) 0%, transparent 100%)",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.92)",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Admin Login
                </span>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.18)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <ChevronRight size={14} color="rgba(255,255,255,0.9)" />
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form (shared) */}
          <div className="right-panel">
            <div className="form-card">
              <h2 className="form-title">
                {/* desktop shows "Welcome back", mobile shows "Enter Mobile" via CSS would need two elements */}
                <span className="dsk-title" style={{ display: "none" }}>
                  Welcome back
                </span>
                <span className="mob-title">Enter Mobile</span>
              </h2>

              <p className="form-sub">
                Enter your mobile number to access the Hittofit ecosystem
                command center.
              </p>

              {/* Field label */}
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#555",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Phone Number
              </label>

              {/* ── Mobile pill input ── */}
              <div className="phone-wrap-mob">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#222",
                    paddingRight: 12,
                    borderRight: "1.5px solid #E5E5E5",
                    marginRight: 14,
                    height: 28,
                  }}
                >
                  +91 <ChevronDown size={14} color="#666" />
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="00000 00000"
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: 15,
                    color: "#222",
                    background: "transparent",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: "0.04em",
                  }}
                />
              </div>

              {/* ── Desktop separate inputs ── */}
              <div className="phone-wrap-dsk">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "0 12px",
                    border: "1.5px solid #E5E5E5",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#333",
                    background: "#fafafa",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    height: 46,
                  }}
                >
                  +1 <ChevronDown size={13} color="#666" />
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="000 000 0000"
                  style={{
                    flex: 1,
                    border: "1.5px solid #E5E5E5",
                    borderRadius: 12,
                    padding: "12px 16px",
                    fontSize: 14,
                    color: "#222",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    background: "#fafafa",
                    outline: "none",
                    height: 46,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#7C3AED";
                    e.target.style.background = "#fff";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#E5E5E5";
                    e.target.style.background = "#fafafa";
                  }}
                />
              </div>

              {/* OTP / Continue button */}
              <button
                className="otp-btn"
                onClick={handleSend}
                disabled={!phone || loading}
              >
                {loading ? (
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      border: "2px solid rgba(255,255,255,0.4)",
                      borderTopColor: "white",
                      borderRadius: "50%",
                      animation: "spin 0.7s linear infinite",
                    }}
                  />
                ) : (
                  <>
                    <span className="btn-label-mob">Continue</span>
                    <span className="btn-label-dsk" style={{ display: "none" }}>
                      Send OTP
                    </span>
                    <ChevronRight size={17} />
                  </>
                )}
              </button>

              {/* Mobile — Secure OTP */}
              <div className="mob-secure">
                <Lock size={14} color="#999" />
                <span style={{ fontSize: 13, color: "#999", fontWeight: 500 }}>
                  Secure OTP Login
                </span>
              </div>

              {/* Desktop — Trouble + Biometrics */}
              <div className="dsk-below">
                <div
                  style={{ height: 1, background: "#F0F0F0", margin: "24px 0" }}
                />
                <div style={{ textAlign: "center", marginBottom: 16 }}>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: "#5B21B6",
                      fontSize: 14,
                      fontWeight: 600,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    Trouble logging in?
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "1.5px solid #E5E5E5",
                      background: "#fafafa",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Fingerprint size={18} color="#7C3AED" />
                  </div>
                  <span
                    style={{ fontSize: 14, color: "#444", fontWeight: 500 }}
                  >
                    Or use Biometrics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile Footer ── */}
        <div className="mob-footer">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 48,
              marginBottom: 10,
            }}
          >
            {["ADMIN", "PARTNER", "OPERATIONS"].map((tab) => (
              <button
                key={tab}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#aaa",
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#bbb" }}>
            © 2024 Hittofit Admin • All rights reserved
          </p>
        </div>

        {/* ── Desktop Footer ── */}
        <footer className="dsk-footer">
          <div style={{ display: "flex", gap: 28 }}>
            {["Privacy Policy", "Security Standards", "Support"].map((link) => (
              <button
                key={link}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: 12.5,
                  color: "#888",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  cursor: "pointer",
                }}
              >
                {link}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#bbb" }}>
            © 2024 Hittofit Wellness Ecosystem. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Title swap via CSS */}
      <style>{`
        @media (min-width: 768px) {
          .dsk-title       { display: inline !important; }
          .mob-title       { display: none; }
          .btn-label-mob   { display: none; }
          .btn-label-dsk   { display: inline !important; }
        }
      `}</style>
    </>
  );
}
