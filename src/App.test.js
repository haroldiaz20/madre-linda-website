import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app shell and each section by test id', () => {
  render(<App />);
  expect(screen.getByTestId('app-root')).toBeInTheDocument();
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
  expect(screen.getByTestId('hero')).toBeInTheDocument();
  expect(screen.getByTestId('about')).toBeInTheDocument();
  expect(screen.getByTestId('clients')).toBeInTheDocument();
  expect(screen.getByTestId('contact')).toBeInTheDocument();
});
