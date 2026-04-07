import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('renders section structure with test ids', () => {
    render(<About />);
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('about-container')).toBeInTheDocument();
    expect(screen.getByTestId('about-header')).toBeInTheDocument();
    expect(screen.getByTestId('about-label')).toHaveTextContent('Who We Are');
  });

  it('renders title and description', () => {
    render(<About />);
    expect(screen.getByTestId('about-title')).toHaveTextContent(
      /Crafting Software That/
    );
    expect(screen.getByTestId('about-description')).toHaveTextContent(
      /Madre Linda Labs is a boutique/
    );
  });

  it('renders feature grid and six feature cards', () => {
    render(<About />);
    expect(screen.getByTestId('about-feature-grid')).toBeInTheDocument();
    for (let i = 0; i < 6; i++) {
      expect(screen.getByTestId(`about-feature-card-${i}`)).toBeInTheDocument();
    }
  });

  it('includes expected first feature content', () => {
    render(<About />);
    const first = screen.getByTestId('about-feature-card-0');
    expect(first).toHaveTextContent('High-Performance Apps');
  });
});
