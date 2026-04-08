import React, { useState, useEffect } from 'react';
import { Nav, Brand, Logo, Name, Burger, Links, CtaButton } from './styles';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
        <Logo>GyM</Logo>
        <Name>García y Molina</Name>
      </Brand>

      <Burger
        type="button"
        $open={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
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
            Inicio
          </button>
        </li>
        <li>
          <button
            type="button"
            data-testid="navbar-link-about"
            onClick={() => scrollToSection('equipo')}
          >
            Equipo
          </button>
        </li>
        <li>
          <button
            type="button"
            data-testid="navbar-link-clients"
            onClick={() => scrollToSection('servicios')}
          >
            Servicios
          </button>
        </li>
        <li>
          <CtaButton
            type="button"
            data-testid="navbar-cta-contact"
            onClick={() => scrollToSection('contacto')}
          >
            Contacto
          </CtaButton>
        </li>
      </Links>
    </Nav>
  );
};

export default Navbar;
