// "use client";
import React from "react";
import UserTweets from "../components/UserTweets";
import UserProfile from "../components/UserProfile";

const ProfilePage = () => {
  return (
    <main>
      <UserProfile />
      <UserTweets />
    </main>
  );
};

export default ProfilePage;
