import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders root and brand with test ids', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-brand')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-brand')).toHaveTextContent('Madre Linda Labs');
  });

  it('exposes navigation links and CTA', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar-links')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-link-home')).toHaveTextContent('Inicio');
    expect(screen.getByTestId('navbar-link-about')).toHaveTextContent('Equipo');
    expect(screen.getByTestId('navbar-link-clients')).toHaveTextContent('Servicios');
    expect(screen.getByTestId('navbar-cta-contact')).toHaveTextContent('Contacto');
  });

  it('exposes mobile menu toggle', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar-menu-toggle')).toBeInTheDocument();
  });

  it('invokes scrollIntoView when nav link target exists', async () => {
    document.body.innerHTML = '<div id="equipo"></div>';
    const equipoEl = document.getElementById('equipo');
    render(<Navbar />);

    await userEvent.click(screen.getByTestId('navbar-link-about'));
    expect(equipoEl.scrollIntoView).toHaveBeenCalled();

    document.body.innerHTML = '';
  });
});
