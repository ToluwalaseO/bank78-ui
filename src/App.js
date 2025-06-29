import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AccountType from "./AccountType";
import Basicdetails from "./Basicdetails";
import Verification from "./Verification";

function App() {
  const [accountType, setAccountType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    referral: "",
    agree: false,
  });

  // Handler for form field changes
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
    // Handle completion logic here
  };

  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
