import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    try {
      if (!window.Kakao.isInitialized() && window.Kakao) {
        window.Kakao.init(process.env.KAKAO_KEY);
      }
    } catch(e) { console.log(e)}

  }, [])

  return (
    <>
    <Component {...pageProps} />
    </>
  )
}
