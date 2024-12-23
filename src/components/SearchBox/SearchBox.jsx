import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/slice';
// import { FaSearch } from 'react-icons/fa'; 
// import styles from './SearchBox.module.css';
import { TextField, Box } from '@mui/material';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <TextField
        label="Find contacts by name"
        variant="outlined"
        value={filter}
        onChange={handleChange}
        sx={{ width: '100%', maxWidth: '400px' }}
      />
    </Box>
  );
};

export default SearchBox;

{/* <div className={styles.searchBox}> */}
      // <label className={styles.label}>
        // <FaSearch className={styles.icon} /> {/* Іконка */}
        // <input
          // type="text"
          // placeholder="Find contacts by name"
          // value={filter}
          // onChange={handleChange}
          // className={styles.input}
        // />
      // </label>
// </div>