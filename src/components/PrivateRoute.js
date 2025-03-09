import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/axiosInstance";

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

// AdminRoute for admin-specific pages
export const AdminRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return user?.role === "admin" ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default PrivateRoute;
