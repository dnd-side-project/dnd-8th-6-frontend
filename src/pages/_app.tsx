import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "@next/font/google";

const notoSansKr = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-notoSansKr",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${notoSansKr.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
