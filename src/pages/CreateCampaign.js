import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create-campaign.css"; // ✅ Make sure this is correctly imported

const CreateCampaign = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [goalAmount, setGoalAmount] = useState("");
    const [endDate, setEndDate] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !goalAmount || !endDate || !image) {
            alert("Please fill in all fields and upload an image.");
            return;
        }

        const campaignData = {
            title,
            description,
            goalAmount,
            endDate,
            image,
            createdBy: "Guest",
        };

        console.log("Campaign Created:", campaignData);
        navigate("/campaigns");
    };

    return (
        <div className="create-campaign-container"> {/* ✅ Apply background color */}
            <div className="create-campaign-form">
                <h2>Create New Campaign</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Goal Amount</label>
                        <input type="number" value={goalAmount} onChange={(e) => setGoalAmount(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>End Date</label>
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Upload Image</label>
                        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <button type="submit">Create Campaign</button>
                </form>
            </div>
        </div>
    );
};

export default CreateCampaign;
