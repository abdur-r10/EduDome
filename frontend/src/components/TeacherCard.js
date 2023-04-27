import React from 'react'
import { Typography, Box } from "@mui/material";
import TeacherSchedule from './TeacherSchedule';


const TeacherCard = ({teacher}) => {
    const age = Math.floor((new Date() - new Date(teacher.dateOfBirth)) / 31557600000);

  return (
    <Box sx={{ border: '5px solid black', display: 'inline-block' }}>
      <img src={teacher.img} alt='teacher img' style={{ marginBottom: '5px' }}/>
      <Typography mb="5px">
        <strong>Name:</strong>{" "}
        {`${teacher.firstName} ${teacher.middleName !== undefined ? teacher.middleName : ''} ${teacher.lastName}`}
      </Typography>
      <Typography mb="5px">
        <strong>Email:</strong> {teacher.email}
      </Typography>
      <Typography mb="5px">
        <strong>Age:</strong> {age}
      </Typography>
      <Typography mb="5px">
        <strong>Form:</strong> {teacher.form}
      </Typography>
      <Typography mb="5px">
        <strong>Join Date:</strong> {teacher.joinDate}
      </Typography>
    </Box>
  )
}

export default TeacherCard