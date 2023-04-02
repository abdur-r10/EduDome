import React, { useState } from 'react'
import { Grid, FormControlLabel, Checkbox, Box, TextareaAutosize} from '@mui/material';
import ClassesCheckboxSelect from '../../components/ClassesCheckboxSelect';

const MessageByClass = () => {
    const [methods, setMethods] = useState([]);
    const [message, setMessage] = useState('');
    

    const handleMethodChange = (event) => {
        const { value, checked } = event.target;
      if (checked) {
        setMethods([...methods, value]);
      } else {
        setMethods(methods.filter((m) => m !== value));
      }
    };

    const handleMessageChange = (event) => {
        const value = event.target.value;
        if (value.length <= 400) {
          setMessage(value);
        }
    };


    return(
    <Grid container spacing={2} display='flex' justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} width='40%'>
            <ClassesCheckboxSelect />
        </Grid>
        <Grid item xs={12} sm={6}width='40%'>
            <Grid container spacing={2} direction='column'>
                <Grid item xs={12} sm={6}>
                    <Box>
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={methods.includes('text')}
                                onChange={handleMethodChange}
                                value={'text'}
                                />
                            }
                            label={'Text'}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={methods.includes('e-mail')}
                                onChange={handleMethodChange}
                                value={'e-mail'}
                                />
                            }
                            label={'E-mail'}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={methods.includes('letter')}
                                onChange={handleMethodChange}
                                value={'letter'}
                                />
                            }
                            label={'Letter'}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextareaAutosize
                        id="message"
                        required
                        value={message}
                        onChange={handleMessageChange}
                        style={{
                            overflow: 'auto',
                            resize: 'vertical',
                            paddingLeft: '10px',
                            width: '90%',
                            minHeight: '100px',
                            maxHeight: '200px',
                            fontSize: 20,
                        }}
                        aria-label="message"
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
  }
  
  export default MessageByClass;

/*
object.keys(classesData).map(subjectName => 
<div onClick={handleToggle}>{subjectName} {isOpen ? '-' : '+'}</div>
    {isOpen && (
    <ul>
        {Object.keys(classesData[subjectName]).map((year) => (
            <li key={year}>
            year {year}
        <ul>
        {classesData.[subjectName][year].map((classCode) => (
            <li key={classCode}>
                <label>
                    <input
                        type="checkbox"
                        value={classCode}
                        checked={selectedClasses.includes(classCode)}
                        onChange={handleCheckboxChange}
                    />
                    {classCode}
                </label>
            </li>
        ))}
        </ul>
        </li>
    ))}
    </ul>
    )}
</div>
            )
*/


/*
<Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
        //checkboxes for classes
    </Grid>
    <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            //check boxes for type of message
            </Grid>
            <Grid item xs={12} sm={6}>
            //textbox for message
            </Grid>
        </Grid>
    </Grid>
</Grid>
    
*/