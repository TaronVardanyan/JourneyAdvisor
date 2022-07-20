import axios from "axios";
import GoogleMapReact from "google-map-react";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (
  sw: GoogleMapReact.Coords,
  ne: GoogleMapReact.Coords,
) => {
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      "X-RapidAPI-Key": process.env.TRAVEL_ADVISOR_API_KEY as string,
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.get(URL, options);
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};
