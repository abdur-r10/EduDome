import React from 'react'
import NotificationCenter from '../components/NotificationCenter';
import { Box } from '@mui/system';
import ProgressChart from '../components/ProgressChart';
import HomeworkCentre from '../components/HomeworkCentre';


export default function StudentUI() {
  return (
    <Box>
      <div>
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
      </div>

      <NotificationCenter/>
      <br/>
      <HomeworkCentre/>
    </Box>
  )
}
