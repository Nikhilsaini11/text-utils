import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'primary' : 'dark'} bg-${props.mode === 'light' ? 'primary' : 'dark'}`}>

            <div className="container-fluid">
                <a className="navbar-brand" href="#">TextUtils</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={`nav-link active`} aria-current="page" href="#">Home</a>
                        {/* <NavLink className={`nav-link ${({ isActive, isPending }) =>
                            isActive ? "active" : ""}`} aria-current="page" to="/">Home</NavLink>
                        <NavLink className={`nav-link ${({ isActive, isPending }) =>
                            isActive ? "active" : ""}`} to="/about">About Us</NavLink> */}
                    </div>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input mx-3" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
        </nav>
    );
}