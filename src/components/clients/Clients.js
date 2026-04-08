import React from 'react';
import WireframeGlobe from '../common/WireframeGlobe';
import {
  Section,
  BgGlobeHint,
  NarrowWrap,
  Header,
  Title,
  Grid,
  ServiceCard,
  IconWrap,
  Label,
} from './styles';
import { theme } from '../../styles/theme';

const stroke = theme.colors.lime;

function IconCyber() {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden>
      <circle cx="60" cy="60" r="38" stroke={stroke} strokeWidth="1.2" />
      <circle cx="60" cy="60" r="22" stroke={stroke} strokeWidth="1" opacity="0.8" />
      <path
        d="M60 22 L60 98 M22 60 L98 60 M34 34 L86 86 M86 34 L34 86"
        stroke={stroke}
        strokeWidth="0.9"
        opacity="0.7"
      />
    </svg>
  );
}

function IconRisk() {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden>
      <path
        d="M30 85 Q60 25 90 85"
        stroke={stroke}
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M28 82 L92 82"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.8"
      />
      <ellipse cx="60" cy="55" rx="42" ry="18" stroke={stroke} strokeWidth="0.9" opacity="0.5" />
    </svg>
  );
}

function IconStrategy() {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden>
      <path
        d="M60 28 L88 58 L60 92 L32 58 Z"
        stroke={stroke}
        strokeWidth="1.2"
        fill="none"
      />
      <path d="M60 40 L60 80 M45 52 L75 68 M75 52 L45 68" stroke={stroke} strokeWidth="0.85" opacity="0.7" />
    </svg>
  );
}

const SERVICES = [
  { id: 'ciberseguridad', label: 'Ciberseguridad', Icon: IconCyber },
  { id: 'riesgos', label: 'Mitigar de riesgos', Icon: IconRisk },
  { id: 'estrategias', label: 'Desarrollo de estrategias TI', Icon: IconStrategy },
];

const Clients = () => {
  return (
    <Section id="servicios" data-testid="clients">
      <BgGlobeHint data-testid="clients-bg-glow-left">
        <WireframeGlobe maxWidth="320px" />
      </BgGlobeHint>

      <NarrowWrap data-testid="clients-container">
        <Header data-testid="clients-header">
          <Title data-testid="clients-title">Servicios</Title>
        </Header>

        <Grid data-testid="clients-carousel-shell">
          {SERVICES.map(({ id, label, Icon }) => (
            <ServiceCard key={id} data-testid={`clients-logo-${id}`}>
              <IconWrap>
                <Icon />
              </IconWrap>
              <Label>{label}</Label>
            </ServiceCard>
          ))}
        </Grid>
      </NarrowWrap>
    </Section>
  );
};

export default Clients;
