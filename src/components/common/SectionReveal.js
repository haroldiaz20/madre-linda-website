import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const Wrap = styled.div`
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? '0' : '28px')});
  transition:
    opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${(p) => p.$delayMs || 0}ms;

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

/**
 * Fades/slides content in when the section enters the viewport (smooth scroll transitions).
 */
const SectionReveal = ({ children, delayMs = 0, threshold = 0.12, rootMargin = '0px 0px -8% 0px' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  });

  return (
    <Wrap ref={ref} $visible={inView} $delayMs={delayMs} data-testid="section-reveal">
      {children}
    </Wrap>
  );
};

export default SectionReveal;
