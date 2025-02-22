import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";  
import { useNavigate } from "react-router-dom";  
import "./Login.css"; 

const Login = () => {
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Prevent multiple clicks

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true); // Start loading

    // Simulate authentication
    setTimeout(() => {
      if (email === "admin@example.com" && password === "password123") {
        login(); // Call login function from context
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError("Invalid email or password. Try again.");
      }
      setLoading(false); // Stop loading
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>} {/* Show error if any */}

        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-links">
          <a href="/forgot-password">Forgot Password?</a> | <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
