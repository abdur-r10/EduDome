import React, { useState } from 'react'
import { Grid, Box, Button, InputLabel, TextareaAutosize, TextField, Checkbox, FormHelperText, FormControlLabel, FormLabel, FormGroup, FormControl, Select, MenuItem } from '@mui/material'

const sampleTeacherData = ['teacher1', 'teacher2', 'teacher3']
const sampleStudentData = ['class1', 'class2', 'class3']

const CreateNotification = () => {
  const [dateToActivate, setDateToActivate] = useState('');
  const [dateToDelete, setDateToDelete] = useState('');
  const [teachers, setTeachers] = useState({
    teacher1: false,
    teacher2: false,
    teacher3: false,
  });
  const [classes, setClasses] = useState({
    class1: false,
    class2: false,
    class3: false,
  });
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = React.useState('');


  const handleDateToActivateChange = (event) => {
    setDateToActivate(event.target.value);
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
    // handle form submission logic here
  };


  return (
  <Grid container spacing={2}>
  <Grid item xs={6}>
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
              fullWidth
              required
            />
          </Grid>
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
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">To</FormLabel>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <FormGroup>
                    <FormHelperText>Select Teacher(s)</FormHelperText>
                    <FormControlLabel
                      control={<Checkbox checked={teachers.teacher1} onChange={handleTeacherChange} name="teacher1" />}
                      label="Teacher 1"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={teachers.teacher2} onChange={handleTeacherChange} name="teacher2" />}
                      label="Teacher 2"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={teachers.teacher3} onChange={handleTeacherChange} name="teacher3" />}
                      label="Teacher 3"
                    />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <FormGroup>
                    <FormHelperText>Select Class(es)</FormHelperText>
                    <FormControlLabel
                      control={<Checkbox checked={classes.class1} onChange={handleClassChange} name="class1" />}
                      label="Class 1"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={classes.class2} onChange={handleClassChange} name="class2" />}
                      label="Class 2"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={classes.class3} onChange={handleClassChange} name="class3" />}
                      label="Class 3"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel id="severity-label">Severity</InputLabel>
            <Select  sx={{width: '150px'}} value={severity} onChange={handleSeverityChange}>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sm={12}> {/* Move the message text box to a lower index */}
          <InputLabel id="message-label">Message</InputLabel>
            <TextareaAutosize
              id="message"
              value={message}
              onChange={handleMessageChange}
              inputProps={{ maxLength: 400 }}
              style={{ minWidth: '100%', maxWidth: '100%', height: '100px', minHeight: '100px', maxHeight: '200px', fontSize: 20 }}
              aria-label="message"
            />
          </Grid>
        </Grid>
      </form>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Notification
      </Button>
    </Box>
  </Grid>


      <Grid item xs={6}>
        <Box>
          something here
        </Box>
      </Grid>
    </Grid>
  )
}

export default CreateNotification


//Message: (text box)
//Severity: low/medium/high
//To: (class list, teachers list)
//date to activate: calendar option
//date to delete: calendar option past activation date
//box to see active notifications and notifications on hold
