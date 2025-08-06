import React from "react";
import FlightList from "./FlightList";

export default function GuestPage({ onLogin }) {
  return (
    <div>
      <h1>Welcome, Guest!</h1>
      <FlightList />
      <p style={{ color: "red", fontWeight: "bold" }}>
        Please log in to book tickets.
      </p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
