import React, { useState, useEffect } from 'react';
import './App.css';
import Photo from './Photo.jpg';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    technical: ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Git', 'REST APIs', 'HTML5', 'CSS3'],
    soft: ['Problem Solving', 'Team Leadership', 'Communication', 'Time Management', 'Critical Thinking']
  };

  const projects = [
    {
      title: "Sync-Together",
      description: "Developed an entertainment platform for users from different location to connect and enjoy music and videos together. Integrated APIs for real-time TV and radio access, enhancing the interactive user experience",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Rest API"],
      features: ["New Room", "Chat Page", "Live TV Page"],
      
    },
    {
      title: "Blood Community",
      description: "Developed a full-stack MERN application connecting blood donors and recipients, streamliningblood donation processes. Implemented real-time features and user tracking, improving community engagement and response times. Optimized database queries and API endpoints for faster data retrieval, enhancing user experience",
      tech: ["React.js", "MongoDB", "Express.js", "Node.js"],
      features: ["Role Based Authentication", "Blood Request System", "Blood Donation System"],
    },
    {
      title: "Live Detection of Endangered Species",
      description: "Built a real-time species detection system using deep learning and computer vision with YOLOv5. Deployed scalable Flask API on AWS using Docker, enabling remote access for wildlife monitoring Automated image processing work flows, improving species recognition accuracy and conservation data collection",
      tech: ["Python", "Flask", "Docker", "YOLOv5"],
      features: ["Live Detection", "Data Analytics", "Alerts"],
    }
  ];

  return (
    <div className={`App ${isVisible ? 'visible' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">AK</div>
          <div className="nav-menu">
            <a href="#about" onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#skills" onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#projects" onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#experience" onClick={() => setActiveSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a href="#education" onClick={() => setActiveSection('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a>
            <a href="#contact" onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-animation">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">👋 Hello, I'm</span>
            </div>
            <h1 className="hero-title">
              <span className="title-word">Akash K</span>
            </h1>
            <h2 className="hero-subtitle">
              <span className="typing-text">Aspiring Software Developer</span>
            </h2>
            <p className="hero-description">
              Passionate about creating innovative digital solutions and turning complex problems into 
              elegant, user-friendly applications. I love building things that make a difference.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">0-1</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Passion</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                <span className="btn-icon">💼</span>
                View My Work
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1p7znmHh8j2KpxSCHBS5n-5Z4qUAozELE" className="btn-secondary" download="Akash_K_Resume.pdf">
                <span className="btn-icon">📄</span>
                Download CV
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/AKASH05-Karthik" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/akash-k-7a4951276/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-placeholder">
                <img 
                  src={Photo} 
                  alt="Akash K" 
                  className="profile-image"
                />
                <div className="profile-badge">
                  <span className="badge-text">Available</span>
                </div>
                <div className="profile-glow"></div>
              </div>
              <div className="profile-decoration">
                <div className="decoration-ring ring-1"></div>
                <div className="decoration-ring ring-2"></div>
                <div className="decoration-ring ring-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="about-header">
                <div className="about-icon">👨‍💻</div>
                <h3>Information Technology Graduate</h3>
                <p>Passionate Software Developer</p>
              </div>
              <div className="about-description">
                <p>
                  I'm a highly motivated Information Technology graduate with a strong foundation in software development 
                  and a passion for creating innovative solutions. My journey in tech has been driven by curiosity 
                  and a desire to solve real-world problems through code.
                </p>
                <p>
                  I specialize in modern web technologies and have experience building full-stack applications 
                  that are not only functional but also deliver exceptional user experiences. I believe in writing 
                  clean, maintainable code and staying updated with the latest industry trends.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-icon">📅</div>
                  <h3>0-1</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">🚀</div>
                  <h3>10+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">💻</div>
                  <h3>5+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-showcase">
            <div className="skills-grid">
              <div className="skill-category frontend">
                <div className="category-header">
                  <span className="category-icon">🎨</span>
                  <h3>Frontend Development</h3>
                </div>
                <div className="category-subheader">
                  <div className="category-badge">Front-end</div>
                </div>
                <div className="skills-list">
                  {['JavaScript', 'React.js', 'HTML5', 'CSS3'].map(skill => (
                    <div key={skill} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill}</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress"></div>
                        <div className="skill-glow"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="skill-category backend">
                <div className="category-header">
                  <span className="category-icon">⚙️</span>
                  <h3>Backend Development</h3>
                </div>
                <div className="category-subheader">
                  <div className="category-badge">Backend</div>
                </div>
                <div className="skills-list">
                  {['Node.js', 'MongoDB', 'Express', 'REST APIs'].map(skill => (
                    <div key={skill} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill}</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress"></div>
                        <div className="skill-glow"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="skill-category tools">
                <div className="category-header">
                  <span className="category-icon">🛠️</span>
                  <h3>Tools & Technologies</h3>
                </div>
                <div className="category-subheader">
                  <div className="category-badge">Tools</div>
                </div>
                <div className="skills-list">
                  {['Git', 'VS Code', 'AWS', 'Postman', 'IntelliJ'].map(skill => (
                    <div key={skill} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill}</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress"></div>
                        <div className="skill-glow"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="skill-category programming">
                <div className="category-header">
                  <span className="category-icon">☕</span>
                  <h3>Programming Languages</h3>
                </div>
                <div className="category-subheader">
                  <div className="category-badge">Languages</div>
                </div>
                <div className="skills-list">
                  {['Java', 'JavaScript'].map(skill => (
                    <div key={skill} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill}</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress"></div>
                        <div className="skill-glow"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="soft-skills">
              <div className="soft-skills-header">
                <span className="soft-skills-icon">💡</span>
                <h3>Soft Skills</h3>
              </div>
              <div className="soft-skills-grid">
                <div className="soft-skill-item">
                  <span className="soft-skill-icon">🎯</span>
                  <span className="soft-skill-name">Problem Solving</span>
                </div>
                <div className="soft-skill-item">
                  <span className="soft-skill-icon">🤝</span>
                  <span className="soft-skill-name">Team Leadership</span>
                </div>
                <div className="soft-skill-item">
                  <span className="soft-skill-icon">💬</span>
                  <span className="soft-skill-name">Communication</span>
                </div>
                <div className="soft-skill-item">
                  <span className="soft-skill-icon">⏰</span>
                  <span className="soft-skill-name">Time Management</span>
                </div>
                <div className="soft-skill-item">
                  <span className="soft-skill-icon">🧠</span>
                  <span className="soft-skill-name">Critical Thinking</span>
                </div>
                <div className="soft-skill-item">
                  <span className="soft-skill-icon">🔄</span>
                  <span className="soft-skill-name">Adaptability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-number">
                  <span className="number-text">0{index + 1}</span>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-category">
                      <span className="category-icon">🚀</span>
                      <span>Web Application</span>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    <h4>
                      <span className="tech-icon">⚡</span>
                      Technologies Used
                    </h4>
                    <div className="tech-tags">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-features">
                    <h4>
                      <span className="features-icon">✨</span>
                      Key Features
                    </h4>
                    <div className="features-list">
                      {project.features.map((feature, i) => (
                        <div key={i} className="feature-item">
                          <span className="feature-bullet">🔹</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>Software Development Intern</h3>
                  <span className="timeline-date">Aug 2025 - Dec 2025</span>
                </div>
                <h4>Fortumars AI Technologies And Business Solutions</h4>
                <p>Coimbatore, Tamil Nadu, India</p>
                <ul>
                  <li>Developed and maintained web applications using React.js and Node.js</li>
                  <li>Collaborated with senior developers to implement new features</li>
                  <li>Participated in code reviews and agile development processes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education Journey</h2>
          <div className="education-timeline">
            <div className="education-card graduate">
              <div className="education-icon">
                <span className="icon-wrapper">
                  <span className="education-icon-symbol">🎓</span>
                </span>
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3>Bachelor of Information Technology</h3>
                  <span className="education-period">2022 - 2026</span>
                </div>
                <h4 className="education-institution">
                  <span className="institution-icon">🏫</span>
                  Sri Shakthi Institute of Engineering and Technology
                </h4>
                <div className="education-grade">
                  <span className="grade-label">CGPA:</span>
                  <span className="grade-value">8.5/10</span>
                  <div className="grade-bar">
                    <div className="grade-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="education-details">
                  <div className="coursework-header">
                    <span className="coursework-icon">📚</span>
                    <h4>Relevant Coursework</h4>
                  </div>
                  <div className="coursework-grid">
                    <span className="coursework-tag">Full-Stack Development</span>
                    <span className="coursework-tag">Java</span>
                    <span className="coursework-tag">SQL</span>
                    <span className="coursework-tag">MERN Stack</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="education-card hsc">
              <div className="education-icon">
                <span className="icon-wrapper">
                  <span className="education-icon-symbol">📖</span>
                </span>
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3>Higher Secondary Certificate (HSC)</h3>
                  <span className="education-period">2021 - 2022</span>
                </div>
                <h4 className="education-institution">
                  <span className="institution-icon">🏫</span>
                  SARATHA MATRICULATION HIGHER SECONDARY SCHOOL
                </h4>
                <div className="education-grade">
                  <span className="grade-label">Percentage:</span>
                  <span className="grade-value">89%</span>
                  <div className="grade-bar">
                    <div className="grade-progress" style={{width: '89%'}}></div>
                  </div>
                </div>
                <div className="achievement-badge">
                  <span className="badge-icon">🏆</span>
                  <span>Excellent Academic Performance</span>
                </div>
              </div>
            </div>
            
            <div className="education-card sslc">
              <div className="education-icon">
                <span className="icon-wrapper">
                  <span className="education-icon-symbol">📝</span>
                </span>
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3>Secondary School Leaving Certificate (SSLC)</h3>
                  <span className="education-period">2019 - 2020</span>
                </div>
                <h4 className="education-institution">
                  <span className="institution-icon">🏫</span>
                  SARATHA MATRICULATION HIGHER SECONDARY SCHOOL
                </h4>
                <div className="education-grade">
                  <span className="grade-label">Percentage:</span>
                  <span className="grade-value">94.4%</span>
                  <div className="grade-bar">
                    <div className="grade-progress outstanding" style={{width: '94.4%'}}></div>
                  </div>
                </div>
                <div className="achievement-badge outstanding">
                  <span className="badge-icon">⭐</span>
                  <span>Outstanding Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <h2 className="contact-title">
            <span className="title-icon">✉️</span>
            Get In Touch
          </h2>
          <p className="contact-description">
            I'm always interested in hearing about new opportunities and exciting projects.
            Let's connect and create something amazing together!
          </p>
          
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <span className="contact-icon">📧</span>
              </div>
              <div className="contact-info">
                <h3>Email</h3>
                <a href="mailto:akashkarthik3505@gmail.com" className="contact-link">
                  akashkarthik3505@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <span className="contact-icon">📱</span>
              </div>
              <div className="contact-info">
                <h3>Phone</h3>
                <a href="tel:+919342974241" className="contact-link">
                  +91 9342974241
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon-wrapper">
                <span className="contact-icon">📍</span>
              </div>
              <div className="contact-info">
                <h3>Location</h3>
                <span className="contact-text">Tamil Nadu, Erode</span>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/akash-k-7a4951276/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
              <a href="https://github.com/AKASH05-Karthik" target="_blank" rel="noopener noreferrer" className="social-link github">
                <span className="social-icon">�</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Akash K. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
