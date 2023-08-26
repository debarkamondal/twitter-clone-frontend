import { graphqlClient } from "@/clients/api";
import { CreateTweetData } from "@/gql/graphql";
import { createTweetMutation } from "@/graphql/mutation/tweet";
import { getAllTweetsQuery } from "@/graphql/query/tweets";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateTweet = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: (payload: CreateTweetData) =>
			graphqlClient.request(createTweetMutation, { payload }),
		onSuccess: () => queryClient.invalidateQueries(["getAllTweets"]),
	});
	return mutation;
};

export const useGetAllTweets = () => {
	const query = useQuery({
		queryKey: ["getAllTweets"],
		queryFn: () => graphqlClient.request(getAllTweetsQuery),
	});

	return { ...query, tweets: query.data?.getAllTweets };
};
