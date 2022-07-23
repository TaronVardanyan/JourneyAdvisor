import React, { useState, useEffect, createRef } from "react";
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails";
import {
  CircularProgress,
  Typography,
  Grid,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";

interface Props {
  places: any;
  childClicked: any;
  isLoading: boolean;
}

const List = ({ places, childClicked, isLoading }: Props) => {
  const [type, setType] = useState("restaurants");
  const [elRefs, setElRefs] = useState([]);
  const [rating, setRating] = useState("0");
  const classes = useStyles();

  useEffect(() => {
    if (places?.length) {
      setElRefs(refs =>
        places.map((_: any, i: number) => refs[i] || createRef()),
      );
    }
  }, [places]);

  const handleChangeRating = (e: React.ChangeEvent<{ value: unknown }>) =>
    setRating(e.target.value as string);
  const handleChangeType = (e: React.ChangeEvent<{ value: unknown }>) =>
    setType(e.target.value as string);

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, Hotels and Attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={handleChangeType}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={handleChangeRating}>
              <MenuItem value="0">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places.map((place: any, i: number) => (
              <Grid item key={i} xs={12} ref={elRefs[i]}>
                <PlaceDetails
                  refProp={elRefs[i]}
                  selected={Number(childClicked) === i}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
