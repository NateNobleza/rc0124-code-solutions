import { FormEvent } from 'react';

type RegistrationFormUncontrolledProps = {
  onSubmit: (formData: { username1: string; password1: string }) => void;
};

const RegistrationFormUncontrolled = ({
  onSubmit,
}: RegistrationFormUncontrolledProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData);
    onSubmit({
      username1: values.username as string,
      password1: values.password as string,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text1" id="username1" name="username1" />
      </div>
      <div>
        <label htmlFor="password1">Password:</label>
        <input type="password1" id="password1" name="password1" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationFormUncontrolled;
