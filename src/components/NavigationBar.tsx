import { useRouter } from "next/router";

import { H2 } from "./Text";

import BackIcon from "@/assets/back-icon.svg";
import MenuIcon from "@/assets/menu-icon.svg";
import SearchIcon from "@/assets/search-active.svg";

interface Props {
  onMenuClick: () => void;
  withSearch?: boolean;
  withMenu?: boolean;
  children: string;
}

/**
 *
 * Search와 Menu는 모두 옵션입니다.
 * @param onMenuClick 메뉴 버튼을 눌렀을 때 실행할 함수
 * @param withSearch 검색아이콘 넣을지 뺄지(검색아이콘 클릭시 /search로 이동합니다)
 * @param withMenu 메뉴아이콘 넣을지 뺄지
 * @param children 페이지 타이틀을 감싸주세요
 */
const NavigationBar = ({ onMenuClick, withSearch, withMenu, children }: Props) => {
  const router = useRouter();

  return (
    <div className="flex items-center w-full p-4 gap-4 background-linear">
      <BackIcon
        onClick={() => {
          router.back();
        }}
      />
      <H2 className="text-neutral-0 grow">{children}</H2>
      <div className="flex flex-end items-center gap-4">
        {withSearch ? <SearchIcon onClick={() => router.push("/search")} /> : null}
        {withMenu ? <MenuIcon onClick={onMenuClick} /> : null}
      </div>
    </div>
  );
};

export default NavigationBar;
