import React from 'react';
import './Skills.css'; // Assuming you have a separate CSS file for styling

const skillsData = [
    { skill: 'C', level: 'Intermediate' },
    { skill: 'Python', level: 'Intermediate' },
    { skill: 'Assembly', level: 'Basic' },
    { skill: 'HTML', level: 'Advanced' },
    { skill: 'CSS', level: 'Advanced' },
    { skill: 'Structured Cabling', level: 'Intermediate' },
    { skill: 'Active Directory', level: 'Basic' },
    { skill: 'Linux', level: 'Intermediate' },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills section">
            <h2>Skills</h2>
            <ul>
                {skillsData.map((item, index) => (
                    <li key={index} className="skill-item slide-in">
                        <span className="skill-name">{item.skill}</span>
                        <span className="skill-level">{item.level}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;