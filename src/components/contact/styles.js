import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Section = styled.section`
  background: ${theme.colors.bg};
  min-height: 100vh;
  padding: 4rem 0 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 5rem 0 0;
  }
`;

export const BgGradient = styled.div`
  display: none;
`;

export const Container = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  width: 100%;
  flex: 1;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  padding-bottom: 4rem;
  position: relative;
  z-index: 1;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    padding-bottom: 5rem;
    align-items: flex-end;
    padding-right: 0;
    overflow: visible;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  text-align: left;
  max-width: 100%;

  @media (min-width: 900px) {
    gap: 3rem;
    align-self: center;
  }
`;

export const Title = styled.h2`
  font-family: ${theme.font.sans};
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  font-style: normal;
  font-kerning: none;
  color: ${theme.colors.lime};
  line-height: 1.12;
  margin: 0;
  letter-spacing: -0.02em;
`;

export const TitleWhite = styled.span`
  color: ${theme.colors.white};
`;

export const CtaLine = styled.p`
  font-family: ${theme.font.sans};
  font-size: clamp(1.15rem, 2.5vw, 1.6rem);
  font-weight: 400;
  font-style: normal;
  font-kerning: none;
  color: ${theme.colors.white};
  margin: 0;
  line-height: 1.5;
`;

export const EmailLink = styled.a`
  color: ${theme.colors.lime};
  font-weight: 600;
  font-style: normal;
  font-kerning: none;
  font-size: 1em;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.limeHover};
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes slowSpin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  svg {
    animation: slowSpin 60s linear infinite;
  }

  @media (min-width: 900px) {
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;
    right: -8rem;
    padding-bottom: 1rem;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
  max-width: none;
  margin-left: 0;
  margin-right: 0;
  box-sizing: border-box;
  background: ${theme.colors.blackBar};
  padding: 0.85rem max(2.5rem, env(safe-area-inset-left, 0px)) 0.85rem
    max(2.5rem, env(safe-area-inset-right, 0px));
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-family: ${theme.font.sans};
  font-size: clamp(0.75rem, 1.3vw, 0.85rem);
  color: rgba(255, 255, 255, 0.6);

  @media (min-width: 768px) {
    padding: 0.9rem 2.5rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-weight: 400;

  &:hover {
    color: ${theme.colors.white};
    text-decoration: underline;
  }
`;

export const FooterCredit = styled.span`
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;

  @media (min-width: 900px) {
    margin-left: auto;
  }
`;
