import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";
import { env } from "~/env";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        Authorization: `Bearer ${env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
      fetchOptions: {
        cache: "force-cache",
        next: {
          revalidate: 60 * 60, // 1 hour
        },
      },
    }),
  });
});
