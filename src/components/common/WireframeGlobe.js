import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: ${(p) => p.$maxWidth ?? '420px'};
  aspect-ratio: 1;
  margin: 0 auto;
`;

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
`;

const GradientBlob = styled.div`
  position: absolute;
  bottom: 8%;
  right: 8%;
  width: 52%;
  height: 52%;
  border-radius: 50%;
  background: linear-gradient(
    165deg,
    ${theme.colors.cyan} 0%,
    ${theme.colors.lime} 70%
  );
  opacity: 0.88;
  pointer-events: none;
  mix-blend-mode: screen;
  /* subtle stipple */
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0 1px, transparent 2px),
    radial-gradient(circle at 70% 60%, rgba(0, 0, 0, 0.12) 0 1px, transparent 2px),
    linear-gradient(165deg, ${theme.colors.cyan} 0%, ${theme.colors.lime} 70%);
  background-size:
    10px 10px,
    8px 8px,
    100% 100%;
`;

/**
 * Decorative wireframe sphere + gradient accent (Canva-style).
 */
function WireframeGlobe({ className, maxWidth, ...rest }) {
  return (
    <Wrap className={className} $maxWidth={maxWidth} aria-hidden {...rest}>
      <Svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="200"
          cy="200"
          r="175"
          stroke={theme.colors.white}
          strokeWidth="1.25"
          opacity="0.95"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="175"
          ry="60"
          stroke={theme.colors.white}
          strokeWidth="1"
          opacity="0.55"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="60"
          ry="175"
          stroke={theme.colors.white}
          strokeWidth="1"
          opacity="0.55"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="175"
          ry="105"
          stroke={theme.colors.white}
          strokeWidth="0.85"
          opacity="0.4"
          transform="rotate(-28 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="175"
          ry="105"
          stroke={theme.colors.white}
          strokeWidth="0.85"
          opacity="0.4"
          transform="rotate(28 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="105"
          ry="175"
          stroke={theme.colors.white}
          strokeWidth="0.85"
          opacity="0.35"
          transform="rotate(28 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="105"
          ry="175"
          stroke={theme.colors.white}
          strokeWidth="0.85"
          opacity="0.35"
          transform="rotate(-28 200 200)"
        />
      </Svg>
      <GradientBlob />
    </Wrap>
  );
}

export default WireframeGlobe;
