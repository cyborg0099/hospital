// src/components/AddDoctorForm.js
import React, { useState } from 'react';

const AddDoctorForm = ({ addDoctor }) => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoctor({ name, specialty });
        setName('');
        setSpecialty('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                required
            />
            <button type="submit">Add Doctor</button>
        </form>
    );
};

export default AddDoctorForm;
