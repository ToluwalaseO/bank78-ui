import React, { useState } from 'react';
import './App.css';
import AccountType from './AccountType';
import SignupForm from './SignupForm';

function App() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState('');

  const handleAccountSelect = (type) => {
    setAccountType(type);
    setStep(2);
  };

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    // You can navigate to a success page or next step here
    alert(`Account created successfully! Type: ${data.accountType}, Email: ${data.email}`);
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="app-container">
      {step === 1 && <AccountType selected={accountType} onSelect={handleAccountSelect} />}
      {step === 2 && (
        <SignupForm 
          accountType={accountType} 
          onSubmit={handleFormSubmit}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;