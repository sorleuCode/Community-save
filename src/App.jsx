
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PaymentProvider } from './Context/PaymentContext';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Recover from './Components/Auth/Recover';
import Homepage from './pages/Homepage';
import DashboardPage from './pages/DashboardPage';
import React from 'react';
import AdminSidebar from './Components/Dashboard/AdminSidebar';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import './index.css'



const App = () => {
  return (
    <>
      <PaymentProvider>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/recover" element={<Recover/>} />

          <Route path="/register" element={<Register/>} />
          {/* <PrivateRoute path="/dashboard" element={Dashboard} /> */}
          <Route path="/dashboard" element={<Dashboard/>} />
          {/* <Route path="/" element={<Login/>} /> */}
          <Route path='/' element={<Homepage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/" element={<Login/>} />

        </Routes>
      </PaymentProvider>
    </>

  );
};

export default App;
