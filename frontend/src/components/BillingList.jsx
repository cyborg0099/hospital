// src/components/BillingList.js
import React from 'react';

const BillingList = ({ bills }) => {
    return (
        <div>
            <h3>Bills</h3>
            <ul>
                {bills.map((bill, index) => (
                    <li key={index}>
                        {bill.patientName} - ${bill.amount} - {bill.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BillingList;
