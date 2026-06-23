import { useState } from "react";
import {
  X,
  Megaphone,
  Tag,
  Triangle,
  Trophy,
  MessageSquare,
  Smartphone,
  Tablet,
  Send,
  Wifi,
  Signal,
  Battery,
} from "lucide-react";

const notificationTypes = [
  { id: "announcement", icon: Megaphone, label: "Announcement" },
  { id: "promotion", icon: Tag, label: "Promotion" },
  { id: "update", icon: Triangle, label: "Update" },
  { id: "reminder", icon: Trophy, label: "Reminder" },
  { id: "challenge", icon: Trophy, label: "Challenge" },
  { id: "message", icon: MessageSquare, label: "Message" },
];

const audienceOptions = [
  "Members",
  "Gym Owners",
  "Trainers",
  "Store Partners",
  "Everyone",
];

const deliveryMethods = [
  { id: "push", icon: Smartphone, label: "Push Notification" },
  { id: "inapp", icon: Tablet, label: "In-App Only" },
  { id: "both", icon: Send, label: "Send Both" },
];

export default function CreateNotificationScreen() {
  const [selectedType, setSelectedType] = useState("challenge");
  const [audience, setAudience] = useState(["Members"]);
  const [delivery, setDelivery] = useState("push");
  const [title, setTitle] = useState("Challenge starts tomorrow!");
  const [body, setBody] = useState(
    "Your challenge starts tomorrow morning. Join the group now to prepare!",
  );

  const toggleAudience = (a) =>
    setAudience((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a],
    );

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-8">
          {/* Header */}
          <div className="flex items-center gap-2.5 px-4 pt-2 pb-3">
            <button>
              <X size={18} color="#374151" strokeWidth={2.5} />
            </button>
            <div>
              <p className="text-base font-bold text-gray-900 leading-tight">
                Create Notification
              </p>
              <p className="text-xs text-gray-500">
                Reach your audience instantly.
              </p>
            </div>
          </div>

          <div className="px-4 mt-3">
            {/* Notification Type */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-1 h-3.5 bg-[#6C2BD9] rounded-full" />
              <p className="text-xs font-bold text-gray-700">
                Notification Type
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {notificationTypes.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setSelectedType(id)}
                  className={`flex flex-col items-center gap-2 rounded-2xl px-3 py-3.5 shadow-sm ${
                    selectedType === id ? "bg-[#6C2BD9]" : "bg-white"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      selectedType === id ? "bg-white/20" : "bg-violet-100"
                    }`}
                  >
                    <Icon
                      size={16}
                      color={selectedType === id ? "white" : "#6C2BD9"}
                    />
                  </div>
                  <span
                    className={`text-xs font-semibold ${
                      selectedType === id ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Message Details */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-1 h-3.5 bg-[#6C2BD9] rounded-full" />
              <p className="text-xs font-bold text-gray-700">Message Details</p>
            </div>
            <div className="bg-white rounded-2xl p-3.5 mb-3 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-[#6C2BD9] tracking-wide">
                  NOTIFICATION TITLE
                </span>
                <span className="text-[10px] text-gray-400">
                  {title.length}/65
                </span>
              </div>
              <input
                className="w-full text-sm font-semibold text-gray-900 outline-none bg-transparent"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="bg-white rounded-2xl p-3.5 mb-5 shadow-sm">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold text-gray-400 tracking-wide">
                  BODY MESSAGE
                </span>
                <span className="text-[10px] text-gray-400">
                  {body.length}/160
                </span>
              </div>
              <textarea
                className="w-full text-xs text-gray-700 outline-none bg-transparent resize-none"
                rows={3}
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>

            {/* Target Audience */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-1 h-3.5 bg-[#6C2BD9] rounded-full" />
              <p className="text-xs font-bold text-gray-700">Target Audience</p>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {audienceOptions.map((a) => (
                <button
                  key={a}
                  onClick={() => toggleAudience(a)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold ${
                    audience.includes(a)
                      ? "bg-[#6C2BD9] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>

            {/* Delivery Method */}
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-1 h-3.5 bg-[#6C2BD9] rounded-full" />
              <p className="text-xs font-bold text-gray-700">Delivery Method</p>
            </div>
            <div className="flex flex-col gap-2.5 mb-5">
              {deliveryMethods.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setDelivery(id)}
                  className={`w-full rounded-2xl py-4 flex flex-col items-center gap-1.5 ${
                    delivery === id
                      ? "bg-violet-50 border-2 border-[#6C2BD9]"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <Icon
                    size={18}
                    color={delivery === id ? "#6C2BD9" : "#374151"}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      delivery === id ? "text-[#6C2BD9]" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Live Preview */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-1 h-3.5 bg-[#6C2BD9] rounded-full" />
              <p className="text-xs font-bold text-gray-700">Live Preview</p>
            </div>
            <div className="flex justify-center mb-2">
              <div className="w-44 h-80 rounded-[2rem] border-[6px] border-gray-900 overflow-hidden relative bg-gradient-to-br from-orange-300 via-emerald-400 to-orange-300">
                <div className="flex items-center justify-between px-3 pt-2 text-[9px] text-white font-semibold">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal size={10} color="white" />
                    <Wifi size={10} color="white" />
                    <Battery size={10} color="white" />
                  </div>
                </div>
                <div className="absolute top-7 left-2 right-2 bg-white/95 rounded-xl p-2.5 shadow-md">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 bg-[#6C2BD9] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy size={13} color="white" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-[#6C2BD9]">
                        Hittofit
                      </p>
                      <p className="text-[10px] font-bold text-gray-900 leading-tight">
                        {title}
                      </p>
                      <p className="text-[9px] text-gray-500 leading-tight">
                        {body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] text-gray-400 mb-5">
              Visual representation on iOS 17
            </p>

            <button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#5B21B6] text-white font-bold text-sm py-3.5 rounded-full mb-3 shadow-lg shadow-violet-300">
              Send Notification 🚀
            </button>
            <button className="w-full text-[#6C2BD9] text-xs font-semibold py-1 text-center">
              Schedule for Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
