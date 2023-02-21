import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { T2 } from "./Text";

const NAV_ITEM_LIST = [
  { href: "/", text: "Home" },
  { href: "/rank", text: "Rank" },
  { href: "/mypage", text: "My" },
];

interface Props {
  href: string;
  text: string;
}

const BottomNavigationItem = ({ href, text }: Props) => {
  const [isCurrentPage, setIsCurrentPage] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.split("/")[1] === href.split("/")[1]) {
      setIsCurrentPage(true);
    }
  }, [router.asPath]);

  return (
    <Link
      href={href}
      className={`flex flex-col gap-1 justify-center items-center ${
        !isCurrentPage ? "opacity-50" : ""
      }`}
    >
      <div
        className={`flex justify-center w-16 h-8 rounded-full ${
          isCurrentPage ? "bg-tertiary-500" : "bg-transparent"
        }`}
      >
        <div className={`w-8 ${isCurrentPage ? "bg-blue-500" : "bg-green-500"}`} />
        {/* NOTE: 아이콘이 확정되지 않아 임시로 green&blue div 삽입  */}
      </div>
      <T2 className="text-neutral-0">{text}</T2>
    </Link>
  );
};

const BottomNavigation = () => {
  return (
    <nav className="fixed left-0 bottom-0 w-full bg-tertiary-700">
      <ul className="flex gap-4 w-full h-18 px-4 py-2">
        {NAV_ITEM_LIST.map(({ href, text }) => (
          <li className="w-full" key={text}>
            <BottomNavigationItem href={href} text={text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
