import "~/styles/globals.css";
import type { AppProps } from "next/app";
import useIntenationalLanguageInit from "~/i18n/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  useIntenationalLanguageInit();
  return <Component {...pageProps} />;
}

export default MyApp;
