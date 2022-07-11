import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  #___gatsby {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  #gatsby-focus-wrapper {
    width: 100%;
  }
`;

export default GlobalStyle;
