import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            Full-Stack Software Developer with 2+ years of experience building complex SaaS platforms and 
            multitenant applications. I specialize in creating scalable, high-performance web applications 
            using modern technologies like React.js, Node.js, PHP, and Vue.js.
          </p>
          <p className="about-paragraph">
            My expertise includes developing multi-role architectures, integrating payment systems (NSE APIs, 
            Care Health Insurance APIs), designing RESTful APIs, and optimizing database performance. I've 
            achieved 30% performance improvements through strategic indexing and implemented real-time features 
            using WebSockets that reduced latency by 30%.
          </p>
          <p className="about-paragraph">
            Currently at Uponly Technologies, I focus on building enterprise-grade applications with emphasis 
            on clean code, security, and performance optimization. I'm passionate about continuous learning 
            and delivering solutions that drive business growth.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h3 className="stat-number">2+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">30%</h3>
            <p className="stat-label">Performance Boost</p>
          </div>
        </div>

        <div className="education">
          <h3 className="education-title">Education</h3>
          <div className="education-card">
            <h4>Bachelor of Engineering</h4>
            <p className="education-school">Atharva College of Engineering, Mumbai</p>
            <p className="education-year">2019 - 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
