import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1><img src="/icon.png" alt="Icon" style={{ width: '45px', height: '45px' }}/>PLANr</h1>
            <h3>User's name</h3>
            <nav>
                <NavLink to="/">Calendar</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </header>
    );
}

export default Header;