import React from "react";
import { useRouter } from "next/router";

import { H3 } from "./Text";

import GithubSymbol from "@/assets/github.svg";

const GithubButton = () => {
  const router = useRouter();

  const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

  const handleLogin = () => {
    router.replace(GITHUB_AUTH_URL);
  };

  return (
    <div className="bg-neutral-0 w-full rounded-lg">
      <button
        aria-label="github-login-button"
        className="flex w-full border-none px-5 py-2.5 hover:cursor-pointer items-center"
        onClick={handleLogin}
      >
        <GithubSymbol aria-label="github-symbol-icon" className="w-9" />
        <H3 className="w-full text-black">Login with GitHub</H3>
      </button>
    </div>
  );
};

export default GithubButton;
