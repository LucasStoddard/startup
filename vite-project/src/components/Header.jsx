import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

// I NEED TO ADD A LOG OUT BUTTON
// Logout may be working but I need to figure out the onLogout function

function Header(props) {
  const [userName, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem('userName');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
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
            <h1><img src="/icon.png" alt="Icon" style={{ width: '60px', height: '60px' }}/>PLANr</h1>
            <nav>
                <NavLink to="/">Calendar</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/login" onClick={() => logout()}>Logout</NavLink>
            </nav>
        </header>
    );
}

export default Header;