import React from 'react'
import { Box, Typography } from '@mui/material'
import NotificationDisplayCard from './NotificationDisplayCard'

const activeNotifications = [
    {
        'id': 1,
        "dateToActivate": "2023-03-25",
        "dateToDelete": "2023-03-27",
        "teachers": {
            "teacher1": true,
            "teacher2": true,
            "teacher3": true,
            // "teacher4": true,
            // "teacher5": true,
            // "teacher6": true,
            // "teacher7": true,
            // "teacher8": true,
            // "teacher9": true,
            // "teacher10": true,
            // "teacher11": true,
            // "teacher12": true,
            // "teacher13": true,
            // "teacher14": true,
            // "teacher15": true,
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
        'id': 2,
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
        'id': 3,
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
const scheduledNotifications = [
    {
        'id': 11,
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
        'id': 12,
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
        'id': 13,
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





const onSave = (editedNotification) => {
    // make an API call to save the edited notification to the backend
}
  
  const onDelete = (notification) => {
    // make an API call to delete the notification from the backend
}

const displayActiveNotifications = activeNotifications.map((notification) => <NotificationDisplayCard key={notification.id} notification={notification} onSave={onSave} onDelete={onDelete}/>)
const displayScheduledNotifications = scheduledNotifications.map((notification) => <NotificationDisplayCard key={notification.id} notification={notification} onSave={onSave} onDelete={onDelete}/>)
  

//To Teachers, To Classes, Date Activated (change), Date to be deleted (change), message (trimmed) (change), edit icon, delete icon

const TrackNotifications = () => {
  return (
    <Box sx={{ border: '5px solid black', padding: '8px', borderRadius: '4px', overflow: 'auto', resize: 'vertical', height: '680px', minHeight: '680px', maxHeight: '970px', width: '98%'}}>
        <Typography variant="h6" align="center">Active Notifications</Typography>
        <Box sx={{border: '2px solid black', overflow: 'auto', height: '45%', width: '99%'}}>
            {displayActiveNotifications }
        </Box>

        <Typography variant="h6" align="center">Scheduled Notifications</Typography>
        <Box sx={{border: '2px solid black', overflow: 'auto', height: '45%', width: '99%' }}>
            {displayScheduledNotifications}
        </Box>
    </Box>
  )
}

export default TrackNotifications