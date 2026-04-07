import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2.5rem;
  transition: background 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease;

  ${(p) =>
    p.$scrolled &&
    css`
      background: rgba(10, 10, 26, 0.95);
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
      padding: 0.85rem 2.5rem;
    `}

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  border-radius: 10px;
  color: #fff;
  font-weight: 800;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
`;

export const Name = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
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
    background: #fff;
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
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: color 0.2s, background 0.2s;
    font-family: inherit;
  }

  li button:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 26, 0.98);
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    transform: translateX(100%);
    transition: transform 0.35s ease;
    pointer-events: none;

    li button {
      font-size: 1.4rem;
      padding: 0.8rem 2rem;
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
  background: linear-gradient(135deg, #7c3aed, #3b82f6) !important;
  color: #fff !important;
  padding: 0.55rem 1.3rem !important;
  border-radius: 50px !important;
  font-weight: 600 !important;
  transition: opacity 0.2s, transform 0.2s !important;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    background: none !important;
  }
`;
