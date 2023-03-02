import React, { useState } from 'react'
import SearchBar from '../../components/SearchBar';


const EditStaff = () => {

  const [results, setResults] = useState({})
  const [studentData, setStudentData] = useState({})


  const handleSearch = (searchQuery) => {
    //setSearchQuery(query);
    console.log(searchQuery)
    //!make an query with db in backedn and get the results here and set the results state to that
    //!each result in table should allow you to click on it which will allow you to navigate to that component with the result state passed with it
    //!you can do that by navigate('/addStudent', { state: { student: studentData } })

    //!!next to tresult should be a delete button which user can click to delete the staff/student from db, should have a pop up ask are you sure you want to delete... 
  };


  return (
    <div>
       <SearchBar handleSearch={handleSearch} />

    </div>
  )
}

export default EditStaff
