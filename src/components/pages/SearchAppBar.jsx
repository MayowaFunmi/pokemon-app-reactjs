import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SearchAppBar = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    let inputTxt = e.target.value.toLowerCase();
    setText(inputTxt);
  };

  const handleSearch = () => {
    navigate(`/details/${text}`);
  };

  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Tyoe A Pokemon Name ..."
          onChange={handleInput}
        />
      </div>
      <div>
        <Button variant="contained" color="success" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchAppBar;
