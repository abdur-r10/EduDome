import React  from 'react'
import { Grid } from '@mui/material'
import CreateNotification from '../../components/CreateNotification'
import TrackNotifications from '../../components/TrackNotifications'

const CreateAndTrackNotifications = () => {

  return (
  <Grid container width='100%' spacing={2}>
    <Grid width='50%' item xs={12} sm={6}>
      <CreateNotification/>
    </Grid>


    <Grid width='50%' item xs={6}>
      <TrackNotifications/>
    </Grid>
  </Grid>
  )
}

export default CreateAndTrackNotifications


//Message: (text box)
//Severity: low/medium/high
//To: (class list, teachers list)
//date to activate: calendar option
//date to delete: calendar option past activation date
//box to see active notifications and notifications on hold
