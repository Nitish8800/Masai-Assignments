import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState("Original Title");
  const [reactUpdates, setReactUpdates] = useState(0);

  const changeTitleReact = () => {
    setTitle("Updated Title (React)");
    setReactUpdates(reactUpdates + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitleReact}>Change Title (React)</button>
      <p>React DOM Updates: {reactUpdates}</p>
    </div>
  );
}

export default App;