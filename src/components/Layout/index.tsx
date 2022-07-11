import React from "react";
import { LayoutProps } from "./types";
import Helmet from "react-helmet";
import GlobalStyle from "../../styles/global";
import Theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import { materialUiTheme } from "../../styles/materialUITheme";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <MaterialThemeProvider theme={materialUiTheme}>
        <Helmet
          bodyAttributes={{
            class: "body",
          }}
        >
          <meta charSet="utf-8" />
          <title>{pageTitle}</title>
        </Helmet>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </MaterialThemeProvider>
    </ThemeProvider>
  );
};

export default Layout;
