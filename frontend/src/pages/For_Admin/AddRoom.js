import React, { useState } from 'react'
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    Grid,
    Typography,
  } from "@mui/material";
import UserAppBar from "../../components/UserAppBar";
import {useLocation} from 'react-router-dom';


const AddRoom = () => {

  const location = useLocation();
  const room = location.state ? location.state.room : null
  
  console.log(room)


  const [formData, setFormData] = useState({
    id: room ? room.id : '',
    maxCapacity: room ? room.maxCapacity : 0,
    type: room ? room.type : ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddRoomToDB = (event) => {
    event.preventDefault();
    console.log(formData)
    // TODO: handle form submission logic here (make api call to create staff in DB)
    // TODO: make sure it checks first if the room already exists
    //if chnages are made it should save them think of that logic
    //!could make handleAddRoomToDB and handleEditRoomInDB by checking in backend if ID exists then save the changes if the ID doesn't exist then add the staff to DB
  };

  const handleEditRoomInDB = (event) => {
    event.preventDefault();
    console.log(formData)
    // TODO: handle form submission logic here (make api call to edit staff in DB)
  };

  return (
    <div>
    <UserAppBar user={'admin'} />

    <form>
    <Typography variant="h6" gutterBottom m='20px 10px'>
        {room ? 'Edit Room' : 'Create Room'}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={1} sm={3}>
          <FormControl >
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              fullWidth
              required
              labelId="type-label"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              sx={{minWidth: '180px'}}
            >
              <MenuItem value="Classroom">Classroom</MenuItem>
              <MenuItem value="Lab">Lab</MenuItem>
              <MenuItem value="Computer Room">Computer Room</MenuItem>
              <MenuItem value="Music Room">Music Room</MenuItem>
              <MenuItem value="Art Room">Art Room</MenuItem>
              <MenuItem value="Changing Room">Changing Room</MenuItem>
              <MenuItem value="Sports Hall">Sports Hall</MenuItem>
              <MenuItem value="Common Room">Common Room</MenuItem>
              <MenuItem value="Library">Library</MenuItem>
              <MenuItem value="Office">Office</MenuItem>
              <MenuItem value="Cafeteria">Cafeteria</MenuItem>
              <MenuItem value="Staff Room">Staff Room</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={1} sm={3}>
          <TextField
            required
            id="id"
            name="id"
            label="Room Name/Number"
            sx={{minWidth: '180px'}}
            value={formData.id}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={1} sm={3}>
        <TextField
              required
              id="maxCapacity"
              name="maxCapacity"
              type="number"
              label="Max Capacity"
              sx={{minWidth: '180px'}}
              value={formData.maxCapacity}
              inputProps={{ pattern: "^[1-9]\\d*$" }}
              onChange={handleInputChange}
            />
        </Grid>
        <Grid item xs={12}>
            {room ?
            <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => handleEditRoomInDB(e)}
            >
            Save changes
            </Button>
            : <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => handleAddRoomToDB(e)}
            >
            Add Room
            </Button>}
        </Grid>
  </Grid>
  </form>
    </div>
  )
}

export default AddRoom