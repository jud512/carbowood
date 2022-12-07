import React, { useEffect, useRef, useState } from "react";
import { linksHU } from "../../data/dataNavLinks";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";
import logo from "../../images/logo_wb.png";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isOpen && isToggle) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [isOpen]);

  const handleResize = () => {
    if (window.innerWidth < 1080) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
    console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="CarboWood logo" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => handleToggle()}
          >
            <FaAlignJustify className="nav-icon" />
          </button>
        </div>
        <div className="nav-links-container" ref={linksContainerRef}>
          <ul
            className={isOpen ? "nav-links show-nav" : "nav-links"}
            ref={linksRef}
          >
            {linksHU.map((link) => {
              return (
                <li key={link.id} onClick={() => handleToggle()}>
                  <Link to={link.url}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
