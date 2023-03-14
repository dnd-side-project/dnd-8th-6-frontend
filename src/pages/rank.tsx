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
  rank: number;
  nickname: string;
  subtitle: string;
  isFollowed: boolean;
  id: number;
}
// const mock = [
//   { nickname: "asdf1", subtitle: "asdf1", rank: 1, isFollowed: false, id: 1 },
//   { nickname: "asdf2", subtitle: "asdf2", rank: 2, isFollowed: false, id: 2 },
//   { nickname: "asdf3", subtitle: "asdf3", rank: 3, isFollowed: true, id: 3 },
//   { nickname: "asdf3", subtitle: "asdf3", rank: 4, isFollowed: true, id: 4 },
//   { nickname: "asdf3", subtitle: "asdf3", rank: 5, isFollowed: false, id: 5 },
//   { nickname: "asdf3", subtitle: "asdf3", rank: 6, isFollowed: true, id: 6 },
//   { nickname: "asdf3", subtitle: "asdf3", rank: 7, isFollowed: false, id: 7 },
//   { nickname: "asdf3", subtitle: "asdf3", rank: 8, isFollowed: false, id: 8 },
//   { nickname: "asdf3", subtitle: "asdf3", rank: 9, isFollowed: false, id: 9 },
// ];

const Rank: NextPage = () => {
  const [filter, setFilter] = useState<Filter>(Filter.STAR);
  // const [pageCount, setPageCount] = useState<number>(0);

  const { data, fetchNextPage, status } = useInfiniteQuery(
    ["infiniteData", filter],
    ({ pageParam = 1 }) => getRank({ filter, pageParam }),
    {
      getNextPageParam: (lastPage) => {
        // setPageCount((prev) => prev++);
        // return pageCount + 1;
        // lastPage.page
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

  console.log(data);

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
        {/* {data?.pages.map((page) => {
          return page.map((item: ItemProps) => {
            <UserCard
              key={item.id}
              id={item.id}
              type="rank"
              rank={item.rank}
              nickname={item.nickname}
              subtitle={item.subtitle}
              isFollowed={item.isFollowed}
            />;
          });
        })} */}
        {/* {mock.map((item: ItemProps) => {
          return (
            <UserCard
              key={item.id}
              id={item.id}
              type="rank"
              rank={item.rank}
              nickname={item.nickname}
              subtitle={item.subtitle}
              isFollowed={item.isFollowed}
            />
          );
        })} */}
        {/* <div ref={setTarget}></div> */}
      </UserCardList>
    </>
  );
};

export default Rank;
