import GoogleMapReact from "google-map-react";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Bounds {
  ne: GoogleMapReact.Coords;
  sw: GoogleMapReact.Coords;
}
