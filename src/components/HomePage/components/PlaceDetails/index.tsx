import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import useStyles from "./styles";
import { Rating } from "@mui/material";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";

interface Props {
  place: any;
}

const PlaceDetails = ({ place }: Props) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        title={place?.name}
        image={
          place?.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award: any) => (
          <Box
            my={1}
            key={award.display_name}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }: { name: any }) => (
          <Chip key={name} size="small" label={name} className={classes.chip}>
            {name}
          </Chip>
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          size="small"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          color="primary"
          size="small"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
