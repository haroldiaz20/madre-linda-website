import React, { useState, useEffect } from 'react';
import { Nav, Brand, Logo, Name, Burger, Links, CtaButton } from './styles';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <Nav $scrolled={scrolled} data-testid="navbar">
      <Brand onClick={() => scrollToSection('hero')} data-testid="navbar-brand">
        <Logo>ML</Logo>
        <Name>Madre Linda Labs</Name>
      </Brand>

      <Burger
        type="button"
        $open={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        data-testid="navbar-menu-toggle"
      >
        <span />
        <span />
        <span />
      </Burger>

      <Links $open={menuOpen} data-testid="navbar-links">
        <li>
          <button
            type="button"
            data-testid="navbar-link-home"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            type="button"
            data-testid="navbar-link-about"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            type="button"
            data-testid="navbar-link-clients"
            onClick={() => scrollToSection('clients')}
          >
            Clients
          </button>
        </li>
        <li>
          <CtaButton
            type="button"
            data-testid="navbar-cta-contact"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </CtaButton>
        </li>
      </Links>
    </Nav>
  );
};

export default Navbar;
