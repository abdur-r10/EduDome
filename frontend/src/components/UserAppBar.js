import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';



const UserAppBar = ({ user }) => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hamburgerAnchorEl, setHamburgerAnchorEl] = React.useState(null);
  const location = useLocation();


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAdminMenu = (event) => {
    setHamburgerAnchorEl(event.currentTarget);
  };

  const handleAdminMenuClose = () => {
    setHamburgerAnchorEl(null);
  };

  const adminOptions = [
    {key: 1, name: 'Adjust registers', colour: '#1b5e20', link: '/adjust-registers' }, 
    {key: 2, name: 'Create Notifications', colour: '#e65100', link: '/create-notifications' }, 
    {key: 3, name: 'Start/Stop Parents Evening', colour: '#1b5e20', link: '/parents-evening' }, 
    {key: 4, name: 'Add/Remove/Edit Student Info', colour: '#e65100', link: '/edit-student-info' }, 
    {key: 5, name: 'Send Email/Text/Report to parents', colour: '#1b5e20', link: '/send-email' }, 
    {key: 6, name: 'Add/Remove/Edit Teacher Info', colour: '#e65100', link: '/edit-teacher-info' }, 
    {key: 7, name: 'Create/Edit Schedules', colour: '#1b5e20', link: '/edit-schedules' }, 
    {key: 8, name: 'Add/Remove/Edit Admin Info', colour: '#e65100', link: '/edit-admin-info' }
  ]

  const showMenu = location.pathname !== '/admin/dashboards' && user === 'admin';

  const displayMenuItems = adminOptions.map(({ key, name, colour, link }) => {
    if (location.pathname !== link) {
      return (
        <MenuItem key={key} component="a" href={link} onClick={handleAdminMenuClose}>
          {name}
        </MenuItem>
      );
    }
    return null;
  });

  return (
     <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          {showMenu && (
            <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleAdminMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
          id="menu-appbar"
          anchorEl={hamburgerAnchorEl}
          open={Boolean(hamburgerAnchorEl)}
          onClose={handleAdminMenuClose}
          >
            {displayMenuItems}
          </Menu>
          </div>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EduDome {user.charAt(0).toUpperCase() + user.slice(1)} Dashboard
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleChange}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default UserAppBar