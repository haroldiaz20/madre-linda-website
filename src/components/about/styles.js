import styled from 'styled-components';

export const Section = styled.section`
  background: #0a0a1a;
  padding: 7rem 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -200px;
    left: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(124, 58, 237, 0.08) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.08) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
`;

export const Label = styled.span`
  display: inline-block;
  color: #7c3aed;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1rem;
  position: relative;

  &::before,
  &::after {
    content: '—';
    margin: 0 0.5rem;
    opacity: 0.5;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
`;

export const TitleAccent = styled.span`
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Description = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.75;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.5s ease, opacity 0.5s ease, border-color 0.3s,
    box-shadow 0.3s;
  opacity: 0;
  transform: translateY(30px);
  cursor: default;

  &[data-visible='true'] {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    border-color: rgba(124, 58, 237, 0.3);
    box-shadow: 0 8px 40px rgba(124, 58, 237, 0.12);
    transform: translateY(-4px);
  }

  &[data-visible='true']:hover {
    transform: translateY(-4px);
  }
`;

export const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.65rem;
`;

export const CardText = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
`;
