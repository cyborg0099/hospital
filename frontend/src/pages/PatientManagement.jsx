import React, { useState, useEffect } from 'react';
import PatientList from '../components/PatientList';
import AddPatientForm from '../components/AddPatientForm';

const PatientManagement = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try
            {
                const response = await fetch('http://localhost:5000/api/patients');
                const data = await response.json();
                setPatients(data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    const addPatient = async (patient) => {
        try {
            const response = await fetch('http://localhost:5000/api/patients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(patient),
            });

            const newPatient = await response.json();
            setPatients([...patients, newPatient]);
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    };

    return (
        <div>
            <h2>Patient Management</h2>
            <AddPatientForm addPatient={addPatient} />
            <PatientList patients={patients} />
        </div>
    );
};

export default PatientManagement;
