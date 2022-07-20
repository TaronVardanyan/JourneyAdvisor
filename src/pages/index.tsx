import React, { Suspense } from "react";
import Layout from "../components/Layout";

const HomePage = React.lazy(() => import("../components/HomePage"));

const Home = () => {
  const isSSR = typeof window === "undefined";
  return (
    <Layout pageTitle="Journey Advisor">
      {!isSSR && (
        <Suspense fallback={<div>Loading</div>}>
          <HomePage />
        </Suspense>
      )}
    </Layout>
  );
};

export default Home;
