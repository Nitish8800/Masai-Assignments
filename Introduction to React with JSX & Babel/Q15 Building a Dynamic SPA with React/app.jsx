import React, { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home": return <div style={{ color: 'blue' }}>Welcome to Home</div>;
      case "About": return <div style={{ color: 'green' }}>About Us</div>;
      case "Contact": return <div style={{ color: 'red' }}>Contact Us</div>;
      default: return null;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActivePage("Home")}>Home</button>
        <button onClick={() => setActivePage("About")}>About</button>
        <button onClick={() => setActivePage("Contact")}>Contact</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;