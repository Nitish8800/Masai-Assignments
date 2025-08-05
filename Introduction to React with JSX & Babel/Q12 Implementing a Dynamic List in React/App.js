import React from 'react';

function App() {
  const items = ["React", "JavaScript", "CSS"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default App;