import React from "react";

interface Props {
  place: {
    name: string;
  };
}

const PlaceDetails = ({ place }: Props) => {
  return <h1>{place.name}</h1>;
};

export default PlaceDetails;
