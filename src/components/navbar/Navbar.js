import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Nav,
  NavHotspot,
  Brand,
  Logo,
  Name,
  Burger,
  Links,
  CtaButton,
} from './styles';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [peekNav, setPeekNav] = useState(false);
  const { ref: setHeroRef, inView: inFirstSection } = useInView({
    threshold: 0.01,
    rootMargin: '0px 0px -120px 0px',
    initialInView: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) setHeroRef(hero);
  }, [setHeroRef]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {!inFirstSection && !menuOpen && (
        <NavHotspot
          data-testid="navbar-hotspot"
          onMouseEnter={() => setPeekNav(true)}
          onMouseLeave={() => setPeekNav(false)}
        />
      )}

      <Nav
        $scrolled={scrolled}
        $visible={inFirstSection || peekNav || menuOpen}
        data-testid="navbar"
        onMouseEnter={() => setPeekNav(true)}
        onMouseLeave={() => {
          if (!inFirstSection && !menuOpen) setPeekNav(false);
        }}
      >
        <Brand onClick={() => scrollToSection('hero')} data-testid="navbar-brand">
          <Logo>ML</Logo>
          <Name>Madre Linda Labs</Name>
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
    </>
  );
};

export default Navbar;
