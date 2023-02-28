import { H2 } from "./Text";
import { useState } from "react";

import BackIcon from "@/assets/back-icon.svg";
import MenuIcon from "@/assets/menu-icon.svg";
import SearchIcon from "@/assets/search-active.svg";

interface Props {
  children: string;
}

const NavigationBar = ({ children }: Props) => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div className="flex items-center bg-tertiary-700 w-full px-5 py-3">
      <BackIcon className="mr-5" />
      <H2 className="text-neutral-0 grow">ccc</H2>
      <div className="flex flex-end items-center space-x-5">
        {isSearch && <SearchIcon />}
        <MenuIcon />
      </div>
    </div>
  );
};

export default NavigationBar;