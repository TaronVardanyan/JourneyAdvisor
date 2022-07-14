import React from "react";
import { HomePageWrapper, MaterialGrid } from "./styles";
import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header />
      <MaterialGrid container>
        <MaterialGrid item xs={12} md={4}>
          <List />
        </MaterialGrid>
        <MaterialGrid item xs={12} md={8}>
          <Map />
        </MaterialGrid>
      </MaterialGrid>
    </HomePageWrapper>
  );
};

export default HomePage;
