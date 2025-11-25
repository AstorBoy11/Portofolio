import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-tagline">Built with React & TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;
