// src/components/AddBillingForm.js
import React, { useState } from 'react';

const AddBillingForm = ({ addBill }) => {
    const [patientName, setPatientName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBill({ patientName, amount, date });
        setPatientName('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Patient Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">Add Bill</button>
        </form>
    );
};

export default AddBillingForm;
