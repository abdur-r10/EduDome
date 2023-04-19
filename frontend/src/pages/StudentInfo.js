import React from 'react'
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import StudentCard from '../components/StudentCard'
import HomeworkCentre from '../components/HomeworkCentre';
import FormApBp from '../components/FormApBp';

const StudentInfo = () => {

    const location = useLocation();
    const student = location.state?.student;
  return (
    <div>
        <Typography variant='h4' mb='30px'> Student Info</Typography>
        <Typography variant='h5' mb='10px'> Student Details</Typography>
        <StudentCard student={student}/>

        <Typography variant='h5' mt='20px' mb='10px'> Student Documents</Typography>

        <Typography variant='h5' mt='20px' mb='10px'> Student AP/BP</Typography>
        <FormApBp type={'Student'}/>

        <Typography variant='h5' mt='20px' mb='10px'> Student Homework</Typography>
        <HomeworkCentre />
    </div>
  )
}

export default StudentInfo
//Documents
//AP/BP
//Homework