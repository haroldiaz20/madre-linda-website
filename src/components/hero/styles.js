import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${theme.colors.bg};
  padding: 6rem 1.5rem 4rem;
  overflow: hidden;
  scroll-snap-align: start;
  scroll-margin-top: clamp(60px, 10vw, 76px);

  @media (min-width: 900px) {
    padding: 5rem 2.5rem 3rem;
  }
`;

export const Inner = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    min-height: calc(100vh - 7rem);
  }
`;

export const VisualCol = styled.div`
  order: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    order: 1;
  }
`;

export const TextCol = styled.div`
  order: 1;
  text-align: left;

  @media (min-width: 900px) {
    order: 2;
    padding-left: 0.5rem;
  }
`;

export const Title = styled.h1`
  font-family: ${theme.font.sans};
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.12;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
`;

export const TitleAccent = styled.span`
  color: ${theme.colors.lime};
`;

export const TitleRest = styled.span`
  color: ${theme.colors.white};
`;

export const Subtitle = styled.p`
  font-family: ${theme.font.sans};
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 500;
  color: ${theme.colors.white};
  margin: 0 0 1.75rem;
  line-height: 1.5;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const BtnPrimary = styled.button`
  font-family: ${theme.font.sans};
  background: ${theme.colors.lime};
  color: ${theme.colors.bg};
  border: none;
  padding: 0.9rem 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: ${theme.colors.limeHover};
    transform: translateY(-1px);
  }
`;

export const BtnSecondary = styled.button`
  font-family: ${theme.font.sans};
  background: transparent;
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.lime}a8;
  padding: 0.85rem 1.45rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${theme.colors.lime};
    color: ${theme.colors.lime};
  }
`;
