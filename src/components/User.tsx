import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

import { H3, H4, T2 } from "./Text";

import Star from "@/assets/star.svg";
import RankUp from "@/assets/rank-up.svg";
import RankDown from "@/assets/rank-down.svg";
import RankUnchanged from "@/assets/rank-unchanged.svg";
import { putStar } from "@/apis/rank";

interface Props {
  memberId: number;
  type: "myRank" | "rank" | "search" | "follow";
  ranking?: number;
  nickname: string;
  subtitle: string;
  isFollowed?: boolean;
  upDown: "unchanged" | "up" | "down";
  profileImageUrl: string;
  className?: string;
  onCardClick?: () => void;
}

const Follow = ({
  isFollowed,
  onClick,
}: Pick<Props, "isFollowed"> & { onClick: (e: React.MouseEvent) => void }) => {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <Star className={isFollowed ? "fill-primary-400" : "fill-[#D9D9D9]"} onClick={onClick} />
    </div>
  );
};

const getRankUpdown = (upDown: "unchanged" | "up" | "down") => {
  if (upDown === "up") return <RankUp />;
  if (upDown === "down") return <RankDown />;
  return <RankUnchanged />;
};

export const UserCard = React.memo(
  ({
    memberId,
    type,
    ranking,
    nickname,
    subtitle,
    isFollowed,
    upDown,
    profileImageUrl,
    className,
  }: Props) => {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(putStar, {
      onSuccess: () => {
        return queryClient.invalidateQueries(["infiniteData"]);
      },
      onError: (error) => {
        console.log(error);
      },
    });

    const handleStar = (id: number) => {
      mutate(id);
    };

    if (ranking === 1) {
      return (
        <div className={`flex flex-col items-center gap-2 ${className}`}>
          <div className="w-[120px] h-[120px] rounded-full bg-neutral-0 overflow-hidden shadow-rank border-[2px] border-primary-400">
            <img src={profileImageUrl} alt={nickname} />
          </div>
          <div className="flex flex-col gap-1 grow items-center">
            <H4 className="text-primary-400">{nickname}</H4>
            <T2 className="opacity-50">{subtitle}</T2>
          </div>
        </div>
      );
    }

    if (ranking === 2 || ranking === 3) {
      return (
        <div className={`flex flex-col items-center ${className}`}>
          <div className="w-[88px] h-[88px] rounded-full bg-neutral-0 overflow-hidden shadow-rank border-[2px] border-tertiary-700">
            <img src={profileImageUrl} alt={nickname} />
          </div>
          <div className="flex flex-col gap-1 grow">
            <H4>{nickname}</H4>
            <T2 className="opacity-50">{subtitle}</T2>
          </div>
        </div>
      );
    }

    switch (type) {
      case "myRank":
        return (
          <div className={`flex gap-4 items-center text-neutral-0 ${className}`}>
            <div className="flex flex-col items-center w-8">
              <H3>MY</H3>
              <T2>{ranking}위</T2>
            </div>
            <div className="flex gap-4 p-4 w-full rounded-2xl bg-gradient-to-r from-primary-400 to-primary-200/30">
              <div className="w-12 h-12 rounded-full bg-neutral-0 overflow-hidden">
                <img src={profileImageUrl} alt={nickname} />
              </div>
              <div className="flex flex-col gap-1 grow">
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
              <H3>{ranking}</H3>
              {getRankUpdown(upDown)}
            </div>
            <div
              className="flex gap-4 p-4 w-full rounded-2xl bg-tertiary-700 items-center"
              onClick={() => {
                router.push(`/user/${memberId}`);
              }}
            >
              <div className="w-12 h-12 rounded-full bg-neutral-0 overflow-hidden">
                <img src={profileImageUrl} alt={nickname} />
              </div>
              <div className="flex flex-col gap-1 grow">
                <H4>{nickname}</H4>
                <T2 className="opacity-50">{subtitle}</T2>
              </div>
              <Follow
                isFollowed={isFollowed}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  handleStar(memberId);
                }}
              />
            </div>
          </div>
        );

      case "search":
        return (
          <div className="flex items-center gap-4 p-4 w-full rounded-2xl bg-tertiary-700 text-white">
            <H3>{ranking}</H3>
            <div className="relative">
              <div className="absolute top-0 left-0 w-4 h-4 bg-primary-400" />
              {/* NOTE: 아이콘이 확정되지 않아 임시로 blue div 삽입  */}
              <div className="w-12 h-12 rounded-full bg-neutral-0 overflow-hidden">
                <img src={profileImageUrl} alt={nickname} />
              </div>
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
              <div className="w-12 h-12 rounded-full bg-neutral-0 overflow-hidden">
                <img src={profileImageUrl} alt={nickname} />
              </div>
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
  },
  (prevProps, nextProps) => {
    return (
      prevProps.memberId === nextProps.memberId &&
      prevProps.type === nextProps.type &&
      prevProps.ranking === nextProps.ranking &&
      prevProps.nickname === nextProps.nickname &&
      prevProps.subtitle === nextProps.subtitle &&
      prevProps.isFollowed === nextProps.isFollowed
    );
  },
);

export const UserCardList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

UserCard.displayName = "UserCard";
