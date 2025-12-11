import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from '../../utils/constants';
import './Portfolio.css';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Showcasing our best work and successful projects</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card scale-in stagger-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">{project.image}</div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <button className="btn btn-secondary btn-sm">View Project</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta section-sm">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's create something amazing together</p>
            <button className="btn btn-primary btn-lg">Get in Touch</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
