import React, { useState } from 'react'
import { Stack } from '@mui/material';
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

  const teacherList = Object.keys(teachers).filter((t) => teachers[t]).join(", ");
  const classList = Object.keys(classes).filter((c) => classes[c]).join(", ");
  const trimmedMessage = message.length > 100 ? message.substr(0, 100) + "..." : message;

  const lowSeverityStyle = {
    'padding': '20px',
    'margin': '5px',
    'backgroundColor': '#2196F3',
    'color': 'white',
  }

  const mediumSeverityStyle = {
    'padding': '20px',
    'margin': '5px',
    'backgroundColor': '#ff9800',
    'color': 'white',
  }

  const highSeverityStyle = {
    'padding': '20px',
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
/* 

*/


/* 

*/
  return (
    <div className="notification-box" style={style(severity)}>
      <Stack direction='row' display= 'flex' justifyContent= 'space-between' spacing={2}>
        <Stack direction='column' spacing={0.5}>
          <div>
            <span>To Teachers: </span>
            {editMode ? (
              <div>
                {Object.keys(teachers).map((t) => (
                  <div key={t}>
                    <input type="checkbox" name={t} checked={teachers[t]} onChange={handleTeacherChange} />
                    <label>{t}</label>
                  </div>
                ))}
              </div>
            ) : (
              <span>{teacherList}</span>
            )}
          </div>


          <div>
            <span>To Classes: </span>
            {editMode ? (
              <div>
                {Object.keys(classes).map((c) => (
                  <div key={c}>
                    <input type="checkbox" name={c} checked={classes[c]} onChange={handleClassChange} />
                    <label>{c}</label>
                  </div>
                ))}
              </div>
            ) : (
              <span>{classList}</span>
            )}
          </div>
        </Stack>
        

        <Stack direction='column' spacing={0.5}>
          <div>
            <span>Date Activated: </span>
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
        
        <div>
          <span>Message: </span><br/>
          {editMode ? (
            <textarea rows={5} cols={110} name="message" value={message} onChange={handleInputChange} maxLength={400} />
          ) : (
            <span>{trimmedMessage}</span>
          )}
        </div>
        <div>
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