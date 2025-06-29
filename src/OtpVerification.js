import React from "react";
import "./OTPVerification.css";

function OTPVerification() {
  return (
    <div className="otp-wrapper">
      {/* Left Panel */}
      <div className="otp-left">
        <button className="back-btn">← Back</button>
        <div className="otp-content">
          <h2>OTP Verification</h2>
          <p>Enter the verification code sent to your email or mobile number</p>
          <input
            className="otp-input"
            type="text"
            placeholder="Enter 6-digit code"
            maxLength="6"
          />
          <button className="submit-btn">Continue</button>
        </div>
      </div>

      {/* Right Panel */}
      <div className="otp-right">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=720&q=80"
          alt="Music Listening"
        />
        <div className="overlay"></div>
        <div className="curve"></div>
      </div>
    </div>
  );
}

export default OTPVerification;
