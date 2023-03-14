import { authInstance } from "./utils";

export const putStar = async (query: number) => {
  await authInstance.put(`/star/${query}`);
};
