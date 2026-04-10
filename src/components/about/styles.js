import styled, { css, keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const avatarBounceIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(26px) scale(0.92);
  }
  55% {
    opacity: 1;
    transform: translateY(-8px) scale(1.03);
  }
  75% {
    transform: translateY(4px) scale(0.99);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const Section = styled.section`
  background: ${theme.colors.bg};
  min-height: 100vh;
  padding: 2.2rem 1.5rem 4.25rem;
  position: relative;
  scroll-snap-align: start;
  scroll-margin-top: clamp(60px, 10vw, 76px);

  @media (min-width: 768px) {
    padding: 2.5rem 2.5rem 4.8rem;
  }
`;

export const Container = styled.div`
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
  opacity: 0;
  transform: translateY(20px) scale(0.94);
  ${(p) =>
    p.$animate &&
    css`
      animation: ${avatarBounceIn} 860ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      animation-delay: ${p.$delay || 0}ms;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: none;
  }
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
