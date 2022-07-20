import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": process.env.TRAVEL_ADVISOR_API_KEY as string,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    const response = await axios.get(URL, options);
    return response.data.data;
  } catch (err) {
    console.error(err);
  }
};
