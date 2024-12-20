import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.text} to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          {isLoggedIn && (
            <NavLink className={styles.text} to="/contacts">
              Contacts
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

