import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#core" className="nav-item">
          Core
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#price" className="nav-item">
          Price
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
