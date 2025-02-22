import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();

  // If not authenticated, redirect to login
  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const AdminRoute = ({ children }) => {
  const { auth } = useAuth();

  // If the user is not an admin, redirect to the dashboard
  if (!auth.isAdmin) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PrivateRoute;
