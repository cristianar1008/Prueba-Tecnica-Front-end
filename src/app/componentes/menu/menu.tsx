// components/Menu.tsx
import { useState } from 'react';
import styles from './Menu.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';

export default function Menu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <h4>Search</h4>
      <TextField
        variant="outlined"
        placeholder="Keywords"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: 'white' }} />
            </InputAdornment>
          ),
          style: { color: 'white' },
        }}
        sx={{ input: { color: 'white' }, backgroundColor: '#333', borderRadius: '5px', marginBottom: '10px', marginTop: '15px' }}
      />
     <div id='genresContainer'>
      <div className={styles.genreContainer}>
        <h4 className={styles.titleh4}> Genres</h4>
        <button onClick={toggleDropdown} className={styles.genreButton}>
          <div className={styles.Linea}></div>
        </button>

        {isDropdownOpen && (
          <div className={styles.dropdown}>
            <ul>
              <li>Action</li>
              <li>Adventure</li>
              <li>Animation</li>
              <li>Comedy</li>
              <li>Crime</li>
              <li>Documentary</li>
              <li>Drama</li>
              <li>Family</li>
              <li>Fantasy</li>
              <li>History</li>
              <li>Horror</li>
              <li>Music</li>
              <li>Mystery</li>
            </ul>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
