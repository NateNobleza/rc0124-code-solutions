import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

function ValidatedInput() {
  const [password, setPassword] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  function getValidationMessage() {
    if (password.length >= 8)
      return (
        <>
          <FaCheck style={{ color: 'green' }} /> Good PW
        </>
      );
    if (password.length <= 8)
      return (
        <>
          <FaTimes style={{ color: 'red' }} /> PW must be at least 8 characters
          long
        </>
      );
  }

  return (
    <>
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        className={password.length >= 8 ? 'valid-input' : 'invalid-input'}
      />
      <text>{getValidationMessage()}</text>
    </>
  );
}

export default ValidatedInput;
