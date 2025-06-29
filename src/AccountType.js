import React from "react";
import "./AccountType.css";

const AccountType = ({ selected, onSelect }) => {
  return (
    <div className="account-type-container">
      <div className="bank-header">
        <div className="bank-logo">Bank78</div>
      </div>

      <div className="content-wrapper">
        <div className="sidebar">
          <ul>Back</ul>
          <ul className="active">Account Type</ul>
          <ul>Basic Details</ul>
        </div>

        <div className="content-container">
          <h2>What type of account would you like to open?</h2>
          <p className="description">
            Select a preferred account type. You can always change this later
          </p>

          <div className="account-options">
            <div
              className={`account-option ${
                selected === "personal" ? "selected" : ""
              }`}
              onClick={() => onSelect("personal")}
            >
              <h3>Personal</h3>
              <p>Personal use without limits or restraints</p>
            </div>

            <div
              className={`account-option ${
                selected === "business" ? "selected" : ""
              }`}
              onClick={() => onSelect("business")}
            >
              <h3>Business</h3>
              <p>Conduct secure and swift transactions with Bank78</p>
            </div>
          </div>

          <div className="account-login">
            <p>
              Already have a Bank78 account?{" "}
              <span onClick={() => onSelect("login")}>Click to login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
