import React, { useState } from "react";
import { MenuData } from "./MenuData";

import{ FaBars  } from "react-icons/fa";
import{ ImCross  } from "react-icons/im";

import "./Navbar.styles.css";

const Navbar = () => {

  const [showMenuIcon, setShowMenuIcon] = useState(false);

  const HandlerClick = () => setShowMenuIcon(!showMenuIcon) ; 


  return (
    <nav className="navbarItems">
      <h1 className="logo">
      </h1>
      <div className="menu-icons" onClick={HandlerClick}>
          { showMenuIcon ? <ImCross className="dropdownbutton"/> :<FaBars className="dropdownbutton"/> }
      </div>
      <ul className= { showMenuIcon ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.className}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
