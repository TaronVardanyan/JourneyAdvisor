import React from "react";
import GoogleMapReact from "google-map-react";
// import { useMediaQuery } from "@mui/material";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  // const isMobile = useMediaQuery("(min-width: 600px)");

  const coordinates = { lat: 0, lng: 0 };

  console.log(process.env.MAP_API_KEY, 999);

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP_API_KEY as string }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
