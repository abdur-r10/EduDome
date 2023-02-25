import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Grid, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import HomeworkCentre from '../components/HomeworkCentre'
import DetentionCentre from '../components/DetentionCentre'
import NotificationCentre from '../components/NotificationCenter'
import FormApBp from '../components/FormApBp'
import FormAttenPunct from '../components/FormAttenPunct'
import TeacherSchedule from '../components/TeacherSchedule'

export default function TeacherUI() {
  const [notificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const [formApBpPopupOpen, setFormApBpPopupOpen] = useState(false);
  const [formAttenPunctPopupOpen, setFormAttenPunctPopupOpen] = useState(false);



  const handleNotificationPopupToggle = () => {
    setNotificationPopupOpen(!notificationPopupOpen);
  }

  const handleFormApBpPopupToggle = () => {
    setFormApBpPopupOpen(!formApBpPopupOpen);
  }

  const handleFormAttenPunctPopupToggle = () => {
    setFormAttenPunctPopupOpen(!formAttenPunctPopupOpen);
  }

  return (
  <Grid container spacing={2} minWidth='1445px'>
    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '5px solid black', padding: '8px', borderRadius: '4px', width:'722px' }}>
        <TeacherSchedule />
      </Box>
    </Grid>
    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '5px solid black', padding: '8px', borderRadius: '4px', overflow: 'auto', resize: 'vertical', height: '600px', width: '722px'}}>
        <Button variant="contained" onClick={handleNotificationPopupToggle}>View larger</Button>
          <NotificationCentre popup={false}/>
          <br />
        <Button variant="contained" onClick={handleFormApBpPopupToggle}>View larger</Button>
          <FormApBp popup={false}/>
          <br />
        <Button variant="contained" onClick={handleFormAttenPunctPopupToggle}>View larger</Button>
          <FormAttenPunct popup={false}/>

          <Dialog open={notificationPopupOpen} onClose={handleNotificationPopupToggle} maxWidth="lg">
            <DialogTitle>NOTIFICATIONS</DialogTitle>
            <DialogContent sx={{ width: 'auto' }}>
              <NotificationCentre popup={true}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleNotificationPopupToggle}>Close</Button>
            </DialogActions>
          </Dialog>


          <Dialog open={formApBpPopupOpen} onClose={handleFormApBpPopupToggle} maxWidth="lg">
            <DialogTitle>FORM AP/BP</DialogTitle>
            <DialogContent sx={{ width: 'auto' }}>
              <FormApBp popup={true}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleFormApBpPopupToggle}>Close</Button>
            </DialogActions>
          </Dialog>


          <Dialog open={formAttenPunctPopupOpen} onClose={handleFormAttenPunctPopupToggle} maxWidth="lg">
            <DialogTitle>FORM ATTENDANCE AND PUNCTUALITY</DialogTitle>
            <DialogContent sx={{ width: 'auto' }}>
              <FormAttenPunct popup={true}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleFormAttenPunctPopupToggle}>Close</Button>
            </DialogActions>
          </Dialog>
      </Box>
      </Grid>
      <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ padding: '8px', borderRadius: '4px', width: 'auto' }}>
          <HomeworkCentre/>
        </Box>
      </Grid>
      <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{padding: '8px', borderRadius: '4px' }}>
          <DetentionCentre />
        </Box>
      </Grid>
      </Grid>
  )
}

