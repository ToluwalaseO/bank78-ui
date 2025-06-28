import React from 'react';
import './AccountType.css';

const AccountType = ({ selected, onSelect }) => {
  return (
    <div className="account-type-container">
      <div className="bank-header">
        <div className="bank-logo">Bank78</div>
      </div>

      <div className="content-container">
        <h2>Choose Your Account Type</h2>
        <p className="description">
          Select the type of account you want to open with Bank78
        </p>

        <div className="account-options">
          <div 
            className={`account-option ${selected === 'personal' ? 'selected' : ''}`}
            onClick={() => onSelect('personal')}
          >
            <h3>Personal Account</h3>
            <p>For individual banking needs</p>
          </div>

          <div 
            className={`account-option ${selected === 'business' ? 'selected' : ''}`}
            onClick={() => onSelect('business')}
          >
            <h3>Business Account</h3>
            <p>For your business banking needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountType;