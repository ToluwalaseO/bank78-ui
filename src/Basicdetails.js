import React from "react";
import "./Basicdetails.css";
import { useNavigate } from "react-router-dom";

const Basicdetails = ({
  accountType,
  formData,
  onChange,
  onBack,
  isChecked,
}) => {
  const [showTerms, setShowTerms] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setError("You must agree to the Terms and Conditions.");
      return;
    }
    setError("");
    navigate("/verification");
  };

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };

  return (
    <div className="basicdetails-container">
      <div
        className="bank-header"
        onClick={onBack}
        style={{ cursor: "pointer" }}
      >
        <div className="bank-logo">Bank78</div>
      </div>

      <div className="content-wrapper">
        <div className="sidebar">
          <ul onClick={onBack} style={{ cursor: "pointer" }}>
            ← Back
          </ul>
          <ul>Account Type</ul>
          <ul className="active">Basic Details</ul>
        </div>

        <div className="basicdetail-container">
          <h2>Let's Get to Know You Better</h2>
          <p className="description">
            To open your {accountType} Bank78 account, kindly complete the form
            below. Please ensure that your details match those on your ID.
          </p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                placeholder="First name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                placeholder="Last name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={onChange}
                placeholder="Referral code (Optional)"
              />
            </div>

            <div className="terms-container">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={isChecked}
                onChange={onChange}
              />
              <label htmlFor="agree">
                By tapping "Continue" I agree to Bank78's{" "}
                <span className="terms-link" onClick={toggleTerms}>
                  Terms and Conditions
                </span>
              </label>
            </div>

            {error && <p className="error-message">{error}</p>}

            {showTerms && (
              <div className="terms-modal">
                <div className="terms-content">
                  <h3>Bank78 Terms and Conditions</h3>
                  <button className="close-terms" onClick={toggleTerms}>
                    ×
                  </button>
                  <div className="terms-text">
                    <h4>1. Account Usage</h4>
                    <p>
                      Your Bank78 account is for personal use only. Commercial
                      use is prohibited without prior written consent from
                      Bank78.
                    </p>

                    <h4>2. Privacy Policy</h4>
                    <p>
                      We collect personal information to provide and improve our
                      services. Your data will be protected according to
                      applicable laws and regulations.
                    </p>

                    <h4>3. Fees</h4>
                    <p>
                      Account maintenance fees may apply depending on your
                      account type. All fees will be clearly disclosed before
                      you incur them.
                    </p>

                    <h4>4. Liability</h4>
                    <p>
                      Bank78 is not liable for losses resulting from
                      unauthorized access due to your failure to protect your
                      login credentials.
                    </p>

                    <h4>5. Amendments</h4>
                    <p>
                      These terms may be updated periodically. Continued use of
                      your account constitutes acceptance of the revised terms.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <button type="submit" className="auth-button buyer-button">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Basicdetails;
