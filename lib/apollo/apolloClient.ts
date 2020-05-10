import { NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { isSSR } from "../isBrowser";

const createApolloClient = (initialState = {}, _ctx: NextPageContext) => {
  const fetchOptions = {
    agent: null,
  };
  if (typeof window === "undefined") {
    if (process.env.https_proxy) {
      fetchOptions.agent = new (require("https-proxy-agent"))(
        process.env.https_proxy
      );
    }
  }

  const link = () => {
    return createIsomorphLink();
  };

  const createIsomorphLink = () => {
    return new HttpLink({
      uri: process.env.backend + "/graphql",
      credentials: "include",
      fetch,
    });
  };

  return new ApolloClient({
    connectToDevTools: !isSSR(),
    ssrMode: isSSR(),
    link: isSSR() ? createIsomorphLink() : link(),
    cache: new InMemoryCache().restore(initialState),
  });
};

export default createApolloClient;
