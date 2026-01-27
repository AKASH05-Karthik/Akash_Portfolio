import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Akash K</h1>
        <p className="title">Aspiring Software Developer</p>
        <div className="contact-info">
          <p>📧 akashk@example.com</p>
          <p>📱 +91 1234567890</p>
          <p>📍 Bengaluru, Karnataka</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
