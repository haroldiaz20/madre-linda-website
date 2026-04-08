import { render, screen } from '@testing-library/react';
import Clients from './Clients';

describe('Clients', () => {
  it('renders services section', () => {
    render(<Clients />);
    expect(screen.getByTestId('clients')).toBeInTheDocument();
    expect(screen.getByTestId('clients-bg-glow-left')).toBeInTheDocument();
    expect(screen.getByTestId('clients-container')).toBeInTheDocument();
  });

  it('renders Servicios title', () => {
    render(<Clients />);
    expect(screen.getByTestId('clients-title')).toHaveTextContent('Servicios');
  });

  it('renders three service items', () => {
    render(<Clients />);
    expect(screen.getByTestId('clients-carousel-shell')).toBeInTheDocument();
    expect(screen.getByTestId('clients-logo-ciberseguridad')).toHaveTextContent(
      'Ciberseguridad'
    );
    expect(screen.getByTestId('clients-logo-riesgos')).toHaveTextContent(
      'Mitigar de riesgos'
    );
    expect(screen.getByTestId('clients-logo-estrategias')).toHaveTextContent(
      'Desarrollo de estrategias TI'
    );
  });
});
