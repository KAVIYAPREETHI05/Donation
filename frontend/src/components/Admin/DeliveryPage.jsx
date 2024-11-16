import React, { useState } from 'react';
import '../css/DeliveryPage.css';

function DeliveryPage() {
  // Enhanced data for orphanages
  const [orphanages, setOrphanages] = useState([
    {
      id: 1,
      name: 'Sunrise Orphanage',
      members: 50,
      needs: 'Clothes, Stationery, Food Supplies',
      agedPeople: 10,
      type: 'Mixed',
      location: 'Sunrise Orphanage, Chennai', // Address of the orphanage
    },
    {
      id: 2,
      name: 'Hope Shelter',
      members: 30,
      needs: 'Books, School Supplies, Hygiene Products',
      agedPeople: 5,
      type: 'Child',
      location: 'Hope Shelter, Coimbatore',
    },
    {
      id: 3,
      name: 'Helping Hands Home',
      members: 40,
      needs: 'Toys, Winter Clothing, Medical Supplies',
      agedPeople: 8,
      type: 'Aged',
      location: 'Helping Hands Home, Madurai',
    },
    {
      id: 4,
      name: 'Talented Stars Shelter',
      members: 25,
      needs: 'Sports Equipment, Wheelchairs, Therapy Supplies',
      agedPeople: 0,
      type: 'Physically Talented',
      location: 'Talented Stars Shelter, Trichy',
    },
      {
          id: 5,
          name: 'Helping Hands Home',
          members: 40,
          needs: 'Toys, Winter Clothing, Medical Supplies',
          agedPeople: 8,
          type: 'Aged', // Only aged people
        },
        {
          id: 6,
          name: 'Hope Shelter',
          members: 30,
          needs: 'Books, School Supplies, Hygiene Products',
          agedPeople: 5,
          type: 'Child', // Only children
        },
        {
          id: 7,
          name: 'Sunrise Orphanage',
          members: 50,
          needs: 'Clothes, Stationery, Food Supplies',
          agedPeople: 10,
          type: 'Mixed', // Mixed type: both children and aged people
        },
        {
          id: 8,
          name: 'Hope Shelter',
          members: 30,
          needs: 'Books, School Supplies, Hygiene Products',
          agedPeople: 5,
          type: 'Child', // Only children
        },
  ]);

  // Handle map navigation
  const handleNavigate = (location) => {
    // Construct Google Maps navigation URL
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      location
    )}&travelmode=driving`;
    window.open(mapsUrl, '_blank'); // Open in a new tab
  };

  return (
    <div className="delivery-container">
      <h2>Delivery Information</h2>
      <p>After collecting donations, we deliver them to orphanages based on their specific requirements.</p>

      <div className="orphanage-list">
        {orphanages.map((orphanage) => (
          <div className="orphanage-card" key={orphanage.id}>
            <h3>{orphanage.name}</h3>
            <p><strong>Total Members:</strong> {orphanage.members}</p>
            <p><strong>Needs:</strong> {orphanage.needs}</p>
            <p><strong>Aged People:</strong> {orphanage.agedPeople}</p>
            <p><strong>Type:</strong> {orphanage.type}</p>
            <button
              className="delivery-button"
              onClick={() => handleNavigate(orphanage.location)}
            >
              Deliver to {orphanage.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeliveryPage;
