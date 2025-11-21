import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="branding container">
                <h1>Luan Alves da Silva</h1>
                <p>Computer Science Student — Cybersecurity Enthusiast</p>
            </div>
            <nav className="navigation container">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#competencies">Competencies</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;