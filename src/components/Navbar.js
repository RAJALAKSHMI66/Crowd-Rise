import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo1.png" alt="Logo" height="50" />
        </Link>

        {/* Mobile Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/campaigns">
                Campaigns
              </Link>
            </li>
            <li className="nav-item">
              {/* Smooth scroll to About Us section */}
              <ScrollLink
                className="nav-link"
                to="about-us"
                smooth={true}
                duration={500}
                offset={-70} 
              >
                About Us
              </ScrollLink>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary px-4" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
