import React from 'react'
import KakaoSymbol from '@/assets/kakao.svg'

const { KAKAO_OAUTH_URL, KAKAO_REST_API_KEY } = process.env
const KAKAO_REDIRECT_URL = `${KAKAO_OAUTH_URL}/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${window.location.origin}/login/KAKAO&response_type=code`

const KakaoButton = () => {
  const handleKakaoLogin = () => {
    try {
      window.location.replace(KAKAO_REDIRECT_URL)
    } catch (e) {
      alert('현재 카카오 로그인이 불가합니다. 나중에 다시 시도해주세요.')
    }
  }

  return (
    <button 
      aria-label="kakao-login-button" 
      className="flex h-12 w-full items-center rounded-md border-none bg-kakao px-5 hover:cursor-pointer" 
      onClick={handleKakaoLogin}>
      <KakaoSymbol
        aria-label="kakao-symbol-login"
        className="h-[18px] w-[18px]"
      />
      {/* H3로 수정 */}
      <p className="w-full text-gray-10">Login with Kakao</p>
    </button>
  )
}

export default KakaoButton;