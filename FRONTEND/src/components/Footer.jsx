import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-copyright">
          &copy; {year} Tutorial Project 1. All rights reserved.
        </div>
        <div className="footer-links">
          <Link to="/terms-and-conditions" className="footer-link">Terms & Conditions</Link>
          <span className="footer-separator">•</span>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
