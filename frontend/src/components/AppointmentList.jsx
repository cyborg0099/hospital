// src/components/AppointmentList.js
import React from 'react';

const AppointmentList = ({ appointments, role, onDecision }) => {
    return (
        <div>
            <h3>Appointments</h3>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id}>
                        {appointment.patientName} with Dr. {appointment.doctorName} on {appointment.date} at {appointment.time} - {appointment.status}
                        {role === 'doctor' && appointment.status === 'pending' && (
                            <>
                                <button onClick={() => onDecision(appointment.id, 'accepted')}>Accept</button>
                                <button onClick={() => onDecision(appointment.id, 'rejected')}>Reject</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
