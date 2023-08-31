"use client";
import React from "react";
import { useGetUserById } from "../hooks/user";
import FeedCard from "./FeedCard";
import { Tweet } from "@/gql/graphql";

const UserTweets = ({ id }: { id: string }) => {
  const { user } = useGetUserById(id);
  const tweets = user?.tweets;
  return (
    <>
      {tweets?.map((tweet) =>
        tweet ? <FeedCard key={tweet?.id} tweet={tweet as Tweet} /> : null,
      )}
    </>
  );
};

export default UserTweets;
