import React from "react";

import { H3 } from "./Text";

import KakaoSymbol from "@/assets/kakao.svg";


const { KAKAO_REST_API_KEY } = process.env;
const KAKAO_REDIRECT_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=http://ec2-3-35-233-60.ap-northeast-2.compute.amazonaws.com/auth/login/KAKAO&response_type=code`;

const KakaoButton = () => {
  const handleKakaoLogin = () => {
    try {
      window.location.replace(KAKAO_REDIRECT_URL);
    } catch (e) {
      alert("현재 카카오 로그인이 불가합니다. 나중에 다시 시도해주세요.");
    }
  };

  return (
    <div className="bg-[#FEE500] flex rounded-lg">
      <button
        aria-label="github-login-button"
        className="flex w-full border-none px-5 py-2.5 hover:cursor-pointer items-center justify-center"
        onClick={handleKakaoLogin}
      >
        <KakaoSymbol aria-label="kakao-symbol-icon" className="w-8" />
        <H3 className="flex">Login with Kakao</H3>
      </button>
    </div>
  );
}

export default KakaoButton;
