import React from 'react';
import './Internship.css';

const Internship = () => {
  const internships = [
    {
      company: "Fortumars AI Technologies And Business Solutions.",
      position: "Software Development Intern",
      duration: "August 2025 - December 2025",
      location: "Coimbatore, Tamil Nadu, India ",
      responsibilities: [
        "Developed and maintained web applications using React.js and Node.js",
        "Collaborated with senior developers to implement new features",
        "Participated in code reviews and agile development processes",
        "Assisted in debugging and troubleshooting existing applications",
        "Contributed to documentation and technical specifications"
      ],
      achievements: [
        "Improved application performance by 25% through optimization",
        "Successfully delivered 3 major features ahead of schedule"
      ]
    }
  ];

  return (
    <section className="internship">
      <div className="internship-container">
        <h2 className="internship-title">Internship Experience</h2>
        <div className="internship-list">
          {internships.map((internship, index) => (
            <div key={index} className="internship-card">
              <div className="internship-header">
                <div className="company-info">
                  <h3>{internship.company}</h3>
                  <p className="position">{internship.position}</p>
                </div>
                <div className="internship-meta">
                  <span className="duration">{internship.duration}</span>
                  <span className="location">{internship.location}</span>
                </div>
              </div>
              
              <div className="internship-content">
                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {internship.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="achievements">
                  <h4>Achievements:</h4>
                  <ul>
                    {internship.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;
