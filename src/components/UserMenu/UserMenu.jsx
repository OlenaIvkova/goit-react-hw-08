import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.div}>
      <p className={styles.div}>Welcome, {user.name}</p>
      <button onClick={() => dispatch(handleLogOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;