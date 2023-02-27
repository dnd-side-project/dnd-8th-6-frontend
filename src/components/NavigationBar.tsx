import { H2 } from "./Text";

import BackIcon from "@/assets/back-icon.svg";
import MenuIcon from "@/assets/menu-icon.svg";

interface Props {
  children: string;
}

const NavigationBar = ({ children }: Props) => {
  return (
    <div className="flex items-center bg-tertiary-700 w-full px-5 py-3">
      <BackIcon className="mr-5" />
      <H2 className="text-neutral-0 w-full">{children}</H2>
      <div className="flex flex-end">
        <MenuIcon className="w-full " />
      </div>
    </div>
  );
};

export default NavigationBar;