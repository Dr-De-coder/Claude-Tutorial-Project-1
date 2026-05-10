import React from 'react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
  return (
    <div className="page-content-wrapper">
      <div className="ambient-orb orb-1"></div>
      
      <main className="document-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Terms & Conditions</h1>
        <div className="document-body">
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Introduction</h2>
          <p>Welcome to Tutorial Project 1. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Tutorial Project 1 if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2>2. License</h2>
          <p>Unless otherwise stated, Tutorial Project 1 and/or its licensors own the intellectual property rights for all material on Tutorial Project 1. All intellectual property rights are reserved. You may access this from Tutorial Project 1 for your own personal use subjected to restrictions set in these terms and conditions.</p>

          <h2>3. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li>Publishing any website material in any other media</li>
            <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
          </ul>

          <p className="placeholder-note">This is a placeholder for demonstration purposes. Replace with your actual terms and conditions.</p>
        </div>
      </main>
    </div>
  );
}

export default TermsAndConditions;
