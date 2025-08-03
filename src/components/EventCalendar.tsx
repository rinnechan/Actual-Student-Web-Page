'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temp event
const events = [
    {
        id : 1,
        duration : "1:30pm - 3:00pm",
        title: "School Meeting",
        date: new Date(2025, 8, 15),
    },
    {
        id : 2,
        duration : "10:00am - 11:30am",
        title: "Parent-Teacher Conference",
        date: new Date(2025, 8, 20),
    },
    {
        id : 3,
        duration : "9:00am - 12:00pm",
        title: "Sports Day",
        date: new Date(2025, 8, 25),
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <Calendar onChange={onChange} value={value} />
            <div className="flex flex-col gap-4">
                {events.map(event => (
                    <div key={event.id} className="p-4 bg-gray-100 rounded-md shadow-sm">
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <p className="text-sm text-gray-600">{event.duration}</p>
                        <p className="text-xs text-gray-500">{event.date.toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventCalendar;