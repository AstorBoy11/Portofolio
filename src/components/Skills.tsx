import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Dart/Flutter', level: 50, category: 'Mobile' },
    { name: 'JavaScript', level: 70, category: 'Web development' },
    { name: 'React', level: 55, category: 'Web development' },
    { name: 'PHP', level: 75, category: 'Web development' },
    { name: 'Flutter', level: 60, category: 'Web development' },
    { name: 'Laravel', level: 80, category: 'Web development' },
    { name: 'Next.js', level: 40, category: 'Web development' },
    { name: 'TypeScript', level: 60, category: 'Web development' },
    { name: 'HTML/CSS', level: 95, category: 'Web development' },
    { name: 'Git/GitHub', level: 70, category: 'Tools' },
    { name: 'VS Code', level: 80, category: 'Tools' },
  ];

  const categories = ['Mobile', 'Web development', 'Tools'];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
