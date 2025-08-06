import React from "react";

const flights = [
  { id: 1, airline: "Indigo", origin: "Mumbai", dest: "Delhi", time: "10:20 AM" },
  { id: 2, airline: "Air India", origin: "Bangalore", dest: "Kolkata", time: "1:15 PM" },
  { id: 3, airline: "Vistara", origin: "Chennai", dest: "Pune", time: "5:40 PM" },
];

export default function FlightList() {
  return (
    <div>
      <h2>Available Flights</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr><th>Airline</th><th>From</th><th>To</th><th>Time</th></tr>
        </thead>
        <tbody>
          {flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.airline}</td>
              <td>{flight.origin}</td>
              <td>{flight.dest}</td>
              <td>{flight.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
