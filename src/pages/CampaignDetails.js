import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles.css";  // Import the styles

const CampaignDetails = () => {
  const { id } = useParams(); // Get campaign ID from the URL
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    // Fetch the campaign details based on the campaign ID
    // For now, we'll use mock data
    const mockCampaignData = {
      title: "Help Build a School",
      description: "We are raising funds to build a new school for underprivileged children.",
      creator: "John Doe",
      goal: 5000,
      currentDonation: 1200,
    };

    setCampaign(mockCampaignData);
  }, [id]);

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div className="campaign-details-container">
      <h2>{campaign.title}</h2>
      <p><strong>Created by:</strong> {campaign.creator}</p>
      <p><strong>Description:</strong> {campaign.description}</p>
      <p><strong>Goal:</strong> ${campaign.goal}</p>
      <p><strong>Current Donation:</strong> ${campaign.currentDonation}</p>

      <DonationForm campaignId={id} />
    </div>
  );
};

const DonationForm = ({ campaignId }) => {
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonate = (e) => {
    e.preventDefault();
    if (donationAmount > 0) {
      alert(`Thank you for donating $${donationAmount} to campaign ${campaignId}!`);
      // Here you would send the donation to the backend (for now, we just show an alert)
    } else {
      alert("Please enter a valid donation amount.");
    }
  };

  return (
    <form className="donation-form" onSubmit={handleDonate}>
      <label>Donation Amount ($):</label>
      <input
        type="number"
        value={donationAmount}
        onChange={(e) => setDonationAmount(e.target.value)}
        min="1"
        required
      />
      <button className="donate-button" type="submit">Donate</button>
    </form>
  );
};

export default CampaignDetails;
