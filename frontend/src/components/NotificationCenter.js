import React from 'react'


/*

ONLY TEACHERS AND ADMIN SHOULD HAVE ACCESS TO UPLOADINGA NOTIFICATION

sampleData = {
    _id: 62e11df5a4ba495844e2dbbb
    from: 'admin1@hotmail.com
    role: "admin"
    verifiedBy: IF ADMIN THEN WILL INPUT THE USERS EMAIL (SAME AS FROM) BUT IF A TEACHER THEN IT SHOULD BE CHECKED BY AN ADMIN BEFORE UPLOADING
    verifiedAt: TIME
    to: array data type - CAN EITHER BE SPECIFIC TEACHERS(YEAR GROUP ETC.), ALL TEACHERS, SPECIFIC STUDENTS(YEAR GROUP ETC.), ALL STUDENTS OR EVERYONE
    message: 'SOME RANDOM MESSAGE'
    expireAfter: string data type - EITHER be '4s' - 4 seconds, '4m' - minutes, '4d' - days  
    createdAt: 2022-07-27T11:13:57.181+00:00
    updatedAt: 2022-07-27T11:13:57.181+00:00
    __v: 0
}

{fname: 'Admin', lname: 'One' , email: 'admin1@hotmail.com' , password: 'aaa', role: 'admin'}
*/


const NotificationCenter = () => {
  return (
    <div>NotificationCenter</div>
  )
}

export default NotificationCenter