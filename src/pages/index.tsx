import React, { Suspense } from "react";
import Layout from "../components/Layout";
import { Box, CircularProgress } from "@material-ui/core";

const HomePage = React.lazy(() => import("../components/HomePage"));

const Home = () => {
  const isSSR = typeof window === "undefined";
  return (
    <Layout pageTitle="Journey Advisor">
      {!isSSR && (
        <Suspense
          fallback={
            <Box display="flex" justifyContent="space-between">
              <CircularProgress size="5rem" />
            </Box>
          }
        >
          <HomePage />
        </Suspense>
      )}
    </Layout>
  );
};

export default Home;
