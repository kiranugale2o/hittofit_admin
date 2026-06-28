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
import AddGymStep1 from "./pages/Gym/AddGymStep.jsx";
import PartnerAddedScreen from "./pages/Gym/PartnerAddedScreen.jsx";
import GymProfileScreen from "./pages/Gym/GymProfileScreen.jsx";
import MembershipPlansScreen from "./pages/Gym/MembershipPlansScreen.jsx";
import CreateMembershipPlanScreen from "./pages/Gym/CreateMembershipPlanScreen.jsx";
import GymTrainersScreen from "./pages/Gym/GymTrainersScreen.jsx";
import PlanPublishedScreen from "./pages/Gym/PlanPublishedScreen.jsx";
import AddTrainerFormScreen from "./pages/Trainer/AddTrainer.jsx";
import TrainerAddedScreen from "./pages/Trainer/TrainerAddedScreen.jsx";
import AddStoreStep from "./pages/Store/AddStoreStep.jsx";
import StoreAddedSucces from "./pages/Store/StoreAddedSucces.jsx";
import ContentReviewList from "./pages/Review/ContentReviewList.jsx";
import ContentReviewDetail from "./pages/Review/ContentReviewDetail.jsx";
import ReportsAnalytics from "./pages/WorkspaceTools/ReportsAnalytics.jsx";
import FeaturedListings from "./pages/WorkspaceTools/FeaturedListings.jsx";
import PartnerDirectory from "./pages/WorkspaceTools/PartnerDirectory.jsx";
import PartnerProfile from "./pages/WorkspaceTools/PartnerProfile.jsx";
import FeaturedListingDetail from "./pages/WorkspaceTools/FeaturedListingDetail.jsx";
import Language from "./pages/Language.jsx";
import AppearanceScreen from "./pages/AppearanceScreen.jsx";
import CRMPreferencesScreen from "./pages/CRMPreferencesScreen.jsx";
import SignOutScreen from "./pages/SignOutScreen.jsx";

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
      {/* Gym Routes */}
      <Route path="/gyms" element={<GymScreen />} />
      <Route path="/gyms/add" element={<AddGymStep1 />} />
      <Route path="/gyms/added/success" element={<PartnerAddedScreen />} />
      <Route path="/gyms/:gymId" element={<ViewGym />} />
      <Route path="/gyms/:gymId/profile" element={<GymProfileScreen />} />
      <Route path="/gyms/:gymId/plans" element={<MembershipPlansScreen />} />
      <Route
        path="/gyms/:gymId/plans/create"
        element={<CreateMembershipPlanScreen />}
      />
      <Route path="/gyms/trainer" element={<GymTrainersScreen />} />
      <Route path="/gyms/planpublish" element={<PlanPublishedScreen />} />
      {/* ── Trainers ── */}
      <Route path="/trainers" element={<Trainer />} />
      <Route path="/trainers/:trainerId" element={<ViewTrainer />} />
      <Route path="/trainers/add" element={<AddTrainerFormScreen />} />
      <Route path="/trainers/added/success" element={<TrainerAddedScreen />} />
      {/* ── Stores ── */}
      <Route path="/stores" element={<Store />} />
      <Route path="/stores/:storeId" element={<ViewStore />} />
      <Route path="/stores/add" element={<AddStoreStep />} />
      <Route path="/stores/added/success" element={<StoreAddedSucces />} />
      {/* Reviews */}
      <Route path="/review/list" element={<ContentReviewList />} />
      <Route path="/review/:id/details" element={<ContentReviewDetail />} />
      {/* WorkTools */}
      <Route path="/worktools/" element={<ReportsAnalytics />} />
      <Route path="/worktools/features/list" element={<FeaturedListings />} />
      <Route
        path="/worktools/features/list/:id"
        element={<FeaturedListingDetail />}
      />

      {/* Partner */}
      <Route path="/partner/directory/" element={<PartnerDirectory />} />
      <Route
        path="/partner/directory/:id/profile"
        element={<PartnerProfile />}
      />
      <Route path="/setting/language" element={<Language />} />
      <Route path="/setting/appearance" element={<AppearanceScreen />} />
      <Route path="/setting/crm" element={<CRMPreferencesScreen />} />
      <Route path="/setting/signout" element={<SignOutScreen />} />
    </Routes>
  );
}
