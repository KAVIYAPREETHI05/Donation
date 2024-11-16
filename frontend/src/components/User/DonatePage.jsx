import React, { useState } from 'react';
import '../css/DonatePage.css';

function DonatePage() {
  const [itemType, setItemType] = useState('');
  const [donorName, setDonorName] = useState('');
  const [address, setAddress] = useState('');
  const [donationDate, setDonationDate] = useState('');

  // Computed property to check if donation is valid
  const isDonationValid = itemType && donorName && address && donationDate;

  // Event handler for the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDonationValid) {
      alert(`Thank you for your donation, ${donorName}!`);
      // Reset form after submission
      setItemType('');
      setDonorName('');
      setAddress('');
      setDonationDate('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="donate-container">
      <h2>Donate Your Items</h2>
      <form onSubmit={handleSubmit} aria-label="Donation form">
        <label>
          Item Type:
          <select
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            required
          >
            <option value="">Select Item Type</option>
            <option value="Dress">Dress</option>
            <option value="Stationery">Stationery</option>
            <option value="Sports Equipment">Sports Equipment</option>
            <option value="Wheelchairs">Wheelchairs</option>
            <option value="Therapy Supplies">Therapy Supplies</option>
            <option value="Toys">Toys</option>
            <option value="Winter Clothing">Winter Clothing</option>
            <option value="Medical Supplies">Medical Supplies</option>
            <option value="Books">Books</option>
            <option value="School Supplies">School Supplies</option>
            <option value="Hygiene Products">Hygiene Products</option>
          </select>
        </label>

        <label>
          Your Name:
          <input
            type="text"
            placeholder="Your Name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            required
          />
        </label>

        <label>
          Your Address:
          <textarea
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </label>

        <label>
          Donation Date:
          <input
            type="date"
            value={donationDate}
            onChange={(e) => setDonationDate(e.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={!isDonationValid}>
          Donate Now
        </button>
      </form>
    </div>
  );
}

export default DonatePage;
