import { createGlobalStyle } from 'styled-components';

import { ThemeContentType } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeContentType }>`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.fontPrimary};
  }

  html {
    font-family: "Asap", sans-serif;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.backgroundPrimary};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    transition: background-color 5000s;
    -webkit-text-fill-color: ${({ theme }) => theme.fontPrimary};
  }

`;

export default GlobalStyle;
