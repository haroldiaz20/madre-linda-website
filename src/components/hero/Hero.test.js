import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from './Hero';

describe('Hero', () => {
  it('renders section and primary content', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('hero-content')).toBeInTheDocument();
    expect(screen.getByTestId('hero-visual')).toBeInTheDocument();
    expect(screen.getByTestId('hero-globe-wrap')).toBeInTheDocument();
  });

  it('renders headline, subtitle, and CTAs', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-title')).toHaveTextContent(/Lo hacemos bien por/);
    expect(screen.getByTestId('hero-title')).toHaveTextContent(/TI/);
    expect(screen.getByTestId('hero-subtitle')).toHaveTextContent(/García y Molina/);
    expect(screen.getByTestId('hero-cta-contact')).toHaveTextContent('Reserva una cita');
    expect(screen.getByTestId('hero-cta-about')).toHaveTextContent('Conoce al equipo');
  });

  it('scrolls to contact section when primary CTA is clicked', async () => {
    document.body.innerHTML = '<div id="contacto"></div>';
    const el = document.getElementById('contacto');
    render(<Hero />);

    await userEvent.click(screen.getByTestId('hero-cta-contact'));
    expect(el.scrollIntoView).toHaveBeenCalled();

    document.body.innerHTML = '';
  });

  it('scrolls to team section when secondary CTA is clicked', async () => {
    document.body.innerHTML = '<div id="equipo"></div>';
    const el = document.getElementById('equipo');
    render(<Hero />);

    await userEvent.click(screen.getByTestId('hero-cta-about'));
    expect(el.scrollIntoView).toHaveBeenCalled();

    document.body.innerHTML = '';
  });
});
