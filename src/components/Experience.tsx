import React from 'react';
import './Experience.css';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  logo: string;
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Frontend JS Intern",
      company: "Utero Kreatif Indonesia",
      period: "January 2026 - Present",
      description: "Build Marketplace website using Next.js, Tailwind CSS, and TypeScript.",
      skills: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9kLuAfN1PXDXPF3FB8800Avl0PZkxnut1g&s",
    },
    
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section__title">Work Experience</h2>
        <div className="experience__grid">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience__card">
              <div className="experience__header">
                <div className="experience__logo">
                  <img src={exp.logo} alt={exp.company} />
                </div>
              </div>
              <h3 className="experience__title">{exp.title}</h3>
              <div className="experience__info">
                <div className="experience__company">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                  {exp.company}
                </div>
                <div className="experience__period">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
                  </svg>
                  {exp.period}
                </div>
              </div>
              <p className="experience__description">{exp.description}</p>
              <div className="experience__skills">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="experience__skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
