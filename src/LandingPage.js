import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = ({ scrollToContact }) => {
  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToContact]);

  return (
    <div className="landing-page">
      <section className="hero-section">
        <h1>Your Fitness Journey Starts Here</h1>
        <p>
          Achieve your health and fitness goals with personalized plans, expert
          advice, and a supportive community at FitLife.
        </p>
        <Link to="/services">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>

      <section className="experts-section">
        <h2>Our Experts</h2>
        <div className="experts-container">
          <div className="expert-card">
            <div className="expert-image"></div>
            <div className="expert-name">Name</div>
            <div className="expert-description">Description...</div>
          </div>
          <div className="expert-card">
            <div className="expert-image"></div>
            <div className="expert-name">Name</div>
            <div className="expert-description">Description...</div>
          </div>
          <div className="expert-card">
            <div className="expert-image"></div>
            <div className="expert-name">Name</div>
            <div className="expert-description">Description...</div>
          </div>
        </div>
      </section>

      <footer id="contact-section" className="contact-section">
        <h2>Contact Us</h2>
        <p>Open 24 hours</p>
        <p>Personal & group online training</p>
        <p>Phone Number: (613) 562-5700</p>
      </footer>
    </div>
  );
};

export default LandingPage;
