import React, { useContext } from 'react';
import { context } from "../../context/context";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css"

const NavBar = () => {
    const { count } = useContext(context);
    return (
        <nav>
            <ul>
                <li><Link to="/"> Home </Link> </li>
                <li><Link to="/contact"> Contact Us </Link> </li>
                <li><Link to="/cart"> Cart  {count} </Link> </li>
            </ul>
        </nav >
    );
};

export default NavBar;
