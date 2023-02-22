import React from 'react'
import NotificationCentre from '../components/NotificationCenter';
import { Box } from '@mui/system';
import ProgressChart from '../components/ProgressChart';
import HomeworkCentre from '../components/HomeworkCentre';
import DetentionCentre from '../components/DetentionCentre';


export default function StudentUI() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <Box sx={{ width: '50%' }}>
        <NotificationCentre /> <br/>
        <HomeworkCentre /> <br/>
        <DetentionCentre /> 
      </Box>

      <Box sx={{ paddingTop: '200px', width: '50%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
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
