import React, { useEffect, useRef } from 'react';
import {
  Section,
  Overlay,
  Particles,
  Particle,
  Content,
  Badge,
  BadgeDot,
  Title,
  TitleGradient,
  Subtitle,
  Actions,
  BtnPrimary,
  BtnSecondary,
  Stats,
  Stat,
  StatValue,
  StatLabel,
  StatDivider,
  ScrollIndicator,
  ScrollMouse,
  ScrollWheel,
  ScrollText,
} from './styles';

const PARTICLE_CONFIGS = [
  { w: 4, h: 4, left: '10%', dur: 18, delay: 0, odd: false },
  { w: 6, h: 6, left: '20%', dur: 22, delay: 2, odd: true },
  { w: 3, h: 3, left: '30%', dur: 15, delay: 1, odd: false },
  { w: 5, h: 5, left: '40%', dur: 20, delay: 3, odd: true },
  { w: 4, h: 4, left: '50%', dur: 17, delay: 0.5, odd: false },
  { w: 6, h: 6, left: '60%', dur: 25, delay: 1.5, odd: true },
  { w: 3, h: 3, left: '70%', dur: 19, delay: 4, odd: false },
  { w: 5, h: 5, left: '80%', dur: 23, delay: 2.5, odd: true },
  { w: 4, h: 4, left: '90%', dur: 16, delay: 0.8, odd: false },
  { w: 6, h: 6, left: '15%', dur: 21, delay: 3.5, odd: true },
  { w: 3, h: 3, left: '25%', dur: 14, delay: 1.2, odd: false },
  { w: 5, h: 5, left: '35%', dur: 24, delay: 2.8, odd: true },
  { w: 4, h: 4, left: '45%', dur: 18, delay: 0.3, odd: false },
  { w: 6, h: 6, left: '55%', dur: 22, delay: 4.5, odd: true },
  { w: 3, h: 3, left: '65%', dur: 20, delay: 1.8, odd: false },
  { w: 5, h: 5, left: '75%', dur: 16, delay: 3.2, odd: true },
  { w: 4, h: 4, left: '85%', dur: 19, delay: 0.6, odd: false },
  { w: 6, h: 6, left: '5%', dur: 26, delay: 2.1, odd: true },
  { w: 3, h: 3, left: '95%', dur: 17, delay: 1.6, odd: false },
  { w: 5, h: 5, left: '48%', dur: 23, delay: 3.8, odd: true },
];

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
        overlayRef.current.style.opacity = String(
          Math.min(0.7 + scrollY * 0.001, 0.95)
        );
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
    <Section id="hero" ref={heroRef} data-testid="hero">
      <Overlay ref={overlayRef} data-testid="hero-overlay" />
      <Particles data-testid="hero-particles">
        {PARTICLE_CONFIGS.map((cfg, i) => (
          <Particle
            key={i}
            data-testid={`hero-particle-${i}`}
            $w={cfg.w}
            $h={cfg.h}
            $left={cfg.left}
            $dur={cfg.dur}
            $delay={cfg.delay}
            $odd={cfg.odd}
          />
        ))}
      </Particles>
      <Content data-testid="hero-content">
        <Badge data-testid="hero-badge">
          <BadgeDot />
          Software Development Agency
        </Badge>
        <Title data-testid="hero-title">
          Building Digital
          <TitleGradient> Experiences</TitleGradient>
          <br />
          That Inspire
        </Title>
        <Subtitle data-testid="hero-subtitle">
          Madre Linda Labs crafts high-performance software solutions that help
          businesses grow, scale, and thrive in the digital world.
        </Subtitle>
        <Actions data-testid="hero-actions">
          <BtnPrimary
            type="button"
            data-testid="hero-cta-contact"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </BtnPrimary>
          <BtnSecondary
            type="button"
            data-testid="hero-cta-about"
            onClick={() => scrollToSection('about')}
          >
            Learn More
          </BtnSecondary>
        </Actions>
        <Stats data-testid="hero-stats">
          <Stat>
            <StatValue>50+</StatValue>
            <StatLabel>Projects Delivered</StatLabel>
          </Stat>
          <StatDivider />
          <Stat>
            <StatValue>30+</StatValue>
            <StatLabel>Happy Clients</StatLabel>
          </Stat>
          <StatDivider />
          <Stat>
            <StatValue>5+</StatValue>
            <StatLabel>Years Experience</StatLabel>
          </Stat>
        </Stats>
      </Content>
      <ScrollIndicator
        type="button"
        data-testid="hero-scroll-indicator"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down"
      >
        <ScrollMouse>
          <ScrollWheel />
        </ScrollMouse>
        <ScrollText>Scroll Down</ScrollText>
      </ScrollIndicator>
    </Section>
  );
};

export default Hero;
