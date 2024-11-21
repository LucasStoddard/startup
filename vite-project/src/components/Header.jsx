import React from "react";
import { NavLink, Link } from "react-router-dom";

// I NEED TO ADD A LOG OUT BUTTON
// Logout may be working but I need to figure out the onLogout function

function Header() {
    function logout() {
        fetch(`/api/auth/logout`, {
          method: 'delete',
        })
          .catch(() => {
            // Logout failed. Assuming offline
          })
          .finally(() => {
            localStorage.removeItem('userName');
            props.onLogout();
          });
    }
    return (
        <header>
            <h1><img src="/icon.png" alt="Icon" style={{ width: '45px', height: '45px' }}/>PLANr</h1>
            <h3>User's name</h3>
            <nav>
                <NavLink to="/">Calendar</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/login" onClick={() => handleLogout()}>Logout</NavLink>
            </nav>
        </header>
    );
}

export default Header;