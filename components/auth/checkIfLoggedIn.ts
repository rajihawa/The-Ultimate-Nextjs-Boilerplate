import { NextPageAuthContext } from "./withAuth";
import { MeQueryResult, MeDocument } from "../../src/generated/graphql";

export default async (ctx: NextPageAuthContext): Promise<MeQueryResult> => {
  if (!ctx.apolloClient) {
    return;
  }
  return ctx.apolloClient
    .query({
      query: MeDocument,
      context: {
        headers: ctx.req?.headers,
      },
    })
    .then((res) => {
      return res;
    })
    .catch(() => {
      return null;
    });
};
