import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Section = styled.section`
  background: #0a0a1a;
  padding: 7rem 1.5rem 0;
  position: relative;
  overflow: hidden;
`;

export const BgGradient = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
      ellipse 60% 40% at 20% 50%,
      rgba(124, 58, 237, 0.06) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 60% 40% at 80% 50%,
      rgba(59, 130, 246, 0.06) 0%,
      transparent 70%
    );
  pointer-events: none;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  position: relative;
  z-index: 1;
  padding-bottom: 6rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.span`
  display: inline-block;
  color: #7c3aed;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  position: relative;

  &::before,
  &::after {
    content: '—';
    margin: 0 0.5rem;
    opacity: 0.5;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0;
`;

export const TitleAccent = styled.span`
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.75;
  margin: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 0.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const InfoIcon = styled.div`
  width: 44px;
  height: 44px;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

export const InfoLabel = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.2rem;
`;

export const InfoValue = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 500;
  margin: 0;
`;

export const Socials = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;
  text-decoration: none;

  &:hover {
    background: rgba(124, 58, 237, 0.15);
    border-color: rgba(124, 58, 237, 0.4);
    color: #a78bfa;
    transform: translateY(-2px);
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.03em;
  }

  input,
  textarea {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: #fff;
    font-size: 0.95rem;
    font-family: inherit;
    padding: 0.85rem 1.1rem;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    outline: none;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  input:focus,
  textarea:focus {
    border-color: rgba(124, 58, 237, 0.5);
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
    background: rgba(255, 255, 255, 0.06);
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 8px 30px rgba(124, 58, 237, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 14px 40px rgba(124, 58, 237, 0.5);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const Spinner = styled.span`
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.7s linear infinite;
`;

export const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  width: 100%;
  padding: 3rem 1rem;
`;

export const SuccessIcon = styled.div`
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #7c3aed, #3b82f6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #fff;
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
`;

export const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
`;

export const SuccessText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
`;

export const BackBtn = styled.button`
  margin-top: 0.5rem;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.6);
  padding: 0.65rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: rgba(124, 58, 237, 0.5);
    color: #a78bfa;
  }
`;

export const Footer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 1.75rem 0;
  text-align: center;
  position: relative;
  z-index: 1;

  p {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.25);
    margin: 0;
  }
`;
