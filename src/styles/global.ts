import { createGlobalStyle } from 'styled-components';

import { ThemeTypeDark, ThemeTypeLight } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeTypeLight | ThemeTypeDark }>`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${(props) => props.theme.customBlack};
  }

  html {
    font-family: "Asap", sans-serif;
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.customWhite};
  }
`;

export default GlobalStyle;
