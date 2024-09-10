// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientManagement from './pages/PatientManagement';
import DoctorManagement from './pages/DoctorManagement';
import AppointmentScheduling from './pages/AppointmentScheduling';
import BillingSystem from './pages/BillingSystem';
import NavigationBar from './components/NavigationBar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './styles/Interactive.css'
const App = () => {
    const [role, setRole] = useState(null); // User role: 'patient', 'admin', or 'doctor'

    return (
        <Router>
            <NavigationBar role={role} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage setRole={setRole} />} />
                <Route path="/signup" element={<SignupPage setRole={setRole} />} />
                <Route path="/patients" element={<PatientManagement />} />
                <Route path="/doctors" element={<DoctorManagement />} />
                <Route path="/appointments" element={<AppointmentScheduling role={role} />} />
                <Route path="/billing" element={<BillingSystem />} />
            </Routes>
        </Router>
    );
};

export default App;
