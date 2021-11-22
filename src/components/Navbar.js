import React from "react";
import '../style.css';
import '../index.css';

export default function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="index.html">
                <img
                    src="./img/logo.svg"
                    className="d-inline-block align-top"
                    alt="Database Logo"
                />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                            Overview
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            data-target=".multi-collapse"
                            href="#collapseDashboard"
                            role="button"
                            aria-expanded="false"
                            aria-controls=".multi-collapse">
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">
                            About Us
                        </a>
                    </li>
                </ul>
                <div className="nav navbar-nav navbar-right">
                    <a className="nav-item nav-link" href="login.html">
                        <span className="material-icons">login</span> Login
                    </a>
                </div>
            </div>
        </nav>
    );
}