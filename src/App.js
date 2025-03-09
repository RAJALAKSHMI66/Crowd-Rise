import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CampaignDetails from "./pages/CampaignDetails";
import Profile from "./pages/Profile";
import CreateCampaign from "./pages/CreateCampaign";
import ManageCampaigns from "./pages/ManageCampaigns";
import PrivateRoute, { AdminRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <Router> {/* ✅ Router wraps AuthProvider */}
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/campaigns/:id" element={<CampaignDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
              <Route path="/manage-campaigns" element={<AdminRoute><ManageCampaigns /></AdminRoute>} />

              {/* ✅ CreateCampaign accessible to everyone */}
              <Route path="/create-campaign" element={<CreateCampaign />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
