import React from "react";
import { NavLink, Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <span className="text-reset">Lucas Stoddard</span>
            <br></br>
            <Link to="https://github.com/LucasStoddard/startup">(GitHub)</Link>
        </footer>
    );
}

export default Footer;