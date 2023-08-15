import React, { FC } from "react";
import { BsBell, BsBookmark, BsTwitter } from "react-icons/bs";
import {
	BiEnvelope,
	BiSearch,
	BiSolidHomeCircle,
	BiUser,
} from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { VscVerified } from "react-icons/vsc";
import { CgMoreO } from "react-icons/cg";

type sidebarElementType = {
	icon: JSX.Element;
	text: string;
};
const sidebarElements: sidebarElementType[] = [
	{ icon: <BiSolidHomeCircle />, text: "Home" },
	{ icon: <BiSearch />, text: "Explore" },
	{ icon: <BsBell />, text: "Notifications" },
	{ icon: <BiEnvelope />, text: "Messages" },
	{ icon: <RiFileList2Line />, text: "Lists" },
	{ icon: <BsBookmark />, text: "Bookmarks" },
	{ icon: <FiUsers />, text: "Communities" },
	{ icon: <VscVerified />, text: "Verified" },
	{ icon: <BiUser />, text: "Profile" },
	{ icon: <CgMoreO />, text: "More" },
];

const Sidebar: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	return (
		<div className={`${className} p-2 pr-4 `}>
			<div className="px-2">
				<div className="text-3xl p-2 mb-2 hover:bg-gray-900 w-max rounded-full transition-all">
					<BsTwitter />
				</div>
				<div className="menuContainer">
					{sidebarElements.map((element) => (
						<div
							key={element.text}
							className="flex gap-5 my-4 p-2 hover:bg-gray-900 w-max rounded-full items-center transition-all"
						>
							<span className="text-2xl">{element.icon}</span>
							<span className="text-xl font-medium">{element.text}</span>
						</div>
					))}
				</div>
			</div>
			<button className="w-56 text-white bg-blue-500 rounded-full py-2 h-12 font-medium">
				Post
			</button>
		</div>
	);
};

export default Sidebar;
