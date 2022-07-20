import React from "react";
import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@mui/material";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import useStyles from "./styles";
import { Coordinates, Bounds } from "../../types";

interface Props {
  setCoordinates: (coordinates: Coordinates) => void;
  setBounds: (bounds: Bounds) => void;
  coordinates: Coordinates;
}

const Map = ({ setCoordinates, setBounds, coordinates }: Props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  const handleChange = (e: GoogleMapReact.ChangeEventValue) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  };

  return process.env.MAP_API_KEY ? (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP_API_KEY as string }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={handleChange}
      ></GoogleMapReact>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Map;
