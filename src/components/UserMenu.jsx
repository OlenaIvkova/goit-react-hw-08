// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/operations';
import { selectUser } from '../redux/auth/selectors';
import styles from '../components/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <p className={styles.welcome}>Welcome, {user.name}</p>
      <button className={styles.button} onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};