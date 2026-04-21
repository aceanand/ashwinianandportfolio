import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'FastApi', 'PHP', 'Laravel']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Vue.js', 'Redux', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Material UI']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Optimization', 'Schema Design', 'Indexing']
    },
    {
      title: 'Architecture',
      skills: ['RESTful APIs', 'Multi-tenant Systems', 'Microservices', 'MVC', 'API Versioning']
    },
    {
      title: 'Infrastructure',
      skills: ['Azure', 'Docker', 'Redis', 'WebSockets']
    },
    {
      title: 'Integrations',
      skills: ['Payment Systems', 'Third-party APIs', 'Care Insurance APIs', 'NSE APIs']
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
