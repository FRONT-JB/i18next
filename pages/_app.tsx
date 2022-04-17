import type { AppProps } from "next/app";
import useIntenationalLanguageInit from "~/i18n/i18n";
import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useIntenationalLanguageInit();
  return <Component {...pageProps} />;
}

export default MyApp;
