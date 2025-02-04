
import React, { useState } from "react";
import './../styles/App.css';
import ClickCounter from "./clickCounter";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <ClickCounter />

    </div>
  )
}

export default App
