import React, { useState } from "react";
import './css/header.css';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return(
        <div className="header">
            <div className="container">
                <a href="#default" className="logo">
                    <img src="./d-logo.png" width={60} alt="logo"/>
                </a>
                <div className={`header-right ${isMenuOpen ? "open" : ""}`}>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
