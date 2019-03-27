
import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";



// scroll.scrollTo(100, options);

class Navbar extends Component {
    scrollTo = () => {
        scroll.scrollTo(100);
    }


    render() {
        return (
            <div className="wrapper">
                <nav className="navbar" id='navbar'>
                    <span className="open-slide">
                        <a href=""><i className="fas fa-bars fa-2x"></i></a>
                    </span>
                    <ul className="nav-links">
                        <li className="nav-link">
                            <Link
                                to="#showcase"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}


                            >

                                Home
                            </Link>
                        </li>
                        <li><a href="#about-section">About Us</a></li>
                        <li><a href="#video-container">Ouer Recipes</a></li>
                        <li><a href="#footer-container">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;