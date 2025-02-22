import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import "./Home.css"; 

const images = [
  "./images/banner.jpeg",
  "./images/banner1.png",
  "./images/banner2.png",
  "./images/banner3.png",
  "./images/banner4.png",
];

const Home = () => {
  const scrollToAboutUs = () => {
    document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Empower Ideas, Fund Dreams</h1>
          <p className="lead">
            Join us in making a difference. Support innovative projects and
            bring ideas to life.
          </p>
          <Link to="/campaigns" className="btn btn-light btn-lg">
            Explore Campaigns
          </Link>
        </div>
      </div>

      {/* Featured Campaigns */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Ongoing Campaigns</h2>
        <div className="row">
          {/* Campaign Cards */}
          <div className="col-md-4">
            <div className="card">
              <img src="/images/image1.png" className="card-img-top" alt="Education for All" />
              <div className="card-body">
                <h5 className="card-title">Education for All</h5>
                <p className="card-text">Help underprivileged children receive quality education and build a brighter future.</p>
                <Link to="/campaigns" className="btn btn-primary">View Campaign</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="./images/image2.jpeg" className="card-img-top" alt="Tech for Change" />
              <div className="card-body">
                <h5 className="card-title">Tech for Change</h5>
                <p className="card-text">Support innovative startups using technology to create a positive impact.</p>
                <Link to="/campaigns" className="btn btn-primary">View Campaign</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="/images/image3.jpg" className="card-img-top" alt="Medical Aid Fund" />
              <div className="card-body">
                <h5 className="card-title">Medical Aid Fund</h5>
                <p className="card-text">Contribute to life-saving medical treatments for those in need.</p>
                <Link to="/campaigns" className="btn btn-primary">View Campaign</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Campaigns */}
      <div className="container mt-5">
        <h2 className="text-center mb-4"> </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/images/image5.png" className="card-img-top" alt="Wildlife Care" />
              <div className="card-body">
                <h5 className="card-title">Wildlife Care</h5>
                <p className="card-text">Help protect endangered wildlife and support conservation efforts.</p>
                <Link to="/campaigns" className="btn btn-primary">View Campaign</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="./images/image6.png" className="card-img-top" alt="Project Help" />
              <div className="card-body">
                <h5 className="card-title">Project Help</h5>
                <p className="card-text">Assist individuals and communities in completing essential projects.</p>
                <Link to="/campaigns" className="btn btn-primary">View Campaign</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/images/image7.png" className="card-img-top" alt="Elderly Support Fund" />
              <div className="card-body">
                <h5 className="card-title">Elderly Support Fund</h5>
                <p className="card-text">Provide financial aid and care for senior citizens in need.</p>
                <Link to="/campaigns" className="btn btn-primary">View Campaign</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Carousel for Banner */}
      <div id="bannerCarousel" className="carousel slide my-5" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button key={index} type="button" data-bs-target="#bannerCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label={`Slide ${index + 1}`}></button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        <Link to="/campaigns" className="btn btn-success donate-now-btn">Donate Now</Link>
      </div>

      {/* About Us Section (With Scroll Target) */}
      <div id="about-us" className="container my-5">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <div className="developer-image-box">
              <img src="./images/developer.png" alt="Developer" className="img-fluid rounded-circle" style={{ width: "250px", height: "250px" }} />
            </div>
          </div>
          <div className="col-md-8">
            <p>
              <b>
                Hello, I am R. Rajalakshmi, a 3rd-year Computer Science Engineering (CSE) student at AAA College.
                I developed this crowdfunding platform to help individuals in need of financial support for medical treatment, education, and other urgent causes.
                Each campaign is carefully verified to ensure authenticity, so you can donate with confidence, knowing that your contributions are truly making a difference.
              </b>
            </p>
            <p>Join us and be part of a community that believes in the power of people to change the world.</p>
          </div>
          <div className="text-center my-5">
            <img src="/images/imagehome.png" alt="Together we can change the world" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
            <h3 className="mt-3 text-primary">"Together we can make the world a better place"</h3>
          </div>
          <div className="text-center my-5">
        <h3>Got an idea? Start your own campaign!</h3>
        <Link to="/dashboard" className="btn btn-success btn-lg">
          Start a Campaign
        </Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
