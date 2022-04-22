import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Search from "../Seach/Search";

import Logo from "../../asserts/logo2.png";
import Logo2 from "../../asserts/AK-white.png";
import Logo2Hover from "../../asserts/AK-logo-hover.png";

import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const [logo, setLogo] = useState(Logo2);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      //   window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={Logo} alt="My Logo" />
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/" className="nav_logo2">
            <img
              src={logo}
              alt="Our logo"
              onMouseEnter={() => {
                setLogo(Logo2Hover);
              }}
              onMouseLeave={() => {
                setLogo(Logo2);
              }}
            />
          </Link>
          <Link to="/watched" className="nav-links">
            Watched
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/watchlist" className="nav-links">
            Watch list
          </Link>
        </li>
      </ul>
      <Search />
    </div>
  );
}

export default Nav;
