import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

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
  background: transparent;
  transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.3s ease,
    opacity 0.25s ease;
  transform: translateY(${(p) => (p.$visible ? "0" : "-115%")});
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};

  ${(p) =>
    p.$scrolled &&
    css`
      background: ${theme.colors.blackBar};
      box-shadow: 0 2px 18px rgba(0, 0, 0, 0.18);
    `}

  @media (min-width: 769px) {
    padding: 1.1rem 2.5rem;
  }

  @media (max-width: 768px) {
    /* Keep mobile nav stable so fixed menu can cover viewport */
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }
`;

export const NavHotspot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 18px;
  z-index: 1001;
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  transform-origin: left center;
  transform: scale(${(p) => p.$scale || 1});
  transition: transform 0.2s ease-out;
`;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 0;
  display: block;
`;

export const Name = styled.span`
  color: ${theme.colors.white};
  font-family: "Space Grotesk", ${theme.font.sans};
  font-weight: 600;
  font-size: clamp(0.95rem, 1.8vw, 1.03rem);
  letter-spacing: 0.005em;
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
  position: relative;
  z-index: 1003;

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
  gap: 0.35rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.82);
    font-size: 0.84rem;
    font-weight: 500;
    font-family: ${theme.font.sans};
    padding: 0.45rem 0.75rem;
    cursor: pointer;
    border-radius: 4px;
    transition: color 0.2s, background 0.2s;
  }

  li button:hover {
    color: ${theme.colors.white};
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.bgDeep};
    z-index: 1002;
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
  color: #0f2f5f !important;
  padding: 0.45rem 1rem !important;
  border-radius: 6px !important;
  font-weight: 700 !important;
  font-family: ${theme.font.sans} !important;

  &:hover {
    background: ${theme.colors.limeHover} !important;
    color: ${theme.colors.bg} !important;
  }
`;
