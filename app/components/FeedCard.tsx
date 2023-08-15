import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { CgPoll } from "react-icons/cg";
import { FiMoreHorizontal, FiUpload } from "react-icons/fi";

const FeedCard = () => {
	return (
		<div className="grid grid-cols-12 p-4 gap-3 cursor-pointer border-b-[0.5px] border-gray-800 hover:bg-gray-900/20 transition-all">
			<Image
				src={"https://avatars.githubusercontent.com/u/37607719?v=4"}
				width={50}
				height={50}
				alt="avatar"
				className="col-span-1 rounded-full"
			/>
			<div className="col-span-11 ">
				<span className="float-right text-gray-600 py-1">
					<FiMoreHorizontal />
				</span>
				<span className="font-semibold">Debarka Mondal</span>
				<span className="text-gray-600 mx-3">@debarkamondal</span>
				<div className="my-1">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
					adipisci debitis nostrum tempore autem velit asperiores dolore aliquam
					alias quos?
				</div>
			</div>
			<div className="col-span-11 col-start-2 flex justify-between items-center text-gray-600 text-xl">
				<span className="flex items-center gap-2">
					<BiMessageRounded />
					<span className="text-sm">652</span>
				</span>
				<span className="flex items-center gap-2">
					<FaRetweet />
					<span className="text-sm">652</span>
				</span>
				<span className="flex items-center gap-2">
					<AiOutlineHeart />
					<span className="text-sm">652</span>
				</span>
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
