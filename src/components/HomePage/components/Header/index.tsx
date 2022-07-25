import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import useStyles, { Search as SearchIcon } from "./styles";
import { Coordinates } from "../../types";

interface Props {
  setCoordinates: (coordinates: Coordinates) => void;
}

const Header = ({ setCoordinates }: Props) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState<any | null>(null);

  const handleOnLoad = (autoC: any) => setAutocomplete(autoC);
  const handleOnPlaceChanged = () => {
    if (autocomplete) {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
      setCoordinates({ lat, lng });
    }
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Journey Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete
            onLoad={handleOnLoad}
            onPlaceChanged={handleOnPlaceChanged}
          >
            <div className={classes.search}>
              <SearchIcon />
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
