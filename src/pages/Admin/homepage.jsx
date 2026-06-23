import {
  Bell,
  Home,
  ShieldCheck,
  BarChart3,
  ShieldAlert,
  User,
  ArrowRight,
  UserPlus,
  Send,
  PlusCircle,
  FileBarChart2,
  CheckCircle,
  Building2,
  Megaphone,
  BadgeCheck,
  AlertCircle,
} from "lucide-react";

function Badge({ count, color = "#DC2626" }) {
  if (!count) return null;

  return (
    <span
      className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] font-bold"
      style={{ backgroundColor: color }}
    >
      {count}
    </span>
  );
}

export default function HomeScreen() {
  const activities = [
    {
      icon: CheckCircle,
      bg: "#DCFCE7",
      color: "#16A34A",
      title: "Gym approved",
      subtitle: "Iron Paradise HQ verified by Admin",
    },
    {
      icon: BadgeCheck,
      bg: "#DBEAFE",
      color: "#2563EB",
      title: "Trainer verified",
      subtitle: "Sarah Jenkins profile completed",
    },
    {
      icon: Building2,
      bg: "#FEF3C7",
      color: "#EA580C",
      title: "Store onboarded",
      subtitle: "FitSupplements Hub integrated",
    },
    {
      icon: Megaphone,
      bg: "#F3E8FF",
      color: "#7C3AED",
      title: "Campaign published",
      subtitle: "Summer Shred Blast is live",
    },
  ];

  return (
    <div
      className="min-h-screen flex justify-center bg-[#F5F4F8]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="w-full max-w-sm bg-[#F5F4F8] min-h-screen relative">
        <div className="pb-28">
          {/* HEADER */}
          <div className="px-6 pt-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/100?img=12"
                alt=""
                className="w-9 h-9 rounded-full object-cover"
              />

              <h2 className="text-[18px] font-semibold text-[#5B21D0]">
                Fitness Admin
              </h2>
            </div>

            <Bell size={22} strokeWidth={2} className="text-[#5B21D0]" />
          </div>

          {/* GREETING */}
          <div className="px-6 mt-8">
            <h1 className="text-2xl font-bold text-[#1F1F1F] leading-tight">
              Good Morning👋
            </h1>

            <p className="mt-3 text-sm">
              <span className="text-[#5B21D0] font-bold">15 approvals</span>
              <span className="text-[#4B4B63] font-semibold">
                {" "}
                are waiting today.
              </span>
            </p>

            <p className="text-sm">
              <span className="text-[#DC2626] font-bold">3 reports</span>
              <span className="text-[#4B4B63] font-semibold">
                {" "}
                need attention.
              </span>
            </p>
          </div>

          {/* HERO CARD */}
          <div className="px-6 mt-8">
            <div
              className="rounded-[32px] p-6"
              style={{
                background:
                  "linear-gradient(135deg,#6D28D9 0%,#5B21D0 40%,#6D28D9 100%)",
              }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20">
                <AlertCircle size={14} color="white" />
                <span className="text-white text-[10px] font-bold">
                  HIGH PRIORITY
                </span>
              </div>

              <h2 className="mt-6 text-white text-xl font-semibold leading-[32px]">
                15 Partner Approvals
                <br />
                Waiting for Review
              </h2>

              <button className="mt-4 bg-white text-[#6C2BD9] font-semibold text-sm px-5 py-2.5 rounded-full flex items-center gap-2">
                {" "}
                Review Now <ArrowRight size={15} />{" "}
              </button>
            </div>
          </div>

          {/* ACTION QUEUE */}
          <div className="px-6 mt-10">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-[18px] font-bold text-[#4B4B63]">
                Action Queue
              </h3>

              <button className="text-[#5B21D0] font-bold text-sm">
                View All
              </button>
            </div>

            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {[
                {
                  label: "Approvals",
                  icon: ShieldCheck,
                  badge: 15,
                },
                {
                  label: "Moderation",
                  icon: ShieldAlert,
                  badge: 3,
                },
                {
                  label: "Campaigns",
                  icon: Megaphone,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="relative min-w-[145px] h-[130px] bg-white border border-[#ECEAF2] rounded-[24px] flex flex-col items-center justify-center shadow-sm"
                  >
                    <div className="relative">
                      <Icon size={34} className="text-[#5B21D0]" />

                      {item.badge && <Badge count={item.badge} />}
                    </div>

                    <p className="mt-4 text-[15px] font-semibold text-[#2D2D2D]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="px-6 mt-10">
            <h3 className="text-[18px] font-bold text-[#4B4B63] mb-5">
              Quick Actions
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Approve Partners",
                  icon: UserPlus,
                },
                {
                  title: "Send Notification",
                  icon: Send,
                },
                {
                  title: "Create Campaign",
                  icon: PlusCircle,
                },
                {
                  title: "Review Reports",
                  icon: FileBarChart2,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white border border-[#ECEAF2] rounded-[24px] h-[140px] flex flex-col items-center justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#F3EEFF] flex items-center justify-center">
                      <Icon size={28} className="text-[#5B21D0]" />
                    </div>

                    <p className="mt-5 text-[15px] font-semibold text-center text-[#2D2D2D]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RECENT ACTIVITY */}
          <div className="px-6 mt-10">
            <h3 className="text-[18px] font-bold text-[#4B4B63] mb-5">
              Recent Activity
            </h3>

            <div className="bg-white border border-[#ECEAF2] rounded-[30px] p-6 relative">
              <div className="absolute left-[42px] top-[70px] bottom-[70px] w-[2px] bg-[#ECEAF2]" />

              <div className="space-y-8">
                {activities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-5 relative"
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center z-10"
                        style={{ backgroundColor: item.bg }}
                      >
                        <Icon size={22} style={{ color: item.color }} />
                      </div>

                      <div>
                        <h4 className="text-[15px] font-bold text-[#1F1F1F]">
                          {item.title}
                        </h4>

                        <p className="text-[14px] text-[#707070]">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SNAPSHOT */}
          <div className="px-6 mt-10">
            <div className="bg-[#EFEDF2] rounded-[30px] p-6">
              <h4 className="text-[12px] tracking-[2px] font-extrabold text-[#4B4B63] mb-8">
                PLATFORM SNAPSHOT
              </h4>

              <div className="flex">
                {[
                  ["12.4k", "Members"],
                  ["342", "Gyms"],
                  ["892", "Bookings"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={`flex-1 text-center ${
                      index !== 2 ? "border-r border-[#D8D4DF]" : ""
                    }`}
                  >
                    <h3 className="text-[22px] font-bold text-[#1F1F1F]">
                      {value}
                    </h3>

                    <p className="text-[14px] font-semibold text-[#4B4B63]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
