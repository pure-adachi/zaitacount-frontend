import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../../molecules/LoginForm";
import { useViewerQuery } from "../../../generated/graphql";

const SignIn = () => {
  const { loading, data } = useViewerQuery({
    fetchPolicy: "network-only"
  });

  if (loading) {
    return <>Loading...</>;
  }

  if (data?.viewer) {
    return <Redirect to="/zaitacount-frontend" />;
  } else {
    return <LoginForm />;
  }
};

export default SignIn;
