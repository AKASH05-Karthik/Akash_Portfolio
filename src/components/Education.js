import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University Name",
      location: "Tamil Nadu, Erode",
      duration: "2020 - 2024",
      gpa: "CGPA: 8.5/10",
      icon: "🎓",
      achievements: [
        "Dean's List for Academic Excellence (3 semesters)",
        "Published Research Paper on Machine Learning",
        "Led Technical Workshop Series for 100+ students",
        "Won 1st Place in University Hackathon 2023"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "Machine Learning",
        "Operating Systems",
        "Computer Networks",
        "Cloud Computing"
      ],
      activities: [
        "Computer Science Club - Technical Lead",
        "Hackathon Organizer",
        "Peer Tutor for Programming Courses",
        "Open Source Contributor"
      ]
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <div className="education-header">
          <span className="education-icon">🎓</span>
          <h2 className="education-title">
            My <span className="highlight">Education</span>
          </h2>
          <div className="title-decoration"></div>
        </div>
        
        <p className="education-intro">
          My academic journey has equipped me with a strong foundation in computer science,
          fostering a passion for problem-solving and innovation through hands-on learning experiences.
        </p>

        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="card-header">
                <div className="degree-info">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                </div>
                <div className="education-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span>{edu.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    <span>{edu.location}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📊</span>
                    <span>{edu.gpa}</span>
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <div className="content-section">
                  <h5 className="section-title">
                    <span className="section-icon">🏆</span>
                    Key Achievements
                  </h5>
                  <ul className="achievements-list">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="achievement-item">
                        <span className="achievement-number">{i + 1}</span>
                        <span className="achievement-text">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="content-section">
                  <h5 className="section-title">
                    <span className="section-icon">📚</span>
                    Relevant Coursework
                  </h5>
                  <div className="coursework-grid">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>

                <div className="content-section">
                  <h5 className="section-title">
                    <span className="section-icon">🎯</span>
                    Extracurricular Activities
                  </h5>
                  <div className="activities-grid">
                    {edu.activities.map((activity, i) => (
                      <div key={i} className="activity-item">
                        <span className="activity-icon">⭐</span>
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-stats">
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8.5</span>
            <span className="stat-label">CGPA</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
