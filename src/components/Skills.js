import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    'JavaScript', 'React.js', 'Node.js', 'HTML5', 'CSS3', 'Python', 
    'Java', 'C++', 'SQL', 'MongoDB', 'Git', 'RESTful APIs'
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Communication', 
    'Time Management', 'Adaptability', 'Critical Thinking'
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Technical Skills</h3>
            <div className="skill-list">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="skill-tag technical">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="skill-list">
              {softSkills.map((skill, index) => (
                <span key={index} className="skill-tag soft">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
