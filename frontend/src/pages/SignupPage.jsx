// src/pages/SignupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css'

const SignupPage = ({ setRole }) => {
    const [selectedRole, setSelectedRole] = useState('patient');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [specialty, setSpecialty] = useState(''); // Only for doctors
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Handle signup logic here, such as sending data to a backend server
        setRole(selectedRole);
        navigate('/');
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Role:
                    <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <br />
                <label>
                    Full Name:
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                {selectedRole === 'patient' && (
                    <label>
                        Age:
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </label>
                )}
                {selectedRole === 'doctor' && (
                    <label>
                        Specialty:
                        <input
                            type="text"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                            required
                        />
                    </label>
                )}
                <br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignupPage;
