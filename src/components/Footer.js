import React from 'react'

const Footer = () => (

    <div className="footer-container" id='footer-container'>
        <div className="contact-elements">
            <h2 className='contact-title'>Contact Us</h2>
            <p className='contact-text'><i className="fas fa-phone fa-x1"></i> Phone: 054-8445-453 </p>
            <p className='contact-text'><i className="far fa-envelope-open"></i> Email: <em>fushick.kitchn@gmail.com </em></p>
            <p className='contact-text'><i className="fas fa-map-marker-alt"></i> Address: Alenbi 57 St, Tel Aviv, Israel </p>
        </div>
        <div className="follow">
            <h2 className="follow-title"> Follow Us </h2>
            <div className="follow-icons">
                <a href="https://www.linkedin.com/in/eliyahu-kriel-60767817a">
                    <i className="fab fa-linkedin fa-2x icon"></i>
                </a>
                <a href="https://github.com/elik56a">
                    <i className="fab fa-github fa-2x icon"></i>
                </a>
                <a href="https://github.com/elik56a">
                    <i className="fab fa-facebook fa-2x icon"></i>
                </a>
                <a href="https://github.com/elik56a">
                    <i className="fab fa-youtube fa-2x icon"></i>
                </a>
                <a href="https://github.com/elik56a">
                    <i className="fab fa-twitter fa-2x icon"></i>
                </a>
            </div>
        </div>
        <div>
            <img src="https://img.freepik.com/free-vector/coloured-chefdesign_1152-72.jpg?size=338&ext=jpg" alt="" className='footer-img' />
        </div>
    </div>
)
export default Footer;