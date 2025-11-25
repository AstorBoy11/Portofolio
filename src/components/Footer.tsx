import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-tagline">Built with React & TypeScript | © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
