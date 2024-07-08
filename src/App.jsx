import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PaymentProvider } from './Context/PaymentContext';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import DashboardPage from './pages/DashboardPage';
import PaymentHistory from './Components/Dashboard/PaymentHistory';
import EditProfile from './Components/Dashboard/EditProfile';
import ContributionList from './Components/Dashboard/ContributionList';



const App = () => {
  return (
    <>
      <PaymentProvider>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/PaymentHistory" element={<PaymentHistory/>} />
          <Route path="/editProfile" element={<EditProfile/>} />
          <Route path="/Contribution" element={<ContributionList/>} />

        </Routes>
      </PaymentProvider>
    </>


  );
};

export default App;