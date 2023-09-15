import { graphqlClient } from "@/clients/api";
import { LikeUnlikeTweetData } from "@/gql/graphql";
import {
  likeTweetMutation,
  unLikeTweetMutation,
} from "@/graphql/mutation/like";
import { useMutation } from "@tanstack/react-query";

export const useLikeTweet = () => {
  const mutation = useMutation({
    mutationFn: (payload: LikeUnlikeTweetData) =>
      graphqlClient.request(likeTweetMutation, { payload }),
  });
  return mutation;
};
export const useUnlikeTweet = () => {
  const mutation = useMutation({
    mutationFn: (payload: LikeUnlikeTweetData) =>
      graphqlClient.request(unLikeTweetMutation, { payload }),
  });
  return mutation;
};
