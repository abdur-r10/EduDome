import React, { useState } from "react";
import { Grid, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText, IconButton, FormControlLabel, Checkbox } from "@mui/material";
import { generatePassword } from "../../utils/generatePassword"; // a function that generates a random password
import { styled } from "@mui/system"
import DeleteIcon from '@mui/icons-material/Delete';
import {useLocation} from 'react-router-dom';
import { generateId } from "../../utils/generateUUID";
import UserAppBar from "../../components/UserAppBar";
import GuardianSearchPopUp from "../../components/GuardianSearchPopUp";


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

  const StyledSubmitButton = styled(Button)({
    margin: (theme) => theme.spacing(1),
    backgroundColor: '#e87121'
  });
  

const AddStudent= () => {
    const location = useLocation();
    const student = location.state ? location.state.student : null
    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [selectedParent, setSelectedGuardian] = useState(null);

    const handlePopUpOpen = () => {
      setIsPopUpVisible(true);
    };

    const handlePopUpClose = () => {
      setIsPopUpVisible(false);
    };

    const handleGuardianSelect = (guardian) => {
      setSelectedGuardian(guardian);
      setIsPopUpVisible(false);
      // TODO: Do something with selected parent data
      handleAddGuardian(guardian)
      console.log(guardian)
    };

    //console.log(student)


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
    postcode: student ? student.postcode : "",
    address: student ? student.address: "",
    studentImage: student ? student.studentImage: null,
    contacts: student ? student.contacts : {guardians: [], emergencyContacts: []}
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

  
  const handleContactInputChange = (event, index, typeOfContact) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const contacts = {...prevFormData.contacts};
      contacts[typeOfContact][index][name] = value;
      return {
        ...prevFormData,
        contacts: contacts,
      };
    });
  };
  
  const handleGuardianFirstLineOfContactChange = (event, index) => {
    const { checked } = event.target;
  
    setFormData((prevFormData) => {
      const newGuardians = prevFormData.contacts.guardians.map((guardian, i) => {
        if (i === index) {
          return {
            ...guardian,
            firstLineOfContact: checked
          };
        } else {
          return guardian;
        }
      });
  
      const newContacts = {
        ...prevFormData.contacts,
        guardians: newGuardians
      };
  
      return {
        ...prevFormData,
        contacts: newContacts
      };
    });
  };

  const handleAddGuardian = (guardian) => {
    setFormData((prevFormData) => {
      const newGuardian = [
        ...prevFormData.contacts.guardians,
        {
          id: guardian ? guardian.id : generateId('guardian'),  
          title: guardian ? guardian.title : "",
          firstName: guardian ? guardian.firstName : "",
          middleName: guardian ? guardian.middleName : "",
          lastName: guardian ? guardian.lastName : "",
          relationToChild: guardian ? guardian.relationToChild : "",
          email: guardian ? guardian.email : "",
          telephoneNumber: guardian ? guardian.telephoneNumber : "",
          mobileNumber: guardian ? guardian.mobileNumber : "",
          postcode: guardian ? guardian.postcode : formData.postcode,
          address: guardian ? guardian.address : formData.address,
          firstLineOfContact: guardian ? guardian.firstLineOfContact : false
        }
      ]

      const newContacts = {
        ...prevFormData.contacts,
        guardians: newGuardian
      }
      
      return {
        ...prevFormData,
        contacts: newContacts
      }

    });
  };
  
  const handleAddEmergencyContact = () => {
    setFormData((prevFormData) => {
      const newEmergencyContact = [
        ...prevFormData.contacts.emergencyContacts,
        {  
          name: '',
          relationship: '',
          telephoneNumber: ''
        }
      ]

      const newContacts = {
        ...prevFormData.contacts,
        emergencyContacts: newEmergencyContact
      }
      
      return {
        ...prevFormData,
        contacts: newContacts
      }

    });
  };

  const handleRemoveContact = (indexToRemove, typeOfContact) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      contacts: {
        ...prevFormData.contacts,
        [typeOfContact]: prevFormData.contacts[typeOfContact].filter((_, index) => index !== indexToRemove),
      }
    }));
  };
  
  const handleAddStudentToDB = (event) => {
      event.preventDefault();
      console.log(formData);
      //!could make handleAddStudentToDB and handleEditStudentInDB by checking in backend if ID exists then save the changes if the ID doesn't exist then add the student to DB
  };

  const handleEditStudentInDB = (event) => {
      event.preventDefault();
      console.log(formData);
  };

  const handleRemoveStudentFromDB = () => {
    //!Logic for removing student in backend from DB
    //!Should also confirm if this is what user wants to do
  };
    

return (
  <div>
    <UserAppBar user={'admin'}/>
<form>
    <Typography variant="h6" gutterBottom m='20px 10px'>
        {student ? 'Edit or Remove Student' : 'Create Student'}
    </Typography>
    {student && <StyledButton
      variant="contained"
      color="error"
      onClick={handleRemoveStudentFromDB}
      sx={{mb: '20px'}}
    >
      Remove Student
    </StyledButton>}
<Grid container spacing={3}>
<Grid item xs={12} sm={6}>
  <StyledFormControl>
  <TextField
      label="ID"
      name="id"
      value={formData.id}
      onChange={handleInputChange}
      required
      InputProps={{
        readOnly: true,
      }}
    />
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
      label="Postcode"
      name="postcode"
      rows={4}
      value={formData.postcode}
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
      onClick={handlePopUpOpen}
    >
      Add Existing Guardian
    </StyledButton>

    {isPopUpVisible && (
        <div>
          <Button onClick={handlePopUpClose}>Close Pop-Up</Button>
          <GuardianSearchPopUp onGuardianSelect={handleGuardianSelect} />
        </div>
      )}
      {selectedParent && (
        <div>
          {/* Display selected parent data */}
        </div>
      )}


    <StyledButton
      variant="contained"
      color="primary"
      onClick={handleAddGuardian}
    >
      Add New Guardian
    </StyledButton>
    {formData.contacts.guardians.map((guardian, index) => (
      <StyledFormControl key={index}>
        <h4>Guardian {index + 1}</h4>
        <StyledFormControl>
          <StyledFormControl>
            <InputLabel>Title</InputLabel>
            <StyledSelect
              name="title"
              value={guardian.title}
              onChange={(event) => handleContactInputChange(event, index, 'guardians')}
              required        >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Dr">Dr</MenuItem>
            </StyledSelect>
            <FormHelperText>Select the guardian's title</FormHelperText>
          </StyledFormControl>
          <TextField
            label="First Name"
            name="firstName"
            value={guardian.firstName}
            onChange={(event) => handleContactInputChange(event, index, 'guardians')}
            required
          />
          <TextField
            label="Middle Name"
            name="middleName"
            value={guardian.middleName}
            onChange={(event) => handleContactInputChange(event, index, 'guardians')}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={guardian.lastName}
            onChange={(event) => handleContactInputChange(event, index, 'guardians')}
            required
          />
        </StyledFormControl>
        <StyledFormControl>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={guardian.email}
            onChange={(event) => handleContactInputChange(event, index, 'guardians')}
            required
          />
          <TextField
            label="Mobile Number"
            name="mobileNumber"
            type="tel"
            value={guardian.mobileNumber}
            onChange={(event) => handleContactInputChange(event, index, 'guardians')}
            required
          />
          <TextField
            label="Telephone Number"
            name="telephoneNumber"
            type="tel"
            value={guardian.telephoneNumber}
            onChange={(event) => handleContactInputChange(event, index, 'guardians')}
          />
          <TextField
            label="Postcode"
            name="postcode"
            rows={4}
            value={guardian.postcode}
            onChange={(event) => handleContactInputChange(event, index, 'guardians')}
            required
          />
          <TextField
            label="Address"
            name="address"
            multiline
            rows={4}
            value={guardian.address}
            onChange={(event) => handleContactInputChange(event, index, 'guardians')}
            required
          />

<StyledFormControl>
<InputLabel>Relation to Student</InputLabel>
<StyledSelect
name="relationToChild"
value={guardian.relationToChild}
onChange={(event) => handleContactInputChange(event, index, 'guardians')}
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
      checked={guardian.firstLineOfContact}
      onChange={(event) => handleGuardianFirstLineOfContactChange(event, index)}
      name="firstLineOfContact"
      color="primary"
    />
  }
  label="First Line of Contact"
/>

    <IconButton
    onClick={() => handleRemoveContact(index, 'guardians')}
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
{formData.contacts.emergencyContacts.map((contact, index) => (
  <div key={index}>
    <h4>Emergency Contact {index + 1}</h4>
    <TextField
      label="Name"
      name="name"
      value={contact.name}
      onChange={(event) => handleContactInputChange(event, index, 'emergencyContacts')}
      required
    />
    <TextField
      label="Relationship"
      name="relationship"
      value={contact.relationship}
      onChange={(event) => handleContactInputChange(event, index, 'emergencyContacts')}
      required
    />
    <TextField
      label="Telephone Number"
      name="telephoneNumber"
      value={contact.telephoneNumber}
      onChange={(event) => handleContactInputChange(event, index, 'emergencyContacts')}
      required
    />

<IconButton
    onClick={() => handleRemoveContact(index, 'emergencyContacts')}
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
  <StyledSubmitButton
    variant="contained"
    color="primary"
    type="submit"
    onClick={(e) => handleAddStudentToDB(e)}
    >
    Save Changes
    </StyledSubmitButton>
  : <StyledSubmitButton
    variant="contained"
    color="primary"
    type="submit"
    onClick={(e) => handleEditStudentInDB(e)}
  >
    Add Student
  </StyledSubmitButton>}
  </Grid>
  </Grid>
</form>
</div>
);
};


export default AddStudent