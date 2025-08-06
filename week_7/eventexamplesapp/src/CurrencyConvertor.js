import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  // Example: 1 Euro = 90 Rupees (rate can be updated)
  const conversionRate = 90;

  // Handle the form submission event
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNaN(rupees) && rupees !== '') {
      setEuro((parseFloat(rupees) / conversionRate).toFixed(2));
    } else {
      setEuro(null);
    }
  };

  return (
    <div style={{ marginTop: 32, padding: 16, background: '#f4f8fc', borderRadius: 8 }}>
      <h3>Currency Converter: INR to EUR</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit" style={{ marginLeft: 8 }}>Convert</button>
      </form>
      <div style={{ marginTop: 12 }}>
        {euro !== null && (
          <span>
            <strong>{rupees} Rupees</strong> = <strong>{euro} Euro</strong>
          </span>
        )}
      </div>
    </div>
  );
}

export default CurrencyConvertor;
