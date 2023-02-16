import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import ProgressChart from '../components/ProgressChart';


export default function StudentUI() {
  return (
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
      
  )
}
