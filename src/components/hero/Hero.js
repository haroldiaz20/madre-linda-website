import React from 'react';
import WireframeGlobe from '../common/WireframeGlobe';
import {
  Section,
  Inner,
  VisualCol,
  TextCol,
  Title,
  TitleAccent,
  TitleRest,
  Subtitle,
  Actions,
  BtnPrimary,
  BtnSecondary,
} from './styles';

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="hero" data-testid="hero">
      <Inner data-testid="hero-content">
        <VisualCol data-testid="hero-visual">
          <WireframeGlobe maxWidth="440px" data-testid="hero-globe-wrap" />
        </VisualCol>
        <TextCol>
          <Title data-testid="hero-title">
            <TitleAccent>Lo hacemos bien por </TitleAccent>
            <TitleRest>TI.</TitleRest>
          </Title>
          <Subtitle data-testid="hero-subtitle">
            García y Molina, asesores informáticos
          </Subtitle>
          <Actions data-testid="hero-actions">
            <BtnPrimary
              type="button"
              data-testid="hero-cta-contact"
              onClick={() => scrollToSection('contacto')}
            >
              Reserva una cita
            </BtnPrimary>
            <BtnSecondary
              type="button"
              data-testid="hero-cta-about"
              onClick={() => scrollToSection('equipo')}
            >
              Conoce al equipo
            </BtnSecondary>
          </Actions>
        </TextCol>
      </Inner>
    </Section>
  );
};

export default Hero;
