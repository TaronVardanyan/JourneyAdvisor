import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

export default makeStyles(() => ({
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  },
  mapContainer: {
    height: "85vh",
    width: "100%",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
}));

export const LocationIcon = styled(LocationOnOutlinedIcon)`
  svg {
    height: 2.5rem !important;
    fill: white !important;
  }
`;
