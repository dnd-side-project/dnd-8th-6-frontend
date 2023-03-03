import React from "react";
import { useRouter } from "next/router";

import { H3 } from "./Text";

import KakaoSymbol from "@/assets/kakao.svg";

const KakaoButton = () => {
  const router = useRouter();

  const REDIRCT_URI = "http://localhost:3000/login/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${REDIRCT_URI}&response_type=code`;

  const handleLogin = () => {
    router.replace(KAKAO_AUTH_URL);
  };

  return (
    <button
      aria-label="kakao-login-button"
      className="flex h-12 w-full items-center rounded-md border-none bg-[#FEE500] px-5 hover:cursor-pointer"
      onClick={handleLogin}
    >
      <KakaoSymbol aria-label="kakao-symbol-login" className="h-[18px] w-[18px]" />
      <H3 className="w-full text-neutral-900">Login with Kakao</H3>
    </button>
  );
};

export default KakaoButton;
