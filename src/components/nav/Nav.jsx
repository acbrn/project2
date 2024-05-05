import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCode, faCircleInfo, faDragon } from '@fortawesome/free-solid-svg-icons';
import './nav.css';

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav-menu ${scrolled ? 'scrolled' : ''}`}>

            {/* Desktop menu */}
            <div className="nav-menu__links">
                <NavItem href="/" icon={faHouse} text="Home" />
                <NavItem href="#projects" icon={faCode} text="Projects" />
                <NavItem href="#about" icon={faCircleInfo} text="About" />
                <NavItem href="#contact" icon={faDragon} text="Contact" />
            </div>
        </div>
    );
};

const NavItem = ({ href, icon, text }) => (
    <a href={href} className="nav-menu__links__link">
        <FontAwesomeIcon icon={icon} />
        <span>{text}</span>
    </a>
);

export default Nav;
