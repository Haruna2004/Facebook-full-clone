import { useSession } from "next-auth/react";
import React from "react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  //   const [session, loading] = useSession();
  return (
    <div className="max-[460px]:hidden p-2 mt-5 max-w-[600px] xl:min-w-[300px] ">
      {/* <SidebarRow src={session.user.image} title={session.user.name} /> */}
      <SidebarRow
        src="https://media.licdn.com/dms/image/D4D03AQEuiGeEmjJ-Sg/profile-displayphoto-shrink_800_800/0/1672912946884?e=1679529600&v=beta&t=g32mdKsENuUHf5oeA7KqSiv6pUPANyr3gDtmrKwBQvs"
        title="Haruna Faruk"
      />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
};

export default Sidebar;
