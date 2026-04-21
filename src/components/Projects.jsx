import React from 'react';
import { FaReact, FaNode, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'UPONLY Pro - Financial Services Platform',
      icon: '💰',
      description: 'Enterprise fintech SaaS platform with role-based access control for secure multi-user workflows, enabling seamless mutual fund investments and financial services.',
      technologies: ['React.js', 'PHP', 'Node.js', 'MySQL', 'RESTful APIs', 'Payment Gateway', 'NSE APIs'],
      highlights: [
        'Integrated NSE APIs for real-time mutual fund investments with buy/sell functionality and portfolio tracking',
        'Implemented secure payment flow with transaction processing, status tracking, and automated reconciliation',
        'Built KYC and document upload modules with OCR integration ensuring SEBI compliance',
        'Developed responsive UI with Redux state management and intelligent chatbot for customer support',
        'Optimized database and caching strategies achieving 40% faster page load times'
      ],
      metrics: {
        users: '5000+',
        transactions: '₹10Cr+',
        uptime: '99.9%'
      }
    },
    {
      title: 'Real Estate SaaS Platform - Full Lifecycle Management',
      icon: '🏢',
      description: 'End-to-end real estate management platform streamlining property lifecycle from lead generation to post-sales operations with advanced automation and real-time collaboration.',
      technologies: ['React.js', 'Node.js', 'Express', 'MySQL', 'Socket.io', 'RESTful APIs', 'Tailwind CSS', 'Redis'],
      highlights: [
        'Architected full-cycle platform handling pre-sales, sales, billing, and post-sales operations',
        'Implemented intelligent lead scoring with automated follow-ups and 360-degree customer view',
        'Built comprehensive billing system with payment tracking, GST compliance, and multiple payment gateways',
        'Developed real-time updates using WebSocket, reducing latency by 30% with instant notifications',
        'Designed modular microservices architecture with automated testing and deployment pipelines',
        'Created analytics dashboard with customizable reports and visual data representations'
      ],
      metrics: {
        properties: '1000+',
        leads: '50K+',
        automation: '70%'
      }
    },
    {
      title: 'HRMS - Human Resource Management System',
      icon: '👥',
      description: 'Complete HR management platform digitizing employee operations with geo-location attendance, leave management, and expense tracking for improved efficiency.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Geolocation APIs', 'JWT', 'Material-UI'],
      highlights: [
        'Developed full-stack HRMS managing employee lifecycle with geo-location based attendance tracking',
        'Implemented multi-role access control with attendance policies, leave management, and expense tracking',
        'Designed optimized database schema reducing query execution time by 50%',
        'Built responsive mobile-first frontend with comprehensive validation and error handling',
        'Integrated automated email notifications for approvals and HR announcements',
        'Created reporting module with attendance, leave balance, and customizable analytics dashboards'
      ],
      metrics: {
        employees: '500+',
        attendance: '99.5%',
        efficiency: '+60%'
      }
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Key Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>

            <ul className="project-highlights">
              {project.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>

            {project.metrics && (
              <div className="project-metrics">
                {Object.entries(project.metrics).map(([key, value], idx) => (
                  <div key={idx} className="metric-item">
                    <span className="metric-value">{value}</span>
                    <span className="metric-label">{key}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
