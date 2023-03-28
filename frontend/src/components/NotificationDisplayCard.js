import React, { useState } from 'react'
import { Stack, TextareaAutosize } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';


const NotificationDisplayCard = ({ notification, onSave, onDelete }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedNotification, setEditedNotification] = useState(notification);
    const { dateToActivate, dateToDelete, teachers, classes, severity, message } = editedNotification;

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    onSave(editedNotification);
    setEditMode(false);
  };

  const handleDeleteClick = () => {
    onDelete(notification);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNotification({ ...editedNotification, [name]: value });
  };

  const handleTeacherChange = (e) => {
    const { name, checked } = e.target;
    const updatedTeachers = { ...teachers, [name]: checked };
    setEditedNotification({ ...editedNotification, teachers: updatedTeachers });
  };

  const handleClassChange = (e) => {
    const { name, checked } = e.target;
    const updatedClasses = { ...classes, [name]: checked };
    setEditedNotification({ ...editedNotification, classes: updatedClasses });
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    if (value.length <= 400) {
      setEditedNotification({...editedNotification, message: value});
    }
  };

  const teacherList = Object.keys(teachers).filter((t) => teachers[t]).join(", ");
  const classList = Object.keys(classes).filter((c) => classes[c]).join(", ");
  const trimmedMessage = message.length > 100 ? message.substr(0, 100) + "..." : message;

  const lowSeverityStyle = {
    'padding': '5px',
    'margin': '5px',
    'backgroundColor': '#2196F3',
    'color': 'white',
  }

  const mediumSeverityStyle = {
    'padding': '5px',
    'margin': '5px',
    'backgroundColor': '#ff9800',
    'color': 'white',
  }

  const highSeverityStyle = {
    'padding': '5px',
    'margin': '5px',
    'backgroundColor': '#f44336',
    'color': 'white',
  }
  
const style = (severity) => {
  if(severity === 'low'){
    return lowSeverityStyle
  }
  if(severity === 'medium'){
    return mediumSeverityStyle
  }
  if(severity === 'high'){
    return highSeverityStyle
  }
}


const showTeachersList = Object.values(teachers).includes(true)
const showClassList = Object.values(classes).includes(true)

return (
  <div className="notification-box" style={style(severity)}>
    <Stack direction='row' display= 'flex' justifyContent= 'space-between' spacing={2} marginBottom='5px'>
      <Stack direction='column' spacing={0.5}>
      
        {editMode ? (
          <div>
            <span>To Teachers: </span>
            {Object.keys(teachers).map((t) => (
              <div key={t}>
                <input type="checkbox" name={t} checked={teachers[t]} onChange={handleTeacherChange} />
                <label>{t}</label>
              </div>
          ))}
          </div>
        ) : (
          showTeachersList && (
          <div>
            <span>To Teachers: </span>
            <span>{teacherList}</span>
          </div>
          )
        )}




        {editMode ? (
          <div>
            <span>To Classes: </span>
            {Object.keys(classes).map((c) => (
              <div key={c}>
                <input type="checkbox" name={c} checked={classes[c]} onChange={handleClassChange} />
                <label>{c}</label>
              </div>
            ))}
          </div>
        ) : (
          showClassList && (
            <div>
              <span>To Classes: </span>
              <span>{classList}</span>
            </div>
          )
        )}
      </Stack>
      

      <Stack direction='column' spacing={0.5}>
        <div>
          <span>Activation Date: </span>
          {editMode ? (
            <input type="date" name="dateToActivate" value={dateToActivate} onChange={handleInputChange} />
          ) : (
            <span>{dateToActivate}</span>
          )}
        </div>
        <div>
          <span>Deletion Date: </span>
          {editMode ? (
            <input type="date" name="dateToDelete" value={dateToDelete} onChange={handleInputChange} />
          ) : (
            <span>{dateToDelete}</span>
          )}
        </div>
      </Stack>
    </Stack>
      
      <div style={{marginBottom:'5px'}}>
        <span>Message: </span><br/>
        {editMode ? (
          <TextareaAutosize 
          id="notification-message" 
          value={message} 
          onChange={handleMessageChange} 
          inputprops={{ maxLength: 400 }}
          style={{
            overflow: 'auto',
            resize: 'vertical',
            width: '98%',
            maxWidth: '98%',
            minHeight: '50px',
            maxHeight: '100px',
          }}
          />
        ) : (
          <span>{trimmedMessage}</span>
        )}
      </div>
      <div style={{marginBottom:'5px'}}>
        <span>Severity: </span>
        {editMode ? (
        <select name="severity" value={severity} style={{marginBottom: '10px'}}onChange={handleInputChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
        </select>
        ) : (
        <span>{severity}</span>
        )}
      </div>
    
    {editMode ? (
    <div>
    <button onClick={handleSaveClick}>Save</button>
    <button onClick={() => setEditMode(false)}>Cancel</button>
    </div>
    ) : (
    <div>
    <EditIcon onClick={handleEditClick}/>
    <DeleteIcon onClick={handleDeleteClick}/>
    </div>
    )}
  </div>
);
};

export default NotificationDisplayCard