import React, { useState} from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu, List, ListItem, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLocation, useNavigate } from 'react-router-dom';
import  { adminMenuOptions, teacherMenuOptions, guardianMenuOptions, studentMenuOptions }  from '../utils/menuOptions';



const UserAppBar = ({ user }) => {

  const menuOptions = {
    admin: adminMenuOptions,
    teacher: teacherMenuOptions,
    guardian: guardianMenuOptions,
    student: studentMenuOptions
  }

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [hamburgerAnchorEl, setHamburgerAnchorEl] = useState(null);
  const [nestedMenuStates, setNestedMenuStates] = useState(new Array(menuOptions[user].length).fill(false));


  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    handleMenuClose();
    navigate('/');
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

  const handleClick = (index) => {
    const newStates = [...nestedMenuStates];
    newStates[index] = !newStates[index];
    setNestedMenuStates(newStates);
  }

  

//show menu everywhere apart from admin dashboard
  const showMenu = (location.pathname !== '/admin/dashboard') && (user === 'admin' || 'teacher' || 'guardian' || 'student');

  const displayMenuItems = menuOptions[user].map(({ key, name, link, options }, index) => {
  const showNestedMenu = nestedMenuStates[index];
  if (options === undefined) { // if no options (don't want nested)
    if(location.pathname !== link){
      return (
        <div key={key}>
          <ListItem component="a" href={link} onClick={handleMenuClose} style={{ color: 'black' }}>
            {name}
          </ListItem>
        </div>
      );
    }
    else {
      return null
    }
  } else { // if other links with nested options
    return (
      <div key={key}>
        <ListItem button onClick={() => handleClick(index)} style={{ paddingLeft: '2rem', color: 'black' }}>
          {name}
          {showNestedMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
         
        <Collapse in={showNestedMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {options.map(({ name: optionName, link: optionLink }) => {
              if (options) {
                if(location.pathname !== optionLink){ //show links to all pages apart from current page
                  return (
                    <MenuItem key={optionLink} component="a" href={optionLink} onClick={handleMenuClose} style={{ paddingLeft: '2rem', backgroundColor: 'lightgray', fontWeight: 'bold', color: 'black'}}>
                      {optionName}
                    </MenuItem>
                  );
                }
                return null //don't show the link to the current page
                
              }
              return null
            })}
          </List>
        </Collapse>

      </div>
    );
  }
});

function getCurrentLocationName() {
  if(location.pathname.includes('dashboard')){
    const name = location.pathname.split("/").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    return `EduDome ${name}`
  }
  else if(user === 'admin'){
    return location.pathname.match(/[A-Z][a-z]+|[a-z]+/g).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

  }
  else if(user === 'teacher'){
    return location.pathname.substring(1).split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
  }
}

const currentLocationName = getCurrentLocationName()


  return (
     <Box sx={{ width: '100%', mb:'20px' }}>
      <AppBar position="static" sx={{backgroundColor: '#e87121'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
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
            User name
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentLocationName}
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