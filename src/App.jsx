import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Homepage from './pages/Homepage';
import PaymentHistory from './Components/Dashboard/PaymentHistory';
import DashboardPage from './pages/DashboardPage';
import { PaymentProvider } from './Context/PaymentContext';
import { Route, Routes } from 'react-router-dom';
import Login from "../src/Components/Auth/Login"
import Register from "../src/Components/Auth/Register"


const App = () => {
  return (
    <>
      <PaymentProvider>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          {/* <PrivateRoute path="/dashboard" element={Dashboard} /> */}
          <Route path="/dashboard" element={<Dashboard/>} />
          {/* <Route path="/" element={<Login/>} /> */}
          <Route path='/' element={<Homepage/>}/>
          {/* <Route path="/dashboard" element={<DashboardPage/>} /> */}
          <Route path="/" element={<Login/>} />

        </Routes>
      </PaymentProvider>
    </>
  )
}

export default App;