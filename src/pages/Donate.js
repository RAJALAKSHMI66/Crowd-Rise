import React, { useState } from "react";
import axios from "axios";  // You can integrate actual API call for donation

const Donate = ({ campaign }) => {
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonate = () => {
    if (donationAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    // Replace with an actual backend call for donation
    axios.post("/api/campaigns/donate", { campaignId: campaign.id, amount: donationAmount })
      .then(response => {
        alert("Thank you for your donation!");
      })
      .catch(error => {
        console.error("Error processing donation", error);
      });
  };

  return (
    <div className="container mt-5">
      <h3>Donate to {campaign.title}</h3>
      <div className="form-group mt-3">
        <label htmlFor="donationAmount">Enter Donation Amount</label>
        <input
          type="number"
          className="form-control"
          id="donationAmount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          min="1"
        />
      </div>
      <button className="btn btn-success mt-3" onClick={handleDonate}>
        Donate Now
      </button>
    </div>
  );
};

export default Donate;
