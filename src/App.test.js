import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Madre Linda Labs brand name', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Madre Linda Labs/i);
  expect(brandElements.length).toBeGreaterThan(0);
});

test('renders the hero headline', () => {
  render(<App />);
  expect(screen.getByText(/Building Digital/i)).toBeInTheDocument();
});

test('renders the About Us section', () => {
  render(<App />);
  expect(screen.getByText(/Crafting Software That/i)).toBeInTheDocument();
});

test('renders the Happy Clients section', () => {
  render(<App />);
  expect(screen.getByText(/Trusted by/i)).toBeInTheDocument();
});

test('renders the Contact Us section', () => {
  render(<App />);
  expect(screen.getByText(/Let's Build Something/i)).toBeInTheDocument();
});
