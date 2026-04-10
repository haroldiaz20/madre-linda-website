const DEFAULT_NAV_OFFSET = 8;
const DEFAULT_NAV_HEIGHT = 72;

export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const navbar = document.querySelector('[data-testid="navbar"]');
  const navHeight = navbar
    ? Math.ceil(navbar.getBoundingClientRect().height)
    : DEFAULT_NAV_HEIGHT;

  const top =
    section.getBoundingClientRect().top +
    window.scrollY -
    navHeight -
    DEFAULT_NAV_OFFSET;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth',
  });
};
