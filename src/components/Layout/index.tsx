import React from "react";
import { LayoutProps } from "./types";
import Helmet from "react-helmet";
import GlobalStyle from "../../styles/global";
import Theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@material-ui/core";

const materialDarkTheme = createTheme();

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <MaterialThemeProvider theme={materialDarkTheme}>
      <ThemeProvider theme={Theme}>
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
      </ThemeProvider>
    </MaterialThemeProvider>
  );
};

export default Layout;
