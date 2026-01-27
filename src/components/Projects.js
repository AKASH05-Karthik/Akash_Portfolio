import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built using React.js for frontend and Node.js with Express for backend.",
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Stripe API"],
      features: ["User Authentication", "Product Management", "Shopping Cart", "Payment Gateway"]
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Includes task assignment, progress tracking, and deadline management.",
      technologies: ["React.js", "Firebase", "Material-UI", "React DnD"],
      features: ["Drag & Drop", "Real-time Sync", "Team Collaboration", "Progress Tracking"]
    },
    {
      title: "Weather Dashboard",
      description: "A weather forecasting dashboard that provides real-time weather data, 7-day forecasts, and interactive maps. Integrates with multiple weather APIs for accurate data.",
      technologies: ["React.js", "OpenWeather API", "Chart.js", "CSS3"],
      features: ["Real-time Weather", "7-day Forecast", "Interactive Maps", "Data Visualization"]
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <div className="project-content">
                <p className="project-description">{project.description}</p>
                <div className="project-section">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-section">
                  <h4>Key Features:</h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
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

export default Projects;
