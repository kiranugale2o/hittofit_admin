import {
  Home,
  CheckSquare,
  BarChart2,
  Shield,
  User,
  Users,
  Building2,
  Activity,
  Zap,
  ArrowUpRight,
  LayoutGrid,
  ChevronRight,
  MapPin,
  RefreshCw,
  Sparkles,
} from "lucide-react";

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

// Circular gauge SVG
function CircleGauge({ score = 82 }) {
  const r = 54;
  const circ = 2 * Math.PI * r;
  const filled = (score / 100) * circ * 0.75; // 270deg arc
  const gap = circ - filled;
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 140, height: 140 }}
    >
      <svg width="140" height="140" viewBox="0 0 140 140">
        {/* track */}
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="10"
          strokeDasharray={`${circ * 0.75} ${circ}`}
          strokeDashoffset={circ * 0.125}
          strokeLinecap="round"
          transform="rotate(135 70 70)"
        />
        {/* fill */}
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="#6C2BD9"
          strokeWidth="10"
          strokeDasharray={`${filled} ${circ}`}
          strokeDashoffset={circ * 0.125}
          strokeLinecap="round"
          transform="rotate(135 70 70)"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-extrabold text-gray-900">{score}%</span>
        <span className="text-xs font-bold tracking-widest text-gray-400 mt-0.5">
          SCORE
        </span>
      </div>
    </div>
  );
}

export default function InsightsScreen() {
  const highlights = [
    {
      badge: "+24%",
      title: "Trainer onboarding",
      sub: "New high in professional registrations.",
    },
    {
      badge: "+18%",
      title: "Membership growth",
      sub: "Organic growth outpaced projections.",
    },
    {
      badge: "Trending",
      title: "Recovery programs",
      sub: "Peak engagement in mobility content.",
    },
  ];

  const trending = [
    {
      label: "HIIT Challenges",
      sub: "Intense metabolic sessions.",
      badge: "+12%",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=160&fit=crop",
    },
    {
      label: "Sleep Wellness",
      sub: "Restorative routines.",
      badge: "+9%",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=160&fit=crop",
    },
    {
      label: "Strength Training",
      sub: "Heavy lifting sessions.",
      badge: "+7%",
      img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200&h=160&fit=crop",
    },
  ];

  const opportunities = [
    {
      icon: MapPin,
      iconBg: "#EDE9FA",
      iconColor: "#7C3AED",
      title: "Trainer demand increasing in Pune",
      body: "Market gap identified. 42% search volume increase for premium trainers in West Pune region.",
    },
    {
      icon: RefreshCw,
      iconBg: "#EDE9FA",
      iconColor: "#7C3AED",
      title: "Subscription churn risk: Annual Renewals",
      body: "Approximately 400 members reaching end of cycle. Proactive loyalty offers recommended.",
    },
  ];

  const healthMetrics = [
    { label: "Community Growth", pct: 80, color: "#6C2BD9" },
    { label: "Partner Activity", pct: 60, color: "#6C2BD9" },
    { label: "Retention Rate", pct: 70, color: "#D1D5DB" },
  ];

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div
        className="relative w-full max-w-sm min-h-screen"
        style={{ background: "#F9F8FC" }}
      >
        <div className="overflow-y-auto h-screen pb-24">
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

          {/* ── Page Title ── */}
          <div className="px-4 pt-4 pb-2 bg-white">
            <h1 className="text-2xl font-extrabold text-gray-900">Insights</h1>
            <p className="text-sm text-gray-400 mt-0.5">
              Understand what's happening across the ecosystem.
            </p>
          </div>

          {/* ── Weekly Highlights Hero Card ── */}
          <div className="px-4 mt-4">
            <div
              className="rounded-3xl p-5 mb-5"
              style={{ background: "#4C1DB7" }}
            >
              {/* Badge */}
              <div className="flex items-center gap-1.5 mb-4">
                <Zap size={13} color="#C4B5FD" fill="#C4B5FD" />
                <span
                  className="text-[10px] font-bold tracking-widest"
                  style={{ color: "#C4B5FD" }}
                >
                  WEEKLY HIGHLIGHTS
                </span>
              </div>

              {/* Hero headline */}
              <h2
                className="text-2xl font-extrabold leading-snug mb-5"
                style={{ color: "#FFFFFF" }}
              >
                The ecosystem reached record activity levels this week.
              </h2>

              {/* Sub-cards */}
              <div className="space-y-2">
                {highlights.map(({ badge, title, sub }) => (
                  <div
                    key={title}
                    className="rounded-2xl p-4"
                    style={{ background: "rgba(255,255,255,0.08)" }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#A78BFA" }}
                    >
                      {badge}
                    </span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#C4B5FD" }}>
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── What's Trending ── */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-bold text-gray-900">
                  What's Trending
                </span>
                <button
                  className="text-sm font-semibold"
                  style={{ color: "#7C3AED" }}
                >
                  View All
                </button>
              </div>
              <div
                className="flex gap-3 overflow-x-auto pb-2"
                style={{ scrollbarWidth: "none" }}
              >
                {trending.map(({ label, sub, badge, img }) => (
                  <div
                    key={label}
                    className="flex-shrink-0 w-36 rounded-2xl overflow-hidden"
                    style={{ background: "#fff", border: "1px solid #F3F4F6" }}
                  >
                    <div className="relative">
                      <img
                        src={img}
                        alt={label}
                        className="w-full h-24 object-cover"
                      />
                      <span
                        className="absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: "#10B981", color: "#fff" }}
                      >
                        {badge}
                      </span>
                    </div>
                    <div className="p-2.5">
                      <p className="text-xs font-bold text-gray-900">{label}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Opportunity Center ── */}
            <div className="mb-5">
              <p className="text-base font-bold text-gray-900 mb-3">
                Opportunity Center
              </p>
              <div className="space-y-3">
                {opportunities.map(
                  ({ icon: Icon, iconBg, iconColor, title, body }) => (
                    <div
                      key={title}
                      className="bg-white rounded-2xl p-4"
                      style={{ border: "1px solid #F3F4F6" }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: iconBg }}
                        >
                          <Icon size={18} color={iconColor} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-900 leading-snug">
                            {title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            {body}
                          </p>
                          <button
                            className="text-xs font-bold mt-2 flex items-center gap-0.5"
                            style={{ color: "#7C3AED" }}
                          >
                            Suggested Action
                            <ChevronRight size={12} color="#7C3AED" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* ── Ecosystem Health ── */}
            <div className="mb-5">
              <p className="text-base font-bold text-gray-900 mb-4">
                Ecosystem Health
              </p>
              <div
                className="bg-white rounded-2xl p-5"
                style={{ border: "1px solid #F3F4F6" }}
              >
                {/* Gauge centered */}
                <div className="flex justify-center mb-5">
                  <CircleGauge score={82} />
                </div>

                {/* Bar metrics */}
                <div className="space-y-4">
                  {healthMetrics.map(({ label, pct, color }) => (
                    <div key={label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ background: color }}
                          />
                          <span className="text-sm text-gray-700">{label}</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">
                          {pct}%
                        </span>
                      </div>
                      <div
                        className="w-full h-1.5 rounded-full"
                        style={{ background: "#F3F4F6" }}
                      >
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: `${pct}%`, background: color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Snapshot Metrics ── */}
            <div className="mb-5">
              <p className="text-base font-bold text-gray-900 mb-4">
                Snapshot Metrics
              </p>
              <div
                className="bg-white rounded-2xl overflow-hidden"
                style={{ border: "1px solid #F3F4F6" }}
              >
                <div className="grid grid-cols-2 divide-x divide-y divide-gray-100">
                  {/* Active Members */}
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">
                      ACTIVE MEMBERS
                    </p>
                    <p className="text-2xl font-extrabold text-gray-900">
                      12,482
                    </p>
                    <p
                      className="text-xs font-bold mt-1"
                      style={{ color: "#10B981" }}
                    >
                      +4.2%
                    </p>
                  </div>
                  {/* Bookings */}
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">
                      BOOKINGS
                    </p>
                    <p className="text-2xl font-extrabold text-gray-900">
                      3,901
                    </p>
                    <p
                      className="text-xs font-bold mt-1"
                      style={{ color: "#10B981" }}
                    >
                      +12.5%
                    </p>
                  </div>
                  {/* Revenue */}
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">
                      REVENUE
                    </p>
                    <p className="text-2xl font-extrabold text-gray-900">
                      $142.5k
                    </p>
                    <p
                      className="text-xs font-bold mt-1"
                      style={{ color: "#10B981" }}
                    >
                      +8.1%
                    </p>
                  </div>
                  {/* New Partners */}
                  <div className="p-4">
                    <p className="text-[10px] font-bold tracking-widest text-gray-400 mb-1">
                      NEW PARTNERS
                    </p>
                    <p className="text-2xl font-extrabold text-gray-900">24</p>
                    <p
                      className="text-xs font-bold mt-1"
                      style={{ color: "#7C3AED" }}
                    >
                      On Target
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── AI Business Smart Insight ── */}
            <div
              className="rounded-2xl p-5 mb-4"
              style={{
                background: "#F3F0FF",
                border: "1px solid #DDD6FE",
              }}
            >
              {/* Icon bubble */}
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#7C3AED" }}
                >
                  <Sparkles size={18} color="white" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-gray-900">
                    AI Business Smart Insight
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                "Trainer-led programs generated{" "}
                <span className="font-bold text-gray-900">2.3×</span> more
                engagement this week compared to autonomous workouts. We
                recommend shifting featured home-screen content to emphasize
                live-streaming sessions for the next cycle."
              </p>

              {/* CTA */}
              <button
                className="w-full py-3.5 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2"
                style={{ background: "#5B21B6" }}
              >
                Optimize Content Flow
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <BottomNav active="insights" />
      </div>
    </div>
  );
}
