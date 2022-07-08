import * as React from "react";
import { Link } from "gatsby";
// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
};
const paragraphStyles = {
    marginBottom: 48,
};
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
};
// markup
const NotFoundPage = () => {
    return (React.createElement("main", { style: pageStyles },
        React.createElement("title", null, "Not found"),
        React.createElement("h1", { style: headingStyles }, "Page not found"),
        React.createElement("p", { style: paragraphStyles },
            "Sorry",
            " ",
            React.createElement("span", { role: "img", "aria-label": "Pensive emoji" }, "\uD83D\uDE14"),
            " ",
            "we couldn\u2019t find what you were looking for.",
            React.createElement("br", null),
            process.env.NODE_ENV === "development" ? (React.createElement(React.Fragment, null,
                React.createElement("br", null),
                "Try creating a page in ",
                React.createElement("code", { style: codeStyles }, "src/pages/"),
                ".",
                React.createElement("br", null))) : null,
            React.createElement("br", null),
            React.createElement(Link, { to: "/" }, "Go home"),
            ".")));
};
export default NotFoundPage;
