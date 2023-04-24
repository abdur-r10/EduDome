import { Typography, Box } from '@mui/material'
import React from 'react'

const StudentDocuments = ({ document }) => {
    const displayLinks = document.files.map((item) => 
    <div key={item.ref}>
        <a href={item.ref}>{item.link}</a>
    </div>
    )

  return (
    <Box sx={{ border: '5px solid black', display: 'inline-block' }}>
        <Typography sx={{mb: '5px'}}>{document.displayInfo}</Typography>
        <Typography>Links to files:</Typography>
        {displayLinks}
    </Box>
  )
}

export default StudentDocuments