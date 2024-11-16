import React, { useState } from 'react';
import '../css/ContactPage.css';

function ContactPage() {
  // State variables to capture the user input
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && userEmail && message) {
      alert('Your message has been sent to the admin. The admin will contact the orphanage.');
      setFormSubmitted(true);
      // Reset form fields after submission
      setUserName('');
      setUserEmail('');
      setMessage('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Email: support@donate.com</p>
      <p>Phone: 123-456-7890</p>

      <h3>We are here to assist you. Please fill out the form below:</h3>

      {formSubmitted ? (
        <div className="thank-you-message" aria-live="polite">
          <h4>Thank you for contacting us! We will get back to you soon.</h4>
        </div>
      ) : (
        <form onSubmit={handleSubmit} aria-label="Contact form">
          <label>
            Your Name:
            <input
              type="text"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
          
          <label>
            Your Email:
            <input
              type="email"
              placeholder="Your Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </label>
          
          <label>
            Your Message:
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default ContactPage;
