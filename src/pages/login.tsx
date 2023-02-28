import React from "react";
import { NextPage } from "next";

import KakaoButton from "../components/KakaoButton";
import GithubButton from "../components/GithubButton";

const Login: NextPage = () => {
  return (
    <div>
      <KakaoButton />
      <GithubButton />
    </div>
  );
};

export default Login;
