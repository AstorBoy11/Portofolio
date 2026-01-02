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
              I'm a passionate Frontend Developer specializing in modern web technologies
              including React, Next.js, TypeScript, and Tailwind CSS. Currently working as
              a Frontend JS Intern at Utero Kreatif Indonesia, building marketplace websites
              with cutting-edge technologies.
            </p>
            <p>
              I enjoy creating responsive, user-friendly web applications with clean code
              and modern design principles. I'm constantly learning new technologies and
              excited to collaborate on innovative projects that make a real impact.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
