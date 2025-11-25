import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Welcome to my portfolio</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="gradient-text">
              Aril Ibbet
              <br />
              Ardana Putra
            </span>
          </h1>

          <h2 className="hero-subtitle">
            <span className="typing-text">Mobile & Web Developer</span>
          </h2>

          <p className="hero-description">
            Passionate about creating beautiful mobile applications with
            <strong> Flutter/Dart</strong> and modern web experiences with
            <strong> React & TypeScript</strong>. Turning ideas into reality,
            one line of code at a time.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10h12m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Contact Me</span>
            </a>
            <a href="#skills" className="btn btn-secondary">
              <span>My Skills</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Repositories</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
