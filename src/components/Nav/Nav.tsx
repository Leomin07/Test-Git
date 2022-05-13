import React from 'react';
import './style.css';

const Nav = () => {
    return (
        <div className="nav">
            <nav className="parent-nav">
                <a href="#" className="link-image">
                    <img
                        className="img-fluid"
                        src="https://chitchat-react.vercel.app/assets/images/logo/landing-logo.png"
                        alt=""
                    />
                </a>
                <div className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-link">MESSENGER</li>
                        <li className="nav-link">BLOG</li>
                        <li className="nav-link">AUTHENTICATION</li>
                        <li className="nav-link">BONUS PAGE</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
