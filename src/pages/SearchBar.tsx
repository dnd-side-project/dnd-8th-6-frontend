import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { T2 } from "@/components/Text";

import searchIcon from "@/assets/search-icon.png";

const SearchBar = () => {
  return (
    <div className="bg-black-100">
      <Image src={searchIcon} alt="search-icon" placeholder="blur" />
      <T2>hello</T2>
    </div>
  );
};

export default SearchBar;
