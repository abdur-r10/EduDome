import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import StudentCard from '../components/StudentCard'
import HomeworkCentre from '../components/HomeworkCentre';
import FormApBp from '../components/FormApBp';
import StudentDocuments from '../components/StudentDocuments';
import UserAppBar from '../components/UserAppBar';
const StudentInfo = () => {
    const [document, setDocument] = useState({
        displayInfo: 'This is some random disaply information',
        files: [
            {link: 'Link for file 1', ref: 'ref1'}, 
            {link: 'Link for file 2', ref: 'ref2'}, 
            {link: 'Link for file 3', ref: 'ref3'}, 
            {link: 'Link for file 4', ref: 'ref4'}
        ]
    })

    const location = useLocation();
    const student = location.state?.student;


    return (
        <Grid container spacing={0} >
          <UserAppBar user={'teacher'} />
          <Grid item xs={12} sx={{ mb: '20px' }}>
            <Typography variant="h4"> Student Info</Typography>
          </Grid>
    
          <Grid item xs={12} md={6} sx={{ mb: '30px' }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" mb="10px">
                  Student Details
                </Typography>
                <StudentCard student={student} />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h5" mb="10px">
                  Student Documents
                </Typography>
                <StudentDocuments document={document} />
              </Grid>
            </Grid>
          </Grid>
    
          <Grid item xs={12} md={6} sx={{ mb: '30px' }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" mt="20px" mb="10px">
                  Student AP/BP
                </Typography>
                <FormApBp type={'Student'} />
              </Grid>
    
              <Grid item xs={12}>
                <Typography variant="h5" mt="20px" mb="10px">
                  Student Homework
                </Typography>
                <HomeworkCentre />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
}

export default StudentInfo