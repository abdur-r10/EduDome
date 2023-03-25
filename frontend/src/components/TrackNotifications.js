import React from 'react'
import {Box} from '@mui/material'

const activeNotifications = [
    {
        "dateToActivate": "2023-03-25",
        "dateToDelete": "2023-03-27",
        "teachers": {
            "teacher1": true,
            "teacher2": false,
            "teacher3": false
        },
        "classes": {
            "class1": false,
            "class2": true,
            "class3": false
        },
        "severity": "medium",
        "message": "hello world 1"
    },
    {
        "dateToActivate": "2023-03-25",
        "dateToDelete": "2023-03-27",
        "teachers": {
            "teacher1": true,
            "teacher2": true,
            "teacher3": true
        },
        "classes": {
            "class1": true,
            "class2": true,
            "class3": true
        },
        "severity": "low",
        "message": "hello world 2"
    },
    {
        "dateToActivate": "2023-03-25",
        "dateToDelete": "2023-03-31",
        "teachers": {
            "teacher1": true,
            "teacher2": false,
            "teacher3": false
        },
        "classes": {
            "class1": true,
            "class2": false,
            "class3": false
        },
        "severity": "high",
        "message": "hello world 3"
    }
]
const onHoldNotifications = [
    {
        "dateToActivate": "2023-03-28",
        "dateToDelete": "2023-03-31",
        "teachers": {
            "teacher1": true,
            "teacher2": false,
            "teacher3": false
        },
        "classes": {
            "class1": false,
            "class2": false,
            "class3": false
        },
        "severity": "low",
        "message": "hello on hold 1"
    },
    {
        "dateToActivate": "2023-03-30",
        "dateToDelete": "2023-04-02",
        "teachers": {
            "teacher1": true,
            "teacher2": false,
            "teacher3": false
        },
        "classes": {
            "class1": false,
            "class2": false,
            "class3": true
        },
        "severity": "medium",
        "message": "hello on hold 2"
    },
    {
        "dateToActivate": "2023-04-20",
        "dateToDelete": "2023-04-23",
        "teachers": {
            "teacher1": true,
            "teacher2": true,
            "teacher3": false
        },
        "classes": {
            "class1": true,
            "class2": true,
            "class3": false
        },
        "severity": "high",
        "message": "hello on hold 3"
    }
]

const TrackNotifications = () => {
  return (
    <Box sx={{ border: '5px solid black', padding: '8px', borderRadius: '4px', overflow: 'auto', resize: 'vertical', height: '600px', minHeight: '600px', maxHeight: '970px', width: '98%'}}>
    
    </Box>
  )
}

export default TrackNotifications