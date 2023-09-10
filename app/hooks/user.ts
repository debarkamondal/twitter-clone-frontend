import { graphqlClient } from "@/clients/api";
import { followUserMutation } from "@/graphql/mutation/user";
import { getCurrentUserQuery, getUserByIdQuery } from "@/graphql/query/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCurrentUser = () => {
  const query = useQuery({
    queryKey: ["getCurrentUser"],
    queryFn: () => graphqlClient.request(getCurrentUserQuery),
  });
  return { ...query, user: query.data?.getCurrentUser };
};

export const useGetUserById = (id: string) => {
  const query = useQuery({
    queryKey: ["getUserById"],
    queryFn: () => graphqlClient.request(getUserByIdQuery, { id }),
  });
  return { ...query, user: query.data?.getUserById };
};

export const useFollowUser = (id: string) => {
  const mutation = useMutation({
    mutationKey: [`follow-${id}`],
    mutationFn: () => graphqlClient.request(followUserMutation, { to: id }),
  });
  return mutation;
};
