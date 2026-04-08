import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
  it('renders section, CTA copy, and mailto', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    expect(screen.getByTestId('contact-bg-gradient')).toBeInTheDocument();
    expect(screen.getByTestId('contact-container')).toBeInTheDocument();
    expect(screen.getByTestId('contact-column-info')).toBeInTheDocument();
    expect(screen.getByTestId('contact-title')).toHaveTextContent(/resolverlo para TI/);
    expect(screen.getByTestId('contact-description')).toHaveTextContent(/Reserva una consulta/);
    expect(screen.getByTestId('contact-info-email')).toHaveAttribute(
      'href',
      'mailto:contacto@madrelindalabs.com'
    );
  });

  it('renders globe column', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-column-form')).toBeInTheDocument();
  });

  it('renders footer links and credit', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-footer')).toBeInTheDocument();
    expect(screen.getByTestId('contact-footer-terms')).toHaveTextContent(/Términos/);
    expect(screen.getByTestId('contact-footer-privacy')).toHaveTextContent(/Política/);
    expect(screen.getByTestId('contact-footer-text')).toHaveTextContent(
      /Madre Linda Labs E\.I\.R\.L/
    );
    expect(screen.getByTestId('contact-footer-text')).toHaveTextContent(/Lima/);
  });
});
