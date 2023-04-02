import React, { useState } from "react";
import "./assets/css/Dartmode.css";

function Dartmode() {
  const [toggle, setToggle] = useState("Light");

  const setDartMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = () => {
    if (toggle === "Light") {
      setDartMode();
      setToggle("Dark");
    } else {
      setLightMode();
      setToggle("Light");
    }
  };

  return (
    <div style={{ left: "20" }}>
      <button
        className="dart_mode_button"
        type="toggle"
        id="dartmode-toggle"
        onClick={toggleTheme}
      >
        {toggle}
      </button>
    </div>
  );
}

export default Dartmode;
