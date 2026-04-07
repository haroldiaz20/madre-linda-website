import React, { useState, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async submission
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__bg-gradient" />
      <div className="contact__container">
        <div className="contact__left">
          <span className="contact__label">Get In Touch</span>
          <h2 className="contact__title">
            Let's Build Something
            <span className="contact__title-accent"> Amazing Together</span>
          </h2>
          <p className="contact__description">
            Ready to bring your idea to life? We'd love to hear about your project.
            Send us a message and we'll get back to you within 24 hours.
          </p>

          <div className="contact__info">
            <div className="contact__info-item">
              <div className="contact__info-icon">📧</div>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">hello@madrelindalabs.com</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">📍</div>
              <div>
                <p className="contact__info-label">Location</p>
                <p className="contact__info-value">Remote — Available Worldwide</p>
              </div>
            </div>
            <div className="contact__info-item">
              <div className="contact__info-icon">⏱️</div>
              <div>
                <p className="contact__info-label">Response Time</p>
                <p className="contact__info-value">Within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="contact__social-link"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="contact__social-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="contact__social-link"
              aria-label="Twitter / X"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="contact__right">
          {status === 'sent' ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button
                className="contact__back-btn"
                onClick={() => setStatus(null)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} ref={formRef}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="contact__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <span className="contact__spinner" />
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="contact__footer">
        <p>© {new Date().getFullYear()} Madre Linda Labs. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
