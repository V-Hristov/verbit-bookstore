import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="header">
            <div className="header-container">
                <h1 className="header-logo">
                    <Link to="/">Verbit</Link>
                </h1>
                <ul className="header-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">User Profile</Link></li>
                    <li><Link to="/library">Library</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;