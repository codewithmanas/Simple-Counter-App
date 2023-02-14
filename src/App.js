import './App.css';
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  
  return (
    <div className="app">
    <h1>Welcome to my counter app</h1>
      <p>The count is: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      
    </div>
  );
}

export default App;
