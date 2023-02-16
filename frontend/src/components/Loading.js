import React from 'react'
import { CircularProgress, Box } from '@mui/material'

export default function loading() {
    return (
        <Box
         display="flex"
         justifyContent="center"
         alignItems="center"
         minHeight="100vh"
        >
            <CircularProgress />
        </Box>
        
    );
}

