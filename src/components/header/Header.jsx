import React, { useEffect, useState } from "react";
import logo from '../../assets/icephenyx-logo.png';
import "./header.css";

const Header = () => {
    const [slideIn, setSlideIn] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        // Trigger slide-in effect after a delay
        const timer = setTimeout(() => {
            setSlideIn(true);
        }, 100); // Adjust the delay as needed

        // Clean up the timer
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled down
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`header-logo ${scrolling ? 'fade-out' : ''}`}>
                <img src={logo} alt="Logo" className="logo-scale" />
            </div>
            <div className={`header-title ${slideIn ? 'slide-in' : ''} ${scrolling ? 'fade-out' : ''}`}>
                Full Stack Developer
            </div>
            <div className={`header-subtitle ${scrolling ? 'fade-out' : ''}`}>
                Welcome to my portfolio! I'm a full stack developer with a passion for
                creating beautiful, clean and functional web applications.
                <p>
                    Scroll down to learn more about me and my projects.
                </p>
            </div>
            {/* Hello if you checked out my code! Please let me know if you found this */}
        </>
    );
}

console.log("Hello if you checked out my code! Please let me know if you found this")

export default Header;
