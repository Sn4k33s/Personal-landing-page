import React from 'react';

const competenciesData = [
    { id: 1, competency: 'Teamwork' },
    { id: 2, competency: 'Problem Solving' },
    { id: 3, competency: 'Information Security' },
    { id: 4, competency: 'Structured Cabling' },
    { id: 5, competency: 'Network Topology' },
    { id: 6, competency: 'Networks & Infrastructure' },
    { id: 7, competency: 'Computer Maintenance' },
    { id: 8, competency: 'IoT Devices' },
    { id: 9, competency: 'Router Configuration' },
    { id: 10, competency: 'Active Directory (AD)' },
    { id: 11, competency: 'Linux' },
];

const Competencies: React.FC = () => {
    return (
        <section id="competencies" className="competencies section">
            <h2>Competencies</h2>
            <ul>
                {competenciesData.map(item => (
                    <li key={item.id} className="competency-item slide-in">
                        {item.competency}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Competencies;