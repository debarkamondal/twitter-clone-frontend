"use client";
import React from "react";
import { useGetAllTweets } from "../hooks/tweets";
import FeedCard from "./FeedCard";
import { Tweet } from "@/gql/graphql";

export const Feed = () => {
  const { tweets = [] } = useGetAllTweets();
  return (
    <>
      {tweets?.map((tweet) =>
        tweet ? <FeedCard key={tweet?.id} tweet={tweet as Tweet} /> : null,
      )}
    </>
  );
};
