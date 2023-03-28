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
/*
const MessageGuardian = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedGuardian, setSelectedGuardian] = useState(null);
  const [selectedSendMethod, setSelectedSendMethod] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm !== '') {
        const response = await fetch(`/api/search?term=${searchTerm}`);
        const data = await response.json();
        setSearchResults(data.results);
      } else {
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

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

  const handleSendMethodChange = (sendMethod) => {
    setSelectedSendMethod(sendMethod);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="searchTerm">Search for student:</label>
        <input type="text" id="searchTerm" value={searchTerm} onChange={handleSearchTermChange} />
      </div>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((student) => (
              <li key={student.id} onClick={() => handleStudentClick(student)}>
                {student.firstName} {student.middleName} {student.lastName}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedStudent && (
        <div>
          <h2>Guardians for {selectedStudent.firstName}:</h2>
          <ul>
            {selectedStudent.contacts.guardians.map((guardian) => (
              <li key={guardian.email} onClick={() => handleGuardianClick(guardian)}>
                {guardian.title} {guardian.firstName} {guardian.middleName} {guardian.lastName}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedGuardian && (
        <div>
          <h2>Message {selectedGuardian.title} {selectedGuardian.lastName}:</h2>
          <div>
            <label htmlFor="sendMethodText">
              <input
                type="radio"
                id="sendMethodText"
                value="text"
                checked={selectedSendMethod === 'text'}
                onChange={() => handleSendMethodChange('text')}
              />
              Text
            </label>
            <label htmlFor="sendMethodEmail">
              <input
                type="radio"
                id="sendMethodEmail"
                value="email"
                checked={selectedSendMethod === 'email'}
                onChange={() => handleSendMethodChange('email')}
              />
              Email
            </label>
            <label htmlFor="sendMethodLetter">
              <input
                type="radio"
                id="sendMethodLetter"
                value="letter"
                checked={selectedSendMethod === 'letter'}
                onChange={() => handleSendMethodChange('letter')}
                />
                Letter
                </label>
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={handleMessageChange} />
                </div>
                <button onClick={() => console.log('Message sent!')}>Send Message</button>
                </div>
                )}
                </div>
                );
                };



export default MessageGuardian
*/