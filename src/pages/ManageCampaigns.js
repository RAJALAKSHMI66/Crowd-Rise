import React, { useState, useEffect } from "react";
import "../styles.css";

const ManageCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  // Simulate fetching campaigns (replace with API call)
  useEffect(() => {
    setCampaigns([
      { id: 1, title: "Campaign 1", description: "Campaign 1 Description", goal: 5000 },
      { id: 2, title: "Campaign 2", description: "Campaign 2 Description", goal: 10000 },
    ]);
  }, []);

  const handleDelete = (id) => {
    // Simulate deleting campaign (replace with API call)
    const updatedCampaigns = campaigns.filter(campaign => campaign.id !== id);
    setCampaigns(updatedCampaigns);
    alert(`Campaign ${id} deleted successfully!`);
  };

  return (
    <div className="container">
      <h2>Manage Campaigns</h2>
      <div className="campaign-list">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-item">
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            <p>Goal: ${campaign.goal}</p>
            <button>Edit</button>
            <button onClick={() => handleDelete(campaign.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCampaigns;
