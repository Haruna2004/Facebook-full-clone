import Image from "next/image";
import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <Image
          src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
          width={40}
          height={40}
          alt=""
          fixed="true"
        />
        <div className="flex items-center ml-2 bg-gray-100 rounded-full p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className=" hidden md:inline-flex bg-transparent outline-none ml-2 placeholder-gray-500 flex-shrink"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow  ">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          fixed="true"
          alt="."
        />
        <p className="hidden lg:inline-flex text-sm font-semibold whitespace-nowrap pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
