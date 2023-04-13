import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  TextareaAutosize,
  Button,
} from "@mui/material";

const sampleSearchData = [
  {
    id: 1,
    firstName: "Abz",
    middleName: "Abdi",
    lastName: "Abdi",
    joinDate: "2023-10-01",
    yearGroup: 7,
    email: "something@hotmail.com",
    password: "9PLAced",
    dateOfBirth: "2001-01-01",
    address: "3 something Road",
    studentImage: null,
    contacts: {
      guardians: [
        {
          title: "Mr",
          firstName: "A",
          middleName: "A",
          lastName: "A",
          relationToChild: "Father",
          email: "a@hotmail.com",
          telephoneNumber: "911",
          mobileNumber: "911",
          address: "3 something Road",
          firstLineOfContact: true,
        },
        {
          title: "Mrs",
          firstName: "B",
          middleName: "B",
          lastName: "B",
          relationToChild: "Mother",
          email: "b@hotmail.com",
          telephoneNumber: "911",
          mobileNumber: "911",
          address: "3 something Road",
          firstLineOfContact: false,
        },
      ],
      emergencyContacts: [
        {
          name: "Random Person",
          relationship: "Aunty",
          telephoneNumber: "911",
        },
      ],
    },
  },
  {
    id: 2,
    firstName: "Bob",
    middleName: "Peter",
    lastName: "Peter",
    joinDate: "2020-09-01",
    yearGroup: 10,
    email: "something@hotmail.com",
    password: "9PLAced",
    dateOfBirth: "2001-01-01",
    address: "3 something Road",
    studentImage: null,
    contacts: {
      guardians: [
        {
          title: "Mr",
          firstName: "C",
          middleName: "C",
          lastName: "C",
          relationToChild: "Father",
          email: "c@hotmail.com",
          telephoneNumber: "911",
          mobileNumber: "911",
          address: "3 random Road",
          firstLineOfContact: true,
        },
        {
          title: "Mrs",
          firstName: "D",
          middleName: "D",
          lastName: "D",
          relationToChild: "Mother",
          email: "d@hotmail.com",
          telephoneNumber: "911",
          mobileNumber: "911",
          address: "3 random Road",
          firstLineOfContact: false,
        },
      ],
      emergencyContacts: [
        {
          name: "Random Person",
          relationship: "Aunty",
          telephoneNumber: "911",
        },
      ],
    },
  },
];

const MessageIndividuals = ({ searchData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectedSendMethods, setSelectedSendMethods] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStudentSelection = (student) => {
    if (selectedStudents.includes(student)) {
      setSelectedStudents(selectedStudents.filter((s) => s !== student));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleSendMethodSelection = (method) => {
    if (selectedSendMethods.includes(method)) {
      setSelectedSendMethods(selectedSendMethods.filter((m) => m !== method));
    } else {
      setSelectedSendMethods([...selectedSendMethods, method]);
    }
  };

  //!use useEffect to make the API call for search and the results. This should be carried out whgen user searches a term which should return filtered results

  const handleSendMessage = () => {
    //!MAKE AN API CALL TO BACKEND HERE
    console.log({
      message: message,
      to: selectedStudents,
      methods: selectedSendMethods,
    });
  };

  const filteredSearchData = searchTerm !== ""
  ? sampleSearchData.filter((student) => {
    const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const lowerCaseFullName = fullName.toLowerCase();
    return lowerCaseFullName.includes(lowerCaseSearchTerm);
  })
  : [];

  return (
    <Box>
      <Typography variant="h4">Message Individuals</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          onChange={handleSearchTermChange}
        />
        <Button variant="contained" sx={{ ml: 2 }}>
          Search
        </Button>
      </Box>
      {filteredSearchData.length > 0 && (
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <Typography variant="subtitle1" sx={{ mr: 2 }}>
            Select students to message:
          </Typography>
          <List>
            {filteredSearchData.map((student) => (
              <ListItem
                key={student.id}
                button
                onClick={() => handleStudentSelection(student)}
              >
                <ListItemText
                  primary={`${student.firstName} ${student.lastName}`}
                />
                <Checkbox checked={selectedStudents.includes(student)} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
      <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
        <Typography variant="subtitle1" sx={{ mr: 2 }}>
          Select methods to send message:
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSendMethods.includes("email")}
              onChange={() => handleSendMethodSelection("email")}
            />
          }
          label="Email"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSendMethods.includes("textMessage")}
              onChange={() => handleSendMethodSelection("textMessage")}
            />
          }
          label="Text Message"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedSendMethods.includes("letter")}
              onChange={() => handleSendMethodSelection("letter")}
            />
          }
          label="Letter"
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Message:</Typography>
        <TextareaAutosize
          id="message"
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          style={{
            overflow: "auto",
            resize: "vertical",
            paddingLeft: "3px",
            width: "35%",
            minHeight: "100px",
            maxHeight: "650px",
            fontSize: 20,
          }}
          aria-label="message"
        />
      </Box>
      <Button variant="contained" sx={{ mt: 2 }} onClick={handleSendMessage}>
        Send Message
      </Button>
    </Box>
  );
};

MessageIndividuals.defaultProps = {
  searchData: sampleSearchData,
};

export default MessageIndividuals;

/*
import React, { useState } from 'react'
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  TextareaAutosize,
  Button
} from '@mui/material';


const sampleSearchData = [
  {
    id: 1,
    firstName:  "Abz",
    middleName: "Abdi",
    lastName: "Abdi",
    joinDate: '2023-10-01',
    yearGroup: 7,
    email: "something@hotmail.com",
    password: "9PLAced",
    dateOfBirth: "2001-01-01",
    address: "3 something Road",
    studentImage: null,
    contacts: {
      guardians: [
      {
        title: "Mr",
        firstName: "A",
        middleName: "A",
        lastName: "A",
        relationToChild: "Father",
        email: "a@hotmail.com",
        telephoneNumber: "911",
        mobileNumber: "911",
        address: "3 something Road",
        firstLineOfContact: true
      },
      {
        title: "Mrs",
        firstName: "B",
        middleName: "B",
        lastName: "B",
        relationToChild: "Mother",
        email: "b@hotmail.com",
        telephoneNumber: "911",
        mobileNumber: "911",
        address: "3 something Road",
        firstLineOfContact: false
      }
    ]
    ,
    emergencyContacts: [
      {
        name: "Random Person",
        relationship: "Aunty",
        telephoneNumber: "911"
      }
    ]
  }
  },
  {
    id: 2,
    firstName:  "Abz",
    middleName: "Abdi",
    lastName: "Abdi",
    joinDate: '2020-09-01',
    yearGroup: 10,
    email: "something@hotmail.com",
    password: "9PLAced",
    dateOfBirth: "2001-01-01",
    address: "3 something Road",
    studentImage: null,
    contacts: {
      guardians: [
      {
        title: "Mr",
        firstName: "C",
        middleName: "C",
        lastName: "C",
        relationToChild: "Father",
        email: "c@hotmail.com",
        telephoneNumber: "911",
        mobileNumber: "911",
        address: "3 random Road",
        firstLineOfContact: true
      },
      {
        title: "Mrs",
        firstName: "D",
        middleName: "D",
        lastName: "D",
        relationToChild: "Mother",
        email: "d@hotmail.com",
        telephoneNumber: "911",
        mobileNumber: "911",
        address: "3 random Road",
        firstLineOfContact: false
      }
    ]
    ,
    emergencyContacts: [
      {
        name: "Random Person",
        relationship: "Aunty",
        telephoneNumber: "911"
      }
    ]
  }
  }
]


const MessageGuardian = ({ searchData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedGuardian, setSelectedGuardian] = useState(null);
  const [selectedSendMethods, setSelectedSendMethods] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedStudent(null);
    setSelectedGuardian(null);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setSelectedGuardian(null);
  };

  const handleGuardianClick = (guardian) => {
    setSelectedGuardian(guardian);
  };

  const handleSendMethodChange = (event) => {
    const method = event.target.name;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedSendMethods([...selectedSendMethods, method]);
    } else {
      setSelectedSendMethods(selectedSendMethods.filter((m) => m !== method));
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      message,
      selectedSendMethods
    )
    //!!!handle form submission logic here
  };


  const filteredSearchData =
    searchTerm !== ''
      ? sampleSearchData.filter((student) => {
          const fullName = `${student.firstName} ${student.middleName} ${student.lastName}`;
          return fullName.toLowerCase().includes(searchTerm.toLowerCase());
        })
      : [];

  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
    <Box display="flex" flexDirection="column" width="80%">
      <TextField
        id="searchTerm"
        label="Search for student whose parents you want to send the message to"
        value={searchTerm}
        onChange={handleSearchTermChange}
        variant="outlined"
        margin="normal"
      />

      {selectedStudent && (
        <Box>
          <Typography variant="h6">Guardians for {selectedStudent.firstName}:</Typography>
          <List>
            {selectedStudent.contacts.guardians.map((guardian) => (
              <ListItem
                key={guardian.email}
                button
                onClick={() => handleGuardianClick(guardian)}
                selected={selectedGuardian?.email === guardian.email}
              >
                <ListItemText
                  primary={`${guardian.title} ${guardian.firstName} ${guardian.middleName} ${guardian.lastName}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {selectedGuardian && (
        <Box>
          <Typography variant="h6">
            Message {selectedGuardian.title} {selectedGuardian.lastName}:
          </Typography>
          <Box display="flex">
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedSendMethods.includes('text')}
                  onChange={handleSendMethodChange}
                  name="text"
                />
              }
              label="Text"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedSendMethods.includes('email')}
                  onChange={handleSendMethodChange}
                  name="email"
                />
              }
              label="Email"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedSendMethods.includes('letter')}
                  onChange={handleSendMethodChange}
                  name="letter"
                />
              }
              label="Letter"
            />
          </Box>
          <TextareaAutosize
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
            style={{
              overflow: 'auto',
              resize: 'vertical',
              paddingLeft: '10px',
              width: '50%',
              minHeight: '100px',
              maxHeight: '350px',
              fontSize: 17,
            }}
          /> <br/>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
          Send
          </Button>
          </Box>
      )}

      {filteredSearchData.length > 0 && (
          <Box>
            <Typography variant="h6">Search results:</Typography>
            <List>
              {filteredSearchData.map((student) => (
                <ListItem
                  key={student.id}
                  button
                  onClick={() => handleStudentClick(student)}
                  selected={selectedStudent?.id === student.id}
                >
                  <ListItemText
                    primary={`${student.firstName} ${student.middleName} ${student.lastName}`}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
      </div>
);
};

export default MessageGuardian;
*/
