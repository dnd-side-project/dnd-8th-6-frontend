import { H2, H4, T1 } from "./Text";

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
}

const BlogStats = ({ blogName, totalArticles, value }: Props) => {
  return (
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
      <div className="border-t border-[#2B3752] mt-6 mb-2" />
      {BLOG_INFO_LIST.map(title => {
        return (
          <div className="flex justify-between w-full py-4" key={title}>
            <T1 className="opacity-50">{title}</T1>
            <T1>{value}</T1>
          </div>
        );
      })}
    </div>
  );
};

export default BlogStats;
