// src/components/ScheduleAppointmentForm.js
import React, { useState } from 'react';

const ScheduleAppointmentForm = ({ addAppointment }) => {
    const [patientName, setPatientName] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment({ patientName, doctorName, date, time });
        setPatientName('');
        setDoctorName('');
        setDate('');
        setTime('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Patient Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Doctor Name"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            <button type="submit">Schedule Appointment</button>
        </form>
    );
};

export default ScheduleAppointmentForm;
