import { Props } from "react-apexcharts";

import MainChart from "../components/MainChart";
import GithubYearChart from "../components/GithubYearChart";
import { Card, CardList } from "../components/GitHubStats";
import { H4 } from "../components/Text";

import CodeVsIcon from "@/assets/codeVs-icon.svg";
import GoldGrade from "@/assets/gold.svg";
import PlatinumGrade from "@/assets/platinum.svg";
import DiaGrade from "@/assets/dia.svg";
import MasterGrade from "@/assets/master.svg";
interface gradeProps {
  text: string;
  icon: string;
}

const GRADE_LIST= [
  { text: "골드", icon: GoldGrade },
  { text: "플래티넘", icon: PlatinumGrade },
  { text: "다이아", icon: DiaGrade },
  { text: "마스터", icon: MasterGrade },
];

const home = () => {
  return (
    <div>
      <div className="flex px-5 py-4">
        <CodeVsIcon />
      </div>
      <div className="absolute w-full">
        <MainChart />
      </div>
      <div className="absolute w-40 h-40 top-28 left-1/2 transform -translate-x-1/2 ">
        <PlatinumGrade />
      </div>
      <div className="absolute mt-80 px-5">
        <H4 className="flex pt-11 pb-[17px]">Github Stats</H4>
        <CardList>
          <Card title="{temp}" value="{temp}" />
        </CardList>

        <H4 className="flex pt-11 pb-[17px]">Github Year Chart</H4>
        <GithubYearChart />
      </div>
    </div>
  );
};

export default home;