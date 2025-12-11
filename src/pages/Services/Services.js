import React from 'react';
import { SERVICES } from '../../utils/constants';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services section">
        <div className="container">
          <div className="services-grid">
            {SERVICES.map((service, index) => (
              <div key={service.id} className="service-card slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process section-sm">
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>How we work to deliver exceptional results</p>
          </div>
          <div className="process-grid">
            {[
              { step: '01', title: 'Discovery', desc: 'We understand your goals and requirements' },
              { step: '02', title: 'Planning', desc: 'We create a detailed project roadmap' },
              { step: '03', title: 'Design', desc: 'We craft beautiful and functional designs' },
              { step: '04', title: 'Development', desc: 'We build with modern technologies' },
              { step: '05', title: 'Testing', desc: 'We ensure quality and performance' },
              { step: '06', title: 'Deployment', desc: 'We launch and provide support' },
            ].map((item, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
