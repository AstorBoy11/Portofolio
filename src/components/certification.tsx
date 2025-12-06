import React from "react";
import "./certification.css";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  logo: string;
  credentialUrl?: string;
}

const Certification: React.FC = () => {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Fundamental Junior Web Developer",
      issuer: "Kominfo & Digitalent - VSGA",
      date: "2025-08",
      skills: ["Front-End", "Algorithmic Logic", "Code Structuring", "Core Programming"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Logo_Kementerian_Komunikasi_dan_Digital_Republik_Indonesia_%282024%29.svg",
      credentialUrl: "https://drive.google.com/file/d/1eLydQwMsjfOoha0ayAvkQVnyKbuM4OhR/view?usp=sharing"
    },
    {
      id: 2,
      title: "Intermediate Junior Web Developer",
      issuer: "Kominfo & Digitalent - VSGA",
      date: "2025-09",
      skills: ["Coding Standards", "Structured Design", "Component Integration"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/Logo_Kementerian_Komunikasi_dan_Digital_Republik_Indonesia_%282024%29.svg",
      credentialUrl: "https://drive.google.com/file/d/1B0lUYVnXtSLgfdjQe0xMEoT9ix7goMnL/view?usp=sharing"
    },
  ];

  return (
    <section className="certification" id="certification">
      <div className="container">
        <h2 className="section__title">Certifications</h2>
        <div className="certification__grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certification__card">
              <div className="certification__header">
                <div className="certification__logo">
                  <img src={cert.logo} alt={cert.issuer} />
                </div>
              </div>
              <h3 className="certification__title">{cert.title}</h3>
              <div className="certification__info">
                <div className="certification__issuer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                  </svg>
                  {cert.issuer}
                </div>
                <div className="certification__date">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
                  </svg>
                  Issued: {cert.date}
                </div>
              </div>
              <div className="certification__skills">
                {cert.skills.map((skill, index) => (
                  <span key={index} className="certification__skill">
                    {skill}
                  </span>
                ))}
              </div>
              {cert.credentialUrl && (
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certification__button"
                >
                  View Credential
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;

