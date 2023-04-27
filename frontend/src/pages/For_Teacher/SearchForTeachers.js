import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import UserAppBar from "../../components/UserAppBar";
import StaffOrStudentSearchBar from "../../components/StaffOrStudentSearchBar";

const SearchForTeachers = () => {
  const navigate = useNavigate();

  const [results, setResults] = useState([
    {
      id: 1,
      img: "linkToImage1",
      firstName: "Abz1",
      lastName: "Anwar1",
      form: "10S",
      dateOfBirth: "1996-03-01",
      joinDate: "2020-09-01",
      email: "exampleEmail1@hotmail.com",
    },
    {
      id: 2,
      img: "linkToImage2",
      firstName: "Abz2",
      lastName: "Anwar2",
      form: "10X",
      dateOfBirth: "1990-09-01",
      joinDate: "2016-07-01",
      email: "exampleEmail2@hotmail.com",
    },
  ]);

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
    console.log(searchQuery);
    //!make an query with db in backedn and get the results here and set the results state to that
    //!each result in table should allow you to click on it which will allow you to navigate to that component with the result state passed with it
    //!you can do that by navigate('/addStudent', { state: { student: studentData } })

    //!!next to tresult should be a delete button which user can click to delete the staff/student from db, should have a pop up ask are you sure you want to delete...
  };

  const handleRowClick = (result) => {
    //!navigate to TeacherCard
    navigate("/teacherInfo", { state: { teacher: result } });
  };

  return (
    <div>
      <UserAppBar user={"teacher"} />
      <StaffOrStudentSearchBar
        handleSearch={handleSearch}
        searchFor={"staff"}
      />
      {results.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Form</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow
                key={result.id}
                hover
                onClick={() => handleRowClick(result)}
              >
                <TableCell>{result.firstName}</TableCell>
                <TableCell>{result.lastName}</TableCell>
                <TableCell>{result.form}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default SearchForTeachers;
