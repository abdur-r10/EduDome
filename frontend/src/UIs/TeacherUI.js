import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import HomeworkCentre from '../components/HomeworkCentre'
import DetentionCentre from '../components/DetentionCentre'
import NotificationCentre from '../components/NotificationCenter'
import FormApBp from '../components/FormApBp'

export default function TeacherUI() {
  return (
    <Grid container spacing={2} minWidth='1445px'>
    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '1px solid black', padding: '8px', borderRadius: '4px' }}>Schedule</Box>
    </Grid>
    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '1px solid black', padding: '8px', borderRadius: '4px' }}>
        <NotificationCentre /> <br/>
        <FormApBp />
      </Box>
    </Grid>
    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '1px solid black', padding: '8px', borderRadius: '4px' }}>
        <HomeworkCentre/>
      </Box>
    </Grid>
    <Grid item xs={6}  container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '1px solid black', padding: '8px', borderRadius: '4px' }}>
        <DetentionCentre />
      </Box>
    </Grid>
  </Grid>
  )
}
