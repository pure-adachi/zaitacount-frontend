import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Input from "../../atoms/Input";
import { useSignInMutation } from "../../../generated/graphql";
import history from "../../../history";

const LoginForm = () => {
  const [loginid, setLoginid] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [signIn] = useSignInMutation({
    update: (_, { data }) => {
      const result = data?.signIn?.result || false;

      if (result) {
        const token = data?.signIn?.user?.accessToken?.token as string;
        localStorage.setItem("zaitacount-token", token);
        history.push("/zaitacount-frontend/");
      } else {
        alert("Incorrect login id or password");
      }
    },
    variables: {
      loginid,
      password
    }
  });

  return (
    <div className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
      <label htmlFor="inputLoginid" className="sr-only">
        Login id
      </label>
      <Input
        id="inputLoginid"
        className="form-control"
        placeholder="Login id"
        required
        autoFocus
        value={loginid || ""}
        onChange={(e) => setLoginid(e.target.value)}
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <Input
        id="inputPassword"
        type="password"
        className="form-control"
        placeholder="Password"
        required
        value={password || ""}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="primary" block onClick={() => signIn()}>
        Sign In
      </Button>
    </div>
  );
};

export default LoginForm;
