import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Section = styled.section`
  background: ${theme.colors.bg};
  padding: 4rem 1.5rem 0;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 5rem 2.5rem 0;
  }
`;

export const BgGradient = styled.div`
  display: none;
`;

export const Container = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
  padding-bottom: 4rem;
  position: relative;
  z-index: 1;

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 3rem;
    padding-bottom: 5rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  text-align: left;
`;

export const Title = styled.h2`
  font-family: ${theme.font.sans};
  font-size: clamp(1.5rem, 3.5vw, 2.35rem);
  font-weight: 800;
  color: ${theme.colors.lime};
  line-height: 1.2;
  margin: 0;
  letter-spacing: -0.02em;
`;

export const CtaLine = styled.p`
  font-family: ${theme.font.sans};
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: ${theme.colors.white};
  margin: 0;
  line-height: 1.6;
`;

export const EmailLink = styled.a`
  color: ${theme.colors.lime};
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    color: ${theme.colors.limeHover};
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  background: ${theme.colors.blackBar};
  padding: 1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-family: ${theme.font.sans};
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.75);
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
`;

export const FooterLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;

  &:hover {
    color: ${theme.colors.white};
    text-decoration: underline;
  }
`;

export const FooterCredit = styled.span`
  color: rgba(255, 255, 255, 0.45);
  margin-left: auto;
`;
