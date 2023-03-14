import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { defaultInstance } from "@/apis/utils";

interface GithubLoginResponse {
  access_token: string;
  refresh_token: string;
}

export const getGithubLogin = async (query: string | string[]) => {
  const res = await defaultInstance.get<GithubLoginResponse>(`/auth/github/login?code=${query}`);
  localStorage.setItem("access_token", res.data.access_token);
  localStorage.setItem("refresh_token", res.data.refresh_token);
  return res.data;
};

const Github: NextPage = () => {
  const router = useRouter();
  const { code, error } = router.query;

  const { data } = useQuery(
    ["GithubLogin", code],
    async () => {
      if (code) {
        return await getGithubLogin(code);
      }
    },
    {
      enabled: !!code,
      onSuccess: () => {
        router.push("/");
      },
    },
  );

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return <h2>로그인 중입니다..</h2>;
};

export default Github;
