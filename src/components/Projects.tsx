import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'CBF Tourism Recommender',
      description: 'A Content-Based Filtering tourism recommendation system that helps users discover the best tourist destinations based on their preferences.',
      technologies: ['JavaScript', 'Web Development', 'Algorithm'],
      githubLink: 'https://github.com/AstorBoy11/CBF-Tourism-Recommender',
    },
    {
      id: 2,
      title: 'PBL Jawara Mobile',
      description: 'A mobile application project built with Flutter/Dart, showcasing modern mobile development practices and clean architecture.',
      technologies: ['Dart', 'Flutter', 'Mobile Development'],
      githubLink: 'https://github.com/AstorBoy11/PBL-Jawara-Mobile',
    },
    {
      id: 3,
      title: 'MAGNET-Magang and Network Tracking',
      description: 'MAGNET (Magang Network And Tracking) adalah sistem rekomendasi berbasis web yang dirancang untuk membantu mahasiswa Jurusan Teknologi Informasi Politeknik Negeri Malang dalam menemukan peluang magang yang paling sesuai.',
      technologies: ['PHP', 'Laravel'],
      githubLink: 'https://github.com/AstorBoy11/MAGNET-Magang-Network-And-Tracking.git',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demoLink && (
                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;