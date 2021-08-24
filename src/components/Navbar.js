import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode.color==="white"?"dark":"light"}`} style={{backgroundColor:props.mode.navColor}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Themes
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" onClick={()=>{props.handleMode("light")}} href="javascript:void(0);">Light Mode</a></li>
                                <li><a className="dropdown-item" onClick={()=>{props.handleMode("dark")}} href="javascript:void(0);">Dark Mode</a></li>
                                <li><a className="dropdown-item" onClick={()=>{props.handleMode("blue")}} href="javascript:void(0);">Blue Mode</a></li>
                                <li><a className="dropdown-item" onClick={()=>{props.handleMode("pink")}} href="javascript:void(0);">Pink Mode</a></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
}

Navbar.defaultProps = {
    title: "TextUtils",
}