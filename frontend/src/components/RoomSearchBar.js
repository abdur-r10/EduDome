import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import { TextField, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& .MuiTextField-root': {
    margin: '8px',
  },
  '& .MuiButton-root': {
    margin: '8px',
  },
});

function SearchBar({handleSearch}) {


  const [searchQuery, setSearchQuery] = useState({
    id: '',
    type: ''
  });

  useEffect(() => {
    // Check if searchQuery is not the initial value
    if (searchQuery.id || searchQuery.type) {
      handleSearch(searchQuery);
    }
  }, []);

  const handleSearchQueryChange = (event) => {
    const { name, value } = event.target;
    setSearchQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  const isSearchEnabled = Object.values(searchQuery).some((value) => value !== '');

  return (
    <SearchContainer sx={{justifyContent: 'center', alignItems: 'center'}}>
      <TextField
        name="id"
        label="Room"
        variant="outlined"
        value={searchQuery.id}
        onChange={handleSearchQueryChange}
      />
      <TextField
        name="type"
        label="type"
        variant="outlined"
        value={searchQuery.type}
        onChange={handleSearchQueryChange}
      />
      
      <Button
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
        onClick={() => {handleSearch(searchQuery)}}
        disabled={!isSearchEnabled}
        sx={{minWidth: '95px'}}
      >
        Search
      </Button>
    </SearchContainer>
  );
}

export default SearchBar;