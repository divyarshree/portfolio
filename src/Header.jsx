import React, { useState } from "react";
import './css/header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = () => {
        if (isMenuOpen) {
            setMenuOpen(false);
        }
    };

    return (
        <div className="header">
            <div className="container">
                <a href="#default" className="logo">
                    <img src="./d-logo.png" width={60} alt="logo" />
                </a>
                <div className={`header-right ${isMenuOpen ? "open" : ""}`}>
                    <a href="#about" onClick={handleMenuItemClick}>About</a>
                    <a href="#skills" onClick={handleMenuItemClick}>Skills</a>
                    <a href="#experience" onClick={handleMenuItemClick}>Experience</a>
                    <a href="#works" onClick={handleMenuItemClick}>Works</a>
                    <a href="#contact" onClick={handleMenuItemClick}>Contact</a>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
