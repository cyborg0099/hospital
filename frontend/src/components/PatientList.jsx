import React from 'react';

const PatientList = ({ patients }) => {
    return (
        <div>
            <h3>Patient List</h3>
            <ul>
                {patients.map((patient) => (
                    <li key={patient._id}>
                        <strong>Name:</strong> {patient.name} <br />
                        <strong>Age:</strong> {patient.age} <br />
                        <strong>Gender:</strong> {patient.gender} <br />
                        <strong>Medical History:</strong> {patient.medicalHistory}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
