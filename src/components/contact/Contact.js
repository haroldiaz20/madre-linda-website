import React, { useState } from 'react';
import {
  Section,
  BgGradient,
  Container,
  Left,
  Label,
  Title,
  TitleAccent,
  Description,
  Info,
  InfoItem,
  InfoIcon,
  InfoLabel,
  InfoValue,
  Socials,
  SocialLink,
  Right,
  Form,
  FormRow,
  Field,
  SubmitBtn,
  Spinner,
  Success,
  SuccessIcon,
  SuccessTitle,
  SuccessText,
  BackBtn,
  Footer,
} from './styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <Section id="contact" data-testid="contact">
      <BgGradient data-testid="contact-bg-gradient" />
      <Container data-testid="contact-container">
        <Left data-testid="contact-column-info">
          <Label data-testid="contact-label">Get In Touch</Label>
          <Title data-testid="contact-title">
            Let&apos;s Build Something
            <TitleAccent> Amazing Together</TitleAccent>
          </Title>
          <Description data-testid="contact-description">
            Ready to bring your idea to life? We&apos;d love to hear about your project.
            Send us a message and we&apos;ll get back to you within 24 hours.
          </Description>

          <Info data-testid="contact-info">
            <InfoItem data-testid="contact-info-email">
              <InfoIcon>📧</InfoIcon>
              <div>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>hello@madrelindalabs.com</InfoValue>
              </div>
            </InfoItem>
            <InfoItem data-testid="contact-info-location">
              <InfoIcon>📍</InfoIcon>
              <div>
                <InfoLabel>Location</InfoLabel>
                <InfoValue>Remote — Available Worldwide</InfoValue>
              </div>
            </InfoItem>
            <InfoItem data-testid="contact-info-response">
              <InfoIcon>⏱️</InfoIcon>
              <div>
                <InfoLabel>Response Time</InfoLabel>
                <InfoValue>Within 24 hours</InfoValue>
              </div>
            </InfoItem>
          </Info>

          <Socials data-testid="contact-socials">
            <SocialLink
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-testid="contact-social-github"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </SocialLink>
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-testid="contact-social-linkedin"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              data-testid="contact-social-twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialLink>
          </Socials>
        </Left>

        <Right data-testid="contact-column-form">
          {status === 'sent' ? (
            <Success data-testid="contact-success">
              <SuccessIcon data-testid="contact-success-icon">✓</SuccessIcon>
              <SuccessTitle data-testid="contact-success-title">
                Message Sent!
              </SuccessTitle>
              <SuccessText data-testid="contact-success-message">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </SuccessText>
              <BackBtn
                type="button"
                data-testid="contact-success-back"
                onClick={() => setStatus(null)}
              >
                Send Another Message
              </BackBtn>
            </Success>
          ) : (
            <Form data-testid="contact-form" onSubmit={handleSubmit}>
              <FormRow data-testid="contact-form-row-name-email">
                <Field data-testid="contact-field-name">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    data-testid="contact-input-name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Field>
                <Field data-testid="contact-field-email">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    data-testid="contact-input-email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Field>
              </FormRow>
              <Field data-testid="contact-field-subject">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  data-testid="contact-input-subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Field>
              <Field data-testid="contact-field-message">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  data-testid="contact-input-message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Field>
              <SubmitBtn
                type="submit"
                data-testid="contact-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <Spinner data-testid="contact-submit-spinner" />
                ) : (
                  'Send Message →'
                )}
              </SubmitBtn>
            </Form>
          )}
        </Right>
      </Container>

      <Footer data-testid="contact-footer">
        <p data-testid="contact-footer-text">
          © {new Date().getFullYear()} Madre Linda Labs. All rights reserved.
        </p>
      </Footer>
    </Section>
  );
};

export default Contact;
