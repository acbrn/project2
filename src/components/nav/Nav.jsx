import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, fasolid } from '@fortawesome/free-solid';

import './nav.css';

const Nav = () => {
    const [menuActive, setMenuActive] = React.useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    const closeMenu = () => {
        setMenuActive(false);
    }

    const icon = <FontAwesomeIcon icon={faCode} />;

    return (
        <nav>
            <div onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuActive ? fasolid : faCode} />
            </div>
            {menuActive && (
                <div className="menu">
                    <div onClick={closeMenu}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/projects">Projects</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Nav;