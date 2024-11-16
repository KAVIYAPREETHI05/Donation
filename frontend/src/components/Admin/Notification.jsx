import React, { useState } from 'react';
import '../css/Notification.css';

function Notification() {
  // Sample data for notifications
  const notifications = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890',
      address: '123 Main Street, Cityville',
      items: 'Clothes, Books',
      collectionDate: '2024-11-20',
      locationLink: 'https://maps.google.com/?q=123+Main+Street,Cityville',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '987-654-3210',
      address: '456 Elm Street, Townsville',
      items: 'Toys, Hygiene Products',
      collectionDate: '2024-11-22',
      locationLink: 'https://maps.google.com/?q=456+Elm+Street,Townsville',
    },
    {
        id: 1,
        name: 'John Doe',
        phone: '123-456-7890',
        address: '123 Main Street, Cityville',
        items: 'Clothes, Books',
        collectionDate: '2024-11-20',
        locationLink: 'https://maps.google.com/?q=123+Main+Street,Cityville',
      },
      {
        id: 1,
        name: 'John Doe',
        phone: '123-456-7890',
        address: '123 Main Street, Cityville',
        items: 'Clothes, Books',
        collectionDate: '2024-11-20',
        locationLink: 'https://maps.google.com/?q=123+Main+Street,Cityville',
      },
  ];

  const [hoveredAddress, setHoveredAddress] = useState(null);

  return (
    <div className="notification-container">
      <h3>New Notifications</h3>
      {notifications.map((notification) => (
        <div className="notification-card" key={notification.id}>
          <p><strong>Name:</strong> {notification.name}</p>
          <p><strong>Phone:</strong> {notification.phone}</p>
          <p>
            <strong>Address:</strong>
            <span
              className="address-button"
              onMouseEnter={() => setHoveredAddress(notification.id)}
              onMouseLeave={() => setHoveredAddress(null)}
            >
              View on Hover
            </span>
            {hoveredAddress === notification.id && (
              <span className="hovered-address">{notification.address}</span>
            )}
            <button
              className="map-button"
              onClick={() => window.open(notification.locationLink, '_blank')}
            >
              Show on Map
            </button>
          </p>
          <p><strong>Items to Collect:</strong> {notification.items}</p>
          <p><strong>Collection Date:</strong> {notification.collectionDate}</p>
        </div>
      ))}
    </div>
  );
}

export default Notification;
