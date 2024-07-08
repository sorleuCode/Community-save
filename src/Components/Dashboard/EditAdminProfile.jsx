

import React, { useState, useEffect } from 'react';
import './EditAdminProfile.css';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    bio: '',
    profilePicture: '',
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch admin profile data here
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/admin/profile'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfile({
          name: data.name,
          email: data.email,
          password: '', // Leave password empty for security reasons
          bio: data.bio || '',
          profilePicture: data.profilePicture || '',
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };



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

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="theway">
      <div className="user-profile">
   
      </div>

      <div className="edit-profile">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
            />
          </div>
         
         
          <button type="submit">Save Changes</button>
        </form>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <p>Profile saved successfully!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
