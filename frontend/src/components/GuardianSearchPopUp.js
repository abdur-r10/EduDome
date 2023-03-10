import React, { useState } from 'react'
import { styled } from '@mui/system';
import { TextField, Button } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';


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

const GuardianSearchPopUp = ({onGuardianSelect}) => {

    const [searchQuery, setSearchQuery] = useState({
        firstName: '',
        lastName: '',
        postcode: '',
    });

    const [searchResults, setSearchResults] = useState([{
      id: 'G67hlp8',
      title: "Mr",
      firstName: "A",
      middleName: "A",
      lastName: "A",
      relationToChild: "Father",
      email: "a@hotmail.com",
      telephoneNumber: "911",
      mobileNumber: "911",
      postcode: 'AB12CD',
      address: "3 something Road",
      firstLineOfContact: true
    },
    {
      id: 'G40pp5o',
      title: "Mrs",
      firstName: "B",
      middleName: "B",
      lastName: "B",
      relationToChild: "Mother",
      email: "b@hotmail.com",
      telephoneNumber: "911",
      mobileNumber: "911",
      postcode: 'AB12CD',
      address: "3 something Road",
      firstLineOfContact: false
    }]);


    const handleSearch = (value) => {
        setSearchQuery(value);
        // TODO: Implement search logic
    };

    const handleSearchQueryChange = (event) => {
        const { name, value } = event.target;
        setSearchQuery((prevState) => ({ ...prevState, [name]: value }));
      };
    
    const handleResultClick = (guardian) => {
        onGuardianSelect(guardian);
    };

    const isSearchEnabled = Object.values(searchQuery).some((value) => value !== '');


  return (
    <div>
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
          name="postcode"
          label="Postcode"
          variant="outlined"
          value={searchQuery.postcode}
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

    {searchResults.length > 0 && 
       <Table>
       <TableHead>
         <TableRow>
           <TableCell>First Name</TableCell>
           <TableCell>Last Name</TableCell>
           <TableCell>Address</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {searchResults.map((result) => (
           <TableRow key={result.id} hover onClick={() => handleResultClick(result)}>
             <TableCell>{result.firstName}</TableCell>
             <TableCell>{result.lastName}</TableCell>
             <TableCell>{result.address}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
    } 
    </div>
  )
}


export default GuardianSearchPopUp

