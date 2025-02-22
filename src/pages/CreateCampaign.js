import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CreateCampaign = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();
  const { auth } = useAuth();

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !goalAmount || !endDate) {
      alert("Please fill in all fields");
      return;
    }

    // Send the form data to the server (API call)
    const campaignData = {
      title,
      description,
      goalAmount,
      endDate,
      createdBy: auth.isAuthenticated ? "Admin" : "User", // For now, let's assume the creator is an admin
    };

    // To make an API call here to save the campaign data
    console.log("Campaign Created:", campaignData);

    // Navigate to the campaign list or any other page after successful submission
    navigate("/campaigns");
  };

  return (
    <div className="create-campaign-form">
      <h2>Create New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Campaign Title"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Campaign Description"
          />
        </div>
        <div className="form-group">
          <label>Goal Amount</label>
          <input
            type="number"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            placeholder="Campaign Goal Amount"
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaign;
