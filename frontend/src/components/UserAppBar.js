import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLocation, useNavigate } from 'react-router-dom';
import  { adminMenuOptions }  from '../utils/menuOptions';



const UserAppBar = ({ user }) => {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hamburgerAnchorEl, setHamburgerAnchorEl] = React.useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    handleMenuClose();
    navigate('/'); // This line redirects to the home page
  };

  const handleUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setHamburgerAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setHamburgerAnchorEl(null);
  };


  const showMenu = location.pathname !== '/admin/dashboard' && user === 'admin';

  const displayMenuItems = adminMenuOptions.map(({ key, name, link, options }) => {
      return (
        <div key={key}>
          {options.map(({ name: optionName, link: optionLink }) => {
            if(location.pathname !== optionLink){
              return (
                <MenuItem key={optionLink} component="a" href={optionLink} onClick={handleMenuClose}>
                  {optionName}
                </MenuItem>
              )
            }
            return null
          }
          )}
        </div>
      );
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
            onClick={handleMenu}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
          id="menu-appbar"
          anchorEl={hamburgerAnchorEl}
          open={Boolean(hamburgerAnchorEl)}
          onClose={handleMenuClose}
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
                onClick={handleUserMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default UserAppBar