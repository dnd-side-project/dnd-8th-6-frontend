import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { defaultInstance } from "@/apis/utils";

interface KakaoLoginResponse {
  access_token: string;
  refresh_token: string;
}

export const getKakaoLogin = async (query: string | string[]) => {
  const res = await defaultInstance.get<KakaoLoginResponse>(`/auth/kakao/login?code=${query}`);
  localStorage.setItem("access_token", res.data.access_token);
  localStorage.setItem("refresh_token", res.data.refresh_token);
  return res.data;
};

const Kakao: NextPage = () => {
  const router = useRouter();
  const { code, error } = router.query;

  const { data } = useQuery(
    ["kakaoLogin", code],
    async () => {
      if (code) {
        return await getKakaoLogin(code);
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

export default Kakao;
