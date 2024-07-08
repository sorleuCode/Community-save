import React, { useState } from "react";
import SidebarWithHeader from "./SidebarWithHeader";
import Dash from "./Dash";
import "./EditProfile.css";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    membershipStatus: "active" // Default to active
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="EditProfile">
      <SidebarWithHeader />

      <div className="edit-profile-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <label htmlFor="membershipStatus">Membership Status:</label>
          <select
            id="membershipStatus"
            name="membershipStatus"
            value={formData.membershipStatus}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="notActive">Not Active</option>
          </select>

        </form>
      </div>
    </div>
  );
};

export default EditProfile;
