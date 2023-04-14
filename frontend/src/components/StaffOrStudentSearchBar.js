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

function StaffOrStudentSearchBar({handleSearch, searchFor}) {
  //!use searchFor prop for logic of making API call to DB of Staff or Student
  const [searchQuery, setSearchQuery] = useState({
    firstName: '',
    lastName: '',
    form: '',
  });

  useEffect(() => {
    // Check if searchQuery is not the initial value
    if (searchQuery.firstName || searchQuery.lastName || searchQuery.form) {
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
        name="firstName"
        label="First Name"
        variant="outlined"
        value={searchQuery.firstName}
        onChange={handleSearchQueryChange}
      />
      <TextField
        name="lastName"
        label="Last Name"
        variant="outlined"
        value={searchQuery.lastName}
        onChange={handleSearchQueryChange}
      />
      
        <TextField
          name="form"
          label="Form"
          variant="outlined"
          value={searchQuery.form}
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

export default StaffOrStudentSearchBar;

