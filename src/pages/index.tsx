import React, { Suspense } from "react";
import Layout from "../components/Layout";
import { CircularProgress } from "@material-ui/core";

const HomePage = React.lazy(() => import("../components/HomePage"));

const Home = () => {
  const isSSR = window === undefined;
  return (
    <Layout pageTitle="Journey Advisor">
      {!isSSR && (
        <Suspense fallback={<CircularProgress size="5rem" />}>
          <HomePage />
        </Suspense>
      )}
    </Layout>
  );
};

export default Home;
