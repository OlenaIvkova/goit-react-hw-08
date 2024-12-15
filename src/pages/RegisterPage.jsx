// import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(userData));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;