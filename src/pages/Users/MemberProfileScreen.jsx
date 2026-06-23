import {
  ArrowLeft,
  MoreHorizontal,
  MessageSquare,
  Pencil,
  MapPin,
  TrendingUp,
  CalendarCheck,
  CheckCircle2,
  ShieldCheck as ShieldOk,
  MessageCircle,
  Tag,
  Bell,
  Eye,
  StickyNote,
  Ban,
  Home,
  TrendingUp as Insights,
  Gavel,
  User,
} from "lucide-react";

const snapshot = [
  {
    val: "82",
    label: "Workouts",
    bg: "bg-orange-100",
    color: "#EA580C",
    icon: "🔥",
  },
  {
    val: "28",
    label: "Gym Visits",
    bg: "bg-blue-100",
    color: "#2563EB",
    icon: "🏋️",
  },
  {
    val: "6",
    label: "Challenges",
    bg: "bg-violet-100",
    color: "#6C2BD9",
    icon: "🏆",
  },
  {
    val: "14",
    label: "Trainer Sessions",
    bg: "bg-teal-100",
    color: "#0D9488",
    icon: "📈",
  },
];

const insights = [
  { icon: TrendingUp, text: "Engagement +32% this month" },
  { icon: CalendarCheck, text: "Highly active on weekends" },
  { icon: CheckCircle2, text: "92% probability: Likely to renew" },
];

const commerce = [
  {
    name: "Whey Protein",
    price: "₹2,499",
    img: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=80&h=80&fit=crop",
  },
  {
    name: "Yoga Mat",
    price: "₹1,850",
    img: "https://images.unsplash.com/photo-1592432678016-e16a256a82e8?w=80&h=80&fit=crop",
  },
];

const journey = [
  {
    title: "Booked Session",
    sub: "Personal Training with Mike • Today, 10:30 AM",
    active: true,
  },
  {
    title: "Completed Challenge",
    sub: "Summer Shred 30 • 2 days ago",
    active: false,
  },
  {
    title: "Purchased Plan",
    sub: "Premium Plus (Annual) • Jan 12, 2026",
    active: false,
  },
];

const commandActions = [
  { icon: MessageCircle, label: "Send Message" },
  { icon: Tag, label: "Send Offer" },
  { icon: Bell, label: "Notify" },
  { icon: Eye, label: "View Activity" },
  { icon: StickyNote, label: "Add Note" },
  { icon: Ban, label: "Suspend", danger: true },
];

export default function MemberProfileScreen() {
  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-24">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3">
            <div className="flex items-center gap-3">
              <ArrowLeft size={18} color="#374151" />
              <span className="text-base font-bold text-gray-900">
                Member Profile
              </span>
            </div>
            <MoreHorizontal size={18} color="#374151" />
          </div>

          <div className="px-4 mt-1">
            {/* Action row */}
            <div className="flex items-center gap-2.5 mb-4">
              <button className="flex-1 bg-[#6C2BD9] text-white text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-1.5">
                <MessageSquare size={13} /> Message
              </button>
              <button className="flex-1 bg-white border border-gray-200 text-gray-700 text-xs font-bold py-2.5 rounded-full flex items-center justify-center gap-1.5">
                <Pencil size={13} /> Edit
              </button>
            </div>

            {/* Profile card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-start gap-3 mb-3">
                <div className="relative flex-shrink-0">
                  <img
                    src="https://i.pravatar.cc/96?img=12"
                    alt="Rahul Sharma"
                    className="w-14 h-14 rounded-2xl object-cover"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <p className="text-base font-bold text-gray-900 leading-tight">
                      Rahul Sharma
                    </p>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                      ACTIVE NOW
                    </span>
                  </div>
                  <span className="inline-block text-[11px] font-semibold text-[#6C2BD9] bg-violet-100 px-2 py-0.5 rounded-full mt-1">
                    Premium Plus Member
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-1.5">
                    <MapPin size={11} /> Pune
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-[10px] text-gray-400">JOINED</p>
                  <p className="text-xs font-semibold text-gray-800">
                    Jan 2026
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400">VALID UNTIL</p>
                  <p className="text-xs font-semibold text-gray-800">
                    Aug 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Current Plan */}
            <div
              className="rounded-2xl p-4 mb-4 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-white/60 tracking-widest">
                  CURRENT PLAN
                </span>
                <span className="text-[10px] font-bold text-white bg-white/20 px-2.5 py-1 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-lg font-bold text-white mb-3">Premium Plus</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/10 rounded-xl p-2.5">
                  <p className="text-[10px] text-white/60">Renewal In</p>
                  <p className="text-sm font-bold text-white">45 Days</p>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5">
                  <p className="text-[10px] text-white/60">Reward Points</p>
                  <p className="text-sm font-bold text-white">1,250</p>
                </div>
              </div>
            </div>

            {/* Activity Snapshot */}
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-sm font-bold text-gray-900">
                Activity Snapshot
              </p>
              <span className="text-xs font-semibold text-[#6C2BD9]">
                Last 30 Days
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mb-4">
              {snapshot.map(({ val, label, bg, icon }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-3.5 shadow-sm"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center mb-2 ${bg}`}
                  >
                    <span className="text-base">{icon}</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900">{val}</p>
                  <p className="text-[11px] text-gray-500">{label}</p>
                </div>
              ))}
            </div>

            {/* Member Insights */}
            <div className="bg-white rounded-2xl p-3.5 shadow-sm mb-4">
              <div className="flex items-center gap-1.5 mb-2.5">
                <span className="text-[#6C2BD9]">✦</span>
                <p className="text-sm font-bold text-gray-900">
                  Member Insights
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {insights.map(({ icon: Icon, text }, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-xl px-3 py-2.5 flex items-center gap-2"
                  >
                    <Icon size={14} color="#6C2BD9" />
                    <p className="text-xs text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Commerce */}
            <p className="text-sm font-bold text-gray-900 mb-2.5">
              Recent Commerce
            </p>
            <div className="flex gap-2.5 mb-4">
              {commerce.map(({ name, price, img }) => (
                <div
                  key={name}
                  className="flex-1 bg-white rounded-2xl p-2.5 shadow-sm flex items-center gap-2.5"
                >
                  <img
                    src={img}
                    alt={name}
                    className="w-11 h-11 rounded-lg object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-[11px] font-semibold text-gray-800 leading-tight">
                      {name}
                    </p>
                    <p className="text-xs font-bold text-[#6C2BD9]">{price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Member Journey */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-sm font-bold text-gray-900 mb-3">
                Member Journey
              </p>
              <div className="relative pl-4">
                <div className="absolute left-[3px] top-1.5 bottom-6 w-px bg-gray-200" />
                {journey.map(({ title, sub, active }, i) => (
                  <div key={title} className="relative mb-4 last:mb-0">
                    <div
                      className={`absolute -left-4 top-1 w-2 h-2 rounded-full ${
                        active ? "bg-[#6C2BD9]" : "bg-gray-300"
                      }`}
                    />
                    <p
                      className={`text-xs font-bold ${
                        active ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {title}
                    </p>
                    <p className="text-[11px] text-gray-400">{sub}</p>
                  </div>
                ))}
              </div>
              <button className="w-full text-center text-xs font-bold text-[#6C2BD9] pt-2 border-t border-gray-100">
                View Full Timeline →
              </button>
            </div>

            {/* Command Actions */}
            <p className="text-sm font-bold text-gray-900 mb-2.5">
              Command Actions
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {commandActions.map(({ icon: Icon, label, danger }) => (
                <button
                  key={label}
                  className="bg-white border border-gray-200 rounded-2xl py-3.5 flex flex-col items-center gap-2"
                >
                  <Icon size={16} color={danger ? "#DC2626" : "#6C2BD9"} />
                  <span
                    className={`text-xs font-semibold ${
                      danger ? "text-red-600" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
