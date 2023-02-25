import Link from "next/link";
import { useRouter } from "next/router";

import { T2 } from "@/components/Text";
import SearchIcons from "@/assets/search.svg";

const SearchBar = () => {
  return (
    // height 64px던데 py-16?
    <div className="flex items-center bg-tertiary-700">
      <div className="flex">
        <div className="flex opacity-50 my-3 px-4 rounded-lg">
          <SearchIcons aria-label="search-icon" className=" w-6" />
          <input
            className="w-full outline-none text-neutral-700 focus-visible:border-primary-400 mx-2"
            type="text"
            id="search"
            placeholder="내용 검색"
          />
        </div>
      </div>
      <div className="flex flex-end  ">
        <T2 className=" text-system-error">취소</T2>
      </div>
    </div>
  );
};

export default SearchBar;
