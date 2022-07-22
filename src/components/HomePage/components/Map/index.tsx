import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, useMediaQuery, Typography, Rating } from "@mui/material";
import useStyles, { LocationIcon } from "./styles";
import { Coordinates, Bounds } from "../../types";

interface Props {
  setCoordinates: (coordinates: Coordinates) => void;
  setBounds: (bounds: Bounds) => void;
  coordinates: Coordinates;
  places: any;
}

const Map = ({ setCoordinates, setBounds, coordinates, places }: Props) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width: 600px)");

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
      >
        {places?.length &&
          places.map((place: any, i: number) => (
            <div
              key={i}
              className={classes.markerContainer}
              data-lat={Number(place.lat)}
              data-lng={Number(place.lng)}
            >
              {!isDesktop ? (
                <LocationIcon color="primary" />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img
                    src={
                      place?.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                    className={classes.pointer}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Map;
