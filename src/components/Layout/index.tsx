import React from "react";
import { LayoutProps } from "./types";
import Helmet from "react-helmet";
import { PageWrapper } from "./styles";

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <PageWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Helmet>
      <main>{children}</main>
    </PageWrapper>
  );
};

export default Layout;
