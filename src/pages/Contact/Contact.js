import React, { useState } from 'react';
import { validateEmail, validateRequired, validatePhone } from '../../utils/helpers';
import { CONTACT_INFO, VALIDATION_MESSAGES } from '../../utils/constants';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = VALIDATION_MESSAGES.required;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = VALIDATION_MESSAGES.email;
    }

    if (!validateRequired(formData.phone)) {
      newErrors.phone = VALIDATION_MESSAGES.required;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!validateRequired(formData.subject)) {
      newErrors.subject = VALIDATION_MESSAGES.required;
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = VALIDATION_MESSAGES.required;
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form slide-in-left">
              <h2>Send us a Message</h2>
              {submitted && (
                <div className="success-message fade-in">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && <span id="phone-error" className="form-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && <span id="subject-error" className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project..."
                    required
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info slide-in-right">
              <h2>Contact Information</h2>
              
              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>Email</h3>
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>Phone</h3>
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Address</h3>
                <p>{CONTACT_INFO.address}</p>
              </div>

              <div className="info-card">
                <div className="info-icon">🕐</div>
                <h3>Business Hours</h3>
                <p>{CONTACT_INFO.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section-sm">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our services</p>
          </div>
          <div className="faq-grid">
            {[
              {
                q: 'What services do you offer?',
                a: 'We offer web development, UI/UX design, API development, performance optimization, and consulting services.',
              },
              {
                q: 'How long does a project typically take?',
                a: 'Project timelines vary based on scope. We provide detailed estimates during the discovery phase.',
              },
              {
                q: 'Do you offer support after launch?',
                a: 'Yes, we provide comprehensive support and maintenance services for all our projects.',
              },
              {
                q: 'What is your development process?',
                a: 'We follow a proven process: discovery, planning, design, development, testing, and deployment.',
              },
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
