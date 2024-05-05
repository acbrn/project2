import React, { useEffect, useState } from "react";
import logo from '../../assets/icephenyx-logo.png';
import "./header.css";

const Header = () => {
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setSlideIn(true);
        }, 100);

        // Clean up the timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="header-logo">
                <img src={logo} alt="Logo" className="logo-scale" />
            </div>
            <div className={`header-title ${slideIn ? 'slide-in' : ''}`}>
                Full Stack Developer
            </div>
            <div className="header-subtitle">
                Welcome to my portfolio! I'm a full stack developer with a passion for
                creating beautiful, clean and functional web applications.
            </div>
            {/* Hello if you checked out my code! Please let me know if you found this */}
        </>
    );
}
console.log("Hello if you checked out my code! Please let me know if you found this")

export default Header;
