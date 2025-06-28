import React from 'react';
import './AccountType.css';

const Basicdetails  = ({ selected, onSelect }) => {
  return (
    <div className="basicdetails-container">
      <div className="bank-header">
        <div className="bank-logo">Bank78</div>
      </div>
     
      <div className='sidebar'>
        <ul> back </ul>
        <ul>Account Type</ul>
        <ul>Basic Details</ul>
      </div>

      <div className="basicdetail-container">
        <h2>let's Get to Know You Better</h2>
        <p className="description">
          to open your Bank78 account kindly complete the form below. please
          ensure that your details match those on your ID.</p>

        <div className="account-options">
         
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  disabled={isLoading}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  disabled={isLoading}
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="referral">Referral code</label>
            <input
              type="referral"
              id="referral"
              name="referral"
              value={formData.refferal}
              onChange={handleChange}
              placeholder={isLogin ? 'Referral code(' : 'Referral code(optional)'}
              disabled={isLoading}
            />
          </div>

          {isLogin && (
            <div className="form-options">
              <div className="remember-me">
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  disabled={isLoading}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="/forgot-password" className="forgot-password">
                Forgot password?
              </a>
            </div>
          )}

          <button 
            type="submit" 
            className="auth-button buyer-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loading-spinner"></span>
            ) : isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={toggleAuthMode} 
            className="toggle-button"
            disabled={isLoading}
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountType;