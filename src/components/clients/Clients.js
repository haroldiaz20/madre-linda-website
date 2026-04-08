import React from 'react';
import {
  Section,
  BgGlobeHint,
  NarrowWrap,
  Header,
  Title,
  Grid,
  ServiceCard,
  IconWrap,
  IconAsset,
  Label,
} from './styles';
import { theme } from '../../styles/theme';

const stroke = theme.colors.lime;

function IconCyber() {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden>
      <circle cx="60" cy="60" r="42" stroke={stroke} strokeWidth="1.1" />
      <circle cx="60" cy="60" r="30" stroke={stroke} strokeWidth="0.95" opacity="0.85" />
      <ellipse cx="60" cy="60" rx="42" ry="19" stroke={stroke} strokeWidth="0.9" opacity="0.65" />
      <ellipse cx="60" cy="60" rx="18" ry="42" stroke={stroke} strokeWidth="0.9" opacity="0.6" />
      <path
        d="M60 18 L60 102 M18 60 L102 60 M32 32 L88 88 M88 32 L32 88"
        stroke={stroke}
        strokeWidth="0.82"
        opacity="0.56"
      />
    </svg>
  );
}

function IconRisk() {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden>
      <path
        d="M18 82 Q59 24 104 82"
        stroke={stroke}
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M20 80 L100 80"
        stroke={stroke}
        strokeWidth="0.95"
        opacity="0.85"
      />
      <path d="M26 74 Q58 38 93 72" stroke={stroke} strokeWidth="0.82" opacity="0.65" />
      <path d="M33 66 Q59 45 86 64" stroke={stroke} strokeWidth="0.78" opacity="0.55" />
      <path d="M42 58 Q60 48 77 57" stroke={stroke} strokeWidth="0.75" opacity="0.5" />
      <path d="M58 28 L58 81 M70 36 L70 81 M46 42 L46 81" stroke={stroke} strokeWidth="0.74" opacity="0.45" />
    </svg>
  );
}

function IconStrategy() {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden>
      <circle cx="60" cy="60" r="42" stroke={stroke} strokeWidth="1.1" />
      <path
        d="M60 22 A38 38 0 0 1 98 60 L60 60 Z"
        stroke={stroke}
        strokeWidth="1.1"
        fill="none"
      />
      <path d="M60 30 A30 30 0 0 1 90 60 L60 60 Z" stroke={stroke} strokeWidth="0.9" opacity="0.8" />
      <path d="M60 38 A22 22 0 0 1 82 60 L60 60 Z" stroke={stroke} strokeWidth="0.82" opacity="0.66" />
      <path d="M60 46 A14 14 0 0 1 74 60 L60 60 Z" stroke={stroke} strokeWidth="0.78" opacity="0.55" />
      <path d="M26 42 Q44 34 60 60 M26 76 Q44 84 60 60" stroke={stroke} strokeWidth="0.72" opacity="0.5" />
    </svg>
  );
}

const SERVICES = [
  {
    id: 'ciberseguridad',
    label: 'Ciberseguridad',
    asset: '/assets/servicios/vector-ciberseguridad.png',
    alt: 'Vector de ciberseguridad',
    Icon: IconCyber,
  },
  { id: 'riesgos', label: 'Mitigar de riesgos', Icon: IconRisk },
  {
    id: 'estrategias',
    label: 'Desarrollo de estrategias TI',
    asset: '/assets/servicios/vector-estrategias.png',
    alt: 'Vector de estrategias TI',
    Icon: IconStrategy,
  },
];

const Clients = () => {
  return (
    <Section id="servicios" data-testid="clients">
      <BgGlobeHint data-testid="clients-bg-glow-left">
        <svg viewBox="0 0 260 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M14 126 C52 66 116 38 246 44" stroke="#ffffff" strokeOpacity="0.44" strokeWidth="1.1" />
          <path d="M42 128 C82 68 138 42 258 52" stroke="#ffffff" strokeOpacity="0.36" strokeWidth="1.1" />
          <path d="M78 130 C116 74 168 49 260 61" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1.05" />
          <path d="M106 130 C141 80 189 58 260 71" stroke="#ffffff" strokeOpacity="0.24" strokeWidth="1.05" />
          <path d="M136 130 C171 87 213 70 260 84" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
        </svg>
      </BgGlobeHint>

      <NarrowWrap data-testid="clients-container">
        <Header data-testid="clients-header">
          <Title data-testid="clients-title">Servicios</Title>
        </Header>

        <Grid data-testid="clients-carousel-shell">
          {SERVICES.map(({ id, label, Icon, asset, alt }) => (
            <ServiceCard key={id} data-testid={`clients-logo-${id}`}>
              <IconWrap>
                {asset ? (
                  <IconAsset
                    src={asset}
                    alt={alt ?? label}
                    loading="lazy"
                    width={128}
                    height={128}
                  />
                ) : (
                  <Icon />
                )}
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
