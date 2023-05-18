import React, { useState } from "react";
import { MenuData } from "./MenuData";
import CustomButton from "../customButton/CustomButton";

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
      <div className="menuIcons" onClick={HandlerClick}>
          { showMenuIcon ? <ImCross className="dropdownButton"/> :<FaBars className="dropdownButton"/> }
      </div>
      <ul className= { showMenuIcon ? "navMenu active" : "navMenu"}>
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
        <li>
          <CustomButton className="navLinksMobile">Sign In</CustomButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
