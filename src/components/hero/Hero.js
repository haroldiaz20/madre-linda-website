import React from 'react';
import WireframeGlobe from '../common/WireframeGlobe';
import SectionReveal from '../common/SectionReveal';
import { scrollToSection } from '../../utils/scrollToSection';
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
  return (
    <Section id="hero" data-testid="hero">
      <SectionReveal threshold={0.08}>
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
            Ayudamos a empresas a hacer su software mas seguro y confiable.
            Identificamos problemas y los resolvemos con soluciones a medida.
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
      </SectionReveal>
    </Section>
  );
};

export default Hero;
