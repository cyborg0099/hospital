import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthPage = ({ setUserType }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [userType, setUserTypeLocal] = useState('patient'); // Default to patient
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            const url = isLogin ? '/api/auth/login' : '/api/auth/signup';
            const response = await axios.post(url, { userType, email, password });
            setUserType(response.data.userType);
            navigate('/');
        } catch (error) {
            console.error('Authentication failed:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="auth-page">
            <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            <form onSubmit={handleAuth}>
                <div>
                    <label>User Type:</label>
                    <select value={userType} onChange={(e) => setUserTypeLocal(e.target.value)}>
                        <option value="patient">Patient</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to Signup' : 'Switch to Login'}
            </button>
        </div>
    );
};

export default AuthPage;
