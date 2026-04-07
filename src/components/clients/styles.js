import styled from 'styled-components';

export const Section = styled.section`
  background: #060612;
  padding: 7rem 1.5rem;
  position: relative;
  overflow: hidden;
`;

const BgGlow = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  pointer-events: none;
`;

export const BgGlowLeft = styled(BgGlow)`
  top: 0;
  left: -200px;
  background: radial-gradient(
    circle,
    rgba(124, 58, 237, 0.07) 0%,
    transparent 70%
  );
`;

export const BgGlowRight = styled(BgGlow)`
  bottom: 0;
  right: -200px;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.07) 0%,
    transparent 70%
  );
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Header = styled.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto 4rem;
`;

export const Label = styled.span`
  display: inline-block;
  color: #3b82f6;
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
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.7;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.5s ease, opacity 0.5s ease, border-color 0.3s,
    box-shadow 0.3s;
  opacity: 0;
  transform: translateY(30px);

  &[data-visible='true'] {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    border-color: rgba(59, 130, 246, 0.3);
    box-shadow: 0 8px 40px rgba(59, 130, 246, 0.1);
    transform: translateY(-4px);
  }

  &[data-visible='true']:hover {
    transform: translateY(-4px);
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 0.15rem;
`;

export const Star = styled.span`
  color: #f59e0b;
  font-size: 1rem;
`;

export const Quote = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  flex: 1;
  font-style: italic;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: 0.5rem;
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
  letter-spacing: 0.05em;
`;

export const Name = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

export const Role = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
`;

export const Logos = styled.div`
  text-align: center;
`;

export const LogosText = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
`;

export const LogosRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

export const LogoPill = styled.span`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  letter-spacing: 0.03em;
`;
