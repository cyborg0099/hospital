import React, { useState } from 'react';

const AddPatientForm = ({ addPatient }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPatient = { name, age, gender, medicalHistory };
        addPatient(newPatient);
        setName('');
        setAge('');
        setGender('');
        setMedicalHistory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Age:
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Gender:
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </label>
            <br />
            <label>
                Medical History:
                <textarea
                    value={medicalHistory}
                    onChange={(e) => setMedicalHistory(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Add Patient</button>
        </form>
    );
};

export default AddPatientForm;
