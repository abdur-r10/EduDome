import React from 'react'
import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import HomeworkCentre from '../components/HomeworkCentre'
import DetentionCentre from '../components/DetentionCentre'
import NotificationCentre from '../components/NotificationCenter'
import FormApBp from '../components/FormApBp'
import FormAttenPunct from '../components/FormAttenPunct'
import TeacherSchedule from '../components/TeacherSchedule'

export default function TeacherUI() {
  return (
    <Grid container spacing={2} minWidth='1445px'>
    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '1px solid black', padding: '8px', borderRadius: '4px' }}>
        <TeacherSchedule />
      </Box>
    </Grid>
    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '1px solid black', padding: '8px', borderRadius: '4px', overflow: 'auto', resize: 'vertical', height: '600px', width: '722px'}}>
        <Typography variant="h6" align="center">Notification and Form Centre</Typography>
        <NotificationCentre /> <br/>
        <FormApBp /> <br/>
        <FormAttenPunct/>
      </Box>
    </Grid>
    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ padding: '8px', borderRadius: '4px', width: '722px' }}>
        <HomeworkCentre/>
      </Box>
    </Grid>
    <Grid item xs={6}  container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{padding: '8px', borderRadius: '4px' }}>
        <DetentionCentre />
      </Box>
    </Grid>
  </Grid>
  )
}

