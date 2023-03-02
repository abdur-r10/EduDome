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



const AddStaff = () => {
  const location = useLocation();
  console.log(location.state.staff)
  const staff = location.state.staff

  const [formData, setFormData] = useState({
    title: staff ? staff.title : "",
    firstName: staff ? staff.firstName : "",
    middleName: staff ? staff.middleName : "",
    lastName: staff ? staff.lastName : "",
    mobileNumber: staff ? staff.mobileNumber : "",
    telephoneNumber: staff ? staff.telephoneNumber : "",
    address: staff ? staff.address : "",
    email: staff ? staff.email : "",
    emergencyContactName: staff ? staff.emergencyContactName : "",
    emergencyContactNumber: staff ? staff.emergencyContactNumber : "",
    emergencyContactAddress: staff ? staff.emergencyContactAddress : "",
    staffImage: staff ? staff.title : null,
    staffEmail: staff ? staff.title : "",
    password: staff ? staff.title : "",
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission logic here (make api call to create staff in DB)
    // TODO: make sure it checks first if the staff email address already exists
    //if chnages are made it should save them think of that logic
  };

  return (
    <div>
    <UserAppBar user={'admin'} />

    
    <form onSubmit={handleFormSubmit}>
      <Typography variant="h6" gutterBottom>
        Create Staff
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl >
            <InputLabel id="title-label">Title</InputLabel>
            <Select
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
        <Grid item xs={12}>
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
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
            </div>
          );
        };
        
        export default AddStaff;
        


/*
sampleTeacherData = {
    id: default,
    user: teacher,
    formID: from list of form classes,
    Subjects Taugh: from list of subjects,
    Level: gcse, a-level, both,
    Classroom: n/a or from list of rooms,
    Classes Taught: from list of classes,
    Role: subject/suply,
}
*/

/* 
sampleAdminData = {
    id: default,
    user: admin,
    role: register/notifications/fees/data etc
}
*/