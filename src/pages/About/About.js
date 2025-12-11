import React from 'react';
import { TEAM_MEMBERS } from '../../utils/constants';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Building exceptional digital experiences since 2010</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content slide-in-left">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Business Solutions started with a simple mission: to help businesses
                thrive in the digital world. Over the years, we've grown from a small team to a 
                dedicated group of professionals passionate about creating exceptional digital experiences.
              </p>
              <p>
                We believe that great design and development are not just about aesthetics or functionality—
                they're about solving real problems and creating value for your business and your users.
              </p>
              <p>
                Today, we're proud to have worked with over 200 clients across various industries,
                delivering solutions that make a real impact on their business.
              </p>
            </div>
            <div className="story-image slide-in-right">
              <div className="image-placeholder">🏢</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values section-sm">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>What drives us to deliver excellence</p>
          </div>
          <div className="values-grid">
            {[
              { icon: '🎯', title: 'Excellence', desc: 'We strive for excellence in everything we do' },
              { icon: '🤝', title: 'Collaboration', desc: 'We work closely with our clients as partners' },
              { icon: '💡', title: 'Innovation', desc: 'We embrace new technologies and approaches' },
              { icon: '🔒', title: 'Integrity', desc: 'We act with honesty and transparency' },
            ].map((value, index) => (
              <div key={index} className="value-card slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>Talented professionals dedicated to your success</p>
          </div>
          <div className="team-grid">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={member.id} className="team-card scale-in stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="member-image">{member.image}</div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats section-sm">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">15+</div>
              <div className="stat-title">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">500+</div>
              <div className="stat-title">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">200+</div>
              <div className="stat-title">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50+</div>
              <div className="stat-title">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
