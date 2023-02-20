import React from 'react'
import { Box } from '@mui/system'


//!MAKE AN API CALL TO SQL DATA FOR NOTIFICATIONS

/*

ONLY TEACHERS AND ADMIN SHOULD HAVE ACCESS TO UPLOADINGA NOTIFICATION

sampleData = {
    id: 'notification1'
    from: a1
    date: 2023-02-19 17-11-10
    severity: low (medium/high)
    to: 's1'
    heading: 'heading2'
    message: 'This is a low severity notification example'
    deletion date: 2023-02-20 17-11-10
},
{
    id: 'notification2'
    from: t1
    date: 2023-02-19 20-11-10
    severity: medium (medium/high)
    to: 's1'
    heading: 'heading2'
    message: 'This is a low severity notification example'
    deletion date: 2023-02-20 20-11-10
},
{
    id: 'notification2'
    from: t1
    date: 2023-02-19 20-11-10
    severity: high (medium/high)
    to: 's1'
    heading: 'heading3'
    message: 'This is a low severity notification example'
    deletion date: 2023-02-20 20-11-10
}

*/

const lowSeverityStyle = {
    'padding': '20px',
    'margin': '5px',
    'background-color': '#2196F3',
    'color': 'white',
}

const mediumSeverityStyle = {
    'padding': '20px',
    'margin': '5px',
    'background-color': '#ff9800',
    'color': 'white',
}

const highSeverityStyle = {
    'padding': '20px',
    'margin': '5px',
    'background-color': '#f44336',
    'color': 'white',
}

const NotificationCenter = () => {
  return (
    <Box sx={{border: '2px solid black', overflow: 'auto', height: '300px', width: '500px'}}>
        <div style={lowSeverityStyle}>
        <strong>Heading 1</strong> <br/>
        This is a low severity notification example sabfhdsbvfjhsdvhf chdsbvfjhdsbvhfvbgsd jcbgdsjkfbkjhdebfkjhsda jksbjksdbjkrbgfkrdjsgfbkjrsdfbgkjsdfbgksdf bdjkgbsdfkjgbjkfrsdgbjkfdsbg dbsfjkgsdjkgbjksdbg 
        </div>

        <div style={mediumSeverityStyle}>
        <strong>Heading 2</strong> <br/>
        This is a medium severity notification example sabfhdsbvfjhsdvhf chdsbvfjhdsbvhfvbgsd jcbgdsjkfbkjhdebfkjhsda jksbjksdbjkrbgfkrdjsgfbkjrsdfbgkjsdfbgksdf bdjkgbsdfkjgbjkfrsdgbjkfdsbg dbsfjkgsdjkgbjksdbg 
        </div>

        <div style={highSeverityStyle}>
        <strong>Heading 3</strong> <br/>
        This is a high severity notification example sabfhdsbvfjhsdvhf chdsbvfjhdsbvhfvbgsd jcbgdsjkfbkjhdebfkjhsda jksbjksdbjkrbgfkrdjsgfbkjrsdfbgkjsdfbgksdf bdjkgbsdfkjgbjkfrsdgbjkfdsbg dbsfjkgsdjkgbjksdbg 
        </div>
    </Box>
  )
}

export default NotificationCenter