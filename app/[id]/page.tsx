import React from "react";
import UserTweets from "../components/UserTweets";
import UserProfile from "../components/UserProfile";

const ProfilePage = ({ params }: { params: { id: string } }) => {
  return (
    <main>
      <UserProfile id={params.id} />
      <UserTweets id={params.id} />
    </main>
  );
};

export default ProfilePage;
