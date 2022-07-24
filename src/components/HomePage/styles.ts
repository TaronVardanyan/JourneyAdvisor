import styled from "styled-components";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const MaterialGrid = styled(Grid)`
  width: 100%;
`;

export default makeStyles(() => ({
  loading: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
