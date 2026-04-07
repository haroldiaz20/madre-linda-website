import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Contact', () => {
  beforeEach(() => {
    jest.useFakeTimers({ legacyFakeTimers: true });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders section shell and info column', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact')).toBeInTheDocument();
    expect(screen.getByTestId('contact-bg-gradient')).toBeInTheDocument();
    expect(screen.getByTestId('contact-container')).toBeInTheDocument();
    expect(screen.getByTestId('contact-column-info')).toBeInTheDocument();
    expect(screen.getByTestId('contact-info-email')).toHaveTextContent(
      'hello@madrelindalabs.com'
    );
  });

  it('renders social links', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-socials')).toBeInTheDocument();
    expect(screen.getByTestId('contact-social-github')).toHaveAttribute(
      'href',
      'https://github.com'
    );
    expect(screen.getByTestId('contact-social-linkedin')).toHaveAttribute(
      'href',
      'https://linkedin.com'
    );
    expect(screen.getByTestId('contact-social-twitter')).toHaveAttribute(
      'href',
      'https://twitter.com'
    );
  });

  it('renders form fields with test ids', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    expect(screen.getByTestId('contact-input-name')).toBeInTheDocument();
    expect(screen.getByTestId('contact-input-email')).toBeInTheDocument();
    expect(screen.getByTestId('contact-input-subject')).toBeInTheDocument();
    expect(screen.getByTestId('contact-input-message')).toBeInTheDocument();
    expect(screen.getByTestId('contact-submit')).toBeInTheDocument();
  });

  it('shows success state after submit and can return to form', async () => {
    render(<Contact />);

    await userEvent.type(screen.getByTestId('contact-input-name'), 'Jane');
    await userEvent.type(
      screen.getByTestId('contact-input-email'),
      'jane@test.com'
    );
    await userEvent.type(screen.getByTestId('contact-input-subject'), 'Hello');
    await userEvent.type(screen.getByTestId('contact-input-message'), 'World');

    await userEvent.click(screen.getByTestId('contact-submit'));
    expect(screen.getByTestId('contact-submit-spinner')).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(1500);
    });

    expect(screen.getByTestId('contact-success')).toBeInTheDocument();
    expect(screen.getByTestId('contact-success-title')).toHaveTextContent(
      'Message Sent!'
    );

    await userEvent.click(screen.getByTestId('contact-success-back'));
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(<Contact />);
    expect(screen.getByTestId('contact-footer')).toBeInTheDocument();
    expect(screen.getByTestId('contact-footer-text')).toHaveTextContent(
      /Madre Linda Labs/
    );
  });
});
