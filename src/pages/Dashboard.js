import React from "react";
import { useAuth } from "../context/AuthContext";  // Import useAuth hook

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth(); // Use authentication state and logout function

  if (!isAuthenticated) {
    return <div>You must be logged in to access the dashboard.</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <button onClick={logout}>Logout</button> {/* Logout button */}
    </div>
  );
};

export default Dashboard;
