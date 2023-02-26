import React from 'react'
import { Button, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import UserAppBar from '../components/UserAppBar';

const options = [
  {key: 1, name: 'Adjust registers', colour: '#1b5e20', link: '/adjust-registers' }, 
  {key: 2, name: 'Create Notifications', colour: '#e65100', link: '/create-notifications' }, 
  {key: 3, name: 'Start/Stop Parents Evening', colour: '#1b5e20', link: '/parents-evening' }, 
  {key: 4, name: 'Add/Remove/Edit Student Info', colour: '#e65100', link: '/edit-student-info' }, 
  {key: 5, name: 'Send Email/Text/Report to parents', colour: '#1b5e20', link: '/send-email' }, 
  {key: 6, name: 'Add/Remove/Edit Teacher Info', colour: '#e65100', link: '/edit-teacher-info' }, 
  {key: 7, name: 'Create/Edit Schedules', colour: '#1b5e20', link: '/edit-schedules' }, 
  {key: 8, name: 'Add/Remove/Edit Admin Info', colour: '#e65100', link: '/edit-admin-info' }
]

const displayOptions = options.map(({ key, name, colour, link }) => (
<Grid key={key} item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
  <Link to={link}>
  <Button variant="contained" style={{background: colour}}>
    {name}
  </Button>
  </Link>
</Grid>
))


export default function AdminUI() {
  return (
  <div style={{ marginTop: '10px'}}>
    <UserAppBar user={'admin'}/>
    <Grid container xs={6} item spacing={2} marginTop='50px' marginLeft='25%'alignItems="center" justifyContent="center" sx={{rowGap: 2, columnGap: 2}}>
      {displayOptions}
    </Grid>
  </div>
  )
}

//!!ADD A SEARCH BAR FOR ADMIN TO SEARCH VIA TEACHER OR STUDENT
