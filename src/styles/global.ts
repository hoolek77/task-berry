import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Asap&display=swap');
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: "Asap", sans-serif;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
