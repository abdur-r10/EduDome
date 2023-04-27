import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import TeacherCard from "../components/TeacherCard";
import TeacherSchedule from "../components/TeacherSchedule";

const TeacherInfo = () => {
  const location = useLocation();
  const teacher = location.state?.teacher;

  console.log(teacher);

  const sampleData = {};

  return (
    <Box>
        <Typography variant="h4" sx={{mb: '20px'}}> Teacher Info</Typography>

        <Typography variant="h5" sx={{mb: '10px'}}> Teacher Details</Typography>
        <TeacherCard teacher={teacher} />

        <Typography variant="h5" sx={{mt: '30px', mb: '10px'}}>Timetable:</Typography>
        <Box sx={{ border: '5px solid black', padding: '8px', borderRadius: '4px', overflow: 'auto', resize: 'vertical', height: '600px', minHeight: '600px', maxHeight: '970px', width: '722px' }}>
            <TeacherSchedule />
        </Box>
    </Box>
  );
};

export default TeacherInfo;
