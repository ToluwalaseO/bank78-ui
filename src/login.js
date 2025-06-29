import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Here you would typically make an API call to authenticate
    console.log("Logging in with:", { email, password, keepLoggedIn });

    // On successful login, redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      {/* Left Panel */}
      <div className="login-left">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="login-content">
          <h2>Login to your Bank 78 account</h2>
          <p className="register-text">
            Need a bank 78 account?{" "}
            <span onClick={() => navigate("/register")}>Create an account</span>
          </p>

          <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}

            <input
              className="email-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="password-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              required
            />

            <div className="remember-me">
              <input
                type="checkbox"
                id="keepLoggedIn"
                checked={keepLoggedIn}
                onChange={() => setKeepLoggedIn(!keepLoggedIn)}
              />
              <label htmlFor="keepLoggedIn">Keep me logged in</label>
            </div>

            <button type="submit" className="submit-btn">
              Continue
            </button>
          </form>

          <button
            className="forget-btn"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="otp-right">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=720&q=80"
          alt="Banking security illustration"
        />
        <div className="overlay"></div>
        <div className="curve"></div>
      </div>
    </div>
  );
}

export default Login;
