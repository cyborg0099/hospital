import React, { useState, useEffect } from 'react';
import AppointmentList from '../components/AppointmentList';
import ScheduleAppointmentForm from '../components/ScheduleAppointmentForm';
import axios from 'axios';

const AppointmentScheduling = ({ role }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await axios.get('/api/appointments');
            setAppointments(response.data);
        };

        fetchAppointments();
    }, []);

    const handleDecision = async (id, decision) => {
        const response = await axios.put(`/api/appointments/${id}`, { status: decision });
        setAppointments(appointments.map(appt =>
            appt.id === id ? response.data : appt
        ));
    };

    const handleFormSubmit = async (formData) => {
        const response = await axios.post('/api/appointments', formData);
        setAppointments([...appointments, response.data]);
    };

    return (
        <div>
            <h2>Appointment Scheduling</h2>
            <ScheduleAppointmentForm role={role} onSubmit={handleFormSubmit} />
            <AppointmentList appointments={appointments} role={role} onDecision={handleDecision} />
        </div>
    );
};

export default AppointmentScheduling;
