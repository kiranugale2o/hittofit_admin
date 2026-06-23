import {
  Home,
  CheckSquare,
  BarChart2,
  Shield,
  User,
  ChevronLeft,
  MoreVertical,
  Clock,
  MessageSquare,
  Phone,
  Share2,
  MapPin,
  Star,
  TrendingUp,
  FileText,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  XCircle,
  Sparkles,
} from "lucide-react";

export default function ReviewScreen() {
  const insights = [
    "Mobile number (+91 98765 43210) verified via OTP 2 hours ago.",
    "Business license and GST documents match applicant data with 98% confidence.",
    "3 similar gym registrations in Pune were approved this month.",
  ];

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div
        className="relative w-full max-w-sm min-h-screen"
        style={{ background: "#FFFFFF" }}
      >
        <div className="overflow-y-auto h-screen pb-28">
          {/* ── Top Nav Bar ── */}
          <div
            className="flex items-center justify-between px-4 pt-2 pb-3"
            style={{ background: "#fff" }}
          >
            <button className="flex items-center gap-1 text-gray-700">
              <ChevronLeft size={22} strokeWidth={2.5} />
              <span className="text-base font-semibold text-gray-900">
                Review Request
              </span>
            </button>
            <MoreVertical size={20} color="#374151" />
          </div>

          <div className="px-4">
            {/* ── Request Card ── */}
            <div
              className="rounded-2xl p-4 mb-4"
              style={{
                background: "#fff",
                border: "1px solid #E5E7EB",
              }}
            >
              {/* Top: icon + name + badge */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-start gap-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#EDE9FA" }}
                  >
                    {/* Gym/dumbbell icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6.5 6.5H17.5M6.5 6.5V17.5M6.5 6.5L3 3M17.5 6.5V17.5M17.5 6.5L21 3M6.5 17.5H17.5M6.5 17.5L3 21M17.5 17.5L21 21"
                        stroke="#7C3AED"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900 leading-tight">
                      Gym Registration
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      FitZone Elite • Submitted 2 Hours Ago
                    </p>
                  </div>
                </div>
                <span
                  className="text-[10px] font-bold text-white px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{ background: "#7C3AED" }}
                >
                  HIGH PRIORITY
                </span>
              </div>

              {/* Status row */}
              <div className="flex items-center gap-1.5 mb-4">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="6"
                    width="18"
                    height="15"
                    rx="2"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                  />
                  <path d="M3 10H21" stroke="#9CA3AF" strokeWidth="2" />
                  <path
                    d="M8 3V7M16 3V7"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xs text-gray-500 font-medium">
                  Status:{" "}
                  <span className="text-gray-700 font-semibold">
                    Pending Review
                  </span>
                </span>
              </div>

              {/* Divider + action icons */}
              <div
                className="pt-3 flex gap-0"
                style={{ borderTop: "1px solid #F3F4F6" }}
              >
                {[
                  { icon: MessageSquare, label: "Chat" },
                  { icon: Phone, label: "Call" },
                  { icon: Share2, label: "Similar" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex-1 flex flex-col items-center gap-1.5"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "#F3F4F6" }}
                    >
                      <Icon size={18} color="#7C3AED" />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Partner Identity ── */}
            <div
              className="flex items-center justify-between mb-4 px-4 py-3 rounded-2xl"
              style={{ background: "#F9F8FC", border: "1px solid #EDE9FA" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ background: "#1a1a2e" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100&h=100&fit=crop"
                    alt="FitZone Elite"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">
                    FitZone Elite
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Gym Partner • Pune, India
                  </p>
                </div>
              </div>
              <span
                className="text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1"
                style={{
                  background: "#ECFDF5",
                  color: "#059669",
                  border: "1px solid #A7F3D0",
                }}
              >
                <CheckCircle size={12} color="#059669" />
                Verified
              </span>
            </div>

            {/* ── AI Review Insights ── */}
            <div className="mb-5">
              <div className="flex items-center gap-1.5 mb-3">
                <Sparkles size={16} color="#7C3AED" />
                <span
                  className="text-sm font-bold tracking-wide"
                  style={{ color: "#7C3AED" }}
                >
                  AI REVIEW INSIGHTS
                </span>
              </div>
              <div
                className="rounded-2xl p-4 space-y-3"
                style={{
                  background: "#FAFAFA",
                  border: "1px solid #E5E7EB",
                }}
              >
                {insights.map((ins, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "#ECFDF5",
                        border: "1.5px solid #6EE7B7",
                      }}
                    >
                      <CheckCircle size={11} color="#10B981" />
                    </div>
                    <p className="text-sm text-gray-600 leading-snug">{ins}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Submitted Details ── */}
            <p className="text-lg font-bold text-gray-900 mb-4">
              Submitted Details
            </p>

            {/* Physical Address */}
            <div
              className="mb-5 pb-5"
              style={{ borderBottom: "1px solid #F3F4F6" }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <MapPin size={14} color="#9CA3AF" />
                <span className="text-xs font-bold tracking-widest text-gray-400">
                  PHYSICAL ADDRESS
                </span>
              </div>
              <p className="text-sm text-gray-800 leading-relaxed">
                123 Elite Way, North Pune, Maharashtra 411001
              </p>
            </div>

            {/* Available Facilities */}
            <div
              className="mb-5 pb-5"
              style={{ borderBottom: "1px solid #F3F4F6" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Star size={14} color="#9CA3AF" />
                <span className="text-xs font-bold tracking-widest text-gray-400">
                  AVAILABLE FACILITIES
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["HIIT Training", "Yoga Studio", "Luxury Sauna"].map((f) => (
                  <span
                    key={f}
                    className="text-sm px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: "#F3F4F6",
                      color: "#374151",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Plan Structures */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 9H15M9 12H15M9 15H12"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xs font-bold tracking-widest text-gray-400">
                  PLAN STRUCTURES
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pro Monthly</span>
                  <span
                    className="text-base font-bold"
                    style={{ color: "#7C3AED" }}
                  >
                    ₹2,999
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Student Annual</span>
                  <span
                    className="text-base font-bold"
                    style={{ color: "#7C3AED" }}
                  >
                    ₹18,000
                  </span>
                </div>
              </div>
            </div>

            {/* ── Documents & Proof ── */}
            <p className="text-lg font-bold text-gray-900 mb-4">
              Documents & Proof
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                {
                  label: "Business License",
                  img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=120&fit=crop",
                },
                {
                  label: "GST Certificate",
                  img: "https://images.unsplash.com/photo-1568585105565-e372a7d62f85?w=200&h=120&fit=crop",
                },
              ].map(({ label, img }) => (
                <div key={label}>
                  <div
                    className="w-full h-28 rounded-2xl overflow-hidden mb-2"
                    style={{ background: "#F3F4F6" }}
                  >
                    <img
                      src={img}
                      alt={label}
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">{label}</p>
                  <button
                    className="flex items-center gap-1 mt-0.5"
                    style={{ color: "#7C3AED" }}
                  >
                    <span className="text-xs font-semibold">View Full</span>
                    <ExternalLink size={11} color="#7C3AED" />
                  </button>
                </div>
              ))}
            </div>

            {/* ── Review Checklist ── */}
            <div className="mb-6">
              <p
                className="text-xs font-bold tracking-widest mb-3"
                style={{ color: "#9CA3AF" }}
              >
                REVIEW CHECKLIST
              </p>
              <div className="space-y-3">
                {[
                  "Identity Verified",
                  "Contact Verified",
                  "Required Documents Uploaded",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ background: "#7C3AED" }}
                    >
                      <CheckCircle size={12} color="white" />
                    </div>
                    <span className="text-sm text-gray-800 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Internal Admin Notes ── */}
            <div className="mb-6">
              <p
                className="text-xs font-bold tracking-widest mb-3"
                style={{ color: "#9CA3AF" }}
              >
                INTERNAL ADMIN NOTES
              </p>
              <textarea
                className="w-full text-sm text-gray-400 bg-transparent resize-none outline-none leading-relaxed"
                rows={2}
                placeholder="Type any observations or required changes here..."
                style={{ color: "#9CA3AF" }}
              />
            </div>
          </div>

          {/* ── Bottom Action Buttons ── */}
          <div
            className="px-4 pb-4 pt-3"
            style={{ borderTop: "1px solid #F3F4F6", background: "#fff" }}
          >
            <button
              className="w-full text-white font-bold text-base py-4 rounded-2xl flex items-center justify-center gap-2 mb-3"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
              }}
            >
              <CheckCircle size={18} />
              Approve Request
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button
                className="font-semibold text-sm py-3.5 rounded-2xl flex items-center justify-center gap-1.5"
                style={{
                  background: "#F3F4F6",
                  color: "#374151",
                  border: "none",
                }}
              >
                <AlertCircle size={15} color="#6B7280" />
                Info Needed
              </button>
              <button
                className="font-semibold text-sm py-3.5 rounded-2xl flex items-center justify-center gap-1.5"
                style={{
                  background: "#F3F4F6",
                  color: "#374151",
                  border: "none",
                }}
              >
                <XCircle size={15} color="#6B7280" />
                Reject Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
