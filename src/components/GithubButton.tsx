import React from "react";
import { useRouter } from "next/router";

import { H3 } from "./Text";

import GithubSymbol from "@/assets/github.svg";


const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_CLIENT_ID}`;

const GithubButton = () => {
  const router = useRouter();

  const handleGithubLogin = () => {
    try {
      router.replace(GITHUB_AUTH_URL);
    } catch (e) {
      alert("현재 깃헙 로그인이 불가합니다. 나중에 다시 시도해주세요.");
    }
  };

  return (
    <div className="bg-neutral-0 w-[344px] rounded-lg">
      <button
        aria-label="github-login-button"
        className="flex w-full border-none px-5 py-2.5 hover:cursor-pointer items-center"
        onClick={handleGithubLogin}
      >
        <GithubSymbol aria-label="github-symbol-icon" className="w-9" />
        <H3 className="w-full text-black">Login with GitHub</H3>
      </button>
    </div>
  );
}

export default GithubButton;
