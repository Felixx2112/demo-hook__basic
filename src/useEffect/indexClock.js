import React, { useState } from "react";
import Clock from "./components/Clock/index";

function App(props) {
  const [showClock, setShowClock] = useState(true);
  return (
    <div>
      <h1>React hooks- useEffect </h1>
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button>
    </div>
  );
}

export default App;
