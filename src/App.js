import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

const localizer = momentLocalizer(moment);

const App = () => {
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSlotSelect = (slotInfo) => {
    // Get the start and end times of the selected slot
    const { start, end } = slotInfo;

    // Generate an array of time slots between start and end (in half-hour intervals)
    const slots = [];
    let currentTime = moment(start);
    while (currentTime.isBefore(end)) {
      slots.push(currentTime.toDate());
      currentTime.add(30, 'minutes');
    }

    // Update the selectedSlots state with the newly selected slots
    setSelectedSlots(slots);
  };

  return (
    <div className="App">
      <h1>Pickleball Scheduler</h1>
      <body>For the boys at Van Dyke Park</body>
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          selectable
          events={[]} // No events for this example, you can add events if needed
          defaultView="week"
          views={['week']}
          step={30}
          timeslots={2}
          onSelectSlot={handleSlotSelect}
          selected={selectedSlots}
        />
      </div>
    </div>
  );
};

export default App;


