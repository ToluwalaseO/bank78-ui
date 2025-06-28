import React from 'react';
import './AccountType.css';

const AccountType = ({ selected, onSelect }) => {
  return (
    <div className="account-type-container">
      <div className="bank-header">
        <div className="bank-logo">Bank78</div>
      </div>

      <div className='sidebar'>
        <ul>Account Type</ul>
        <ul>Basic Details</ul>
      </div>

      <div className="content-container">
        <h2>Choose Your Account Type</h2>
        <p className="description">
          Select a preferred account type. You can always change this later</p>

        <div className="account-options">
          <div 
            className={`account-option ${selected === 'personal' ? 'selected' : ''}`}
            onClick={() => onSelect('personal')}
          >
            <h3>Personal</h3>
            <p>Personal use without limits or restraints </p>
          </div>

          <div 
            className={`account-option ${selected === 'business' ? 'selected' : ''}`}
            onClick={() => onSelect('business')}
          >
            <h3>Business</h3>
            <p>Conduct secure and swift transactions with Bank 78</p>
          </div>
          <div className="account-login">
          <div 
            className={`account-login ${selected === 'click to login' ? 'selected' : ''}`}
            onClick={() => onSelect('click to login')}
          >
            <p>Already have a Bank 78 account? Click to login</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountType;