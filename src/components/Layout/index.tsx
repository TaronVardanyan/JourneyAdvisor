import React from "react";
import { LayoutProps } from "./types";
import Helmet from "react-helmet";
import GlobalStyle from "../../styles/global";
import Theme from "../../styles/theme";
import { makeMuiCache } from "../../styles/cache";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import { materialUiTheme } from "../../styles/materialUITheme";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";

const muiCache = makeMuiCache();

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <CacheProvider
      value={muiCache} // <-- use the new cache here
    >
      <MaterialThemeProvider theme={materialUiTheme}>
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
          <CssBaseline />
          {children}
        </ThemeProvider>
      </MaterialThemeProvider>
    </CacheProvider>
  );
};

export default Layout;
