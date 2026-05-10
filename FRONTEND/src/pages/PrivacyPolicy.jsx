import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="page-content-wrapper">
      <div className="ambient-orb orb-2"></div>
      
      <main className="document-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Privacy Policy</h1>
        <div className="document-body">
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, fill out a form, respond to a survey, subscribe to the newsletter and in connection with other activities, services, features or resources we make available on our Site.</p>

          <h2>2. How We Use Collected Information</h2>
          <p>Tutorial Project 1 may collect and use Users' personal information for the following purposes:</p>
          <ul>
            <li>To improve customer service</li>
            <li>To personalize user experience</li>
            <li>To improve our Site</li>
            <li>To process payments</li>
          </ul>

          <h2>3. How We Protect Your Information</h2>
          <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</p>

          <p className="placeholder-note">This is a placeholder for demonstration purposes. Replace with your actual privacy policy.</p>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
