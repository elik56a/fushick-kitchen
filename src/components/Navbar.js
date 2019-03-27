import React from 'react'

const Navbar = () => (

    <div className="wrapper">
        <nav className="navbar" id='navbar'>
            <span className="open-slide">
                <a href=""><i className="fas fa-bars fa-2x"></i></a>
            </span>
            <ul className="nav-links colored">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#work">Ouer Recipes</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </div>
)
export default Navbar;