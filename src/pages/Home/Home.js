import React from 'react';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import { FEATURES, TESTIMONIALS } from '../../utils/constants';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text slide-in-left">
              <h1 className="hero-title">
                Welcome to <span className="highlight">Business Solutions</span>
              </h1>
              <p className="hero-subtitle">
                Providing exceptional services with modern web solutions. Build your digital presence with cutting-edge technology and design.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary btn-lg">Get Started</button>
                <button className="btn btn-ghost btn-lg">Learn More</button>
              </div>
            </div>
            <div className="hero-image slide-in-right">
              <div className="hero-emoji">💼</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <p>We deliver modern solutions with exceptional quality and service</p>
          </div>
          <div className="features-grid">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section-sm">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What our satisfied clients are saying</p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card slide-in-up">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section-sm">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to bring your ideas to life</p>
            <button className="btn btn-primary btn-lg">Contact Us Today</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
