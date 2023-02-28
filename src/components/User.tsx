import { H3, H4, T2 } from "./Text";

import Star from "@/assets/star.svg";

interface Props {
  type: "myRank" | "rank" | "search" | "follow";
  rank?: number;
  nickname: string;
  subtitle: string;
  isFollowed?: boolean;
}

const Follow = ({ isFollowed, onClick }: Pick<Props, "isFollowed"> & { onClick: () => void }) => {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <Star className={isFollowed ? "fill-primary-400" : "fill-[#D9D9D9]"} onClick={onClick} />
    </div>
  );
};

export const UserCard = ({ type, rank, nickname, subtitle, isFollowed }: Props) => {
  switch (type) {
    case "myRank":
      return (
        <div className="flex gap-4 items-center text-neutral-0">
          <div className="flex flex-col items-center w-8">
            <H3>MY</H3>
            <T2>{rank}위</T2>
          </div>
          <div className="flex gap-4 p-4 w-full rounded-2xl bg-gradient-to-r from-primary-400 to-primary-200/30">
            <div className="w-12 h-12 rounded-full bg-neutral-0" />
            <div className="flex flex-col gap-1">
              <H4>{nickname}</H4>
              <T2 className="opacity-50">{subtitle}</T2>
            </div>
          </div>
        </div>
      );

    case "rank":
      return (
        <div className="flex gap-4 items-center text-neutral-0">
          <div className="flex flex-col items-center w-8">
            <H3>{rank}</H3>
            <div className="w-3 h-3 bg-primary-400" />
            {/* NOTE: 아이콘이 확정되지 않아 임시로 blue div 삽입  */}
          </div>
          <div className="flex gap-4 p-4 w-full rounded-2xl bg-tertiary-700">
            <div className="w-12 h-12 rounded-full bg-neutral-0" />
            <div className="flex flex-col gap-1">
              <H4>{nickname}</H4>
              <T2 className="opacity-50">{subtitle}</T2>
            </div>
            <Follow
              isFollowed={isFollowed}
              onClick={() => {
                /* NOTE: 팔로우를 담당하는 api콜  */
              }}
            />
          </div>
        </div>
      );

    case "search":
      return (
        <div className="flex items-center gap-4 p-4 w-full rounded-2xl bg-tertiary-700 text-white">
          <H3>{rank}</H3>
          <div className="relative">
            <div className="absolute top-0 left-0 w-4 h-4 bg-primary-400" />
            {/* NOTE: 아이콘이 확정되지 않아 임시로 blue div 삽입  */}
            <div className="w-12 h-12 rounded-full bg-neutral-0" />
          </div>
          <div className="flex flex-col gap-1 grow">
            <H4>{nickname}</H4>
            <T2 className="opacity-50">{subtitle}</T2>
          </div>
          <div className="w-10 h-10 bg-primary-400 shrink-0" />
          {/* NOTE: 아이콘이 확정되지 않아 임시로 blue div 삽입  */}
        </div>
      );

    case "follow":
      return (
        <div className="flex items-center gap-4 p-4 w-full rounded-2xl bg-tertiary-700 text-white">
          <div className="relative">
            <div className="absolute top-0 left-0 w-4 h-4 bg-primary-400" />
            {/* NOTE: 아이콘이 확정되지 않아 임시로 blue div 삽입  */}
            <div className="w-12 h-12 rounded-full bg-neutral-0" />
          </div>
          <div className="flex flex-col gap-1 w-[calc(100%-144px)] grow">
            <H4>{nickname}</H4>
            <T2 className="truncate opacity-50">{subtitle}</T2>
          </div>
          <Follow
            isFollowed={isFollowed}
            onClick={() => {
              /* NOTE: 팔로우를 담당하는 api콜  */
            }}
          />
        </div>
      );

    default:
      return <></>;
  }
};

export const UserCardList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
