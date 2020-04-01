import React from "react";
import {NavLink} from 'react-router-dom'

export const NavBar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brend">
            Note App
        </div>
        <ul className="navbar-nav">
            <li className="nav-item ">
                <NavLink exact  className="nav-link" to="/">Home</NavLink>

            </li>
    <li className="nav-item ">
    <NavLink className="nav-link" to="/about">About</NavLink>
    </li>
        </ul>
    </nav>
)
