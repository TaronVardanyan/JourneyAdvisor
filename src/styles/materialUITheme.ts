import { createTheme } from "@mui/material/styles";
import { green, indigo } from "@mui/material/colors";

export const materialUiTheme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
