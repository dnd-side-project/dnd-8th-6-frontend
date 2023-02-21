import React from 'react'
import GithubSymbol from '@/assets/github.svg'

const GITHUB_CLIENT_ID = process.env
const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_CLIENT_ID}`

const GithubButton = () => {
  const handleGithubLogin = () => {
    try {
      window.location.replace(GITHUB_AUTH_URL)
    } catch (e) {
      alert('현재 깃헙 로그인이 불가합니다. 나중에 다시 시도해주세요.')
    }
  }

  return (
    <button
      aria-label="github-login-button"
      className="flex h-12 w-full items-center rounded-md border-none bg-grey-1 px-5 hover:cursor-pointer"
      onClick={handleGithubLogin}
    >
      <GithubSymbol
        aria-label="github-symbol-icon"
        className="h-[18px] w-[18px]"
      />
      <p className="w-full text-black ">Login with GitHub</p>
    </button>
  )
}

export default GithubButton;