import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import HomeworkCentre from '../components/HomeworkCentre'
import DetentionCentre from '../components/DetentionCentre'
import NotificationCentre from '../components/NotificationCenter'
import FormApBp from '../components/FormApBp'
import FormAttenPunct from '../components/FormAttenPunct'
import TeacherSchedule from '../components/TeacherSchedule'

export default function TeacherUI() {
  //-----------------------STATE FOR POPUPS---------------
  const [notificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const [formApBpPopupOpen, setFormApBpPopupOpen] = useState(false);
  const [formAttenPunctPopupOpen, setFormAttenPunctPopupOpen] = useState(false);
  const [homeworkPopupOpen, setHomeworkPopupOpen] = useState(false);
  const [detentionPopupOpen, setDetentionPopupOpen] = useState(false);



  //-----------------------TOGGLE FOR POPUPS---------------------
  const handleNotificationPopupToggle = () => {
    setNotificationPopupOpen(!notificationPopupOpen);
  }
  const handleFormApBpPopupToggle = () => {
    setFormApBpPopupOpen(!formApBpPopupOpen);
  }
  const handleFormAttenPunctPopupToggle = () => {
    setFormAttenPunctPopupOpen(!formAttenPunctPopupOpen);
  }
  const handleHomeworkPopupToggle = () => {
    setHomeworkPopupOpen(!homeworkPopupOpen);
  }
  const handleDetentionPopupToggle = () => {
    setDetentionPopupOpen(!detentionPopupOpen);
  }

  return (
  <Grid container spacing={2} minWidth='1445px'>

    {/**----------------------------------------------------------SCHEDULE------------------------------------------------------------ */}
    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '5px solid black', padding: '8px', borderRadius: '4px', overflow: 'auto', resize: 'vertical', height: '600px', maxHeight: '970px', width: '722px' }}>
        <TeacherSchedule />
      </Box>
    </Grid>

    {/**---------------------------------------------------NOTIFICATION AND FORM STATS----------------------------------------------------- */}

    <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ border: '5px solid black', padding: '8px', borderRadius: '4px', overflow: 'auto', resize: 'vertical', height: '600px', maxHeight: '970px', width: '722px'}}>
        <Button variant="contained" onClick={handleNotificationPopupToggle}><OpenInFullIcon/></Button>
          <NotificationCentre popup={false}/>
          <br />
        <Button variant="contained" onClick={handleFormApBpPopupToggle}> <OpenInFullIcon/> </Button>
          <FormApBp popup={false}/>
          <br />
        <Button variant="contained" onClick={handleFormAttenPunctPopupToggle}><OpenInFullIcon/></Button>
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

      {/**----------------------------------------------------------HOMEWORK------------------------------------------------------------ */}
      <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ padding: '8px', borderRadius: '4px', width: 'auto' }}>
          <Button variant="contained" onClick={handleHomeworkPopupToggle}><OpenInFullIcon/></Button>
          <HomeworkCentre popup={false}/>
        </Box>

        <Dialog open={homeworkPopupOpen} onClose={handleHomeworkPopupToggle} maxWidth="lg">
        <DialogTitle>HOMEWORK</DialogTitle>
        <DialogContent sx={{ width: 'auto' }}>
          <HomeworkCentre popup={true}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleHomeworkPopupToggle}>Close</Button>
        </DialogActions>
      </Dialog>
      </Grid>

      
      {/**----------------------------------------------------------DETENTION------------------------------------------------------------ */}
      <Grid item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{padding: '8px', borderRadius: '4px', width: 'auto'}}>
          <Button variant="contained" onClick={handleDetentionPopupToggle}><OpenInFullIcon/></Button>
          <DetentionCentre popup={false}/>
        </Box>

        <Dialog open={detentionPopupOpen} onClose={handleDetentionPopupToggle} maxWidth="lg">
          <DialogTitle>DETENTIONS</DialogTitle>
          <DialogContent sx={{ width: 'auto' }}>
            <DetentionCentre popup={true}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDetentionPopupToggle}>Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>

  </Grid>
  )
}

