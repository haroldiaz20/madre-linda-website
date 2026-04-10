import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: clamp(60px, 10vw, 76px);
    scroll-snap-type: y proximity;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
      scroll-snap-type: none;
    }
  }

  body {
    margin: 0;
    font-family: ${theme.font.sans};
    background: ${theme.colors.bg};
    color: ${theme.colors.white};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyle;
