import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Section = styled.section`
  background: ${theme.colors.bg};
  min-height: 100vh;
  scroll-margin-top: 82px;
  padding: 4.75rem 1.5rem 5rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 5.25rem 2.5rem 6rem;
  }
`;

export const BgGlobeHint = styled.div`
  position: absolute;
  right: -36px;
  bottom: -28px;
  width: 260px;
  height: 130px;
  opacity: 0.75;
  pointer-events: none;

  @media (max-width: 700px) {
    display: none;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const NarrowWrap = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Header = styled.header`
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const Title = styled.h2`
  font-family: ${theme.font.sans};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  color: ${theme.colors.white};
  margin: 0;
  padding-bottom: 0.5rem;
  line-height: 1;
  border-bottom: 5px solid ${theme.colors.lime};
  display: inline-block;
  width: auto;
  max-width: 100%;
  box-sizing: border-box;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }
`;

export const ServiceCard = styled.div`
  text-align: center;
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  min-height: 220px;
  align-items: center;

  svg {
    width: 220px;
    height: 220px;
  }

  @media (min-width: 768px) {
    min-height: 280px;

    svg {
      width: 280px;
      height: 280px;
    }
  }
`;

export const IconAsset = styled.img`
  width: 220px;
  height: 220px;
  object-fit: contain;
  display: block;

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const Label = styled.p`
  font-family: ${theme.font.sans};
  font-size: clamp(1.15rem, 1.8vw, 1.4rem);
  font-weight: 600;
  color: ${theme.colors.white};
  margin: 0;
  line-height: 1.3;
`;