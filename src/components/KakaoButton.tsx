import React from "react";
import { useRouter } from "next/router";

import { H3 } from "./Text";

import KakaoSymbol from "@/assets/kakao.svg";

const KAKAO_REST_API_KEY = process.env.KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=http://ec2-3-35-233-60.ap-northeast-2.compute.amazonaws.com/auth/login/KAKAO&response_type=code`;

const KakaoButton = () => {
  const router = useRouter();

  const handleKakaoLogin = () => {
    try {
      window.location.replace(KAKAO_REDIRECT_URL);
    } catch (e) {
      alert("현재 카카오 로그인이 불가합니다. 나중에 다시 시도해주세요.");
    }
  };

  return (
    <button
      aria-label="kakao-login-button"
      className="flex h-12 w-full items-center rounded-md border-none bg-kakao px-5 hover:cursor-pointer"
      onClick={handleKakaoLogin}
    >
      <KakaoSymbol aria-label="kakao-symbol-login" className="h-[18px] w-[18px]" />
      <H3 className="w-full text-gray-10">Login with Kakao</H3>
    </button>
  );
};

export default KakaoButton;
