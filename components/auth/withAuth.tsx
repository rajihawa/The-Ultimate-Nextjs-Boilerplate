import React, { useContext } from "react";
import { AuthControl } from "../../context/authControl";
import { NextPageContext } from "next";
import { ApolloClient } from "apollo-boost";
import checkIfLoggedIn from "./checkIfLoggedIn";
import { redirect } from "../../lib/redirect";
import { CircularProgress } from "@material-ui/core";
import { withApollo } from "../../lib/apollo";

export interface NextPageAuthContext extends NextPageContext {
  apolloClient: ApolloClient<any>;
}

export const mustNotBeLogged = (Component) => {
  const withAuth = (props) => {
    return <Component {...props} />;
  };

  withAuth.getInitialProps = async (ctx: NextPageAuthContext) => {
    const loggedResult = await checkIfLoggedIn(ctx);
    if (loggedResult) {
      redirect(ctx, "/home");
    }
    return { mount: "ok" };
  };

  return withApollo({ ssr: true })(withAuth);
};

export const mustBeLogged = (Component) => {
  const withAuth = (props) => {
    const authControl = useContext(AuthControl);
    if (!authControl.user) {
      const { name } = props.user;
      authControl.setUser({
        name: name,
      });
    }

    return authControl.user ? <Component {...props} /> : <CircularProgress />;
  };

  withAuth.getInitialProps = async (ctx: NextPageAuthContext) => {
    const loggedResult = await checkIfLoggedIn(ctx);
    if (!loggedResult) {
      redirect(ctx, "/");
    }
    return { user: loggedResult.data.me };
  };

  return withApollo({ ssr: true })(withAuth);
};
