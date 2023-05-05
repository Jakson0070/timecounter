import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000); // or try this methode for without button/click work dynamically or time refresh automatically after a second

  const now = new Date().toLocaleTimeString();
  // console.log(now);
  const [time, setTime] = useState(now); // initalize now

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="main">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
