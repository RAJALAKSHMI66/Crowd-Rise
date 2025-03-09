import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css"

const API = axios.create({
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await API.get("/auth/me");
                setUser(res.data);
            } catch (error) {
                setUser(null);
            }
            setLoading(false);
        };
        fetchUser();
    }, []);

    const login = async (userData) => {
        try {
            const res = await API.post("/auth/login", userData);
            setUser(res.data);
            navigate("/dashboard"); // Redirect after login
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const register = async (userData) => {
        try {
            const res = await API.post("/auth/register", userData);
            setUser(res.data);
            navigate("/dashboard"); // Redirect after signup
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    const logout = async () => {
        try {
            await API.post("/auth/logout");
            setUser(null);
            navigate("/login"); // Redirect after logout
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default API;
