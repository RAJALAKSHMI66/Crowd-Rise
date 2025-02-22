import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles.css"; 

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
   
    const mockCampaigns = [
      {
        id: 1,
        title: "Help Build a School",
        description: "Support education by building a school for underprivileged children.",
        goal: 5000,
        currentDonation: 1200,
      },
      {
        id: 2,
        title: "Feed the Homeless",
        description: "Donate to provide daily meals for the homeless in your city.",
        goal: 3000,
        currentDonation: 1800,
      },
      {
        id: 3,
        title: "Medical Fund for John",
        description: "Help John recover from a severe illness by covering his medical expenses.",
        goal: 7000,
        currentDonation: 2500,
      },
      {
        id: 4,
        title: "Support Women's Education",
        description: "Help underprivileged women gain access to quality education and empowerment programs.",
        goal: 4000,
        currentDonation: 1700,
      },
      {
        id: 5,
        title: "Disaster Relief Fund",
        description: "Provide emergency aid and shelter to families affected by natural disasters.",
        goal: 10000,
        currentDonation: 6500,
      },
      {
        id: 6,
        title: "Clean Water Initiative",
        description: "Provide clean drinking water to rural communities with no access to safe water.",
        goal: 6000,
        currentDonation: 2200,
      },
      {
        id: 7,
        title: "Orphanage Support Program",
        description: "Ensure orphans receive food, education, and medical care for a brighter future.",
        goal: 8000,
        currentDonation: 5000,
      },
      {
        id: 8,
        title: "Animal Shelter Expansion",
        description: "Help expand an animal shelter to rescue and care for more stray animals.",
        goal: 7000,
        currentDonation: 3500,
      },
      {
        id: 9,
        title: "Tree Plantation Drive",
        description: "Plant trees to combat climate change and make our planet greener.",
        goal: 2000,
        currentDonation: 1100,
      },
      {
        id: 10,
        title: "Elderly Care Support",
        description: "Provide elderly citizens with food, medical assistance, and a safe place to stay.",
        goal: 5000,
        currentDonation: 2800,
      },
    ];

    setCampaigns(mockCampaigns);
  }, []);

  return (
    <div className="container">
      <h2>Ongoing Campaigns</h2>
      <div className="campaigns-list">
        {campaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-card">
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            <p>
              <strong>Goal:</strong> ${campaign.goal}
            </p>
            <p>
              <strong>Current Donation:</strong> ${campaign.currentDonation}
            </p>
            <Link to={`/campaigns/${campaign.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
