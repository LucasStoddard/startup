import React from "react";

class Header extends React.Component {
    render() { 
        return (
            <header>
                <h1>PLANr</h1>
                <h3>User's name</h3>
                <nav>
                    <a href="index.html">Calendar</a>
                    <a href="login.html">Login</a>
                </nav>
            </header>
        );
    }
}

export default Header;