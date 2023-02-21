import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "@next/font/google";

const notoSansKr = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-notoSansKr",
});

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
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
=======
  return (
    <main className={`${notoSansKr.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
>>>>>>> 256c56548fa04d5b9529ca82a6ba35c8e1070054
}
