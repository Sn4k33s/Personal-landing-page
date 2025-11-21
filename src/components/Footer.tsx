import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;