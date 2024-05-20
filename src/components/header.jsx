
import * as React from "react";
import { Link } from "react-router-dom";

function Header() {
    return <div className="navbar-fixed ">
        <nav className=" #e0f2f1 teal lighten-5">
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo #004d40 teal-text darken-4">Spa Project</Link>
                <ul id='nav-mobile' className="right hide-on-med-and-down">
                    <li><Link  className="#004d40 teal-text darken-4" to="/contact">Contact</Link></li>
                    <li><Link className="#004d40 teal-text darken-4"to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    </div>
}
export { Header };