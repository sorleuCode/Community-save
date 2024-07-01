import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { PaymentProvider } from './Context/PaymentContext';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import PaymentHistory from './Components/Dashboard/PaymentHistory';


const App = () => {
  
  return (
    <div>
      <PaymentHistory/>
      
      {/* <PaymentProvider> */}
        
        {/* <Routes> */}
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/register" element={<Register/>} /> */}
          {/* <PrivateRoute path="/dashboard" element={Dashboard} /> */}
          {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
          {/* <Route path="/" element={<Login/>} /> */}

        {/* </Routes> */}
      {/* </PaymentProvider> */}
    </div>


  );
};

export default App;