import {
  ArrowLeft,
  MoreVertical,
  Gift,
  Trophy,
  Smartphone,
  Sparkles,
  Eye,
  Check,
  Paperclip,
  ImageIcon,
} from "lucide-react";
import { useState } from "react";

const messageTypes = [
  { id: "welcome", label: "Welcome", icon: Sparkles },
  { id: "offer", label: "Offer", icon: Gift },
  { id: "challenge", label: "Challenge", icon: Trophy },
  { id: "platform", label: "Platform", icon: Smartphone },
];

const templates = [
  {
    id: "t1",
    text: "Welcome to Hittofit! We're excited to help you achieve your fitness...",
  },
  {
    id: "t2",
    text: "Your fitness journey starts now. Explore gyms, traine...",
  },
];

const defaultMessage =
  "Welcome to Hittofit! We're excited to help you achieve your fitness goals. If you need any help getting started, feel free to reply!";

export default function SendWelcomeMessage() {
  const [selectedType, setSelectedType] = useState("welcome");
  const [activeTemplate, setActiveTemplate] = useState("t1");
  const [message, setMessage] = useState(defaultMessage);
  const [deliveryMethod, setDeliveryMethod] = useState("both");

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-32">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3 bg-white border-b border-gray-100">
            <div className="flex items-center gap-3">
              <button className="w-7 h-7 flex items-center justify-center">
                <ArrowLeft size={18} color="#374151" />
              </button>
              <span className="text-sm font-bold text-gray-900">
                Send Welcome Message
              </span>
            </div>
            <img
              src="https://i.pravatar.cc/72?img=12"
              alt="Rahul"
              className="w-7 h-7 rounded-full object-cover"
            />
          </div>

          <div className="px-4 pt-4">
            {/* Recipient mini card */}
            <div className="bg-white rounded-2xl p-3 shadow-sm mb-4 flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/72?img=12"
                alt="Rahul"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-gray-900">
                    Rahul Sharma
                  </p>
                  <span className="text-[8px] font-bold bg-violet-50 text-[#6C2BD9] px-1.5 py-0.5 rounded-full">
                    NEW MEMBER
                  </span>
                </div>
                <p className="text-[11px] text-gray-400">Premium Plus · Pune</p>
              </div>
            </div>

            {/* Message Type */}
            <p className="text-[11px] font-bold text-gray-500 mb-2 tracking-wide">
              Message Type
            </p>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {messageTypes.map(({ id, label, icon: Icon }) => {
                const active = selectedType === id;
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedType(id)}
                    className={`flex flex-col items-center justify-center gap-1.5 rounded-xl py-3 border-2 transition-all ${
                      active
                        ? "border-[#6C2BD9] bg-violet-50"
                        : "border-transparent bg-white"
                    }`}
                  >
                    <Icon size={16} color={active ? "#6C2BD9" : "#9CA3AF"} />
                    <span
                      className={`text-[9px] font-bold ${
                        active ? "text-[#6C2BD9]" : "text-gray-400"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Smart Templates */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[11px] font-bold text-gray-500 tracking-wide">
                  ✦ Smart Templates
                </p>
                <button className="text-[10px] font-bold text-[#6C2BD9]">
                  View All
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {templates.map((t) => {
                  const active = activeTemplate === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        setActiveTemplate(t.id);
                        setMessage(
                          t.id === "t1"
                            ? defaultMessage
                            : "Your fitness journey starts now. Explore gyms, trainers, and classes tailored just for you!",
                        );
                      }}
                      className={`relative text-left rounded-xl p-3 border-2 transition-all ${
                        active
                          ? "border-[#6C2BD9] bg-violet-50"
                          : "border-transparent bg-gray-50"
                      }`}
                    >
                      <p className="text-[10px] text-gray-600 leading-snug pr-5">
                        {t.text}
                      </p>
                      {active && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#6C2BD9] flex items-center justify-center">
                          <Check size={9} color="white" strokeWidth={3} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              {activeTemplate && (
                <p className="text-[9px] font-bold text-gray-400 mt-2">
                  ACTIVE CHOICE
                </p>
              )}
            </div>

            {/* Compose Message */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-[11px] font-bold text-gray-500 mb-3 tracking-wide">
                ✦ Compose Message
              </p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                maxLength={550}
                className="w-full text-xs text-gray-700 bg-gray-50 rounded-xl px-3 py-2.5 outline-none border border-gray-100 focus:border-[#6C2BD9] resize-none"
              />
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-3">
                  <button>
                    <ImageIcon size={15} color="#9CA3AF" />
                  </button>
                  <button>
                    <Paperclip size={15} color="#9CA3AF" />
                  </button>
                </div>
                <span className="text-[10px] text-gray-400">
                  {message.length} / 550
                </span>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <p className="text-[11px] font-bold text-gray-500 mb-3 tracking-wide">
                ✦ Delivery Method
              </p>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { id: "in-app", label: "In-App" },
                  { id: "push", label: "Push" },
                  { id: "both", label: "Both" },
                ].map(({ id, label }) => {
                  const active = deliveryMethod === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setDeliveryMethod(id)}
                      className={`rounded-xl py-2.5 text-xs font-bold transition-all ${
                        active ? "text-white" : "bg-gray-50 text-gray-500"
                      }`}
                      style={
                        active
                          ? {
                              background:
                                "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
                            }
                          : {}
                      }
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              <div className="bg-violet-50 rounded-xl p-3 flex items-start gap-2">
                <Sparkles
                  size={13}
                  color="#6C2BD9"
                  className="mt-0.5 flex-shrink-0"
                />
                <p className="text-[10px] text-violet-700 leading-snug">
                  Members receiving a welcome message are 28% more likely to
                  stay active during their first month.
                </p>
              </div>
            </div>

            {/* Message Preview */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex items-center gap-1.5 mb-3">
                <Eye size={13} color="#6B7280" />
                <p className="text-[11px] font-bold text-gray-500 tracking-wide">
                  Message Preview
                </p>
              </div>
              <div className="bg-gray-900 rounded-2xl p-4 flex flex-col items-center">
                <div className="w-40 h-72 bg-white rounded-[1.5rem] border-[5px] border-gray-800 relative overflow-hidden flex flex-col">
                  <div className="w-10 h-1 bg-gray-800 rounded-full mx-auto mt-1.5" />
                  <div className="flex-1 flex flex-col justify-end p-2">
                    <div className="bg-violet-50 rounded-xl rounded-bl-sm p-2 max-w-[85%]">
                      <p className="text-[7px] text-violet-700 leading-snug">
                        {message.slice(0, 90)}
                        {message.length > 90 ? "..." : ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 p-1.5 border-t border-gray-100">
                    <div className="flex-1 h-4 bg-gray-50 rounded-full" />
                    <div className="w-4 h-4 rounded-full bg-[#6C2BD9]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-4 border-t border-gray-100 shadow-lg">
          <button
            className="w-full py-3.5 rounded-2xl text-sm font-bold text-white mb-2 flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(135deg, #6C2BD9 0%, #4F1FA8 100%)",
            }}
          >
            Send Welcome Message ✨
          </button>
          <button className="w-full text-xs font-semibold text-gray-400 py-1">
            Save as Template
          </button>
        </div>
      </div>
    </div>
  );
}
