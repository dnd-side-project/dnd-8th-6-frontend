import Link from "next/link";

import { H2, H4, T1, T2 } from "./Text";
import Button from "./Button";

import TistoryIcon from "@/assets/tistory-icon.svg";
// 네이버블로그, 벨로그 임포트 필요

const BLOG_INFO_LIST = [
  "Posting (this month)",
  "Monthly average",
  "Posting Cycle",
  "Posted (last month)",
];

interface Props {
  blogName: string;
  totalArticles: number;
  value: string;
  isBlogConnected: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const BlogStats = ({ blogName, totalArticles, value, isBlogConnected, onClick }: Props) => {
  return isBlogConnected ? (
    <div className=" w-full h-full p-6 bg-tertiary-700 rounded-2xl">
      <div className="flex justify-between items-center shrink-0 w-full ">
        <div className="flex flex-col ">
          <H2>{blogName} name</H2>
          <H4 className="opacity-50 mt-2">{totalArticles}ddd Posts</H4>
        </div>
        <div className="flex justify-center items-center bg-primary-400 w-10 h-10 rounded-full">
          <TistoryIcon />
        </div>
      </div>
      <div className="border-t border-tertiary-500 mt-6 mb-2" />
      {BLOG_INFO_LIST.map((title) => {
        return (
          <div className="flex justify-between w-full py-4" key={title}>
            <T1 className="opacity-50">{title}</T1>
            <T1>{value}</T1>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="text-center w-full h-full">
      <div className="flex flex-col p-6 bg-tertiary-700 rounded-t-2xl">
        <T1 className="opacity-50">블로그 내용이 없어요!</T1>
        <T1 className="opacity-50">블로그를 추가해보시겠어요?</T1>
      </div>
      <div className="p-4 bg-tertiary-900 rounded-b-2xl">
        <Button onClick={onClick}>추가하기</Button>
        <Link href="/">
          <div className="pt-4">
            <T2 className="opacity-50">다시 보지 않기</T2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogStats;
