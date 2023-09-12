import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

const isClient = typeof window !== "undefined";
const url = process.env.NEXT_PUBLIC_BACKEND_URL;
export const graphqlClient = new GraphQLClient(url, {
  headers: () => ({
    Authorization: isClient ? `Bearer ${localStorage.getItem("token")}` : "",
  }),
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
