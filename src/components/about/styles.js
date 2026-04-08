import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Section = styled.section`
  background: ${theme.colors.bg};
  min-height: 100vh;
  padding: 4.25rem 1.5rem 4.25rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 4.6rem 2.5rem 4.8rem;
  }
`;

export const Container = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  font-family: ${theme.font.sans};
  font-size: clamp(2.1rem, 4.6vw, 3.9rem);
  font-weight: 800;
  color: ${theme.colors.white};
  margin: 0;
  padding-bottom: 0.42rem;
  line-height: 1.03;
  border-bottom: 5px solid ${theme.colors.lime};
  display: inline-block;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    white-space: nowrap;
  }
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
  aspect-ratio: 3 / 4;
  max-width: 360px;
  margin: 0 auto 1.2rem;
  overflow: hidden;
  border-radius: 4px;
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
  font-size: clamp(1.15rem, 1.8vw, 1.4rem);
  font-weight: 600;
  color: ${theme.colors.white};
  margin: 0 0 0.3rem;
  letter-spacing: 0.01em;
`;

export const Role = styled.p`
  font-family: ${theme.font.sans};
  font-size: clamp(0.95rem, 1.3vw, 1.1rem);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  line-height: 1.4;
`;
