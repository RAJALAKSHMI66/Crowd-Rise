import React, { useState, useEffect } from "react";
import "../styles.css"; 

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "",  // Password field will be handled securely (not shown in plaintext)
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Implement logic to save profile data (e.g., API call)
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="container">
      <h2>Profile</h2>
      <div className="profile-info">
        <div className="profile-item">
          <label>Name:</label>
          {editing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.name}</p>
          )}
        </div>
        <div className="profile-item">
          <label>Email:</label>
          {editing ? (
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          ) : (
            <p>{profile.email}</p>
          )}
        </div>
        <div className="profile-item">
          <label>Password:</label>
          {editing ? (
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleChange}
            />
          ) : (
            <p>******</p>  // Display asterisks for password
          )}
        </div>
        <div className="profile-actions">
          {editing ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditing(false)}>Cancel</button>
            </>
          ) : (
            <button onClick={() => setEditing(true)}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
