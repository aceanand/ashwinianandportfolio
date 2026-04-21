import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experience = {
    title: 'Member of Technical Staff',
    company: 'Uponly Technologies',
    period: 'June 2024 – Present',
    location: 'Navi Mumbai, India',
    responsibilities: [
      'Developed high-performance SaaS applications using PHP, React.js, Node.js, and Express with focus on scalability and maintainability',
      'Optimized MySQL and MongoDB schemas through strategic indexing, achieving 30% performance improvement',
      'Implemented caching, load balancing, and database tuning strategies to support multi-tenant architecture',
      'Built and maintained RESTful APIs with versioning (/api/v1) for seamless third-party integrations',
      'Integrated complex payment systems including NSE APIs and Care Health Insurance APIs for financial transactions'
    ]
  };

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Professional Experience</h2>
      <div className="experience-container">
        <div className="experience-card">
          <div className="experience-header">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-info">
              <h3 className="experience-title">{experience.title}</h3>
              <h4 className="experience-company">{experience.company}</h4>
              <div className="experience-meta">
                <span className="meta-item">
                  <FaCalendar /> {experience.period}
                </span>
                <span className="meta-item">
                  <FaMapMarkerAlt /> {experience.location}
                </span>
              </div>
            </div>
          </div>
          <ul className="experience-list">
            {experience.responsibilities.map((item, index) => (
              <li key={index} className="experience-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
