import React from 'react';
import { Typography, Box } from '@mui/material';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressChart = ({ outerValue, outerText, innerValue, innerText }) => {
// MIGHT NEED THESE IF PUNCTUALITY & ATTENDANCE WILL NEED TO BE CALCULATED
//   const outerPercentage = outerText === 'AP' ? outerValue : (outerValue / 100) * 100;
//   const innerPercentage = innerText === 'BP' ? innerValue : (innerValue / 100) * 100;

  return (
    <Box width='230px'>
        <CircularProgressbarWithChildren
        value={outerValue}
        strokeWidth={8}
        styles={buildStyles({
          pathColor: outerText === 'AP' ? 'Green': "Blue",
          trailColor: "transparent"
        })}
      >
        {/*
          Width here needs to be (100 - 2 * strokeWidth)% 
          in order to fit exactly inside the outer progressbar.
        */}
        <div style={{ width: "84%" }}>
          <CircularProgressbar
            value={innerValue}
            styles={buildStyles({
                pathColor: innerText === 'BP' ? 'Red': "Orange",
                trailColor: "transparent"
            })}
          />
        </div>
      </CircularProgressbarWithChildren>
  

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Typography style={{ color: outerText === 'AP' ? 'Green': "Blue" }}>{outerText}: {outerValue}{outerText === 'AP' ? '': "%"}</Typography>
        <Typography style={{ color: innerText === 'BP' ? 'Red': "Orange" }}>{innerText}: {innerValue}{innerText === 'BP' ? '': "%"}</Typography>
      </div>
    </Box>
  );
};

export default ProgressChart;
