import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import OTPScreensPreview from "./pages/OtpScreen";
import HomeScreen from "./pages/Admin/homepage";
import ApprovalsScreen from "./pages/ApprovalsScreen";
import ReviewScreen from "./pages/ReviewRequestScreen";
import InsightsScreen from "./pages/InsightsScreen";
import ModerationScreen from "./pages/ModerationScreen";
import CampaignsScreen from "./pages/Campaigns/CampaignsScreen";
import CreateCampaignScreen from "./pages/Campaigns/CreateCampaignScreen";
import CampaignSuccessScreen from "./pages/Campaigns/CampaignSuccessScreen";
import ViewCampaignScreen from "./pages/Campaigns/ViewCampaignScreen";
import ViewAnalysisScreen from "./pages/Campaigns/ViewAnalysisScreen";
import NotificationCenterScreen from "./pages/Notification/NotificationCenterScreen";
import CreateNotificationScreen from "./pages/Notification/CreateNotificationScreen";
import NotificationDelivered from "./pages/Notification/NotificationDelivered";
import NotificationAnalyticsScreen from "./pages/Notification/NotificationAnalyticsScreen";

// Users
import AllUsers from "./pages/Users/Allusers";
import ViewUser from "./pages/Users/ViewUser.jsx";
import MemberProfileScreen from "./pages/Users/MemberProfileScreen";
import ActivityTimelineScreen from "./pages/Users/ActivityTimelineScreen";

// Gyms
import GymScreen from "./pages/Users/GymScreen";
import ViewGym from "./pages/Users/ViewGym";
import Trainer from "./pages/Users/Trainer.jsx";
import ViewTrainer from "./pages/Users/ViewTrainer.jsx";
import Store from "./pages/Users/Store.jsx";
import ViewStore from "./pages/Users/ViewStore.jsx";
import AddMember from "./pages/Members/AddMember.jsx";
import MemberAdded from "./pages/Members/MemberAdded.jsx";
import SendWelcomeMessage from "./pages/Members/SendWelcomeMessage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* ── Auth ── */}
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OTPScreensPreview />} />

        {/* ── Admin core ── */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/approvals" element={<ApprovalsScreen />} />
        <Route path="/reviewrequest" element={<ReviewScreen />} />
        <Route path="/insights" element={<InsightsScreen />} />
        <Route path="/moderation" element={<ModerationScreen />} />

        {/* ── Campaigns ── */}
        <Route path="/campaigns" element={<CampaignsScreen />} />
        <Route path="/campaigns/create" element={<CreateCampaignScreen />} />
        <Route path="/campaigns/success" element={<CampaignSuccessScreen />} />
        <Route
          path="/campaigns/view/:campaignId"
          element={<ViewCampaignScreen />}
        />
        <Route
          path="/campaigns/analysis/:campaignId"
          element={<ViewAnalysisScreen />}
        />

        {/* ── Notifications ── */}
        <Route path="/notification" element={<NotificationCenterScreen />} />
        <Route
          path="/notification/create"
          element={<CreateNotificationScreen />}
        />
        <Route
          path="/notification/success"
          element={<NotificationDelivered />}
        />
        <Route
          path="/notification/analytics/:notificationid"
          element={<NotificationAnalyticsScreen />}
        />
      </Route>

      {/* ── Users (no Layout wrapper) ── */}
      <Route path="/users" element={<AllUsers />} />

      {/* ── Members ── */}
      <Route path="/members" element={<ViewUser />} />
      <Route path="/members/:memberId" element={<MemberProfileScreen />} />
      <Route
        path="/members/:memberId/activity"
        element={<ActivityTimelineScreen />}
      />
      <Route path="/members/add" element={<AddMember />} />
      <Route path="/members/success" element={<MemberAdded />} />
      <Route path="/members/sendmessage" element={<SendWelcomeMessage />} />

      {/* ── Gyms ── */}
      <Route path="/gyms" element={<GymScreen />} />
      <Route path="/gyms/:gymId" element={<ViewGym />} />

      {/* ── Trainers ── */}
      <Route path="/trainers" element={<Trainer />} />
      <Route path="/trainers/:trainerId" element={<ViewTrainer />} />

      {/* ── Stores ── */}
      <Route path="/stores" element={<Store />} />
      <Route path="/stores/:storeId" element={<ViewStore />} />
    </Routes>
  );
}
