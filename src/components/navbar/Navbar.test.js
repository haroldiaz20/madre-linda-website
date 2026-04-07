import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders root and brand with test ids', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-brand')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-brand')).toHaveTextContent(
      'Madre Linda Labs'
    );
  });

  it('exposes navigation links and CTA', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar-links')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-link-home')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-link-about')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-link-clients')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-cta-contact')).toBeInTheDocument();
  });

  it('exposes mobile menu toggle', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar-menu-toggle')).toBeInTheDocument();
  });

  it('invokes scrollIntoView when a nav link target exists', async () => {
    document.body.innerHTML = '<div id="about"></div>';
    const aboutEl = document.getElementById('about');
    render(<Navbar />);

    await userEvent.click(screen.getByTestId('navbar-link-about'));
    expect(aboutEl.scrollIntoView).toHaveBeenCalled();

    document.body.innerHTML = '';
  });
});
