import React, { HTMLAttributes, useCallback, useMemo } from "react";
import { useGetCurrentUser } from "../hooks/user";
import { graphqlClient } from "@/clients/api";
import {
  followUserMutation,
  unfollowUserMutation,
} from "@/graphql/mutation/user";
import { User } from "@/gql/graphql";
import { useQueryClient } from "@tanstack/react-query";

interface FollowButtonProps extends HTMLAttributes<HTMLButtonElement> {
  user: User;
}

const FollowButton: React.FC<FollowButtonProps> = ({ className, user }) => {
  const queryClient = useQueryClient();
  const currentUser = useGetCurrentUser().user;
  const amIfollowing = useMemo(() => {
    // console.log(user?.id, currentUser?.id);
    if (!user) return false;
    return user.followers?.findIndex(
      (element) => element?.id === currentUser?.id,
    ) === -1
      ? false
      : true;
    // if (user.followers?.findIndex((element) => element?.id === currentUser?.id))
    //   return true;
    // else false;
  }, [currentUser?.id, user?.id]);
  const handleFollowUnfollow = useCallback(async () => {
    if (!user?.id) return;
    await graphqlClient.request(
      amIfollowing ? unfollowUserMutation : followUserMutation,
      { to: user.id },
    );
    await queryClient.invalidateQueries(["getCurrentUser"]);
  }, [currentUser?.id, user?.id]);
  return (
    <button
      className={`${className} rounded-full bg-white p-1 px-2 font-bold text-black`}
      onClick={handleFollowUnfollow}
    >
      {amIfollowing ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowButton;
