import { NavLink } from 'react-router-dom';
import styles from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={styles.auth}>
      <NavLink className={styles.nav} to="/register">
        Register
      </NavLink>
      <NavLink className={styles.nav} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;