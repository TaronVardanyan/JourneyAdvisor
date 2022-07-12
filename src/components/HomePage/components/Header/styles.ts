import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Toolbar, InputBase, Typography } from "@mui/material";

export const Search = styled(SearchIcon)`
  height: 2.5rem !important;
  position: absolute;
  left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: white;
`;

export const MUIToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  margin-left: 1rem;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
`;

export const MUIInput = styled(InputBase)`
  width: 100%;
  padding: 8px 8px 8px 0 !important;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-left: calc(1em + 32px) !important;
`;

export const SearchPlaceTitle = styled(Typography)`
  line-height: 2.75rem !important;
`;
