import React from 'react';
import './Contact.css';
import { MapPinHouse, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <Mail />
                <div>
                  <h4>Email</h4>
                  <p>arilardana111@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
              </div>
              <div className="contact-item">
                <MapPinHouse />
                <div>
                  <h4>Location</h4>
                  <p>Indonesia</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/AstorBoy11" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/aril-ibbet-ardana-putra-250484284/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/aril_2.4/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
