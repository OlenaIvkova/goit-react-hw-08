// import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../components/AppBar';
import styles from '../components/Layout.module.css';


export const Layout = () => {
  return (
    <div className={styles.layout}>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

{/* <main className={styles.main}></main> */}
