import React from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./styles";
const Layout = ({ pageTitle, children }) => {
    return (React.createElement(PageWrapper, null,
        React.createElement(Helmet, null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("title", null, pageTitle)),
        React.createElement("main", null, children)));
};
export default Layout;
