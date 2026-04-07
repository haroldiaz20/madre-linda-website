import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';

describe('Hero', () => {
  it('renders section and primary content regions', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('hero-overlay')).toBeInTheDocument();
    expect(screen.getByTestId('hero-particles')).toBeInTheDocument();
    expect(screen.getByTestId('hero-content')).toBeInTheDocument();
    expect(screen.getByTestId('hero-badge')).toHaveTextContent(
      'Software Development Agency'
    );
  });

  it('renders animated particles with indexed test ids', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-particle-0')).toBeInTheDocument();
    expect(screen.getByTestId('hero-particle-19')).toBeInTheDocument();
  });

  it('renders headline, actions, and stats', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-title')).toHaveTextContent(/Building Digital/);
    expect(screen.getByTestId('hero-subtitle')).toBeInTheDocument();
    expect(screen.getByTestId('hero-cta-contact')).toHaveTextContent(
      'Get In Touch'
    );
    expect(screen.getByTestId('hero-cta-about')).toHaveTextContent('Learn More');
    expect(screen.getByTestId('hero-stats')).toHaveTextContent('50+');
  });

  it('scrolls to target section when CTA is clicked', async () => {
    document.body.innerHTML = '<div id="contact"></div>';
    const contactEl = document.getElementById('contact');
    render(<Hero />);

    await userEvent.click(screen.getByTestId('hero-cta-contact'));
    expect(contactEl.scrollIntoView).toHaveBeenCalled();

    document.body.innerHTML = '';
  });

  it('exposes scroll indicator control', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-scroll-indicator')).toBeInTheDocument();
  });
});
