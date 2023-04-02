import React, { useState } from "react";
import "../assets/css/Dartmode.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={toggle === "Light" ? faMoon : faSun} />
      </button>
    </div>
  );
}

export default Dartmode;
