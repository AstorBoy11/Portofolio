import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Frontend Developer with strong experience in
              mobile and web technologies, especially Flutter, Dart, React, and
              JavaScript.
            </p>
            <p>
              I enjoy creating smooth, user-friendly mobile apps and modern web
              interfaces. I'm always exploring new technologies and excited to
              collaborate on meaningful, high-value projects.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>7+</h3>
                <p>Repositories</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Active Projects</p>
              </div>
              <div className="stat">
                <h3>2x</h3>
                <p>Pull Shark Achievement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
