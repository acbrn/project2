import React from "react";
import logo from '../../assets/icephenyx-logo.png';
import "./header.css";

const Header = () => {
    return (
        <>
            <div className="header-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="header-title">
                Full Stack Developer
            </div>
            <div className="header-content">
                Welcome to my website!
            </div>
        </>
    );
}

export default Header;
