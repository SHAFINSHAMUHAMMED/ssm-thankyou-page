import React, { useState, useEffect } from 'react';

const TimePicker = ({ selectedDate, onTimeSelect, disabled }) => {
  const [selectedTime, setSelectedTime] = useState('');
  
  // Generate time slots between 10:30 AM and 5:30 PM with 30-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    const now = new Date();
    const start = new Date(selectedDate);
    start.setHours(10, 30, 0); // Start at 10:30 AM
    
    const end = new Date(selectedDate);
    end.setHours(17, 30, 0); // End at 5:30 PM

    // If selected date is today, set start time to next 30-min slot from current time
    if (isToday(selectedDate)) {
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const nextSlotMinutes = Math.ceil(currentMinutes / 30) * 30 + 60; // Add 1 hour buffer
      start.setHours(Math.floor(nextSlotMinutes / 60), nextSlotMinutes % 60, 0);
    }
    
    // Don't generate any slots if start time is past end time
    if (start > end) {
      return [];
    }

    while (start <= end) {
      const endTime = new Date(start);
      endTime.setMinutes(endTime.getMinutes() + 60); // 1-hour duration
      
      // Only add slot if the end time is before or equal to 5:30 PM
      if (endTime <= end) {
        const timeString = start.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        
        const endTimeString = endTime.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        
        slots.push(`${timeString} - ${endTimeString}`);
      }
      
      start.setMinutes(start.getMinutes() + 30); // 30-minute intervals
    }
    
    return slots;
  };

  const isToday = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate.getDate() === today.getDate() &&
      selectedDate.getMonth() === today.getMonth() &&
      selectedDate.getFullYear() === today.getFullYear();
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    onTimeSelect(time);
  };

  // Reset selected time when date changes
  useEffect(() => {
    setSelectedTime('');
    onTimeSelect('');
  }, [selectedDate]);

  const timeSlots = generateTimeSlots();

  return (
    <div className="w-full">
      <select
        value={selectedTime}
        onChange={handleTimeChange}
        disabled={disabled}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-100"
      >
        <option value="">Select a time slot</option>
        {timeSlots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>
      {isToday(selectedDate) && timeSlots.length === 0 && (
        <p className="mt-1 text-sm text-red-600">
          No available time slots for today. Please select another date.
        </p>
      )}
    </div>
  );
};

export default TimePicker;