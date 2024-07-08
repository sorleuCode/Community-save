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

        <Route path="/" element={<AdminDashboard />} />
      </Routes>

      {/* <PaymentHistory/> */}
    </div>
  );
};

export default App;

