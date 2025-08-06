import React, { useState } from "react";
import FlightList from "./FlightList";

export default function UserPage({ onLogout }) {
  const [selected, setSelected] = useState("");
  const [msg, setMsg] = useState("");

  const handleBook = () => {
    if (selected) setMsg(`Booked ticket on ${selected} successfully!`);
  };

  return (
    <div>
      <h1>Welcome, User!</h1>
      <button onClick={onLogout}>Logout</button>
      <FlightList />
      <div style={{ margin: "20px 0" }}>
        <label>Select an Airline:&nbsp;
          <select value={selected} onChange={e => setSelected(e.target.value)}>
            <option value="">--Choose--</option>
            <option value="Indigo">Indigo</option>
            <option value="Air India">Air India</option>
            <option value="Vistara">Vistara</option>
          </select>
        </label>
        <button onClick={handleBook} disabled={!selected} style={{ marginLeft: 8 }}>
          Book Ticket
        </button>
        {msg && <p style={{ color: "green" }}>{msg}</p>}
      </div>
    </div>
  );
}
