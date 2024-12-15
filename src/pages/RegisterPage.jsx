// import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import styles from '../pages/RegisterPage.module.css';

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Register</h1>
      <label className={styles.label}>
        Name:
        <input type="text" name="name" required className={styles.input}/>
      </label>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" required className={styles.input}/>
      </label>
      <label className={styles.label}>
        Password:
        <input type="password" name="password" required className={styles.input}/>
      </label>
      <button type="submit" className={styles.button}>Register</button>
    </form>
  );
};

export default RegisterPage;