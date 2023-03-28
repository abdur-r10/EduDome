import React, { useState } from 'react'
import { Grid, Box, Button, InputLabel, TextareaAutosize, TextField, Checkbox, FormHelperText, FormControlLabel, FormLabel, FormGroup, FormControl, Select, MenuItem } from '@mui/material'

const sampleTeacherData = ['teacher1', 'teacher2', 'teacher3']
const sampleClassData = ['class1', 'class2', 'class3']

const CreateNotification = () => {
    const [dateToActivate, setDateToActivate] = useState('');
  const [dateToDelete, setDateToDelete] = useState('');
  const [teachers, setTeachers] = useState(
    sampleTeacherData.reduce((acc, curr) => {
    acc[curr] = false;
    return acc;
  }, {})
  );

  const [classes, setClasses] = useState(
    sampleClassData.reduce((acc, curr) => {
    acc[curr] = false;
    return acc;
  }, {})
  );

  const [severity, setSeverity] = useState('');
  const [message, setMessage] = React.useState('');

  function getTomorrowDate() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().slice(0, 10);
  }
  
  function getThreeDaysFromDateToActivate(date) {
    const currentDay = new Date(date);
    const nextDay = new Date(currentDay);
    nextDay.setDate(nextDay.getDate() + 3);
    return nextDay.toISOString().slice(0, 10);
  }

  const handleDateToActivateChange = (event) => {
    const selectedDate = event.target.value;
    setDateToActivate(selectedDate);
    const nextDay = getThreeDaysFromDateToActivate(selectedDate);
    setDateToDelete(nextDay);
  };
  
  const handleDateToDeleteChange = (event) => {
    setDateToDelete(event.target.value);
  };
  
  const handleTeacherChange = (event) => {
    setTeachers({ ...teachers, [event.target.name]: event.target.checked });
  };

  const handleClassChange = (event) => {
    setClasses({ ...classes, [event.target.name]: event.target.checked });
  };

  const handleSeverityChange = (event) => {
    setSeverity(event.target.value);
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    if (value.length <= 400) {
      setMessage(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      dateToActivate,
      dateToDelete,
      teachers,
      classes,
      severity,
      message
    })
    //!!!handle form submission logic here
  };

  const displayTeacherOptions = sampleTeacherData.map((item) => 
  <FormControlLabel
    key={item}
    control={<Checkbox checked={teachers.item} onChange={handleTeacherChange} name={item} />}
    label={item}
  />
  )

  const displayClassOptions = sampleClassData.map((item) => 
  <FormControlLabel
    key={item}
    control={<Checkbox checked={classes.item} onChange={handleClassChange} name={item} />}
    label={item}
  />
  )

  return (
    <Box width='98%'>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/** DATE TO ACTIVATE INPUT */}
          <Grid item xs={12} sm={6}>
            <TextField
              id="dateToActivate"
              label="Date to Activate"
              type="date"
              value={dateToActivate}
              onChange={handleDateToActivateChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: new Date().toISOString().slice(0, 10), //minimum is set to tomorrows date
              }}
              fullWidth
              required
            />
          </Grid>

          {/** DATE TO DELETE INPUT */}
          <Grid item xs={12} sm={6}>
            <TextField
              id="dateToDelete"
              label="Date to Delete"
              type="date"
              value={dateToDelete}
              onChange={handleDateToDeleteChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: dateToActivate ? getThreeDaysFromDateToActivate(dateToActivate) : getTomorrowDate(), // set the min date to the next day of dateToActivate if it has been selected, otherwise set it to tomorrow's date
              }}
              fullWidth
              required
            />
          </Grid>

          {/** TEACHERS AND CLASSES CHECKBOX SELECT */}
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset" className={classes.formControl} required>
              <FormLabel component="legend">To</FormLabel>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <FormGroup>
                    <FormHelperText>Select Teacher(s)</FormHelperText>
                    {displayTeacherOptions}
                  </FormGroup>
                </Grid>
                <Grid item>
                  <FormGroup>
                    <FormHelperText>Select Class(es)</FormHelperText>
                    {displayClassOptions}
                  </FormGroup>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          
          {/** SEVERITY DROP DOWN SELECT */}
          <Grid item xs={12} sm={6}>
            <InputLabel id="severity-label">Severity</InputLabel>
            <Select  
              sx={{width: '150px'}} 
              value={severity} 
              onChange={handleSeverityChange} 
              required
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </Grid>
          
          {/** MESSAGE TEXT BOX */}
          <Grid item xs={12} sm={12}>
            <InputLabel id="message-label">Message</InputLabel>
              <TextareaAutosize
              id="message"
              required
              value={message}
              onChange={handleMessageChange}
              inputprops={{ maxLength: 400 }}
              style={{
                overflow: 'auto',
                resize: 'vertical',
                paddingLeft: '10px',
                minWidth: '99%',
                maxWidth: '99%',
                minHeight: '100px',
                maxHeight: '200px',
                fontSize: 20,
              }}
              aria-label="message"
            />
            <div style={{marginTop: '5px', fontSize: '14px', marginBottom: '20px'}}>
                {message.length}/400
            </div>
          </Grid>
        </Grid>
      </form>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Notification
      </Button>
    </Box>
  )
}

export default CreateNotification