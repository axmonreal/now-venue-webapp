import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/dashboard";
import ForgotPassword from "./pages/forgot-password";
import ChangePassword from "./pages/change-password";
import AccountSetup from "./pages/account-setup";
import Settings from "./pages/settings";
import HomePage from "./pages/home";
import AnalyticsPage from "./pages/analytics";
import ContinuousCoverPass from "./pages/continuous-cover-pass";
import DayOfWeekCoverPass from "./pages/day-of-week-cover-pass";
import CustomCoverPass from "./pages/custom-cover-pass";
import ContinuousLineSkipPass from "./pages/continuous-line-skip-pass";
import DayOfWeekLineSkipPass from "./pages/day-of-week-line-skip-pass";
import CustomLineSkipPass from "./pages/custom-line-skip-pass";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/continuous-cover-pass" element={<ContinuousCoverPass />} />
        <Route path="/day-of-week-cover-pass" element={<DayOfWeekCoverPass />} />
        <Route path="/custom-cover-pass" element={<CustomCoverPass />} />
        <Route path="/continuous-line-skip-pass" element={<ContinuousLineSkipPass />} />
        <Route path="/day-of-week-line-skip-pass" element={<DayOfWeekLineSkipPass />} />
        <Route path="/custom-line-skip-pass" element={<CustomLineSkipPass />} />
      </Routes>
      <Toaster />
      <SonnerToaster />
    </Router>
  );
}

export default App;