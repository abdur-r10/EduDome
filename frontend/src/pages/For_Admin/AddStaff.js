import React, { useState } from "react";
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
import { generatePassword } from "../../utils/generatePassword"; // a function that generates a random password
import { schoolAddress, schoolNumber } from "../../utils/schoolInfo";
import UserAppBar from "../../components/UserAppBar";
import {useLocation} from 'react-router-dom';
import { generateId } from "../../utils/generateUUID";




const AddStaff = () => {
  const location = useLocation();
  const staff = location.state ? location.state.staff : null
  
  console.log(staff)
  //! use useEffect to make call to get room data and somehow cache it 
  const [roomData, setRoomData] = useState([
    {id: 'F1', maxCapacity: '30', type: 'Classroom'},
    {id: 'F2', maxCapacity: '30', type: 'Classroom'},
    {id: 'F3', maxCapacity: '30', type: 'Classroom'},
    {id: 'F4', maxCapacity: '30', type: 'Classroom'},
    {id: 'F5', maxCapacity: '30', type: 'Classroom'},
    {id: 'F6', maxCapacity: '30', type: 'Classroom'},
    {id: 'F7', maxCapacity: '30', type: 'Classroom'},
    {id: 'F8', maxCapacity: '30', type: 'Classroom'},
    {id: 'F9', maxCapacity: '30', type: 'Classroom'},
    {id: 'F10', maxCapacity: '30', type: 'Classroom'},
    {id: 'S1', maxCapacity: '30', type: 'Classroom'},
    {id: 'S2', maxCapacity: '30', type: 'Classroom'},
    {id: 'S3', maxCapacity: '30', type: 'Classroom'},
    {id: 'S4', maxCapacity: '30', type: 'Classroom'},
    {id: 'S5', maxCapacity: '30', type: 'Classroom'},
    {id: 'S6', maxCapacity: '30', type: 'Classroom'},
    {id: 'S7', maxCapacity: '30', type: 'Classroom'},
    {id: 'S8', maxCapacity: '30', type: 'Classroom'},
    {id: 'S9', maxCapacity: '30', type: 'Classroom'},
    {id: 'S10', maxCapacity: '30', type: 'Classroom'},
    {id: 'T1', maxCapacity: '30', type: 'Classroom'},
    {id: 'T2', maxCapacity: '30', type: 'Classroom'},
    {id: 'T3', maxCapacity: '30', type: 'Classroom'},
    {id: 'T4', maxCapacity: '30', type: 'Classroom'},
    {id: 'T5', maxCapacity: '30', type: 'Classroom'},
    {id: 'T6', maxCapacity: '30', type: 'Classroom'},
    {id: 'T7', maxCapacity: '30', type: 'Classroom'},
    {id: 'T8', maxCapacity: '30', type: 'Classroom'},
    {id: 'T9', maxCapacity: '30', type: 'Classroom'},
    {id: 'T10', maxCapacity: '30', type: 'Classroom'}
  ])

  /* sampleRoomData = [
    {id: 'F1', maxCapacity: '30', type: 'Classroom'},
    {id: 'F2', maxCapacity: '30', type: 'Classroom'},
    {id: 'F3', maxCapacity: '30', type: 'Classroom'},
    {id: 'F4', maxCapacity: '30', type: 'Classroom'},
    {id: 'F5', maxCapacity: '30', type: 'Classroom'},
    {id: 'F6', maxCapacity: '30', type: 'Classroom'},
    {id: 'F7', maxCapacity: '30', type: 'Classroom'},
    {id: 'F8', maxCapacity: '30', type: 'Classroom'},
    {id: 'F9', maxCapacity: '30', type: 'Classroom'},
    {id: 'F10', maxCapacity: '30', type: 'Classroom'},
    {id: 'S1', maxCapacity: '30', type: 'Classroom'},
    {id: 'S2', maxCapacity: '30', type: 'Classroom'},
    {id: 'S3', maxCapacity: '30', type: 'Classroom'},
    {id: 'S4', maxCapacity: '30', type: 'Classroom'},
    {id: 'S5', maxCapacity: '30', type: 'Classroom'},
    {id: 'S6', maxCapacity: '30', type: 'Classroom'},
    {id: 'S7', maxCapacity: '30', type: 'Classroom'},
    {id: 'S8', maxCapacity: '30', type: 'Classroom'},
    {id: 'S9', maxCapacity: '30', type: 'Classroom'},
    {id: 'S10', maxCapacity: '30', type: 'Classroom'},
    {id: 'T1', maxCapacity: '30', type: 'Classroom'},
    {id: 'T2', maxCapacity: '30', type: 'Classroom'},
    {id: 'T3', maxCapacity: '30', type: 'Classroom'},
    {id: 'T4', maxCapacity: '30', type: 'Classroom'},
    {id: 'T5', maxCapacity: '30', type: 'Classroom'},
    {id: 'T6', maxCapacity: '30', type: 'Classroom'},
    {id: 'T7', maxCapacity: '30', type: 'Classroom'},
    {id: 'T8', maxCapacity: '30', type: 'Classroom'},
    {id: 'T9', maxCapacity: '30', type: 'Classroom'},
    {id: 'T10', maxCapacity: '30', type: 'Classroom'}
  ] */

  const [formData, setFormData] = useState({
    id: staff ? staff.id : generateId('staff'),
    title: staff ? staff.title : "",
    firstName: staff ? staff.firstName : "",
    middleName: staff ? staff.middleName : "",
    lastName: staff ? staff.lastName : "",
    mobileNumber: staff ? staff.mobileNumber : "",
    telephoneNumber: staff ? staff.telephoneNumber : "",
    postcode: staff ? staff.postcode : "",
    address: staff ? staff.address : "",
    email: staff ? staff.email : "",
    emergencyContactName: staff ? staff.emergencyContactName : "",
    emergencyContactNumber: staff ? staff.emergencyContactNumber : "",
    emergencyContactAddress: staff ? staff.emergencyContactAddress : "",
    staffImage: staff ? staff.title : null,
    staffEmail: staff ? staff.title : "",
    password: staff ? staff.title : "",
    assignedToRoom: staff ? staff.assignedToRoom : ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePasswordGeneration = () => {
    const generatedPassword = generatePassword(7); // generate a random password with 7 characters
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: generatedPassword,
    }));
  };

  const handleAddStaffToDB = (event) => {
    event.preventDefault();
    console.log(formData)
    // TODO: handle form submission logic here (make api call to create staff in DB)
    // TODO: make sure it checks first if the staff email address already exists
    //if chnages are made it should save them (think of that logic)
    //!could make handleAddStaffToDB and handleEditStaffInDB by checking in backend if ID exists then save the changes if the ID doesn't exist then add the staff to DB
  };

  const handleEditStaffInDB = (event) => {
    event.preventDefault();
    console.log(formData)
    // TODO: handle form submission logic here (make api call to edit staff in DB)
  };

  const handleRemoveStaffFromDB = () => {
    //!Logic for removing student in backend from DB
    //!Should also confirm if this is what user wants to do
  };


  const selectRoom = roomData.map((room) => {
    return(
      <MenuItem key={room.id} value={room.id}>{room.id}</MenuItem>
    )
  })

  return (
    <div>
    <UserAppBar user={'admin'} />

    {staff && <Button
      variant="contained"
      color="error"
      onClick={handleRemoveStaffFromDB}
      sx={{mb: '20px'}}
    >
      Remove Staff
    </Button>}
    <form>
      <Typography variant="h6" gutterBottom m='20px 10px'>
        {staff ? 'Edit Staff' : 'Create Staff'}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl >
            <InputLabel id="title-label">Title</InputLabel>
            <Select
              required
              labelId="title-label"
              id="title"
              name="title"
              style={{minWidth: 120}}
              value={formData.title}
              onChange={handleInputChange}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Dr">Dr</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="middleName"
            name="middleName"
            label="Middle name"
            fullWidth
            value={formData.middleName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile number"
            fullWidth
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="telephoneNumber"
            name="telephoneNumber"
            label="Telephone number"
            fullWidth
            value={formData.telephoneNumber}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postcode"
            name="postcode"
            label="Postcode"
            fullWidth
            value={formData.postcode}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            value={formData.address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emergencyContactName"
            name="emergencyContactName"
            label="Emergency contact name"
            fullWidth
            value={formData.emergencyContactName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emergencyContactNumber"
            name="emergencyContactNumber"
            label="Emergency contact number"
            fullWidth
            value={formData.emergencyContactNumber}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="emergencyContactAddress"
            name="emergencyContactAddress"
            label="Emergency contact address"
            fullWidth
            value={formData.emergencyContactAddress}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="staffImage"
            name="staffImage"
            label="Staff image"
            type="file"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                staffImage: event.target.files[0],
              }))
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="staffEmail"
            name="staffEmail"
            label="Staff email"
            fullWidth
            value={formData.staffEmail}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="password"
            name="password"
            label="Password"
            fullWidth
            value={formData.password}
            onChange={handleInputChange}
            InputProps={{
              readOnly: true,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handlePasswordGeneration}
          >
            Generate Password
          </Button>
        </Grid>

        <Grid item xs={2} sm={2}>
        <InputLabel id="assign-a-room-label">Assign A Room</InputLabel>
        <Select
          labelId="assign-a-room-label"
          id="assignedToRoom"
          name="assignedToRoom"
          style={{minWidth: 120}}
          value={formData.assignedToRoom}
          onChange={handleInputChange}
        >
          {selectRoom}
        </Select>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="schoolAddress"
            name="schoolAddress"
            label="School Address"
            fullWidth
            value={schoolAddress}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="schoolNumber"
            name="schoolNumber"
            label="School Number"
            fullWidth
            value={schoolNumber}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          {staff ?
            <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{backgroundColor: '#e87121'}}
            onClick={(e) => handleEditStaffInDB(e)}
          >
            Save changes
          </Button>
            : <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{backgroundColor: '#e87121'}}
            onClick={(e) => handleAddStaffToDB(e)}
          >
            Add Staff
          </Button>}
        </Grid>
      </Grid>
    </form>
  </div>
  );
};
        
export default AddStaff;
        