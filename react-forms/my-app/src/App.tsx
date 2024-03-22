import React from 'react';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

const App: React.FC = () => {
  const handleFormSubmitUncontrolled = (formData: {
    username1: string;
    password1: string;
  }) => {
    console.log('Uncontrolled form submitted with data:', formData);
  };

  const handleFormSubmitControlled = (formData: {
    username: string;
    password: string;
  }) => {
    console.log('Controlled form submitted with data:', formData);
  };

  return (
    <div>
      <h1>Registration Form (Uncontrolled)</h1>
      <RegistrationFormUncontrolled onSubmit={handleFormSubmitUncontrolled} />

      <h1>Registration Form (Controlled)</h1>
      <RegistrationFormControlled onSubmit={handleFormSubmitControlled} />
    </div>
  );
};

export default App;
