// import React from 'react';
import styles from '../pages/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Contacts App!</h1>
      <p className={styles.description}>Please register or login to manage your contacts.</p>
    </div>
  );
};

export default HomePage;