import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import momentPlugin from '@fullcalendar/moment';
import { Link } from "react-router-dom";


const lessons = [
    {
      id: "lesson1",
      title: "Mathematics",
      room: "Room 1",
      classCode: "Math-101",
      start: "2023-02-24T08:10:00",
      end: "2023-02-24T09:10:00",
    },
    {
      id: "lesson2",
      title: "English",
      room: "Room 2",
      classCode: "Eng-101",
      start: "2023-02-24T09:10:00",
      end: "2023-02-24T10:10:00",
    },
    {
      id: "lesson3",
      title: "History",
      room: "Room 3",
      classCode: "Hist-101",
      start: "2023-02-24T10:30:00",
      end: "2023-02-24T11:30:00",
    },
    {
        id: "lesson4",
        title: "History",
        room: "Room 3",
        classCode: "Hist-101",
        start: "2023-02-24T11:30:00",
        end: "2023-02-24T12:30:00",
      },
      {
        id: "lesson4",
        title: "History",
        room: "Room 3",
        classCode: "Hist-101",
        start: "2023-02-24T13:15:00",
        end: "2023-02-24T14:15:00",
      }
  ];
  
  const handleEventClick = (event) => {
    // Use the event ID to construct the URL to the register page
    const registerUrl = `/register/${event.event.id}`;
  
    // Navigate to the register page
    window.location.href = registerUrl;
  };
  
  const customEventContent = (eventInfo) => {
    return (
      <div>
        <b>{eventInfo.timeText}</b>
        <p>{eventInfo.event.extendedProps.room}</p>
        <p>{eventInfo.event.extendedProps.classCode}</p>
      </div>
    );
  };



const TeacherSchedule = () => {
      const customSlotLabelContent = ({ date }) => {
        const hour = date.getUTCHours();
        const minute = date.getUTCMinutes();
        if (hour === 12 && minute === 0) {
          return <div>12pm</div>;
        }
        return <div>{`${hour}:${minute === 0 ? "00" : minute}`}</div>;
      };
      
      const customSlotLaneContent = ({ date }) => {
        const hour = date.getUTCHours();
        const minute = date.getUTCMinutes();
        if ((hour === 12 && minute >= 30 && minute < 45) || (hour === 10 && minute >= 10 && minute < 30)) {
          return (
            <div style={{ height: 22, backgroundColor: "black", color: "white", textAlign:'center' }}>
              {hour === 12 && minute >= 30 && minute < 45 ? "Lunch 12:30pm - 1:15pm" : "Break 10:10am - 10:30am"}
            </div>
          );
        }
        return <div style={{ height: 1, backgroundColor: "gray" }}></div>;
      };
      
      
    
      return (
        <div>
          <FullCalendar
            weekends={false}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, momentPlugin]}
            initialView={"timeGridWeek"}
            headerToolbar={{
              start: "today prev,next", // will normally be on the left. if RTL, will be on the right
              center: "title",
              end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
            }}
            allDaySlot={false}
            timeZone='UTC'
            slotDuration='00:15:00'
            slotLabelInterval='01:00'
            slotMinTime='08:00:00'
            slotMaxTime='16:00:00'
            titleFormat='DD/MM/YYYY'
            views= {{
                timeGridWeek: { // name of view
                  dayHeaderFormat: 'ddd DD/MM/YYYY'
                  // other view-specific options here
            }}}
            height={'auto'}
            slotLabelContent={customSlotLabelContent} // set custom slot label content
            slotLaneContent={customSlotLaneContent} // set custom slot lane content
            eventContent={customEventContent}
            events={lessons}
            eventClick={handleEventClick} // set the click handler for events
          />
        </div>
      );
};


export default TeacherSchedule