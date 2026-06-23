import { useState } from "react";
import { X, PenLine, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function CreateCampaignScreen() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const [audience, setAudience] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const campaignTypes = [
    { id: "fitness", emoji: "🏆", label: "Fitness Challenge" },
    { id: "referral", emoji: "🎁", label: "Referral Program" },
    { id: "membership", emoji: "💰", label: "Membership Offer" },
    { id: "trainer", emoji: "⭐", label: "Trainer Spotlight" },
    { id: "gym", emoji: "🏋️", label: "Gym Promotion" },
    { id: "store", emoji: "🛒", label: "Store Promotion" },
  ];

  const audienceOptions = [
    "Members",
    "Gym Owners",
    "Trainers",
    "Store Partners",
    "Everyone",
  ];

  const toggleAudience = (a) =>
    setAudience((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a],
    );

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <div className="relative w-full max-w-sm bg-gray-50 min-h-screen shadow-xl">
        <div className="overflow-y-auto h-screen pb-8">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-2 pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <button>
                <X size={18} color="#6C2BD9" strokeWidth={2.5} />
              </button>
              <span className="text-base font-bold text-gray-900">
                Partner Setup
              </span>
            </div>
            <button className="text-[#6C2BD9] text-sm font-semibold">
              Help
            </button>
          </div>

          <div className="px-4 mt-4">
            <h2 className="text-2xl font-extrabold text-gray-900">
              Create Campaign
            </h2>
            <p className="text-xs text-gray-500 mt-1 mb-5">
              Launch engagement across the ecosystem.
            </p>

            {/* Campaign Name */}
            <div className="bg-white rounded-2xl px-3.5 py-2.5 mb-2.5 flex items-center gap-2.5 shadow-sm">
              <PenLine size={16} color="#9CA3AF" />
              <input
                className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                placeholder="Campaign Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl px-3.5 py-2.5 mb-5 shadow-sm">
              <textarea
                className="w-full text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent resize-none"
                placeholder="Campaign Description"
                rows={2}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            {/* Campaign Type */}
            <p className="text-xs font-bold text-gray-500 mb-2.5 tracking-wide">
              CAMPAIGN TYPE
            </p>
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              {campaignTypes.map(({ id, emoji, label }) => (
                <button
                  key={id}
                  onClick={() => setSelectedType(id)}
                  className={`flex flex-col items-start gap-2 rounded-2xl px-3.5 py-3.5 transition shadow-sm ${
                    selectedType === id
                      ? "bg-violet-50 ring-2 ring-[#6C2BD9]"
                      : "bg-white"
                  }`}
                >
                  <span className="text-xl">{emoji}</span>
                  <span
                    className={`text-xs font-semibold text-left leading-tight ${
                      selectedType === id ? "text-[#6C2BD9]" : "text-gray-900"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              ))}
            </div>

            {/* Target Audience */}
            <p className="text-xs font-bold text-gray-500 mb-2.5 tracking-wide">
              TARGET AUDIENCE
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {audienceOptions.map((a) => (
                <button
                  key={a}
                  onClick={() => toggleAudience(a)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition shadow-sm ${
                    audience.includes(a)
                      ? "bg-[#6C2BD9] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <div>
                <p className="text-[10px] font-bold text-gray-500 tracking-wide mb-1.5">
                  START DATE
                </p>
                <input
                  type="date"
                  className="w-full bg-white rounded-xl px-3 py-2 text-xs text-gray-700 outline-none shadow-sm"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 tracking-wide mb-1.5">
                  END DATE
                </p>
                <input
                  type="date"
                  className="w-full bg-white rounded-xl px-3 py-2 text-xs text-gray-700 outline-none shadow-sm"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            {/* Campaign Preview */}
            <div className="bg-gray-100 rounded-2xl p-3.5 mb-5 flex items-start gap-3">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <Eye size={18} color="#6C2BD9" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-0.5">
                  Campaign Preview
                </p>
                <p className="text-xs text-gray-500">
                  {name || "Fitness Challenge"} • Starts{" "}
                  {startDate || "Tomorrow"}
                </p>
                <p className="text-xs text-[#6C2BD9] font-semibold mt-0.5">
                  Visible to{" "}
                  {audience.length > 0 ? audience.join(", ") : "12,000"} members
                </p>
              </div>
            </div>

            {/* Launch */}
            <Link to={"/campaigns/success"}>
              <button className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#5B21B6] text-white font-bold text-sm py-3 rounded-full flex items-center justify-center gap-2 mb-3 shadow-lg shadow-violet-300">
                Launch Campaign 🚀
              </button>
            </Link>
            <button className="w-full text-gray-500 text-xs font-medium py-2 text-center">
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
