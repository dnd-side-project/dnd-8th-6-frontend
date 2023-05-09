import React, { useState } from "react";
import { NextPage } from "next";
import { useInfiniteQuery } from "@tanstack/react-query";

import NavigationBar from "@/components/NavigationBar";
import { UserCard, UserCardList } from "@/components/User";
import useObserver from "@/hooks/useObserver";
import { getRank } from "@/apis/rank";
import KakaoButton from "@/components/KakaoButton";

export enum Filter {
  STAR = "STAR",
  COMMIT = "COMMIT",
  CONSTANTCOMMIT = "CONSTANTCOMMIT",
}

interface ItemProps {
  ranking: number;
  name: string;
  dataLog: string;
  starId: number | null;
  memberId: number;
  upDown: "unchanged" | "up" | "down";
  profileImageUrl: string;
}

const Rank: NextPage = () => {
  const [filter, setFilter] = useState<Filter>(Filter.COMMIT);

  const { data, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    ["infiniteData", filter],
    ({ pageParam = 1 }) => getRank({ filter, pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.rankData.length < 20 ? undefined : allPages.length + 1;
      },
    },
  );

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  const handelFilterClick = (filterType: Filter) => {
    setFilter(filterType);
  };

  const myData = data?.pages[0].data.hostRank;

  return (
    <>
      <NavigationBar
        onMenuClick={() => {
          console.log("click");
        }}
        withSearch
        withMenu
      >
        Rank
      </NavigationBar>
      <KakaoButton />
      <UserCardList>
        {status === "loading" && <p>불러오는 중</p>}
        {status === "error" && <p>bb</p>}
        {status === "success" && (
          <div className="flex justify-center items-end w-full gap-6 bottom-4">
            {data?.pages.map((page) => {
              return page.data.rankData.map((item: ItemProps) => {
                return item.ranking < 4 ? (
                  <UserCard
                    key={item.memberId}
                    memberId={item.memberId}
                    type="rank"
                    ranking={item.ranking}
                    nickname={item.name}
                    upDown={item.upDown}
                    subtitle={item.dataLog}
                    isFollowed={item.starId !== null}
                    profileImageUrl={item.profileImageUrl}
                    className={item.ranking === 2 ? "order-first " : ""}
                  />
                ) : (
                  <></>
                );
              });
            })}
          </div>
        )}
        {status === "success" && (
          <UserCard
            key={myData.memberId}
            memberId={myData.memberId}
            type="myRank"
            ranking={myData.ranking}
            nickname={myData.name}
            upDown={myData.upDown}
            subtitle={myData.dataLog}
            profileImageUrl={myData.profileImageUrl}
            className="sticky top-0"
          />
        )}
        {status === "success" &&
          data?.pages.map((page) => {
            return page.data.rankData.map((item: ItemProps) => {
              console.log(item);
              return item.ranking > 3 ? (
                <UserCard
                  key={item.memberId}
                  memberId={item.memberId}
                  type="rank"
                  ranking={item.ranking}
                  nickname={item.name}
                  upDown={item.upDown}
                  subtitle={item.dataLog}
                  isFollowed={item.starId !== null}
                  profileImageUrl={item.profileImageUrl}
                />
              ) : (
                <></>
              );
            });
          })}
        {status === "success" && hasNextPage && (
          <div
            style={{ width: "100vw", height: "10px", backgroundColor: "red" }}
            ref={status === "success" ? setTarget : null}
          ></div>
        )}
      </UserCardList>
    </>
  );
};

export default Rank;
