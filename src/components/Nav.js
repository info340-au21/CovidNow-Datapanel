import React from 'react';
import { NavLink } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export function NavBar(props) {
    const handleSignOut = (event) => {
        signOut(getAuth());
    }
    console.log(props.user);
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <NavLink className="navbar-brand" exact to="/">
                <img
                    src="../img/logo.svg"
                    className="d-inline-block align-top"
                    alt="Database Logo"
                />
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" exact to="/">Overview</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            to="/dashboard/last"
                            >Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/about">About Us</NavLink>
                    </li>
                </ul>
                <div className="nav navbar-nav navbar-right">
                    {!props.user &&
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/login">
                        <span className="material-icons">login</span> Login
                    </NavLink>
                    }
                    {props.user && <>
                    <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
                    </>}
                </div>
            </div>
        </nav>
    );
  }