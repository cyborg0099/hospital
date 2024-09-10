import React, { useState, useEffect } from 'react';
import BillingList from '../components/BillingList';
import AddBillingForm from '../components/AddBillingForm';
import axios from 'axios';

const BillingSystem = () => {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        const fetchBills = async () => {
            const response = await axios.get('/api/bills');
            setBills(response.data);
        };

        fetchBills();
    }, []);

    const addBill = async (bill) => {
        const response = await axios.post('/api/bills', bill);
        setBills([...bills, response.data]);
    };

    return (
        <div>
            <h2>Billing System</h2>
            <AddBillingForm addBill={addBill} />
            <BillingList bills={bills} />
        </div>
    );
};

export default BillingSystem;
