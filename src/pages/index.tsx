import React, { Suspense } from "react";
import Layout from "../components/Layout";
import { CircularProgress } from "@material-ui/core";
const HomePage = React.lazy(() => import("../components/HomePage"));

const Home = () => {
  const isSSR = typeof window === "undefined";
  const styles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <Layout pageTitle="Journey Advisor">
      {!isSSR && (
        <Suspense
          fallback={
            <div style={styles}>
              <CircularProgress size="5rem" />
            </div>
          }
        >
          <HomePage />
        </Suspense>
      )}
    </Layout>
  );
};

export default Home;
