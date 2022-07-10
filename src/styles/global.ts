import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body, html, #___gatsby, #gatsby-focus-wrapper {
    min-height: 100vh;
    height: auto;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
