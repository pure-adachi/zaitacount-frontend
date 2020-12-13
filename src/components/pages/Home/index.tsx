import React from "react";
import { useTestFieldQuery } from "../../../generated/graphql";

const Home = () => {
  const { loading, data } = useTestFieldQuery();

  if (loading) {
    return <>Loading ...</>;
  }

  return <>{data?.testField}</>;
};

export default Home;
