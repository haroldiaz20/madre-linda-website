import { render, screen } from '@testing-library/react';
import Clients from './Clients';

describe('Clients', () => {
  it('renders section and decorative layers', () => {
    render(<Clients />);
    expect(screen.getByTestId('clients')).toBeInTheDocument();
    expect(screen.getByTestId('clients-bg-glow-left')).toBeInTheDocument();
    expect(screen.getByTestId('clients-bg-glow-right')).toBeInTheDocument();
    expect(screen.getByTestId('clients-container')).toBeInTheDocument();
  });

  it('renders header copy', () => {
    render(<Clients />);
    expect(screen.getByTestId('clients-label')).toHaveTextContent('Testimonials');
    expect(screen.getByTestId('clients-title')).toHaveTextContent(/Trusted by/);
    expect(screen.getByTestId('clients-subtitle')).toBeInTheDocument();
  });

  it('renders six testimonial cards with stars and quotes', () => {
    render(<Clients />);
    expect(screen.getByTestId('clients-testimonial-grid')).toBeInTheDocument();
    for (let i = 0; i < 6; i++) {
      expect(
        screen.getByTestId(`clients-testimonial-card-${i}`)
      ).toBeInTheDocument();
      expect(screen.getByTestId(`clients-stars-${i}`)).toBeInTheDocument();
      expect(screen.getByTestId(`clients-stars-${i}-star-0`)).toBeInTheDocument();
      expect(screen.getByTestId(`clients-quote-${i}`)).toBeInTheDocument();
      expect(screen.getByTestId(`clients-name-${i}`)).toBeInTheDocument();
    }
  });

  it('renders client logos row', () => {
    render(<Clients />);
    expect(screen.getByTestId('clients-logos')).toBeInTheDocument();
    expect(screen.getByTestId('clients-logos-heading')).toBeInTheDocument();
    expect(screen.getByTestId('clients-logos-row')).toBeInTheDocument();
    expect(screen.getByTestId('clients-logo-pill-novatech')).toHaveTextContent(
      'NovaTech'
    );
    expect(
      screen.getByTestId('clients-logo-pill-databridge-ai')
    ).toHaveTextContent('DataBridge AI');
  });
});
