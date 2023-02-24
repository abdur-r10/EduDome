import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import timelinePlugin from '@fullcalendar/timeline'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const scheduleData = {
    "Monday": [
      {
        "classID": "MATH101",
        "room": "Room 101",
        "start": "09:00",
        "end": "10:30"
      },
      {
        "classID": "MATH102",
        "room": "Room 102",
        "start": "10:30",
        "end": "12:00"
      },
      {
        "classID": "PHYS101",
        "room": "Room 103",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "Tuesday": [
      {
        "classID": "ENGL101",
        "room": "Room 201",
        "start": "08:30",
        "end": "10:00"
      },
      {
        "classID": "HIST101",
        "room": "Room 202",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "classID": "HIST102",
        "room": "Room 203",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "Wednesday": [
      {
        "classID": "MATH101",
        "room": "Room 101",
        "start": "09:00",
        "end": "10:30"
      },
      {
        "classID": "MATH102",
        "room": "Room 102",
        "start": "10:30",
        "end": "12:00"
      },
      {
        "classID": "PHYS101",
        "room": "Room 103",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "Thursday": [
      {
        "classID": "ENGL101",
        "room": "Room 201",
        "start": "08:30",
        "end": "10:00"
      },
      {
        "classID": "HIST101",
        "room": "Room 202",
        "start": "10:00",
        "end": "12:00"
      },
      {
        "classID": "HIST102",
        "room": "Room 203",
        "start": "14:00",
        "end": "16:00"
      }
    ],
    "Friday": [
      {
        "classID": "MATH101",
        "room": "Room 101",
        "start": "09:00",
        "end": "10:30"
      },
      {
        "classID": "MATH102",
        "room": "Room 102",
        "start": "10:30",
        "end": "12:00"
      },
      {
        "classID": "PHYS101",
        "room": "Room 103",
        "start": "14:00",
        "end": "16:00"
      }
    ],
  }
  



const TeacherSchedule = () => {

    const events = [];

  // Iterate over each day in the scheduleData
  for (const day in scheduleData) {
    const classes = scheduleData[day];

    // Iterate over each class in the current day
    classes.forEach((classInfo) => {
      const { room, classID, start, end } = classInfo;
      //const [start, end] = time.split('-');

      // Generate the event object
      const event = {
        title: `${classID} - ${room}`,
        start: `${day}T${start}:00`,
        end: `${day}T${end}:00`,
      };

      // Add the event to the events array
      events.push(event);
    });
  }
    
      const handleSelectRange = (arg) => {
        console.log(arg);
      };
    
      const handleDropEvent = (arg) => {
        console.log(arg);
      };
    
      const handleSelectEvent = (arg) => {
        console.log(arg);
      };
    
      const handleResizeEvent = (arg) => {
        console.log(arg);
      };
    
      return (
        <div>
          <h1>Demo App</h1>
          <FullCalendar
            weekends={false}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={{
              start: "today prev,next", // will normally be on the left. if RTL, will be on the right
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
            }}
            height={"auto"}
          />
        </div>
      );
};


export default TeacherSchedule