import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";

// Routes that should NOT show the bottom nav
const AUTH_ROUTES = ["/login", "/otp-verification"];

export default function Layout() {
  const { pathname } = useLocation();
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  if (isAuthRoute) {
    return <Outlet />;
  }

  // Map pathname → active tab id
  const tabMap = {
    "/": "home",
    "/approvals": "approvals",
    "/insights": "insights",
    "/moderation": "moderation",
    "/profile": "profile",
  };
  const activeTab = tabMap[pathname] ?? "home";

  return (
    <div className="flex justify-center bg-gray-200 min-h-screen">
      <div className="relative w-full max-w-sm bg-white min-h-screen shadow-xl">
        <Outlet />
        <BottomNav active={activeTab} />
      </div>
    </div>
  );
}
