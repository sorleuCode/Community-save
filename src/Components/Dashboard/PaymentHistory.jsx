import React from "react";
import "./PaymentHistory.css";


const PaymentHistory = () => {

  return (
    <div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h2>Total Earnings</h2>
          </div>
          <h1>#430.00</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h2>Total Contributed</h2>
          </div>
          <h1>-#400.00</h1>
        </div>
      </div>

      <h2>Payment History</h2>

     <div className="btn">
     <button className="btn2">All</button>
      <button className="btn2">Received</button>
      <button className="btn2">Sent</button>
     </div>


  <table className="table">
    
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>01/01/2021</td>
          <td>$100.00</td>
          <td>Received</td>
        </tr>
        <tr>
          <td>01/02/2021</td>
          <td>$200.00</td>
          <td>Sent</td>
        </tr>
        <tr>
          <td>01/03/2021</td>
          <td>$300.00</td>
          <td>Received</td>
        </tr>
  
          </tbody>
    </table>


    </div>
  );
};

export default PaymentHistory;
