import React from 'react'
import { Box } from '@mui/system';
import ProgressChart from '../components/ProgressChart';
import HomeworkCentre from '../components/HomeworkCentre';
import DetentionCentre from '../components/DetentionCentre';
import NotificationCentre from '../components/NotificationCenter';
import { createTheme, useMediaQuery } from '@mui/material';





export default function StudentUI() {
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 480,
        tablet: 770,
        laptop: 1024,
        desktop: 1200,
      },
    },
  });
  
  const isLaptopScreenSize = useMediaQuery(theme.breakpoints.down('laptop'));


  return (
    <Box sx={{ display: 'flex', flexDirection: isLaptopScreenSize ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap:'1rem' }}>
      <Box sx={{ border: '1px solid black', padding: '8px', borderRadius: '4px' }}>
        <NotificationCentre /> <br/>
        <HomeworkCentre /> <br/>
        <DetentionCentre /> 
      </Box>

      <Box sx={{ display: 'flex', flexDirection: isLaptopScreenSize ? 'row' : 'column', justifyContent: 'center', alignItems: 'center', gap: '3rem', border: '1px solid black', padding: '8px', borderRadius: '4px'}}>
        <ProgressChart
          outerValue={80} 
          outerText='AP' 
          innerValue={4}
          innerText='BP'
        />

        <ProgressChart
            outerValue={100} 
            outerText='Attend' 
            innerValue={95}
            innerText='Punct'
        />
      </Box>
    </Box>
  )
}
