import React from 'react';
import './Hero.css'; // Assuming you have a separate CSS file for Hero component styles

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content container">
                <h1 className="hero-title">Luan Alves da Silva</h1>
                <p className="hero-subtitle">Computer Science student transitioning to IT and Cybersecurity. Practical experience in bug bounty, CTFs and vulnerability analysis.</p>
                <a href="/resume" className="hero-cta">View Resume</a>
            </div>
        </section>
    );
};

export default Hero;