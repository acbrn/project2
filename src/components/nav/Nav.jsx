import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCode, faCircleInfo, faDragon, faHome } from '@fortawesome/free-solid-svg-icons';
import './nav.css';

const Nav = () => {
    const location = useLocation();
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    const closeMenu = () => {
        setMenuActive(false);
    }

    return (
        <div className="nav-menu">
            {/* Mobile menu */}
            <div className="nav-menu__hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faHome} />
            </div>

            {/* Desktop menu */}
            <div className={`nav-menu__links ${menuActive ? 'active' : ''}`}>
                <NavItem to="/" icon={faHouse} text="Home" onClick={closeMenu} isActive={location.pathname === '/'} />
                <NavItem to="/projects" icon={faCode} text="Projects" onClick={closeMenu} isActive={location.pathname === '/projects'} />
                <NavItem to="/about" icon={faCircleInfo} text="About" onClick={closeMenu} isActive={location.pathname === '/about'} />
                <NavItem to="/contact" icon={faDragon} text="Contact" onClick={closeMenu} isActive={location.pathname === '/contact'} />
            </div>
        </div>
    );
};

const NavItem = ({ to, icon, text, onClick, isActive }) => (
    <Link to={to} onClick={onClick} className={`nav-menu__links__link ${isActive ? 'active' : ''}`}>
        <FontAwesomeIcon icon={icon} />
        <span>{text}</span>
    </Link>
);

export default Nav;
