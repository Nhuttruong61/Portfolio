import React from "react";
import { Link } from "react-router-dom";
import Dartmode from "./Dartmode";
import "../assets/css/Navigation.css";


function Navigation() {
  const ListNavs = ["Home", "About", "Resume", "Contact"];
  return (
    <div className="Container">
      <Dartmode />
      <div className="Container__column">
        <ul className="Container__column--ul">
          {ListNavs.map((list, index) => (
            <li key={index} className="Container__column--li">
              <Link  to={`/${list.toLowerCase()}`}>{list}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
