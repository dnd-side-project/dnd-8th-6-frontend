import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import searchIcon from "../assets/search-icon.png";

import { T2 } from "@/components/Text";


const SearchBar = () => {
  return (
    <div className="bg-tertiary-700">
      <input placeholder="내용 입력"></input>
      <Image src={searchIcon} alt="search-icon" placeholder="blur" />
      <T2>texttt</T2>
    </div>
  );
};

export default SearchBar;
