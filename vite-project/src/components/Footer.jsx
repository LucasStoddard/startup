import React from "react";
import { NavLink, Link } from "react-router-dom";

class Footer extends React.Component {
    render() { 
        return (
            <footer>
                <span class="text-reset">Lucas Stoddard</span>
                <br></br>
                <Link to="https://github.com/LucasStoddard/startup">(GitHub)</Link>
            </footer>
        );
    }
}

export default Footer;