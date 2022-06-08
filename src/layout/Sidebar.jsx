import React from "react";
import twitterSvg from "../images/twitter.svg";
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
import SideLink from "../components/SideLink";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: CommunitiesIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];
const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-72  px-2">
      <div>
        <div className="mt-1 ml-1 mb-4 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest">
          <img src={twitterSvg} alt="" className="w-9 h-9" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                // active={active}
                // onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark  text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-200">
          Tweet
        </button>
      </div>

      <div>Alt taraf</div>
    </div>
  );
};

export default Sidebar;
