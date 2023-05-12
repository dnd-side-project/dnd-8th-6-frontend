import { authInstance } from "./utils";

import { Filter } from "@/pages/rank";

export const putStar = async (query: number) => {
  await authInstance.put(`/star/${query}`);
};

export const getRank = async ({ filter, pageParam }: { filter: Filter; pageParam: number }) => {
  const res = await authInstance.get(`/rank?page=${pageParam}&filter=${filter}`);
  return res;
};
