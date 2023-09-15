import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { CgPoll } from "react-icons/cg";
import { FiMoreHorizontal, FiUpload } from "react-icons/fi";
import { Likes, Tweet } from "@/gql/graphql";
import Link from "next/link";
import LikeButton from "./LikeButton";

interface feedCardProps {
  tweet: Tweet;
}

const FeedCard: React.FC<feedCardProps> = ({ tweet }) => {
  return (
    <div className="grid grid-cols-12 gap-3 border-b-[0.5px] border-gray-800 p-4 transition-all hover:bg-gray-900/20">
      {tweet.author?.profileImgUrl && (
        <Image
          src={tweet.author.profileImgUrl}
          width={50}
          height={50}
          alt="avatar"
          className="col-span-1 rounded-full"
        />
      )}
      <div className="col-span-11 ">
        <span className="float-right py-1 text-gray-600">
          <FiMoreHorizontal />
        </span>
        <Link href={`/${tweet.author?.id}`}>
          <span className="font-semibold">
            {tweet.author?.firstName} {tweet.author?.lastName}
          </span>
        </Link>
        <span className="mx-3 text-gray-600">@debarkamondal</span>
        <div className="my-1">{tweet.content}</div>
        {tweet.imgUrl && (
          <Image
            src={tweet.imgUrl}
            alt="tweet image"
            height={200}
            width={300}
          />
        )}
      </div>
      <div className="col-span-11 col-start-2 flex items-center justify-between text-xl text-gray-600">
        <span className="flex items-center gap-2">
          <BiMessageRounded />
          <span className="text-sm">652</span>
        </span>
        <span className="flex items-center gap-2">
          <FaRetweet />
          <span className="text-sm">652</span>
        </span>
        <LikeButton tweetId={tweet.id} likes={tweet.likes as Likes[]} />
        <span className="flex items-center gap-2">
          <CgPoll />
          <span className="text-sm">652</span>
        </span>
        <FiUpload />
      </div>
    </div>
  );
};

export default FeedCard;
