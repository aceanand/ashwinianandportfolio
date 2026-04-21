import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ProfileImage from '../assets/profileImage';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Ashwini Anand</span>
          </h1>
          <h2 className="hero-subtitle">Full-Stack Software Developer</h2>
          <p className="hero-description">
            Full-Stack Developer with 2+ years of experience building scalable SaaS platforms and multitenant applications. 
            Specialized in React.js, Node.js, PHP, and modern web technologies with expertise in payment integrations, 
            API design, and database optimization.
          </p>
          
          <div className="hero-contact-info">
            <a href="tel:+917045249564" className="contact-item">
              <FaPhone /> +91 7045249564
            </a>
            <a href="mailto:ashwinianand920@gmail.com" className="contact-item">
              <FaEnvelope /> ashwinianand920@gmail.com
            </a>
            <span className="contact-item">
              <FaMapMarkerAlt /> Navi Mumbai, India
            </span>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/aceanand" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashwini-anand7" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            <ProfileImage alt="Ashwini Anand - Full Stack Developer" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
