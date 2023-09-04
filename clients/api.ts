import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";

export const graphqlClient = new GraphQLClient(
  "http://localhost:8000/graphql",
  {
    headers: () => ({
      Authorization: isClient ? `Bearer ${localStorage.getItem("token")}` : "",
    }),
  },
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
