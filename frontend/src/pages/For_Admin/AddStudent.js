import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText, IconButton, FormControlLabel, Checkbox } from "@mui/material";
import { generatePassword } from "../../utils/generatePassword"; // a function that generates a random password
import { styled } from "@mui/system"
import DeleteIcon from '@mui/icons-material/Delete';
import {useLocation} from 'react-router-dom';
import { generateId } from "../../utils/generateUUID";




const StyledFormControl = styled(FormControl)({
    margin: (theme) => theme.spacing(1),
    minWidth: '120px',
    width: '100%',
  });
  
  const StyledSelect = styled(Select)({
    marginTop: (theme) => theme.spacing(2),
  });
  
  const StyledButton = styled(Button)({
    margin: (theme) => theme.spacing(1),
  });
  

const AddStudent= () => {
    const location = useLocation();
    const student = location.state ? location.state.student : null

    console.log(student)


  const [formData, setFormData] = useState({
    id: student ? student.id : generateId('pupil'),
    firstName: student ? student.firstName : "",
    middleName: student ? student.middleName: "",
    lastName: student ? student.lastName: "",
    joinDate: student ? student.joinDate: new Date().toISOString().slice(0, 10),
    yearGroup: student ? student.yearGroup: "",
    email: student ? student.email: "",
    password: student ? student.password: "",
    dateOfBirth: student ? student.dateOfBirth: "",
    address: student ? student.address: "",
    studentImage: student ? student.studentImage: null,
    parents: student ? student.parents: [],
    emergencyContacts: student ? student.emergencyContacts: []
  });

  const handlePasswordGeneration = () => {
    const generatedPassword = generatePassword(7); 
    setFormData((prevFormData) => ({
      ...prevFormData,
      password: generatedPassword,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleParentInputChange = (event, index) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const parents = [...prevFormData.parents];
      parents[index][name] = value;
      return {
        ...prevFormData,
        parents: parents,
      };
    });
  };

  const handleEmergencyContactInputChange = (event, index) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      emergencyContacts: prevFormData.emergencyContacts.map((contact, i) => {
        if (i === index) {
          return {
            ...contact,
            [name]: value
          };
        } else {
          return contact;
        }
      })
    }));
  };

  const handleParentFirstLineOfContactChange = (event, index) => {
    const { checked } = event.target;
    console.log(event)
    setFormData((prevFormData) => ({
      ...prevFormData,
      parents: prevFormData.parents.map((parent, i) => {
        if (i === index) {
          return {
            ...parent,
            firstLineOfContact: checked
          };
        } else {
          return parent;
        }
      })
    }));
  };

  const handleAddParent = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      parents: [
        ...prevFormData.parents,
        {
          id: generateId('guardian'),  
          title: "",
          firstName: "",
          middleName: "",
          lastName: "",
          relationToChild: "",
          email: "",
          telephoneNumber: "",
          mobileNumber: "",
          address: formData.address,
          firstLineOfContact: false
        },
      ],
    }));
  };

  const handleAddEmergencyContact = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      emergencyContacts: [
        ...prevFormData.emergencyContacts,
        {
          name: "",
          relationship: "",
          telephoneNumber: ""
        }
      ]
    }));
  };

  const handleRemoveEmergencyContact = (indexToRemove) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      emergencyContacts: prevFormData.emergencyContacts.filter((_, index) => index !== indexToRemove),
    }));
  }

  const handleRemoveParent = (indexToRemove) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      parents: prevFormData.parents.filter((_, index) => index !== indexToRemove),
    }));
  }

    const handleAddStudentToDB = (event) => {
        event.preventDefault();
        console.log(formData);
        //!could make handleAddStudentToDB and handleEditStudentInDB by checking in backend if ID exists then save the changes if the ID doesn't exist then add the student to DB
    };

    const handleEditStudentInDB = (event) => {
        event.preventDefault();
        console.log(formData);
    };

return (
<form>
    <Typography variant="h6" gutterBottom m='20px 10px'>
        {student ? 'Edit Student' : 'Create Student'}
    </Typography>
<Grid container spacing={3}>
<Grid item xs={12} sm={6}>
  <StyledFormControl>
    <TextField
      label="First Name"
      name="firstName"
      value={formData.firstName}
      onChange={handleInputChange}
      required
    />
    <TextField
      label="Middle Name"
      name="middleName"
      value={formData.middleName}
      onChange={handleInputChange}
    />
    <TextField
      label="Last Name"
      name="lastName"
      value={formData.lastName}
      onChange={handleInputChange}
      required
    />
  </StyledFormControl>
  </Grid>
  <Grid item xs={12} sm={6}>
  <StyledFormControl>
    <TextField
      label="Join Date"
      name="joinDate"
      type="date"
      value={formData.joinDate}
      onChange={handleInputChange}
      required
    />
    <StyledFormControl>
      <InputLabel>Year Group</InputLabel>
      <StyledSelect
        name="yearGroup"
        value={formData.yearGroup}
        onChange={handleInputChange}
        required
      >
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={13}>13</MenuItem>
      </StyledSelect>
      <FormHelperText>Select the student's year group</FormHelperText>
    </StyledFormControl>
  </StyledFormControl>
  </Grid>

  <Grid item xs={12} sm={6}>
  <StyledFormControl>
    <TextField
      label="Email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleInputChange}
      required
    />
    <TextField
      label="Password"
      name="password"
      value={formData.password}
      onChange={handleInputChange}
      required
      InputProps={{
        readOnly: true,
      }}
    />
    <StyledButton
      variant="outlined"
      color="primary"
      onClick={handlePasswordGeneration}
    >
      Generate Password
    </StyledButton>
  </StyledFormControl>
  </Grid>
  
  <Grid item xs={12} sm={6}>
  <StyledFormControl>
    <TextField
      label="Date of Birth"
      name="dateOfBirth"
      type="date"
      value={formData.dateOfBirth}
      onChange={handleInputChange}
      required
    />
    <TextField
      label="Address"
      name="address"
      multiline
      rows={4}
      value={formData.address}
      onChange={handleInputChange}
      required
    />
  </StyledFormControl>
  </Grid>

  <Grid item xs={12} sm={6}>
  <StyledFormControl>
    <Typography pb='15px'>Upload image</Typography>
    <input
      accept="image/*"
      type="file"
      onChange={(event) =>
        setFormData((prevFormData) => ({
          ...prevFormData,
          studentImage: event.target.files[0],
        }))
      }
    />
  </StyledFormControl>
  </Grid>

  <Grid item xs={12} sm={6}>
  <StyledFormControl>
    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleAddParent}
    >
      Add Parent/Carer
    </StyledButton>
    {formData.parents.map((parent, index) => (
      <StyledFormControl key={index}>
        <h4>Parent/Carer {index + 1}</h4>
        <StyledFormControl>
          <StyledFormControl>
            <InputLabel>Title</InputLabel>
            <StyledSelect
              name="title"
              value={parent.title}
              onChange={(event) => handleParentInputChange(event, index)}
              required        >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Dr">Dr</MenuItem>
            </StyledSelect>
            <FormHelperText>Select the parent's title</FormHelperText>
          </StyledFormControl>
          <TextField
            label="First Name"
            name="firstName"
            value={parent.firstName}
            onChange={(event) => handleParentInputChange(event, index)}
            required
          />
          <TextField
            label="Middle Name"
            name="middleName"
            value={parent.middleName}
            onChange={(event) => handleParentInputChange(event, index)}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={parent.lastName}
            onChange={(event) => handleParentInputChange(event, index)}
            required
          />
        </StyledFormControl>
        <StyledFormControl>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={parent.email}
            onChange={(event) => handleParentInputChange(event, index)}
            required
          />
          <TextField
            label="Mobile Number"
            name="mobileNumber"
            type="tel"
            value={parent.mobileNumber}
            onChange={(event) => handleParentInputChange(event, index)}
            required
          />
          <TextField
            label="Telephone Number"
            name="telephoneNumber"
            type="tel"
            value={parent.telephoneNumber}
            onChange={(event) => handleParentInputChange(event, index)}
          />
          <TextField
            label="Address"
            name="address"
            multiline
            rows={4}
            value={parent.address}
            onChange={(event) => handleParentInputChange(event, index)}
            required
          />

<StyledFormControl>
<InputLabel>Relation to Student</InputLabel>
<StyledSelect
name="relationToChild"
value={parent.relationToChild}
onChange={(event) => handleParentInputChange(event, index)}
required
>

<MenuItem value="Father">Father</MenuItem>
<MenuItem value="Mother">Mother</MenuItem>
<MenuItem value="Step-Father">Step-Father</MenuItem>
<MenuItem value="Step-Mother">Step-Mother</MenuItem>
<MenuItem value="Guardian">Guardian</MenuItem>
</StyledSelect>
</StyledFormControl>

<FormControlLabel
  control={
    <Checkbox
      checked={parent.firstLineOfContact}
      onChange={(event) => handleParentFirstLineOfContactChange(event, index)}
      name="firstLineOfContact"
      color="primary"
    />
  }
  label="First Line of Contact"
/>

    <IconButton
    onClick={() => handleRemoveParent(index)}
    aria-label="remove parent"
    >
    <DeleteIcon />
    </IconButton>
</StyledFormControl>
</StyledFormControl>
))}
    

    <StyledButton
  variant="contained"
  color="primary"
  onClick={handleAddEmergencyContact}
>
  Add Emergency Contact
</StyledButton>
{formData.emergencyContacts.map((contact, index) => (
  <div key={index}>
    <h4>Emergency Contact {index + 1}</h4>
    <TextField
      label="Name"
      name="name"
      value={contact.name}
      onChange={(event) => handleEmergencyContactInputChange(event, index)}
      required
    />
    <TextField
      label="Relationship"
      name="relationship"
      value={contact.relationship}
      onChange={(event) => handleEmergencyContactInputChange(event, index)}
      required
    />
    <TextField
      label="Telephone Number"
      name="telephoneNumber"
      value={contact.telephoneNumber}
      onChange={(event) => handleEmergencyContactInputChange(event, index)}
      required
    />

<IconButton
    onClick={() => handleRemoveEmergencyContact(index)}
    aria-label="remove emergency contact"
    >
    <DeleteIcon />
    </IconButton>
  </div>
))}


    </StyledFormControl>
    </Grid>
    <Grid item xs={12} sm={6}>
  {student ? 
  <StyledButton
    variant="contained"
    color="primary"
    type="submit"
    onClick={(e) => handleAddStudentToDB(e)}
    >
    Save Changes
    </StyledButton>
  : <StyledButton
    variant="contained"
    color="primary"
    type="submit"
    onClick={(e) => handleEditStudentInDB(e)}
  >
    Add Student
  </StyledButton>}
  </Grid>
  </Grid>
</form>
);
};


export default AddStudent

/* 
sampleData = {
    id: generate ID,
    user: student,
    Parent/Carer: {id: generate ID, user: parent, parent of: ID of child, title, fname, mname, lname, email, Phone no., Mobile no., address},
    first line of contact: ,
    fname: ,
    mname: ,
    lname: ,
    join date: ,
    formId: ,
    leave date: ,
    status: ,
    year group : ,
    email: ,
    password: ,
    DOB: ,
    student image ,
    address: ,
}
*/