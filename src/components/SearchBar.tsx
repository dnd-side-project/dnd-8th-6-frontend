import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import { T2 } from "@/components/Text";
import ActiveSearchIcon from "@/assets/search-active.svg";
import InactiveSearchIcon from "@/assets/search-inactive.svg";


interface Props {
  buttonType: "search" | "cancel";
  onClick: () => void;
}

const searchConfig = {
  search: {
    textColor: "text-neutral-0",
    text: "검색",
  },
  cancel: {
    textColor: "text-system-error",
    text: "취소",
  },
};


const SearchBar = ({ buttonType = "cancel", onClick }: Props) => {
  const [isFocused, setIsFocused] = useState(true);
  const searchInput = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    searchInput.current?.focus();
    setIsFocused(!isFocused);
  };

  const handleBlur = () => {
    searchInput.current?.blur();
    setIsFocused(!isFocused);
  };


  return (
    <div className="flex bg-tertiary-700 w-full px-4 py-3">
      <div ref={searchInput} className="opacity-50 bg-tertiary-500 rounded-md">
        <div
          className="flex items-center p-2 border-primary-400"
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {isFocused ? (
            <ActiveSearchIcon className="mr-2" />
          ) : (
            <InactiveSearchIcon className="mr-2" />
          )}
          <input
            className="outline-none text-neutral-0 bg-transparent"
            type="text"
            id="search"
            placeholder="내용 입력"
          />
        </div>
      </div>
      <button onClick={onClick}>
        <T2 className={`px-4 text-neutral-0 ${searchConfig[buttonType].textColor}`}>
          {searchConfig[buttonType].text}
        </T2>
      </button>
    </div>
  );
};

export default SearchBar;
