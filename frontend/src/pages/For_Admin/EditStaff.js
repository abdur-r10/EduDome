import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';




const EditStaff = () => {
  const navigate = useNavigate()


  const [results, setResults] = useState([])

  /** sampleResults = [{
    id: 1,
    title: "Mr",
    firstName: "Abz",
    middleName: "Zilla",
    lastName: "Killa",
    mobileNumber: "911",
    telephoneNumber: "119",
    address: "64 Zoo Lane",
    email: "a@hotmail.com",
    emergencyContactName: "Billy Boi",
    emergencyContactNumber: "911",
    emergencyContactAddress: "50 zoo lane",
    staffImage: null,
    staffEmail: "ZillaA@hotmail.com",
    password: "123aBCd",
    }]
   
   */



  const handleSearch = (searchQuery) => {
    /*
    try {
      const response = await fetch(`your-api-url?q=${searchQuery}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
    */
    console.log(searchQuery)
    //!make an query with db in backedn and get the results here and set the results state to that
    //!each result in table should allow you to click on it which will allow you to navigate to that component with the result state passed with it
    //!you can do that by navigate('/addStudent', { state: { student: studentData } })

    //!!next to tresult should be a delete button which user can click to delete the staff/student from db, should have a pop up ask are you sure you want to delete... 
  };

  const handleRowClick = (result) => {
    navigate('/addStaff', { state: { staff: result } })
  };


  return (
    <div>
       <SearchBar handleSearch={handleSearch} />
      {results.length > 0 && 
      <Table>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Form Class</TableCell>
          <TableCell>Subject</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((result) => (
          <TableRow key={result.id} hover onClick={() => handleRowClick(result)}>
            <TableCell>{result.firstName}</TableCell>
            <TableCell>{result.lastName}</TableCell>
            <TableCell>{result.formClass}</TableCell>
            <TableCell>{result.subject}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      }
      
    </div>
  )
}

export default EditStaff
