import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'



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
    'padding': '5px',
    'margin': '5px',
    'backgroundColor': '#2196F3',
    'color': 'black',
  }

  const mediumSeverityStyle = {
    'padding': '5px',
    'margin': '5px',
    'backgroundColor': '#FFC107',
    'color': 'black',
  }

  const highSeverityStyle = {
    'padding': '5px',
    'margin': '5px',
    'backgroundColor': '#F44336',
    'color': 'black',
  }
  const severityKeyContainerStyle = {
    display: 'flex',
    alignItems: 'center'
  };
  
  const severityLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
  };
  
  const severityBoxStyle = {
    width: '20px',
    height: '20px',
    marginRight: '5px',
  };
  
  const severityLevels = [
    { label: 'Low', color: '#2196F3' },
    { label: 'Medium', color: '#FFC107' },
    { label: 'High', color: '#F44336' },
  ]

const Key = () => {
  return (
    <Box sx={severityKeyContainerStyle}>
      <Typography variant="subtitle1" component="span">
        Severity Key:
      </Typography>
      {severityLevels.map((level) => (
        <React.Fragment key={level.label}>
          <Box sx={{ ...severityBoxStyle, backgroundColor: level.color }}></Box>
          <Typography variant="subtitle2" component="span" sx={severityLabelStyle}>
            {level.label}
          </Typography>
        </React.Fragment>
      ))}
    </Box>
  );
};

const NotificationCentre = ({popup}) => {
  return (
    <Box sx={{border: '2px solid black', overflow: 'auto', height: popup ? '500px': '300px', width: popup ? '1000px' : '727px', resize: popup ? '' : 'vertical', minHeight: '300px', maxHeight: '500px' }}>
        <Key/>
        <Typography variant="h6" align="center">Notification Centre</Typography>
        <div style={lowSeverityStyle}>
        <strong>20/02/2023</strong><br/>
        <strong>Heading 1</strong> <br/>
        This is a low severity notification example sabfhdsbvfjhsdvhf chdsbvfjhdsbvhfvbgsd jcbgdsjkfbkjhdebfkjhsda jksbjksdbjkrbgfkrdjsgfbkjrsdfbgkjsdfbgksdf bdjkgbsdfkjgbjkfrsdgbjkfdsbg dbsfjkgsdjkgbjksdbg 
        </div>

        <div style={mediumSeverityStyle}>
        <strong>21/02/2023</strong><br/>
        <strong>Heading 2</strong><br/>
        This is a medium severity notification example sabfhdsbvfjhsdvhf chdsbvfjhdsbvhfvbgsd jcbgdsjkfbkjhdebfkjhsda jksbjksdbjkrbgfkrdjsgfbkjrsdfbgkjsdfbgksdf bdjkgbsdfkjgbjkfrsdgbjkfdsbg dbsfjkgsdjkgbjksdbg 
        </div>

        <div style={highSeverityStyle}>
        <strong>22/02/2023</strong><br/>
        <strong>Heading 3</strong> <br/>
        This is a high severity notification example sabfhdsbvfjhsdvhf chdsbvfjhdsbvhfvbgsd jcbgdsjkfbkjhdebfkjhsda jksbjksdbjkrbgfkrdjsgfbkjrsdfbgkjsdfbgksdf bdjkgbsdfkjgbjkfrsdgbjkfdsbg dbsfjkgsdjkgbjksdbg 
        </div>
    </Box>
  )
}

export default NotificationCentre