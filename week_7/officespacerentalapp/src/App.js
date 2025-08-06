import React from 'react';

// Office image placeholder: You can use an image from the public folder or a direct URL
const officeImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60";

// Single office object for demonstration
const mainOffice = {
  name: "Nirman Offices",
  rent: 75000,
  address: "123, Residency Road, Bangalore"
};

// List of office space objects
const officeSpaces = [
  {
    name: "Skyline Tech Park",
    rent: 55000,
    address: "43, Marathahalli, Bangalore"
  },
  {
    name: "Eco Spaces",
    rent: 62000,
    address: "12, Indiranagar, Bangalore"
  },
  {
    name: "Central Offices",
    rent: 90000,
    address: "8, MG Road, Bangalore"
  }
];

// Helper function for rent color
const getRentColor = (rent) => {
  return rent < 60000 ? 'red' : 'green';
};

function App() {
  // JSX element for heading
  const heading = <h1 style={{textAlign: 'center'}}>Office Space Rental App</h1>;

  // JSX image element with an attribute src
  const officeImgElement = (
    <img 
      src={officeImage}
      alt="Office Space"
      style={{ display: 'block', margin: '20px auto', maxWidth: '400px', borderRadius: '12px' }}
    />
  );

  // Render single office details
  const mainOfficeDetails = (
    <div style={{textAlign: 'center', marginBottom: 32}}>
      <h2>{mainOffice.name}</h2>
      <p>
        <span>Rent: </span>
        <span style={{color: getRentColor(mainOffice.rent), fontWeight: 'bold'}}>
          ₹ {mainOffice.rent.toLocaleString()}
        </span>
      </p>
      <p>Address: {mainOffice.address}</p>
    </div>
  );

  // Loop through list and display offices
  const officeList = (
    <div>
      <h3>Other Available Office Spaces</h3>
      {officeSpaces.map((office, idx) => (
        <div key={idx} style={{
          border: '1px solid #ddd',
          padding: 16,
          borderRadius: 8,
          marginBottom: 16,
          background: '#fafcff'
        }}>
          <strong>{office.name}</strong>
          <div>
            Rent:&nbsp; 
            <span style={{
              color: getRentColor(office.rent),
              fontWeight: 'bold'
            }}>
              ₹ {office.rent.toLocaleString()}
            </span>
          </div>
          <div>Address: {office.address}</div>
        </div>
      ))}
    </div>
  );

  // Final Render
  return (
    <div style={{maxWidth: 600, margin: 'auto', fontFamily: 'sans-serif', padding: 24}}>
      {heading}
      {officeImgElement}
      {mainOfficeDetails}
      {officeList}
    </div>
  );
}

export default App;
