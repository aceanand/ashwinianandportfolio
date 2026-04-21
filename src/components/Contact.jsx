import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-text">
          <h3 className="contact-heading">Let's Work Together</h3>
          <p className="contact-description">
            I'm currently available for freelance work and full-time opportunities. 
            If you have a project that you want to get started or think you need my help, 
            then get in touch.
          </p>
        </div>

        <div className="contact-info-grid">
          <a href="mailto:ashwinianand920@gmail.com" className="contact-info-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <p>ashwinianand920@gmail.com</p>
            </div>
          </a>

          <a href="tel:+917045249564" className="contact-info-card">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-details">
              <h4>Phone</h4>
              <p>+91 7045249564</p>
            </div>
          </a>

          <div className="contact-info-card">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-details">
              <h4>Location</h4>
              <p>Navi Mumbai, India</p>
            </div>
          </div>
        </div>

        <div className="contact-social">
          <h4 className="social-title">Connect With Me</h4>
          <div className="social-links-contact">
            <a href="https://github.com/aceanand" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ashwini-anand7" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
