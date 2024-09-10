import React, { useState, useEffect } from 'react';
import DoctorList from '../components/DoctorList';
import AddDoctorForm from '../components/AddDoctorForm';
import axios from 'axios';

const DoctorManagement = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            const response = await axios.get('/api/doctors');
            setDoctors(response.data);
        };

        fetchDoctors();
    }, []);

    const addDoctor = async (doctor) => {
        const response = await axios.post('/api/doctors', doctor);
        setDoctors([...doctors, response.data]);
    };

    return (
        <div>
            <h2>Doctor Management</h2>
            <AddDoctorForm addDoctor={addDoctor} />
            <DoctorList doctors={doctors} />
        </div>
    );
};

export default DoctorManagement;
