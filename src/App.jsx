import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserReg from "./Components/Register/UserReg";
// import './App.css'
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
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PaymentProvider } from './Context/PaymentContext';
import Login from './Components/Auth/Login';
import About from './Components/aboutus/About';
import BlogPage from './Components/blogpage/BlogPage';
import Register from './Components/Auth/Register';

import DashboardPage from './pages/DashboardPage';
import PaymentHistory from './Components/Dashboard/PaymentHistory';
import EditProfile from './Components/Dashboard/EditProfile';
import ContributionList from './Components/Dashboard/ContributionList';


import Dashboard from './Components/Dashboard/Dashboard';
import Contact from './Components/Contact/Contact';
import Selector from './Components/Selector/Selector';
import Recover from './Components/Auth/Recover';
import './index.css'

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newContribution = { title, amount, description, date, status };
    addContribution(newContribution);
    console.log(newContribution);
    setContributions([...contributions, newContribution]);
    // Reset the form
    setTitle("");
    setAmount("");
    setDescription("");
    setDate("");
    setStatus("In Progress");
    navigate("/admin-dashboard");
  };

  return (
    <div className="app">
      {/*       
      <AdminSidebar />
      <ContributionManager /> */}
      <Routes>
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
        <Route path="/edit-admin" element={<EditAdminProfile />} />
        <Route path="/history" element={<AdminPaymentHistory />} />
        <Route
          path="/contributionlist"
          element={<ContributionList contributions={contributions} />}
        />


const App = () => {
  return (
    <>
      <PaymentProvider>
        
        <Routes>
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

      {/* <PaymentHistory/> */}
    </div>
  );
};

export default App;


