import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AccountType from "./AccountType";
import Basicdetails from "./Basicdetails";
import Verification from "./Verification";
import Dashboard from "./dashboard";


const App = () => {
  const [accountType, setAccountType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    referral: "",
    agree: false,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleVerificationComplete = (verificationData) => {
    console.log("Complete user data:", {
      ...formData,
      ...verificationData,
    });
    navigate("/Dashboard");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AccountType
            selected={accountType}
            onSelect={(type) => setAccountType(type)}
          />
        }
      />
      <Route
        path="/basic-details"
        element={
          <Basicdetails
            accountType={accountType}
            formData={formData}
            onChange={handleInputChange}
            isChecked={formData.agree}
          />
        }
      />
      <Route
        path="/verification"
        element={
          <Verification
            userData={formData}
            onComplete={handleVerificationComplete}
          />
        }
      />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
