import { forwardRef, useRef, useState } from "react";

import ActiveSearchIcon from "@/assets/search-active.svg";
import InactiveSearchIcon from "@/assets/search-inactive.svg";
import { T2 } from "@/components/Text";

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

const SearchBar = forwardRef<HTMLInputElement, Props>(
  ({ buttonType = "cancel", onClick }, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [isFilled, setIsFilled] = useState<boolean>(false);
    const searchDiv = useRef<HTMLInputElement>(null);

    const onFocus = () => {
      searchDiv.current?.focus();
      setIsFocused(!isFocused);
    };

    const onBlur = () => {
      searchDiv.current?.blur();
      setIsFocused(!isFocused);
    };

    const onChange = () => {
      setIsFilled(!isFilled);
    };

    return (
      <div className="flex bg-tertiary-700 w-full px-4 py-3">
        <div
          ref={searchDiv}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`bg-tertiary-500/50 rounded-md ${
            isFocused ? "border border-primary-400" : ""
          }`}
        >
          <div className="flex items-center p-2 gap-2">
            {isFocused || isFilled ? (
              <ActiveSearchIcon className="mr-2 w-6" />
            ) : (
              <InactiveSearchIcon className="mr-2 w-6" />
            )}
            <input
              className="w-full outline-none text-neutral-0 bg-transparent"
              type="text"
              id="search"
              placeholder="내용 입력"
              ref={ref}
              onChange={onChange}
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
  },
);

SearchBar.displayName = "SearchBar";
export default SearchBar;
