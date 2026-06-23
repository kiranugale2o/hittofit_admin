import { Home, CheckSquare, BarChart2, Shield, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tabs = [
  { id: "home", icon: Home, label: "Home", path: "/" },
  {
    id: "approvals",
    icon: CheckSquare,
    label: "Approvals",
    path: "/approvals",
  },
  { id: "insights", icon: BarChart2, label: "Insights", path: "/insights" },
  { id: "moderation", icon: Shield, label: "Moderation", path: "/moderation" },
  { id: "profile", icon: User, label: "Profile", path: "/profile" },
];

export default function BottomNav({ active }) {
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 flex z-50">
      {tabs.map(({ id, icon: Icon, label, path }) => (
        <button
          key={id}
          onClick={() => navigate(path)}
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
            className={`text-[10px] font-medium ${active === id ? "text-[#6C2BD9]" : "text-gray-400"}`}
          >
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}
