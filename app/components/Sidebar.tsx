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
import { ProfileCard } from "./ProfileCard";

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
    <nav
      className={`${className} fixed bottom-0 w-full items-center border-t border-t-gray-600 p-2 md:relative md:flex md:flex-col md:items-end`}
    >
      <div className="w-full md:w-fit">
        <div className="mb-2 hidden w-max rounded-full p-2 text-3xl transition-all hover:bg-gray-900 md:block">
          <BsTwitter />
        </div>
        <ul className="menuContainer flex justify-around py-1 md:block">
          {sidebarElements.map((element) => (
            <li
              key={element.text}
              className="flex w-max cursor-pointer items-center justify-evenly gap-5 rounded-full p-2 transition-all  hover:bg-gray-900 md:my-4"
            >
              <span className="text-2xl">{element.icon}</span>
              <span className="hidden text-xl font-medium lg:block">
                {element.text}
              </span>
            </li>
          ))}
        </ul>
        <button className="hidden h-12 w-full max-w-[56rem] rounded-full bg-blue-500 py-2 font-medium text-white lg:block">
          Post
        </button>
      </div>
      <ProfileCard className="absolute bottom-0 right-0 mb-4 hidden w-full max-w-fit items-center gap-2 md:flex" />
    </nav>
  );
};

export default Sidebar;
