import React, { useEffect, useState } from "react";
import { HomePageWrapper, MaterialGrid } from "./styles";
import { getPlacesData } from "../../api";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
import { Bounds, Coordinates } from "./types";

const HomePage = () => {
  const [childClicked, setChildClicked] = useState(null);
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState<Coordinates>();
  const [bounds, setBounds] = useState<Bounds | null>(null);
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    if (bounds?.ne && bounds?.sw) {
      setLoadingState(true);
      getPlacesData(bounds.sw, bounds.ne).then(data => {
        setPlaces(data);
        setLoadingState(false);
      });
    }
  }, [bounds]);

  useEffect(() => {
    if (!coordinates) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoordinates({ lat: latitude, lng: longitude });
        },
      );
    }
  }, [coordinates]);

  return (
    <HomePageWrapper>
      <Header />
      <MaterialGrid container>
        <MaterialGrid item xs={12} md={4}>
          {!!places.length && (
            <List
              isLoading={isLoading}
              places={places as any}
              childClicked={childClicked}
            />
          )}
        </MaterialGrid>
        <MaterialGrid item xs={12} md={8}>
          {coordinates && (
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places as any}
              setChildClicked={setChildClicked}
            />
          )}
        </MaterialGrid>
      </MaterialGrid>
    </HomePageWrapper>
  );
};

export default HomePage;
