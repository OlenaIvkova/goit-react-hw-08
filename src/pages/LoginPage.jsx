// import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(login(credentials));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;