import styled, { keyframes } from 'styled-components';

const floatParticle = keyframes`
  0% {
    transform: translateY(110vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) scale(1.2);
    opacity: 0;
  }
`;

const heroFadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(0.8);
  }
`;

const scrollWheel = keyframes`
  0%,
  100% {
    top: 6px;
    opacity: 1;
  }
  60% {
    top: 18px;
    opacity: 0;
  }
`;

const bounceIndicator = keyframes`
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(6px);
  }
`;

const HERO_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23050816'/%3E%3Cstop offset='50%25' stop-color='%230d0b30'/%3E%3Cstop offset='100%25' stop-color='%230a0a1a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E")`;

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${HERO_BG};
  background-size: cover;
  background-position: center top;
  background-color: #050816;
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(124, 58, 237, 0.15) 0%,
    rgba(59, 130, 246, 0.08) 50%,
    rgba(5, 8, 22, 0.4) 100%
  );
  pointer-events: none;
  transition: opacity 0.1s linear;
`;

export const Particles = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

export const Particle = styled.span`
  position: absolute;
  border-radius: 50%;
  animation: ${floatParticle} linear infinite;
  width: ${(p) => p.$w}px;
  height: ${(p) => p.$h}px;
  left: ${(p) => p.$left};
  animation-duration: ${(p) => p.$dur}s;
  animation-delay: ${(p) => p.$delay}s;
  background: ${(p) =>
    p.$odd ? 'rgba(59, 130, 246, 0.4)' : 'rgba(124, 58, 237, 0.5)'};
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 900px;
  animation: ${heroFadeUp} 1s ease forwards;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(124, 58, 237, 0.4);
  color: #a78bfa;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  margin-bottom: 1.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const BadgeDot = styled.span`
  width: 8px;
  height: 8px;
  background: #a78bfa;
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

export const TitleGradient = styled.span`
  background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 2.5rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
`;

const Btn = styled.button`
  padding: 0.85rem 2.2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  font-family: inherit;
`;

export const BtnPrimary = styled(Btn)`
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  color: #fff;
  box-shadow: 0 8px 30px rgba(124, 58, 237, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 40px rgba(124, 58, 237, 0.55);
  }
`;

export const BtnSecondary = styled(Btn)`
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    transform: translateY(-3px);
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 1.25rem;
  }
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatValue = styled.span`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const StatLabel = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.2rem;
`;

export const StatDivider = styled.div`
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.15);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ScrollIndicator = styled.button`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  font-family: inherit;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color 0.2s;
  animation: ${bounceIndicator} 2.5s ease-in-out infinite;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const ScrollMouse = styled.span`
  display: block;
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 14px;
  position: relative;
`;

export const ScrollWheel = styled.span`
  display: block;
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${scrollWheel} 2s ease-in-out infinite;
`;

export const ScrollText = styled.span``;
