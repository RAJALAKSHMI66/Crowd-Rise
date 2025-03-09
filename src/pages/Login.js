import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import "./CreateCampaign"

const Login = () => {
    const navigate = useNavigate(); // ✅ For navigation
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
    
        // ✅ Corrected navigation path
        navigate("/create-campaign"); 
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
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
                        {loading ? "Redirecting..." : "Login"}
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
