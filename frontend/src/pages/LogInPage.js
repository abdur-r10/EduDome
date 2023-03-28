import React from 'react'
import { Paper, Grid, TextField, Button, Typography } from '@mui/material'
import Logo from '../assets/EduDome-1.png';

/*
//!USE THIS FOR WHEN HANDLING LOGGING IN

function handleLoginFormSubmit(event) {
  event.preventDefault();
  const user = { username: 'admin', role: 'admin' }; //this is just an example we want to make an API call to get the user info and set the user as appropriate
  onLogin(user); // Call the onLogin prop from App.js with the user object
}
*/

export default function LogInPage() {
    const containerStyle = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };
      const paperStyle = {
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        width: '100%',
      };
      const formStyle = { width: '100%'};
      const submitStyle = { margin: '24px 0 16px' };
      const imageStyle = {
        height: '33%',
        width: '33%',
      };

  return (
    <div style={containerStyle}>
      <Paper style={paperStyle}>
        <Grid container spacing={2} direction="column" alignItems="center">
        <img src={Logo} alt='logo' style={imageStyle}/>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5">
              Sign in to EduDome
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form style={formStyle} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={submitStyle}
              >
                Sign In
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
