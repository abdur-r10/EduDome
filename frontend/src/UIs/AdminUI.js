import React, { useState } from 'react';
import { Button, Grid, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { adminMenuOptions } from '../utils/menuOptions';
import UserAppBar from '../components/UserAppBar';

export default function AdminUI() {

  const [anchorEls, setAnchorEls] = useState(Array(adminMenuOptions.length).fill(null));


  const handleClick = (event, index) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = event.currentTarget;
    setAnchorEls(newAnchorEls);
  };

  const handleClose = (index) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
  };

  const displayOptions = adminMenuOptions.map(({ key, name, colour, options }, index) => {
    if(name !== 'Back To Dashboard') {
    return (
      <Grid key={key} item xs={6} container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button
          aria-controls={`menu-${key}`}
          aria-haspopup="true"
          variant="contained"
          style={{ background: colour }}
          onClick={(event) => handleClick(event, index)}
        >
          {name}
        </Button>
        <Menu id={`menu-${key}`} anchorEl={anchorEls[index]} open={Boolean(anchorEls[index])} onClose={() => handleClose(index)}>
          {options.map(({ name: optionName, link }) => (
            <MenuItem key={link} onClick={() => handleClose(index)}>
              <Link to={link}>{optionName}</Link>
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    )}
  });

  return (
    <div style={{ marginTop: '10px' }}>
      <UserAppBar user={'admin'} />
      <Grid container xs={6} item spacing={2} marginTop="50px" marginLeft="25%" alignItems="center" justifyContent="center" sx={{ rowGap: 2, columnGap: 2 }}>
        {displayOptions}
      </Grid>
    </div>
  );
}





//!!ADD A SEARCH BAR FOR ADMIN TO SEARCH VIA TEACHER OR STUDENT
