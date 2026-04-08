import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Section = styled.section`
  background: ${theme.colors.bg};
  padding: 2rem 1.5rem 5rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 2rem 2.5rem 6rem;
  }
`;

export const BgGlobeHint = styled.div`
  position: absolute;
  bottom: -80px;
  right: -120px;
  width: 320px;
  height: 320px;
  opacity: 0.2;
  pointer-events: none;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NarrowWrap = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Header = styled.header`
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  font-family: ${theme.font.sans};
  font-size: clamp(1.85rem, 4vw, 2.75rem);
  font-weight: 800;
  color: ${theme.colors.white};
  margin: 0;
  padding-bottom: 0.65rem;
  line-height: 1.15;
  border-bottom: 5px solid ${theme.colors.lime};
  display: inline-block;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const ServiceCard = styled.div`
  text-align: center;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
  min-height: 140px;
  align-items: center;

  svg {
    width: 120px;
    height: 120px;
  }
`;

export const Label = styled.p`
  font-family: ${theme.font.sans};
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.white};
  margin: 0;
  line-height: 1.4;
`;
