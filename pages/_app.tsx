import { AppProps } from "next/app";
import "../styles/global.css";
import "highlight.js/styles/tokyo-night-dark.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
