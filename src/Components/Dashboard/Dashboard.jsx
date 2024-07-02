import React from 'react';
import './PaymentHistory.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="earnings">
        <h2>Total Earnings</h2>
        <p>#430.00</p>
        <span>as of 01-December 2022</span>
      </div>
      <div className="contributed">
        <h2>Total Contributed</h2>
        <p className='contribute'>#400.00</p>
        <span>as of 01-December 2022</span>
      </div>
    </div>
  );
}

export default Dashboard;