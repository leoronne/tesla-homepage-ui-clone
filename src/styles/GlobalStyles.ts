import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-primary: #ea3d3d;
  --color-primary-lighter: #dd5252;
  --font-family: 'DM Sans', 'Josefin Sans', 'Comfortaa', 'Roboto', sans-serif;
  --transition: 0.6s ease-in-out !important;
  --body-background: var(--color-primary);
  --body-background-secondary: #35373a;

  --button-primary: #1a1720;

  --title-color: #393c41;
  --subtitle-color: #5c5e62;
  --text-color: #ffe5e5;

  --scrol-thumb: #333;
  --scrol-bg: #89777a;

  --placeholder-color: #a7a8a9;

  --disabled: #9e9e9e;

  --menu-hover: #787777;
  --menu-background: #35373a;
  --box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: none !important;
    /* transition: all 0.3s ease-in-out; */
  }

  html, body, #root {
    scroll-behavior: smooth;
    font-family: var(--font-family);
  }

   ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--text-color);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrol-bg);
    border-radius: 4px;
    transition: var(--transition);
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrol-thumb);
    transition: var(--transition);
  }

  a {
    transition: filter var(--transition);
    outline: none;
  }

  a:hover{
    transition: filter var(--transition);
    filter: brightness(1.2);
    outline: none;
  }
`;

export default GlobalStyles;
