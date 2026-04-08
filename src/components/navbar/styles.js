import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  transition: background 0.35s ease, box-shadow 0.35s ease;

  ${(p) =>
    p.$scrolled &&
    css`
      background: rgba(13, 27, 42, 0.92);
      backdrop-filter: blur(12px);
      box-shadow: 0 2px 24px rgba(0, 0, 0, 0.25);
    `}

  @media (min-width: 769px) {
    padding: 1.1rem 2.5rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  cursor: pointer;
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 42px;
  padding: 0 0.35rem;
  background: ${theme.colors.lime};
  color: ${theme.colors.bg};
  border-radius: 4px;
  font-weight: 800;
  font-size: 0.7rem;
  line-height: 1.1;
  text-align: center;
  letter-spacing: 0.02em;
`;

export const Name = styled.span`
  color: ${theme.colors.white};
  font-family: ${theme.font.sans};
  font-weight: 700;
  font-size: clamp(0.85rem, 2vw, 1rem);
  letter-spacing: 0.01em;
  max-width: 200px;

  @media (min-width: 400px) {
    max-width: none;
  }
`;

export const Burger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${theme.colors.white};
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;
  }

  ${(p) =>
    p.$open &&
    css`
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
    font-weight: 500;
    font-family: ${theme.font.sans};
    padding: 0.45rem 0.75rem;
    cursor: pointer;
    border-radius: 4px;
    transition: color 0.2s, background 0.2s;
  }

  li button:hover {
    color: ${theme.colors.lime};
    background: rgba(200, 240, 74, 0.08);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.bgDeep};
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
    transform: translateX(100%);
    transition: transform 0.35s ease;
    pointer-events: none;

    li button {
      font-size: 1.25rem;
      padding: 0.65rem 1.5rem;
    }

    ${(p) =>
      p.$open &&
      css`
        transform: translateX(0);
        pointer-events: all;
      `}
  }
`;

export const CtaButton = styled.button`
  background: ${theme.colors.lime} !important;
  color: ${theme.colors.bg} !important;
  padding: 0.5rem 1.1rem !important;
  border-radius: 4px !important;
  font-weight: 700 !important;
  font-family: ${theme.font.sans} !important;

  &:hover {
    background: ${theme.colors.limeHover} !important;
    color: ${theme.colors.bg} !important;
  }
`;
