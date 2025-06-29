import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Verification.css";

const Verification = ({ userData, onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: userData?.email || "",
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
  const navigate = useNavigate();

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
    const completeData = {
      ...userData,
      ...formData,
      verificationCompleted: true,
    };
    onComplete(completeData);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate("/basic-details");
    }
  };

  return (
    <div className="verification-container">
      <h2>Account Verification</h2>

      <div className="progress-bar">
        {[1, 3, 5, 6, 7].map((stepNum) => (
          <div
            key={stepNum}
            className={`step ${step >= stepNum ? "active" : ""}`}
          >
            {stepNum === 1 && "1. Email"}
            {stepNum === 3 && "2. Phone"}
            {stepNum === 5 && "3. Password"}
            {stepNum === 6 && "4. BVN"}
            {stepNum === 7 && "5. Photo"}
          </div>
        ))}
      </div>

      {/* Step rendering remains the same */}
      {step === 1 && (
        <div className="verification-step">
          {/* ... email verification UI ... */}
        </div>
      )}
      {/* Other steps... */}

      <button className="back-button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default Verification;
