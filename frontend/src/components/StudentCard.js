import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';

const StudentCard = ({student}) => {
  const [popup, setPopup] = useState(false);
  const [selectedGuardian, setSelectedGuardian] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);


  const age = Math.floor((new Date() - new Date(student.dateOfBirth)) / 31557600000);

  const handleRowClick = (item, type) => {
    if (type === 'guardian') {
      if (selectedGuardian && selectedGuardian.id === item.id) {
        setSelectedGuardian(null);
        setPopup(false);
      } else {
        setSelectedGuardian(item);
        setSelectedContact(null);
        setPopup(true);
      }
    } else {
      if (selectedContact && selectedContact.id === item.id) {
        setSelectedContact(null);
        setPopup(false);
      } else {
        setSelectedContact(item);
        setSelectedGuardian(null);
        setPopup(true);
      }
    }
  };

  const guardiansTableRef = useRef(null);
  const emergencyContactsTableRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (!guardiansTableRef.current.contains(e.target) && !emergencyContactsTableRef.current.contains(e.target)) {
        setPopup(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);


  const displayGuardians = student.contacts.guardians.map((guardian) => (
    <TableRow key={guardian.id} onClick={() => handleRowClick(guardian, 'guardian')}>
      <TableCell>{`${guardian.title} ${guardian.firstName} ${guardian.middleName} ${guardian.lastName}`}</TableCell>
      <TableCell>{guardian.relationToChild}</TableCell>
      <TableCell>{guardian.firstLineOfContact ? 'Yes' : 'No'}</TableCell>
    </TableRow>
  ));
  
  const displayEmergencyContacts = student.contacts.emergencyContacts.map((contact) => (
    <TableRow key={contact.id} onClick={() => handleRowClick(contact, 'contact')}>
      <TableCell>{contact.name}</TableCell>
      <TableCell>{contact.relationship}</TableCell>
    </TableRow>
  ));
  

  const guardianPopupContent = selectedGuardian && !selectedContact && (
    <Box sx={{ mt: 2, mb: 2, p: 2, bgcolor: '#f5f5f5' }}>
      <Typography><strong>Name:</strong> {`${selectedGuardian.title} ${selectedGuardian.firstName} ${selectedGuardian.middleName} ${selectedGuardian.lastName}`}</Typography>
      <Typography><strong>Relation:</strong> {selectedGuardian.relationToChild}</Typography>
      <Typography><strong>First line of contact:</strong> {selectedGuardian.firstLineOfContact ? 'Yes' : 'No'}</Typography>
      <Typography><strong>Telephone:</strong> {selectedGuardian.telephoneNumber}</Typography>
      <Typography><strong>Mobile:</strong> {selectedGuardian.mobileNumber}</Typography>
      <Typography><strong>Address:</strong> {selectedGuardian.address}</Typography>
    </Box>
  );
  
  const emergencyContactPopupContent = selectedContact && !selectedGuardian && (
    <Box sx={{ mt: 2, mb: 2, p: 2, bgcolor: '#f5f5f5' }}>
      <Typography><strong>Name:</strong> {selectedContact.name}</Typography>
      <Typography><strong>Relation:</strong> {selectedContact.relationship}</Typography>
      <Typography><strong>Telephone:</strong> {selectedContact.telephoneNumber}</Typography>
    </Box>
  );
  

  return (
    <Box sx={{ border: '5px solid black', display: 'inline-block' }}>
      <Box>
        <img src={student.img} alt='student img' style={{ marginBottom: '5px' }}/>
        <Typography mb='5px'><strong>Name:</strong> {`${student.firstName} ${student.middleName} ${student.lastName}`}</Typography>
        <Typography mb='5px'><strong>Age:</strong> {age}</Typography>
        <Typography mb='5px'><strong>Address:</strong> {`${student.address}, ${student.postcode}`}</Typography>
        <Typography mb='5px'><strong>Form:</strong> {student.form}</Typography>
        <Typography mb='5px'><strong>Join Date:</strong> {student.joinDate}</Typography>
        <Typography mb='5px'><strong>Timetable:</strong> <a href="path/to/timetable.pdf">open as PDF</a></Typography>
        <Typography><strong>Guardians:</strong> </Typography>
        <TableContainer sx={{ mb: 2,  border: '1px solid black' }}>
          <Table ref={guardiansTableRef} sx={{ '& .MuiTableCell-root': { padding: '8px 16px' } }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 800 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Relation</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>First line of contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayGuardians}
            </TableBody>
          </Table>
        </TableContainer>
        {popup && guardianPopupContent}

        <Typography><strong>Emergency Contacts:</strong> </Typography>
        <TableContainer sx={{ mb: 2,  border: '1px solid black' }}>
          <Table ref={emergencyContactsTableRef} sx={{ '& .MuiTableCell-root': { padding: '8px 16px' } }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 800 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Relation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayEmergencyContacts}
            </TableBody>
          </Table>
        </TableContainer>
        {popup && emergencyContactPopupContent}
      </Box>
    </Box>
  );
};

export default StudentCard;
