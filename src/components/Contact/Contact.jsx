import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <span className={styles.contactInfo}>
        {name}: {number}
      </span>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  number: PropTypes.string.isRequired,
};

export default Contact;
