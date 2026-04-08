import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Section = styled.section`
  background: ${theme.colors.bg};
  padding: 4rem 1.5rem 5rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 5rem 2.5rem 6rem;
  }
`;

export const Container = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: 2.75rem;
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

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const Card = styled.article`
  text-align: center;
`;

export const PhotoWrap = styled.div`
  width: 100%;
  aspect-ratio: 1;
  max-width: 280px;
  margin: 0 auto 1.25rem;
  overflow: hidden;
  border: 2px solid rgba(200, 240, 74, 0.35);
  background: ${theme.colors.bgDeep};
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Name = styled.h3`
  font-family: ${theme.font.sans};
  font-size: 1.05rem;
  font-weight: 700;
  color: ${theme.colors.white};
  margin: 0 0 0.35rem;
`;

export const Role = styled.p`
  font-family: ${theme.font.sans};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${theme.colors.muted};
  margin: 0;
  line-height: 1.45;
`;
