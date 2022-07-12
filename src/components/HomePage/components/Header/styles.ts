import { makeStyles } from "@material-ui/core/styles";
import { alpha } from "@mui/material/styles";
import { materialUiTheme } from "../../../../styles/materialUITheme";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

export const Search = styled(SearchIcon)`
  height: 2.5rem !important;
  position: absolute;
  left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 2.5rem !important;
    color: white !important;
  }
`;

export default makeStyles((theme: typeof materialUiTheme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: `${theme.spacing(1, 1, 1, 0)} !important`,
    paddingLeft: `calc(1em + ${theme.spacing(4)}px) !important`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "20ch" },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
