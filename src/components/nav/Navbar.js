import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="nav">
    <div className="container">
        <div className="nav_main">
            <div className="logo">
                <Link to="/">
                    <img src="images/logo.png" alt="logo" />
                </Link>
            </div>
            <div className="mav_item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About us</Link></li>
                    <li><Link to="/">Features</Link></li>
                    <li><Link to="/price-plan">Pricing</Link></li>
                    <li><Link to="/policy-us">FAQ</Link></li>
                    <li><Link to="/blog-page">Blog</Link></li>
                    <li className="nav_btn"><Link to="/contact-us">Contact us</Link></li>

                </ul>
            </div>
            <div>

            </div>
        </div>
    </div>
</nav>
  )
}

export default Navbar