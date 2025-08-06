import React, { useState } from "react";
import UserPage from "./UserPage";
import GuestPage from "./GuestPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif", padding: 24, background: "#f6fafb", borderRadius: 12 }}>
      <h1 style={{ textAlign: "center" }}>Ticket Booking App</h1>
      {isLoggedIn
        ? <UserPage onLogout={logout} />
        : <GuestPage onLogin={login} />
      }
    </div>
  );
}

export default App;
