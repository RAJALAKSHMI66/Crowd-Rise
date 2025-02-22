import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import CampaignDetails from "./pages/CampaignDetails";
import Profile from "./pages/Profile";
import CreateCampaign from "./pages/CreateCampaign";
import ManageCampaigns from "./pages/ManageCampaigns";
import PrivateRoute, { AdminRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext"; 

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/campaigns/:id" element={<CampaignDetails />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/dashboard" 
                element={<PrivateRoute><Dashboard /></PrivateRoute>} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="/create-campaign" 
                element={<AdminRoute><CreateCampaign /></AdminRoute>} 
              />
              <Route 
                path="/manage-campaigns" 
                element={<AdminRoute><ManageCampaigns /></AdminRoute>} 
              />
            </Routes>
          </div>
          <Footer /> {/* Footer included at the bottom */}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
