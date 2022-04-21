import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Search from "../Seach/Search";

import Logo from "../../asserts/logo2.png";

import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
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
