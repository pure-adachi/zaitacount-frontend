import React, { ReactChild } from "react";
import { Redirect } from "react-router-dom";
import { useViewerQuery } from "../../../generated/graphql";

interface Props {
  children: ReactChild;
}

const Frame = ({ children }: Props) => {
  const { loading, data } = useViewerQuery({
    fetchPolicy: "network-only"
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (data?.viewer) {
    return <>{children}</>;
  } else {
    return <Redirect to="/zaitacount-frontend/sign-in" />;
  }
};

export default Frame;
