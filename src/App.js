import logo from "./logo.svg";
import "./App.css";
import Rating from "./Rating";
import React, { useRef, useState } from "react";
function App() {
  const deStars = 3.5;
  const [valState, setVal] = useState(deStars);
  return (
    <div className="App">
      <Rating deStars={deStars} value={valState} setVal={setVal} />
    </div>
  );
}

export default App;
