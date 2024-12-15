// import React from 'react';
import { Navigation } from '../components/Navigation';
import { AuthNav } from '../components/AuthNav';
import { UserMenu } from '../components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import styles from '../components/AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};