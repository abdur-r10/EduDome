import React from 'react'
import {useLocation} from 'react-router-dom';
import { Typography } from '@mui/material'


const StudentCard = () => {
  const location = useLocation();
  const student = location.state ? location.state.student : null
  console.log(student)
    const age = Math.floor((new Date() - new Date(student.dateOfBirth)) / 31557600000)

    //const displayGuardians = student.contacts.gurdians.map()

    //const displayEmergencyContacts = student.contacts.emergencyContacts.map()

  return (
    <div>
        <div>
            <img src={student.img} alt='student img'/>
            <Typography>Name: {`${student.firstName} ${student.middleName} ${student.lastName}`}</Typography>
            <Typography>Form: {student.form}</Typography>
            <Typography>Age: {age}</Typography>
            <Typography>Address: {`${student.address}, ${student.postcode}`}</Typography>
            <Typography>Guardians: </Typography>
            <Typography>Emergency Contacts: </Typography>

        </div>
    </div>
  )
}

export default StudentCard
