// src/components/DoctorList.js
import React from 'react';

const DoctorList = ({ doctors }) => {
    return (
        <div>
            <h3>Doctors</h3>
            <ul>
                {doctors.map((doctor, index) => (
                    <li key={index}>
                        {doctor.name} - {doctor.specialty}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorList;
