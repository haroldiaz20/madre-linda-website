import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const rate = scrollY * 0.45;
      heroRef.current.style.backgroundPositionY = `-${rate}px`;
      if (overlayRef.current) {
        overlayRef.current.style.opacity = Math.min(0.7 + scrollY * 0.001, 0.95);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__overlay" ref={overlayRef} />
      <div className="hero__particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="hero__particle" />
        ))}
      </div>
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Software Development Agency
        </div>
        <h1 className="hero__title">
          Building Digital
          <span className="hero__title-gradient"> Experiences</span>
          <br />
          That Inspire
        </h1>
        <p className="hero__subtitle">
          Madre Linda Labs crafts high-performance software solutions that help
          businesses grow, scale, and thrive in the digital world.
        </p>
        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
          <button
            className="hero__btn hero__btn--secondary"
            onClick={() => scrollToSection('about')}
          >
            Learn More
          </button>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">50+</span>
            <span className="hero__stat-label">Projects Delivered</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">30+</span>
            <span className="hero__stat-label">Happy Clients</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">5+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
        </div>
      </div>
      <button
        className="hero__scroll-indicator"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down"
      >
        <span className="hero__scroll-mouse">
          <span className="hero__scroll-wheel" />
        </span>
        <span className="hero__scroll-text">Scroll Down</span>
      </button>
    </section>
  );
};

export default Hero;
