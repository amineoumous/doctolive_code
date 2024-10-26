import React, { useState } from 'react';
import './Timeline.css'; // Import the CSS file for styling
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const hours = Array.from({ length: 24 }, (_, i) => i); // Array of hours from 0 to 23

const Timeline = ({ events,_showEvent }) => {
  const generateUniqueTops = () => {
    const tops = [];
    events.forEach(() => {
      let top;
      do {
        top = Math.floor(Math.random() * 200); // Generate a random top value
      } while (tops.includes(top)); // Ensure the top value is unique
      tops.push(top);
    });
    return tops;
  };

  const convertEvent = (event) => {
    const startTimeParts = event.time.split(':');
    const startHour = parseInt(startTimeParts[0], 10);
  
    // Assuming the event is 1 hour long for simplicity, adjust as needed.
    const endHour = startHour + 1;
  
    return {
      name: event.title,
      startHour: startHour,
      endHour: endHour,
      color: event.tarif.color.toUpperCase(),
    };
  };
  // Calculate unique top positions for all events
  const uniqueTops = generateUniqueTops();
  const hourss=[0,7,11,14,17,20,23];
  return (
    <div className="timeline-container">
      {/* Timeline Header */}

      <div className="event-marker">
              <div className='cercle-i'  ></div>
              <div className="vertical-line"></div>
            </div>

      <div className="timeline-header">
        {hours.map((hour) => (
          <div key={hour} className="timeline-hour">
            {hourss.includes(hour) ? hour+":00" :""}
          </div>
        ))}
      </div>

      {/* Timeline Events */}
      <div className="timeline-events">
      {events.map((event, index) => {
  const convertedEvent = convertEvent(event); // Convert the event

  return (
    <div
     onClick={()=>_showEvent(event)}
      key={index}
      className="timeline-event"
      style={{
        left: `${(convertedEvent.startHour / 24) * 100}%`,
        width: 206,
        height: 48,
        top: `${uniqueTops[index]}px`,
        backgroundColor: convertedEvent.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
      }}
    >
      <div className="background-cercle">
        <IoMdCheckmarkCircleOutline color="#FF6161" size={25} />
      </div>
      <div className="name-timeline">
        <span>{convertedEvent.name}</span>
        <span>{convertedEvent.startHour} - {convertedEvent.endHour}</span>
      </div>
    </div>
  );
})}

      </div>
    </div>
  );
};

export default Timeline;
