import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { scrollToSection } from '../../utils/scrollToSection';
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
  const [brandScale, setBrandScale] = useState(1.55);
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
      const scale = Math.max(1, 1.55 - y / 220);
      setBrandScale(scale);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (hero) setHeroRef(hero);
  }, [setHeroRef]);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) return undefined;
    const previousOverflow = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = previousOverflow || '';
    return () => {
      document.body.style.overflow = previousOverflow || '';
    };
  }, [menuOpen]);

  const handleScrollToSection = (id) => {
    scrollToSection(id);
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
        <Brand
          $scale={brandScale}
          onClick={() => handleScrollToSection('hero')}
          data-testid="navbar-brand"
        >
          <Logo
            src="/logo.svg"
            alt="Logo de Madre Linda Labs"
            width={32}
            height={32}
            loading="eager"
          />
          <Name>MADRE LINDA LABS</Name>
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
              onClick={() => handleScrollToSection('hero')}
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="navbar-link-about"
              onClick={() => handleScrollToSection('equipo')}
            >
              Equipo
            </button>
          </li>
          <li>
            <button
              type="button"
              data-testid="navbar-link-clients"
              onClick={() => handleScrollToSection('servicios')}
            >
              Servicios
            </button>
          </li>
          <li>
            <CtaButton
              type="button"
              data-testid="navbar-cta-contact"
              onClick={() => handleScrollToSection('contacto')}
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
