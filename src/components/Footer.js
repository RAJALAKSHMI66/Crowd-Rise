import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-left">
          <img
            src="./images\logo2.png"
            alt=" Logo"
            className="footer-logo"
          />
          <div>
            <h2 className="footer-title">CrowdRise</h2>
            <p className="footer-subtitle">AAACET student</p>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3 className="footer-heading">Follow me on</h3>
          {/* Add social media icons/links here */}
          <ul className="footer-links">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rajalakshmi-r-694974277"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <p className="footer-heading">Developed By</p>
          <p>R.Rajalakshmi</p>
          <p className="footer-heading">Designed By</p>
          <p>R.Rajalakshmi</p>
          <p className="footer-heading">For Queries</p>
          <p>
            <a
              href="rajalakshmiraveendran33@gmail.com"
              className="footer-email"
            >
              rajalakshmiraveendran33@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 CrowdRise Page. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
