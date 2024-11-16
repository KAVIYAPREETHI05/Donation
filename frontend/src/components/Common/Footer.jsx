import React from 'react';
import '../css/Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Dress & Stationery Donation. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="mailto:support@donate.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
