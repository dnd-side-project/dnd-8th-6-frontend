import { H2, H4, T1 } from "./Text";

import TistoryIcon from "@/assets/tistory-icon.svg";

const BLOG_INFO_LIST = [{ name: "tistory", value: TistoryIcon }];

interface Props {
  blogName: string;
  totalArticles: number;
  title: string;
  value: string;
}

const BlogStats = ({ blogName, totalArticles, title, value }: Props) => {
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
      <div className="flex justify-between w-full py-4">
        <T1 className="opacity-50">Posting (this month)</T1>
        <T1>50</T1>
      </div>
      <div className="flex justify-between w-full py-4">
        <T1 className="opacity-50">Monthly average</T1>
        <T1>50</T1>
      </div>
      <div className="flex justify-between w-full py-4">
        <T1 className="opacity-50">Posting Cycle</T1>
        <T1>50</T1>
      </div>
      <div className="flex justify-between w-full py-4">
        <T1 className="opacity-50">Posted (last month)</T1>
        <T1>50</T1>
      </div>
    </div>
  );
};

export default BlogStats;
