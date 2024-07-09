import React, { useEffect } from "react";
import { useState } from "react";
import AdminSidebar from "./Components/Dashboard/AdminSidebar";
import AdminDashboard from "./Components/Dashboard/adminDashboard";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import AddContribution from "./Components/Dashboard/AddContribution";
import ContributionList from "./Components/Dashboard/ContributionList";

import EditAdminProfile from "./Components/Dashboard/EditAdminProfile";
import AdminPaymentHistory from "./Components/Dashboard/PaymentHistory";
import ContributionManager from "./Components/Dashboard/ContributionManager";
import { PaymentProvider } from './Context/PaymentContext';
import Login from './Components/Auth/Login';
import About from './Components/aboutus/About';
import BlogPage from './Components/blogpage/BlogPage';
import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';
import Recover from './Components/Auth/Recover';
import DashboardPage from './pages/DashboardPage';

import './index.css'


const App = () => {
  const [contributions, setContributions] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("In Progress");

  const addContribution = (contribution) => {
    const existingContribution =
      JSON.parse(localStorage.getItem("contributions")) || [];
    existingContribution.push(contribution);
    localStorage.setItem("contributions", JSON.stringify(existingContribution));
  };

  useEffect(() => {
    const storedContribution =
      JSON.parse(localStorage.getItem("contributions")) || [];
    setContributions(storedContribution);
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/profile', {
        method: 'PUT', // Use the appropriate method (PUT, PATCH, etc.)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Profile update result:', result);
      setShowModal(true);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };


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
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<BlogPage/>} />
          {/* <Route path="/footer" element={<Footer/>} /> */}
          <Route path="/" element={<Login/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route
          path="/add-contribution"
          element={
            <AddContribution
              handleSubmit={handleSubmit}
              title={title}
              amount={amount}
              description={description}
              date={date}
              status={status}
              setTitle={setTitle}
              setAmount={setAmount}
              setDescription={setDescription}
              setDate={setDate}
              setStatus={setStatus}
            />
          }
        />
        <Route path="/edit-admin" element={<EditAdminProfile handleSubmit={handleSubmit}/>} />
        <Route path="/history" element={<AdminPaymentHistory />} />
        <Route
          path="/contributionlist"
          element={<ContributionList contributions={contributions} />}
        />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/recover" element={<Recover/>} />
          <Route path="/register" element={<Register/>} />

          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/PaymentHistory" element={<PaymentHistory/>} />
          <Route path="/editProfile" element={<EditProfile/>} />
          <Route path="/Contribution" element={<ContributionList/>} />

          <Route path="/register" element={<UserReg />} />
            {/* <PrivateRoute path="/dashboard" element={Dashboard} /> */}
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<BlogPage/>} />
          {/* <Route path="/footer" element={<Footer/>} /> */}
          <Route path="/" element={<Login/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/selector" element={<Selector/>} />


        <Route path="/" element={<AdminDashboard />} />
      </Routes>
      </PaymentProvider>

    </>
  );
};

export default App;
