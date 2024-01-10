import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
