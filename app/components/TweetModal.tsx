"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useGetCurrentUser } from "../hooks/user";
import { BsImage } from "react-icons/bs";
import { AiOutlineFileGif, AiOutlineUnorderedList } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { MdEventRepeat } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { useCreateTweet } from "../hooks/tweets";
import { graphqlClient } from "@/clients/api";
import { getTweetImgPresignedUrlQuery } from "@/graphql/query/tweets";

export const TweetModal = () => {
  const { user } = useGetCurrentUser();
  const { mutateAsync } = useCreateTweet();
  const [content, setContent] = useState("");
  const [imgUrl, setImgUrl] = useState<string>();

  const handleCreateTweet = useCallback(() => {
    mutateAsync({
      imgUrl,
      content,
    });
    setContent("");
    setImgUrl("");
  }, [mutateAsync, content]);

  const handleFileInput = useCallback((input: HTMLInputElement) => {
    return async (event: Event) => {
      event.preventDefault();
      const file: File | null | undefined = input.files?.item(0);
      if (!file) return;
      const { getTweetImgPresignedUrl } = await graphqlClient.request(
        getTweetImgPresignedUrlQuery,
        {
          imgName: file.name,
          imgType: file.type,
        },
      );
      if (getTweetImgPresignedUrl) {
        const url = new URL(getTweetImgPresignedUrl);
        await fetch(url, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });
        setImgUrl(url.origin + url.pathname);
      }
    };
  }, []);
  const handleImageUpload = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "images/*");
    input.addEventListener("change", handleFileInput(input));
    input.click();
  }, [handleFileInput]);
  return (
    <section className="h-min-48 grid grid-cols-12  gap-2 border-b-[0.5px] border-b-gray-800 p-4">
      {user?.profileImgUrl && (
        <Image
          src={user?.profileImgUrl}
          width={50}
          height={50}
          alt={"profile image"}
          className="col-span-1 row-span-4 rounded-full"
        />
      )}
      <div className="col-span-11 flex flex-col gap-2 border-b border-b-gray-800 p-2">
        <span className="flex w-max items-center gap-2 rounded-full border border-gray-600 px-4 font-semibold text-blue-400">
          <span>Everyone</span>
          <IoIosArrowDown />
        </span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's happening?"
          className="bg-black text-xl"
        />
        {imgUrl && (
          <Image
            src={imgUrl}
            alt="Uploaded tweet image"
            height={200}
            width={300}
          />
        )}
        <span className="text-blue-400">Everyone can reply</span>
      </div>
      <div className="col-span-11 flex justify-between">
        <div className="flex cursor-pointer gap-4 p-2 text-xl font-bold text-blue-400">
          <BsImage onClick={handleImageUpload} />
          <AiOutlineFileGif />
          <AiOutlineUnorderedList />
          <BsEmojiSmile />
          <MdEventRepeat />
          <HiOutlineLocationMarker />
        </div>
        <button
          className="h-10 w-16 cursor-pointer rounded-full bg-blue-500 font-semibold"
          onClick={handleCreateTweet}
        >
          Post
        </button>
      </div>
    </section>
  );
};
