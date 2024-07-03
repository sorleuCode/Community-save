import React from 'react';
import './PaymentHistory.css';

const PaymentHistory = () => {
  const payments = [
    { date: 'Mar 1, 2023', amount: 100, status: 'Received' },
    { date: 'Mar 1, 2023', amount: 100, status: 'Sent' },
    { date: 'Mar 1, 2023', amount: 100, status: 'Received' },
    { date: 'Mar 1, 2023', amount: 100, status: 'Sent' },
    { date: 'Mar 1, 2023', amount: 100, status: 'Received' },
    { date: 'Mar 1, 2023', amount: 100, status: 'Received' },
  ];

  return (
    <div className="payment-history">
      <h2>Payment History</h2>
      <div className="filters">
        <button className='btn'>All</button>
        <button className='btn'>Received</button>
        <button className='btn'>Sent</button>
      </div>
    
    <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.date}</td>
              <td>{payment.amount}</td>
              <td className={payment.status.toLowerCase()}>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
}

export default PaymentHistory;