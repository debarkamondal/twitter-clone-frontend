"use client";
import React from "react";
import { useGetCurrentUser } from "../hooks/user";
import Image from "next/image";
import { FiMoreHorizontal } from "react-icons/fi";

export const ProfileCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
	props
) => {
	const { user } = useGetCurrentUser();
	return (
		user &&
		user?.profileImgUrl && (
			<div className={props.className}>
				<Image
					src={user?.profileImgUrl}
					height={50}
					width={50}
					alt="profile image"
					className="rounded-full p-1"
				/>

				<div className="flex-col">
					<div>
						{user.firstName} {user.lastName}
					</div>
					<p className="text-gray-600">@debarkamondal</p>
				</div>
				<div className="h-full ml-4">
					<FiMoreHorizontal />
				</div>
			</div>
		)
	);
};
