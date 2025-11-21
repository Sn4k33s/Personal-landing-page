import React from 'react';

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Administrative Assistant (PPC) — Production Planning & Control',
            company: 'Apsen Farmacêutica',
            duration: '2025 — Present',
            bullets: [
                'Support production planning and control routines (PPC).',
                'Prepare and update management reports.',
                'Organize administrative processes and document flows.',
                'Support data analysis to optimize lead times and productivity.',
                'Use internal systems and spreadsheets to monitor KPIs.'
            ]
        }
    ];

    return (
        <section id="experience" className="experience section">
            <h2>Professional Experience</h2>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index} className="experience-item slide-in">
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <span>{exp.duration}</span>
                        <ul>
                            {exp.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;