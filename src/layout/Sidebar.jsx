import React from "react";
import {
  ExploreIcon,
  HomeIcon,
  CommunitiesIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ProfileIcon,
  MoreIcon,
  TweetIcon,
} from "../icons/Icon";
const Sidebar = () => {
  return (
    <div className="w-72 bg-blue-200">
      <h1>Sidebar</h1>
      <HomeIcon />
      <ExploreIcon />
      <CommunitiesIcon />
      <NotificationsIcon />
      <MessagesIcon />
      <BookmarksIcon />
      <ProfileIcon />
      <MoreIcon />
      <TweetIcon />
    </div>
  );
};

export default Sidebar;
