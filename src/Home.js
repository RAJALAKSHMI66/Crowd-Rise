import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Welcome to Crowdfunding Platform</h1>
            <p>Start your fundraising campaign today!</p>

            <button className="start-campaign-button" onClick={() => navigate("/create-campaign")}>
                Create a Campaign
            </button>
        </div>
    );
};

export default Home;
