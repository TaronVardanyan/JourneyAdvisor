import React from "react";
import { LayoutProps } from "./types";
import Helmet from "react-helmet";
import GlobalStyle from "../../styles/global";
import Theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet
        bodyAttributes={{
          class: "body",
        }}
      >
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
