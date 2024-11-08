import React from "react";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
    render() { 
        return (
            <header>
                <h1>PLANr</h1>
                <h3>User's name</h3>
                <nav>
                    <NavLink to="/">Calendar</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </nav>
            </header>
        );
    }
}

export default Header;