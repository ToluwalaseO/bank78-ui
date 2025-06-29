import React, { useState } from "react";
import "./Verification.css";

const Verification = ({ userData, onBack, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: userData?.email || "", // Pre-fill with userData if available
    emailCode: "",
    phone: "",
    phoneCode: "",
    password: "",
    confirmPassword: "",
    bvn: "",
    photo: null,
  });
  const [generatedCodes, setGeneratedCodes] = useState({
    emailCode: "",
    phoneCode: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Simulate sending verification code
  const sendEmailCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCodes((prev) => ({ ...prev, emailCode: code }));
    alert(`Simulation: Email verification code sent: ${code}`);
    setStep(2);
  };

  const verifyEmailCode = () => {
    if (formData.emailCode === generatedCodes.emailCode) {
      setStep(3);
    } else {
      alert("Invalid verification code");
    }
  };

  const sendSMSCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCodes((prev) => ({ ...prev, phoneCode: code }));
    alert(`Simulation: SMS verification code sent: ${code}`);
    setStep(4);
  };

  const verifySMSCode = () => {
    if (formData.phoneCode === generatedCodes.phoneCode) {
      setStep(5);
    } else {
      alert("Invalid verification code");
    }
  };

  const handlePasswordSubmit = () => {
    if (formData.password === formData.confirmPassword) {
      setStep(6);
    } else {
      alert("Passwords don't match!");
    }
  };

  const verifyBVN = () => {
    if (/^\d{11}$/.test(formData.bvn)) {
      setStep(7);
    } else {
      alert("Please enter a valid 11-digit BVN");
    }
  };

  const handleComplete = () => {
    // Combine all data before completing
    const completeData = {
      ...userData,
      ...formData,
      verificationCompleted: true,
    };
    onComplete(completeData);
  };

  return (
    <div className="verification-container">
      <h2>Account Verification</h2>

      <div className="progress-bar">
        <div className={`step ${step >= 1 ? "active" : ""}`}>1. Email</div>
        <div className={`step ${step >= 3 ? "active" : ""}`}>2. Phone</div>
        <div className={`step ${step >= 5 ? "active" : ""}`}>3. Password</div>
        <div className={`step ${step >= 6 ? "active" : ""}`}>4. BVN</div>
        <div className={`step ${step >= 7 ? "active" : ""}`}>5. Photo</div>
      </div>

      {step === 1 && (
        <div className="verification-step">
          <h3>Email Verification</h3>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <button onClick={sendEmailCode}>Send Verification Code</button>
        </div>
      )}

      {step === 2 && (
        <div className="verification-step">
          <h3>Enter Email Verification Code</h3>
          <p>Check your email for the verification code</p>
          <input
            type="text"
            name="emailCode"
            value={formData.emailCode}
            onChange={handleChange}
            placeholder="Enter 6-digit code"
            maxLength="6"
          />
          <button onClick={verifyEmailCode}>Verify Code</button>
          <button className="secondary" onClick={() => setStep(1)}>
            Resend Code
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="verification-step">
          <h3>Phone Verification</h3>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          <button onClick={sendSMSCode}>Send SMS Code</button>
        </div>
      )}

      {step === 4 && (
        <div className="verification-step">
          <h3>Enter SMS Verification Code</h3>
          <p>Check your phone for the SMS code</p>
          <input
            type="text"
            name="phoneCode"
            value={formData.phoneCode}
            onChange={handleChange}
            placeholder="Enter 6-digit code"
            maxLength="6"
          />
          <button onClick={verifySMSCode}>Verify Code</button>
          <button className="secondary" onClick={() => setStep(3)}>
            Resend Code
          </button>
        </div>
      )}

      {step === 5 && (
        <div className="verification-step">
          <h3>Create Password</h3>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create password"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />
          <button onClick={handlePasswordSubmit}>Continue</button>
        </div>
      )}

      {step === 6 && (
        <div className="verification-step">
          <h3>BVN Verification</h3>
          <p>Enter your 11-digit Bank Verification Number</p>
          <input
            type="text"
            name="bvn"
            value={formData.bvn}
            onChange={handleChange}
            placeholder="Enter your BVN"
            maxLength="11"
          />
          <button onClick={verifyBVN}>Verify BVN</button>
        </div>
      )}

      {step === 7 && (
        <div className="verification-step">
          <h3>Photo Verification</h3>
          <p>Upload a clear photo of yourself</p>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
          {formData.photo && (
            <div className="photo-preview">
              <img
                src={URL.createObjectURL(formData.photo)}
                alt="Preview"
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            </div>
          )}
          <button onClick={handleComplete}>Complete Verification</button>
        </div>
      )}

      {step > 1 && step < 7 && (
        <button className="back-button" onClick={() => setStep(step - 1)}>
          Back
        </button>
      )}

      {onBack && (
        <button className="back-button" onClick={onBack}>
          Back to Basic Details
        </button>
      )}
    </div>
  );
};

export default Verification;
