import React, { useState } from 'react'
import SearchBar from '../../components/RoomSearchBar';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserAppBar from "../../components/UserAppBar";

const EditRoom = () => {

    const navigate = useNavigate()
    const [results, setResults] = useState([]);

    /*
    sampleData = {
        id: 'S100',
        type: 'Classroom',
        maxCapacity: 33
    }
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
        navigate('/addRoom', { state: { room: result } })
    };
    
   
  return (
    <div>
       <UserAppBar user={'admin'} />
       <SearchBar handleSearch={handleSearch} />
       {results.length > 0 && 
       <Table>
       <TableHead>
         <TableRow>
           <TableCell>Room</TableCell>
           <TableCell>Type</TableCell>
           <TableCell>Max Capacity</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {results.map((result) => (
           <TableRow key={result.id} hover onClick={() => handleRowClick(result)}>
             <TableCell>{result.id}</TableCell>
             <TableCell>{result.type}</TableCell>
             <TableCell>{result.maxCapacity}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
       } 

    </div>
  )
}

export default EditRoom