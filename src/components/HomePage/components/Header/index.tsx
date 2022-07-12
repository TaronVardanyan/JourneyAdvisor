import React from "react";
// import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Typography, Box } from "@mui/material";
import {
  Search as SearchIcon,
  SearchPlaceTitle,
  MUIToolbar,
  InputWrapper,
  MUIInput,
} from "./styles";

const Header = () => {
  return (
    <AppBar position="static">
      <MUIToolbar>
        <Typography variant="h5">Journey Advisor</Typography>
        <Box display="flex">
          <SearchPlaceTitle variant="h6">Explore new places</SearchPlaceTitle>
          {/*<Autocomplete>*/}
          <InputWrapper>
            <SearchIcon />
            <MUIInput placeholder="Search..." />
          </InputWrapper>
          {/*</Autocomplete>*/}
        </Box>
      </MUIToolbar>
    </AppBar>
  );
};

export default Header;
