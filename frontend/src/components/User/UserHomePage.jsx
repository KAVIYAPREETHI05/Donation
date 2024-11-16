import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css'; // Ensure the CSS file path is correct

function UserHomePage() {
  const [donationsCount, setDonationsCount] = useState(0);

  useEffect(() => {
    setDonationsCount(150); // Simulating a count of donations made
  }, []);

  return (
    <div className="home-container">
      <main>
        <section className="intro">
          <h1>Welcome to the Donation Platform</h1>
          <p>Your contributions help orphanages in need. Donate your dresses and stationery items today.</p>
        </section>

        <section className="donation-stats">
          <h2>Donation Stats</h2>
          <p>We’ve received <strong>{donationsCount}</strong> donations so far!</p>
          <Link to="/user/donate" className="cta-button">Donate Now</Link>
        </section>

        <section className="key-benefits">
          <h3>Why Choose Us?</h3>
          <div className="benefit">
            <h4>Easy Process</h4>
            <p>Donating is simple and only takes a few minutes. Just fill out the donation form, and we’ll handle the rest.</p>
          </div>
          <div className="benefit">
            <h4>Make an Impact</h4>
            <p>Your donation makes a direct impact on the lives of children living in orphanages.</p>
          </div>
          <div className="benefit">
            <h4>Support a Good Cause</h4>
            <p>By donating, you contribute to the well-being of those who need it most in our society.</p>
          </div>
        </section>

        <section className="testimonials">
          <h3>What Our Donors Say</h3>
          <div className="testimonial">
            <p>"I love donating to this platform. It’s a great way to help orphanages and make a real difference!" - Jane Doe</p>
          </div>
          <div className="testimonial">
            <p>"Such an easy and impactful way to contribute to a cause that matters." - John Smith</p>
          </div>
        </section>

        <section className="call-to-action">
          <h3>Ready to Make a Difference?</h3>
          <Link to="/user/donate" className="cta-button">Donate Now</Link>
        </section>
      </main>
    </div>
  );
}

export default UserHomePage;
