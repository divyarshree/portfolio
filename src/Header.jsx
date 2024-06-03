import React, { useState } from "react";
import './css/header.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <div className="container">
                <RouterLink to="/" className="logo" data-aos="fade-in"> {/* Adjust the path in 'to' prop */}
                    <img src="./d-logo.png" width={60} alt="logo"/>
                </RouterLink>
                <div className={`header-right ${isMenuOpen ? "open" : ""}`} data-aos="flip-down">
                    <Link to="about" spy={true} smooth={true} duration={500} >About</Link>
                    <Link to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
                    <Link to="experience" spy={true} smooth={true} duration={500}>Experience</Link>
                    <Link to="works" spy={true} smooth={true} duration={500}>Works</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
