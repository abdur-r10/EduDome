import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText, IconButton, FormControlLabel, Checkbox } from "@mui/material";
import { generatePassword } from "../../utils/generatePassword"; // a function that generates a random password
import { styled } from "@mui/system"
import DeleteIcon from '@mui/icons-material/Delete';



const useStyles = styled((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const AddStudent= () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    joinDate: new Date().toISOString().slice(0, 10),
    yearGroup: "",
    email: "",
    password: "",
    dateOfBirth: "",
    address: "",
    studentImage: null,
    parents: [],
    emergencyContacts: [],
    firstLineOfContact: "",
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
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    parents: prevFormData.parents.map((parent, i) => {
      if (i === index) {
        return {
          ...parent,
          firstLineOfContact: value
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
          title: "",
          firstName: "",
          middleName: "",
          lastName: "",
          relationToChild: "",
          email: "",
          telephoneNumber: "",
          mobileNumber: "",
          address: formData.address,
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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

return (
<form onSubmit={handleFormSubmit}>
  <div className={classes.formGroup}>
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
  </div>
  <div className={classes.formGroup}>
    <TextField
      label="Join Date"
      name="joinDate"
      type="date"
      value={formData.joinDate}
      onChange={handleInputChange}
      required
    />
    <FormControl className={classes.formControl}>
      <InputLabel>Year Group</InputLabel>
      <Select
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
      </Select>
      <FormHelperText>Select the student's year group</FormHelperText>
    </FormControl>
  </div>
  <div className={classes.formGroup}>
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
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      onClick={handlePasswordGeneration}
    >
      Generate Password
    </Button>
  </div>
  <div className={classes.formGroup}>
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
  </div>
  <div className={classes.formGroup}>
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
  </div>
  <div className={classes.formGroup}>
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={handleAddParent}
    >
      Add Parent/Carer
    </Button>
    {formData.parents.map((parent, index) => (
      <div key={index} className={classes.formGroup}>
        <h4>Parent/Carer {index + 1}</h4>
        <div className={classes.formGroup}>
          <FormControl className={classes.formControl}>
            <InputLabel>Title</InputLabel>
            <Select
              name="title"
              value={parent.title}
              onChange={(event) => handleParentInputChange(event, index)}
              required        >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Dr">Dr</MenuItem>
            </Select>
            <FormHelperText>Select the parent's title</FormHelperText>
          </FormControl>
          <TextField
            label="First Name"
            name="firstName"
            value={parent.firstName}
            onChange={(event) => handleParentInputChange(event, index)}
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={parent.lastName}
            onChange={(event) => handleParentInputChange(event, index)}
            required
          />
        </div>
        <div className={classes.formGroup}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={parent.email}
            onChange={(event) => handleParentInputChange(event, index)}
            required
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={parent.phoneNumber}
            onChange={(event) => handleParentInputChange(event, index)}
            required
          />

<FormControl className={classes.formControl}>
<InputLabel>Relation to Student</InputLabel>
<Select
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
</Select>
</FormControl>

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
</div>
</div>
))}
    

    <Button
  variant="contained"
  color="primary"
  className={classes.button}
  onClick={handleAddEmergencyContact}
>
  Add Emergency Contact
</Button>
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
    aria-label="remove parent"
    >
    <DeleteIcon />
    </IconButton>
  </div>
))}


    </div>
  <Button
    variant="contained"
    color="primary"
    type="submit"
    className={classes.button}
  >
    Add Student
  </Button>
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