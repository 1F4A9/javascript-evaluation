import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg-primary: #292c33;
    --color-bg-secondary: #303845;
    --color-bg-tertiary: #0d1117;
    --color-text-primary: #fff;
    --color-scale-blue-1: #51a6ff;
    --color-scale-blue-2: #64d3f1;
    --color-scale-green-1: #08d2ad;
  }

  body {
    background-color: var(--color-bg-primary);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 16px;
    color: var(--color-text-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h3 {
    font-weight: 400;
    margin-top: 0;
  }
`;

export default GlobalStyle;