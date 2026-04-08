import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders section structure with test ids', () => {
    render(<About />);
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('about-container')).toBeInTheDocument();
    expect(screen.getByTestId('about-header')).toBeInTheDocument();
  });

  it('renders team heading', () => {
    render(<About />);
    expect(screen.getByTestId('about-title')).toHaveTextContent('Conoce al equipo');
  });

  it('renders three team cards', () => {
    render(<About />);
    expect(screen.getByTestId('about-feature-grid')).toBeInTheDocument();
    expect(screen.getByTestId('about-feature-card-0')).toHaveTextContent('Eduardo Andrade');
    expect(screen.getByTestId('about-feature-card-1')).toHaveTextContent('Isabel Parra');
    expect(screen.getByTestId('about-feature-card-2')).toHaveTextContent('Claudio Alvarado');
  });
});
