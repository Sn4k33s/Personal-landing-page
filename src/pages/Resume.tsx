import React from 'react';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Competencies from '../components/Competencies';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Resume: React.FC = () => {
    return (
        <div className="resume-container container">
            <h1>Resume</h1>
            <section className="summary section">
                <h2>Profile</h2>
                <p>
                    Computer Science student transitioning from administrative roles to IT and Cybersecurity. Practical
                    experience in offensive security projects including bug bounty, CTFs and vulnerability analysis. Knowledge
                    in programming (C, Python, Assembly), network topology, infrastructure and structured cabling. Self-taught,
                    organized and highly motivated to work on technology and software projects.
                </p>
            </section>

            <Skills />
            <Competencies />
            <Education />
            <Experience />
            <section className="languages section">
                <h2>Languages</h2>
                <p>English — Intermediate</p>
            </section>
            <section className="certificates section">
                <h2>Certificates</h2>
                <ul>
                    <li>Computer Maintenance Assistant — Senac Nações Unidas</li>
                    <li>Network Topology Assistant — Senac Nações Unidas</li>
                    <li>English Certificate A2 — Cambridge Court School of English</li>
                    <li>Microsoft Office and Information Technology — All Net</li>
                </ul>
            </section>

            <Contact />
        </div>
    );
};

export default Resume;