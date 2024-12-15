// import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import styles from '../pages/LoginPage.module.css';

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Login</h1>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" required className={styles.input}/>
      </label>
      <label className={styles.label}>
        Password:
        <input type="password" name="password" required className={styles.input}/>
      </label>
      <button type="submit" className={styles.button}>Login</button>
    </form>
  );
};

export default LoginPage;